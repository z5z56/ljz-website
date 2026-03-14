// Code Block Enhancer - CSDN Style
// Features: Syntax highlighting, line numbers, copy button, expand/collapse

document.addEventListener('DOMContentLoaded', function() {
    // Find all code blocks and enhance them
    enhanceCodeBlocks();
    
    // Also enhance dynamically added code blocks
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) {
                    if (node.tagName === 'PRE' || node.querySelector('pre')) {
                        enhanceCodeBlocks();
                    }
                }
            });
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
});

function enhanceCodeBlocks() {
    // Find all pre elements containing code
    document.querySelectorAll('pre').forEach(function(pre) {
        // Skip if already processed
        if (pre.dataset.processed === 'true') return;
        pre.dataset.processed = 'true';
        
        const code = pre.querySelector('code');
        if (!code) return;
        
        // Detect language from class or content
        let language = detectLanguage(pre, code);
        
        // Create enhanced code block wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block';
        
        // Create header
        const header = document.createElement('div');
        header.className = 'code-header';
        
        // Language label
        const langLabel = document.createElement('span');
        langLabel.className = 'code-lang';
        langLabel.textContent = language || 'Code';
        header.appendChild(langLabel);
        
        // Actions container
        const actions = document.createElement('div');
        actions.className = 'code-actions';
        
        // Copy button
        const copyBtn = document.createElement('button');
        copyBtn.className = 'code-btn';
        copyBtn.innerHTML = '📋 复制';
        copyBtn.onclick = function() { copyCode(code, copyBtn); };
        actions.appendChild(copyBtn);
        
        // Expand/Collapse button (only for long code)
        if (code.textContent.split('\n').length > 15) {
            const expandBtn = document.createElement('button');
            expandBtn.className = 'expand-btn';
            expandBtn.innerHTML = '▼ 收起';
            expandBtn.onclick = function() { toggleExpand(wrapper, expandBtn); };
            actions.appendChild(expandBtn);
            
            // Start collapsed for very long code
            if (code.textContent.split('\n').length > 30) {
                wrapper.classList.add('collapsed');
                expandBtn.innerHTML = '▶ 展开';
            }
        }
        
        header.appendChild(actions);
        
        // Insert header before pre
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(header);
        wrapper.appendChild(pre);
        
        // Add line numbers
        addLineNumbers(code);
    });
}

function detectLanguage(pre, code) {
    // Check class on code element
    const langMatch = code.className.match(/language-(\w+)/);
    if (langMatch) return langMatch[1];
    
    // Check class on pre element
    const preLangMatch = pre.className.match(/language-(\w+)/);
    if (preLangMatch) return preLangMatch[1];
    
    // Try to detect from content
    const text = code.textContent.toLowerCase();
    
    if (text.includes('def ') && text.includes(':')) return 'Python';
    if (text.includes('function') || text.includes('const ') || text.includes('let ')) return 'JavaScript';
    if (text.includes('#include') || text.includes('int main')) return 'C';
    if (text.includes('import ') && text.includes(':')) return 'Python';
    if (text.includes('sudo') || text.includes('chmod')) return 'Bash';
    if (text.includes('aws s3')) return 'AWS CLI';
    
    return '';
}

function addLineNumbers(code) {
    const lines = code.innerHTML.split('\n');
    if (lines.length <= 1) return;
    
    code.classList.add('code-with-lines');
    
    // Wrap each line in a span
    code.innerHTML = lines.map(function(line, index) {
        return '<span class="code-line">' + line + '</span>';
    }).join('\n');
}

function copyCode(codeElement, button) {
    const text = codeElement.textContent;
    
    navigator.clipboard.writeText(text).then(function() {
        // Show copied feedback
        const originalHTML = button.innerHTML;
        button.innerHTML = '✅ 已复制';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.innerHTML = originalHTML;
            button.classList.remove('copied');
        }, 2000);
    }).catch(function(err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        button.innerHTML = '✅ 已复制';
        button.classList.add('copied');
        setTimeout(function() {
            button.innerHTML = '📋 复制';
            button.classList.remove('copied');
        }, 2000);
    });
}

function toggleExpand(wrapper, button) {
    wrapper.classList.toggle('collapsed');
    
    if (wrapper.classList.contains('collapsed')) {
        button.innerHTML = '▶ 展开';
    } else {
        button.innerHTML = '▼ 收起';
    }
}
