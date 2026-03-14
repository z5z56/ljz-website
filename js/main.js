// Main JavaScript - Theme toggle and basic functionality

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Set up event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.dataset.theme;
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
    
    // Language dropdown toggle
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langDropdown.classList.remove('show');
        });
    }
}

function setTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    
    // Update toggle button icon
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const isZh = document.querySelector('html').lang === 'zh-CN' || document.querySelector('html').lang === 'zh';
        const isJa = document.querySelector('html').lang === 'ja';
        
        if (theme === 'dark') {
            themeToggle.textContent = '☀️';
            themeToggle.title = isZh ? '切换主题' : (isJa ? 'テーマ切替' : 'Toggle Theme');
        } else {
            themeToggle.textContent = '🌙';
            themeToggle.title = isZh ? '切换主题' : (isJa ? 'テーマ切替' : 'Toggle Theme');
        }
    }
}
