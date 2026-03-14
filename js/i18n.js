// Blog content translations - Static approach for reliability
// This file contains all blog content translations (Chinese, English, Japanese)
// No external API calls needed - instant language switching

const blogTranslations = {
    // Index page translations
    "blog-index": {
        zh: {
            pageTitle: "技术博客",
            pageDesc: "分享云原生、嵌入式与分布式系统的学习心得",
            cloudComputing: "云计算",
            embeddedSoftware: "嵌入式软件",
            readMore: "阅读全文 →",
            // Blog post titles
            "aws-ec2": "AWS EC2 入门指南：如何在云端启动你的第一台服务器",
            "aws-s3": "AWS S3 入门指南：云存储完全掌握",
            "openmv-electric-contest": "2020 电赛 F 题总结回顾 — OpenMV 实现视觉方案",
            "pn532-nfc-tutorial": "使用 PN532 将全加密卡复制到手环上 — NFC 校园门禁卡模拟教程",
            // Descriptions
            "aws-ec2-desc": "本篇文章将带你深入了解 Amazon EC2 的核心概念，学习如何配置安全组、选择实例类型，并完成你的第一台云服务器部署。",
            "aws-s3-desc": "深入学习 AWS S3 的存储桶配置、权限管理、版本控制和安全最佳实践，轻松构建可靠的对象存储解决方案。",
            "openmv-desc": "2020 年全国大学生电子设计竞赛 F 题《简易无接触温度测量与身份识别装置》方案总结，使用 OpenMV H7 Plus 实现人脸识别、口罩检测等功能。",
            "pn532-desc": "详细记录如何使用 PN532 模块和 UID 卡，将全加密校园门禁卡模拟到智能手环上，包含材料准备、破解步骤、模拟教程等完整指南。"
        },
        en: {
            pageTitle: "Tech Blog",
            pageDesc: "Sharing insights on Cloud Native, Embedded Systems & Distributed Systems",
            cloudComputing: "Cloud Computing",
            embeddedSoftware: "Embedded Software",
            readMore: "Read More →",
            // Blog post titles
            "aws-ec2": "AWS EC2 Getting Started: Launch Your First Cloud Server",
            "aws-s3": "AWS S3 Getting Started: Complete Guide to Cloud Storage",
            "openmv-electric-contest": "2020 Electronic Design Contest Summary - OpenMV Vision Solution",
            "pn532-nfc-tutorial": "PN532 NFC Tutorial: Copy Encrypted Cards to Smart Bracelets",
            // Descriptions
            "aws-ec2-desc": "This article will take you through the core concepts of Amazon EC2, learn how to configure security groups, select instance types, and deploy your first cloud server.",
            "aws-s3-desc": "Deep dive into AWS S3 bucket configuration, permissions management, versioning, and security best practices to build reliable object storage solutions.",
            "openmv-desc": "Summary of the 2020 Electronic Design Contest Topic F - Contactless Temperature Measurement and Identity Recognition, using OpenMV H7 Plus for face recognition and mask detection.",
            "pn532-desc": "Detailed guide on using PN532 module and UID cards to simulate encrypted campus access cards on smart bracelets, including material preparation, cracking steps, and complete simulation tutorial."
        },
        ja: {
            pageTitle: "テックブログ",
            pageDesc: "クラウドネイティブ、組込みシステム、分散システムについて",
            cloudComputing: "クラウドコンピューティング",
            embeddedSoftware: "組込みソフトウェア",
            readMore: "続きを読む →",
            // Blog post titles
            "aws-ec2": "AWS EC2 入門ガイド：クラウドで最初のサーバーを起動する方法",
            "aws-s3": "AWS S3 入門ガイド：クラウドストレージ完全攻略",
            "openmv-electric-contest": "2020年電子設計コンテストまとめ - OpenMVビジョンソリューション",
            "pn532-nfc-tutorial": "PN532 NFCチュートリアル：暗号化カードをスマートバンドにコピー",
            // Descriptions
            "aws-ec2-desc": "Amazon EC2のコアコンセプト、セキュリティグループの構成、インスタンスタイプの選択を学び、最初のクラウドサーバーをデプロイします。",
            "aws-s3-desc": "AWS S3のバケット設定、権限管理、バージョン管理、セキュリティベストプラクティスを学び、信頼性の高いオブジェクトストレージを構築します。",
            "openmv-desc": "2020年電子設計コンテストF題「非接触温度測定と身分識別装置」のまとめ。OpenMV H7 Plusを使用して顔認識、マスク検出などを実装。",
            "pn532-desc": "PN532モジュールとUIDカードを使用して、暗号化キャンパスアクセスカードをスマートバンドにシミュレーションする方法 材料的准备、クラッキング手順、完全なチュートリアル。"
        }
    },

    // AWS EC2 Tutorial - Full content
    "aws-ec2": {
        zh: {
            title: "AWS EC2 入门指南：如何在云端启动你的第一台服务器",
            category: "AWS",
            date: "2026-03-10",
            content: `
                <p>Amazon Elastic Compute Cloud (EC2) 是 AWS 最核心的服务之一，它允许用户在云端快速启动和管理虚拟服务器。本文将带你深入了解 EC2 的核心概念，并完成你的第一台云服务器部署。</p>

                <h2>什么是 EC2？</h2>
                <p>EC2 是 AWS 提供的可扩展计算服务，它提供了多种类型的虚拟服务器（实例），用户可以根据需求选择不同的计算、内存和存储配置。EC2 的主要特点包括：</p>
                <ul>
                    <li><strong>弹性伸缩</strong>：根据需求随时增加或减少实例数量</li>
                    <li><strong>多种实例类型</strong>：通用、计算优化、内存优化、存储优化等</li>
                    <li><strong>按需付费</strong>：只为实际使用的计算资源付费</li>
                    <li><strong>安全可靠</strong>：结合 VPC、安全组实现网络隔离</li>
                </ul>

                <h2>核心概念</h2>
                
                <h3>1. 实例类型 (Instance Types)</h3>
                <p>AWS 提供多种实例类型，满足不同应用场景：</p>
                <ul>
                    <li><strong>通用型 (t3, m5)</strong>：适合 Web 服务器、开发环境</li>
                    <li><strong>计算优化型 (c5, c6i)</strong>：适合高性能计算批处理</li>
                    <li><strong>内存优化型 (r5, x1e)</strong>：适合大型数据库、内存缓存</li>
                    <li><strong>存储优化型 (i3, d2)</strong>：适合数据仓库、文件系统</li>
                </ul>

                <h3>2. 安全组 (Security Groups)</h3>
                <p>安全组是 EC2 的虚拟防火墙，控制进出实例的流量：</p>
                <ul>
                    <li>默认情况下，所有入站流量被拒绝</li>
                    <li>默认情况下，所有出站流量被允许</li>
                    <li>可以配置规则允许特定端口（如 22 for SSH，80 for HTTP）</li>
                </ul>

                <h3>3. 密钥对 (Key Pairs)</h3>
                <p>SSH 密钥对用于安全登录 EC2 实例。创建实例时，需要指定一个密钥对，私钥文件 (.pem) 将在创建后下载，请妥善保管。</p>

                <h2>实战：启动你的第一台 EC2 实例</h2>

                <h3>步骤 1：登录 AWS 控制台</h3>
                <p>访问 aws.amazon.com，登录后进入 EC2 控制台。</p>

                <h3>步骤 2：启动实例</h3>
                <ol>
                    <li>点击 "Launch Instance" 按钮</li>
                    <li>为实例命名（如 MyFirstServer）</li>
                    <li>选择操作系统镜像（推荐 Amazon Linux 2 或 Ubuntu）</li>
                    <li>选择实例类型（t2.micro 适合学习，免费套餐可用）</li>
                    <li>创建或选择密钥对</li>
                    <li>配置安全组：添加 SSH (22) 和 HTTP (80) 规则</li>
                </ol>

                <h3>步骤 3：连接实例</h3>
                <p>实例启动后，可以通过以下方式连接：</p>
                <pre><code># 更改密钥文件权限
chmod 400 your-key.pem

# 连接到实例
ssh -i your-key.pem ec2-user@your-instance-public-ip</code></pre>

                <h2>最佳实践</h2>
                <blockquote>
                    <p>在使用 EC2 时，安全是首要考虑因素。以下是一些必须遵守的最佳实践：</p>
                </blockquote>
                <ul>
                    <li>始终使用密钥对登录，避免密码登录</li>
                    <li>安全组规则遵循最小权限原则</li>
                    <li>定期备份重要数据</li>
                    <li>使用 IAM 角色管理实例权限</li>
                    <li>开启 CloudWatch 监控，及时发现异常</li>
                </ul>

                <h2>总结</h2>
                <p>EC2 是 AWS 云服务的基石，掌握 EC2 的使用方法对于云端开发至关重要。通过本文，你应该已经了解了 EC2 的核心概念，并成功启动了你的第一台云服务器。</p>
                <p>在后续的文章中，我们将深入探讨 EC2 的高级功能，如自动伸缩、负载均衡、高可用性架构等。</p>
            `,
            backLink: "← 返回博客目录"
        },
        en: {
            title: "AWS EC2 Getting Started: Launch Your First Cloud Server",
            category: "AWS",
            date: "2026-03-10",
            content: `
                <p>Amazon Elastic Compute Cloud (EC2) is one of AWS's core services, allowing users to quickly launch and manage virtual servers in the cloud. This article will take you through the core concepts of EC2 and help you deploy your first cloud server.</p>

                <h2>What is EC2?</h2>
                <p>EC2 is AWS's scalable computing service that provides various types of virtual servers (instances). Users can choose different compute, memory, and storage configurations based on their needs. Key features of EC2 include:</p>
                <ul>
                    <li><strong>Elastic Scalability</strong>: Scale instance count up or down as needed</li>
                    <li><strong>Multiple Instance Types</strong>: General purpose, compute optimized, memory optimized, storage optimized, etc.</li>
                    <li><strong>Pay-as-you-go</strong>: Only pay for the compute resources you actually use</li>
                    <li><strong>Secure & Reliable</strong>: Network isolation via VPC and security groups</li>
                </ul>

                <h2>Core Concepts</h2>
                
                <h3>1. Instance Types</h3>
                <p>AWS offers various instance types to meet different application scenarios:</p>
                <ul>
                    <li><strong>General Purpose (t3, m5)</strong>: Suitable for web servers, development environments</li>
                    <li><strong>Compute Optimized (c5, c6i)</strong>: Suitable for high-performance computing, batch processing</li>
                    <li><strong>Memory Optimized (r5, x1e)</strong>: Suitable for large databases, in-memory caching</li>
                    <li><strong>Storage Optimized (i3, d2)</strong>: Suitable for data warehouses, file systems</li>
                </ul>

                <h3>2. Security Groups</h3>
                <p>Security groups are virtual firewalls for EC2 that control inbound and outbound traffic:</p>
                <ul>
                    <li>By default, all inbound traffic is denied</li>
                    <li>By default, all outbound traffic is allowed</li>
                    <li>You can configure rules to allow specific ports (e.g., 22 for SSH, 80 for HTTP)</li>
                </ul>

                <h3>3. Key Pairs</h3>
                <p>SSH key pairs are used for secure login to EC2 instances. When creating an instance, you need to specify a key pair. The private key file (.pem) will be downloaded after creation - please keep it safe.</p>

                <h2>Hands-on: Launch Your First EC2 Instance</h2>

                <h3>Step 1: Login to AWS Console</h3>
                <p>Visit aws.amazon.com, log in, and navigate to the EC2 console.</p>

                <h3>Step 2: Launch Instance</h3>
                <ol>
                    <li>Click the "Launch Instance" button</li>
                    <li>Name your instance (e.g., MyFirstServer)</li>
                    <li>Choose an OS image (Amazon Linux 2 or Ubuntu recommended)</li>
                    <li>Select instance type (t2.micro is good for learning, available in free tier)</li>
                    <li>Create or select a key pair</li>
                    <li>Configure security group: add SSH (22) and HTTP (80) rules</li>
                </ol>

                <h3>Step 3: Connect to Instance</h3>
                <p>After the instance starts, you can connect using:</p>
                <pre><code># Change key file permissions
chmod 400 your-key.pem

# Connect to instance
ssh -i your-key.pem ec2-user@your-instance-public-ip</code></pre>

                <h2>Best Practices</h2>
                <blockquote>
                    <p>Security is paramount when using EC2. Here are some essential best practices:</p>
                </blockquote>
                <ul>
                    <li>Always use key pairs for login, avoid password authentication</li>
                    <li>Follow the principle of least privilege for security group rules</li>
                    <li>Regularly back up important data</li>
                    <li>Use IAM roles to manage instance permissions</li>
                    <li>Enable CloudWatch monitoring to detect anomalies early</li>
                </ul>

                <h2>Summary</h2>
                <p>EC2 is the foundation of AWS cloud services. Mastering EC2 is essential for cloud development. Through this article, you should now understand the core concepts of EC2 and have successfully launched your first cloud server.</p>
                <p>In follow-up articles, we'll explore advanced EC2 features such as auto-scaling, load balancing, and high-availability architectures.</p>
            `,
            backLink: "← Back to Blog"
        },
        ja: {
            title: "AWS EC2 入門ガイド：クラウドで最初のサーバーを起動する方法",
            category: "AWS",
            date: "2026-03-10",
            content: `
                <p>Amazon Elastic Compute Cloud (EC2) はAWSの中核サービスの一つで、クラウド上で仮想サーバーを素早く起動・管理できます。この記事ではEC2のコアコンセプトを学び、最初のクラウドサーバーをデプロイします。</p>

                <h2>EC2とは？</h2>
                <p>EC2はAWSが提供するスケーラブルなコンピューティングサービスで、さまざまなタイプの仮想サーバー（インスタンス）を提供します。主な特徴：</p>
                <ul>
                    <li><strong>柔軟なスケーリング</strong>：必要に応じてインスタンス数を増減</li>
                    <li><strong>多様なインスタンスタイプ</strong>：汎用、コンピューティング最適化、メモリ最適化、ストレージ最適化など</li>
                    <li><strong>従量制料金</strong>：使用したコンピューティングリソースのみ料金発生</li>
                    <li><strong>安全で信頼性が高い</strong>：VPC、セキュリティグループでネットワーク分離</li>
                </ul>

                <h2>コアコンセプト</h2>
                
                <h3>1. インスタンスタイプ</h3>
                <p>AWSはさまざまなユースケースに対応したインスタンスタイプを提供：</p>
                <ul>
                    <li><strong>汎用 (t3, m5)</strong>：Webサーバー、開発環境に最適</li>
                    <li><strong>コンピューティング最適化 (c5, c6i)</strong>：高性能計算、バッチ処理に最適</li>
                    <li><strong>メモリ最適化 (r5, x1e)</strong>：大規模データベース、メモリキャッシュに最適</li>
                    <li><strong>ストレージ最適化 (i3, d2)</strong>：データウェアハウス、ファイルシステムに最適</li>
                </ul>

                <h3>2. セキュリティグループ</h3>
                <p>セキュリティグループはEC2の仮想ファイアウォールで、インバウンド・アウトバウンドトラフィックを制御：</p>
                <ul>
                    <li>デフォルトではすべてのインバウンドトラフィックが拒否</li>
                    <li>デフォルトではすべてのアウトバウンドトラフィックが許可</li>
                    <li>特定ポート（SSH:22、HTTP:80など）の許可ルールを設定可能</li>
                </ul>

                <h3>3. キーペア</h3>
                <p>SSHキーペアはEC2インスタンスへの安全なログインに使用。インスタンス作成時にキーペアを指定し、秘密鍵ファイル(.pem)は作成後にダウンロードされるため大切に保管してください。</p>

                <h2>実践：最初のEC2インスタンスを起動</h2>

                <h3>ステップ1：AWSコンソールにログイン</h3>
                <p>aws.amazon.comにアクセスし、ログイン後EC2コンソールに移動。</p>

                <h3>ステップ2：インスタンスを起動</h3>
                <ol>
                    <li>「Launch Instance」ボタンをクリック</li>
                    <li>インスタンスに名前を付ける（例：MyFirstServer）</li>
                    <li>OSイメージを選択（Amazon Linux 2またはUbuntu推奨）</li>
                    <li>インスタンスタイプを選択（t3.microは学習に最適（無料枠対象））</li>
                    <li>キーペアを作成または選択</li>
                    <li>セキュリティグループを設定：SSH(22)とHTTP(80)ルールを追加</li>
                </ol>

                <h3>ステップ3：インスタンスに接続</h3>
                <p>インスタンス起動後は以下の方法で接続：</p>
                <pre><code># 秘密鍵の権限を変更
chmod 400 your-key.pem

# インスタンスに接続
ssh -i your-key.pem ec2-user@パブリックIPアドレス</code></pre>

                <h2>ベストプラクティス</h2>
                <blockquote>
                    <p>EC2使用においてセキュリティ是最優先事項。</p>
                </blockquote>
                <ul>
                    <li>必ずキーペアでログインし、パスワード認証を避ける</li>
                    <li>セキュリティグループルールは最小権限の原則に従う</li>
                    <li>重要なデータは定期的にバックアップ</li>
                    <li>IAMロールでインスタンス権限を管理</li>
                    <li>CloudWatchモニタリングを有効にして異常を早期発見</li>
                </ul>

                <h2>まとめ</h2>
                <p>EC2はAWSクラウドサービスの基盤です。この記事を通じて、EC2のコアコンセプトを理解し、最初のクラウドサーバーを起動できたはずです。</p>
                <p>今後の記事では、自动スケーリング、負荷分散、高可用性アーキテクチャなど、EC2の高度な機能をご紹介します。</p>
            `,
            backLink: "← ブログに戻る"
        }
    },

    // AWS S3 Tutorial - Full content
    "aws-s3": {
        zh: {
            title: "AWS S3 入门指南：云存储完全掌握",
            category: "AWS",
            date: "2026-03-08",
            content: `
                <p>Amazon Simple Storage Service (S3) 是 AWS 最受欢迎的对象存储服务之一，以其高可用性、低成本和强大的功能而闻名。本文将帮助你全面了解 S3，并学会构建可靠的对象存储解决方案。</p>

                <h2>什么是 S3？</h2>
                <p>S3 是一种对象存储服务，专为从 Web 应用程序大规模存储和检索任意数量的数据而设计。它具有以下核心特性：</p>
                <ul>
                    <li><strong>无限容量</strong>：存储空间无上限，按使用量付费</li>
                    <li><strong>高可用性</strong>：设计可用性为 99.99%</li>
                    <li><strong>持久性</strong>：设计持久性为 99.999999999% (11 个 9)</li>
                    <li><strong>版本控制</strong>：支持对象版本管理，防止误删</li>
                    <li><strong>生命周期策略</strong>：自动将对象转换到更便宜的存储层</li>
                </ul>

                <h2>核心概念</h2>

                <h3>1. 存储桶 (Bucket)</h3>
                <p>存储桶是 S3 中用于存储对象的容器。每个存储桶都有一个全局唯一的名称，支持以下操作：创建和删除存储桶、配置存储桶策略和访问权限、设置跨区域复制、配置生命周期规则。</p>

                <h3>2. 对象 (Object)</h3>
                <p>对象是存储在 S3 中的基本实体，由 Key（唯一标识符）、Value（实际数据，最大 5TB）、Metadata（元数据）、Version ID（版本标识符）组成。</p>

                <h3>3. 存储类 (Storage Classes)</h3>
                <p>S3 提供多种存储类：S3 Standard（频繁访问）、S3 Intelligent-Tiering（自动优化成本）、S3 Standard-IA（低频率访问）、S3 Glacier（长期归档）。</p>

                <h2>实战：创建和使用 S3 存储桶</h2>

                <h3>步骤 1：创建存储桶</h3>
                <ol>
                    <li>登录 AWS 控制台，进入 S3 服务</li>
                    <li>点击 "Create bucket" 按钮</li>
                    <li>输入全局唯一的存储桶名称</li>
                    <li>选择区域（如 us-east-1）</li>
                    <li>配置选项（版本控制、加密等）</li>
                    <li>设置权限策略</li>
                </ol>

                <h3>步骤 2：上传对象</h3>
                <p>可以通过控制台、CLI 或 SDK 上传对象。</p>
                <pre><code># 使用 AWS CLI 上传文件
aws s3 cp myfile.txt s3://my-bucket-name/

# 列出存储桶内容
aws s3 ls s3://my-bucket-name/</code></pre>

                <h3>步骤 3：设置访问权限</h3>
                <p>S3 提供 IAM 策略、存储桶策略、ACL 等多种访问控制方式。</p>

                <h2>版本控制与生命周期</h2>
                <p>版本控制保留对象的每个版本。生命周期规则自动将对象转换到更便宜的存储类。</p>

                <h2>安全最佳实践</h2>
                <ul>
                    <li>默认情况下，存储桶应设为私有</li>
                    <li>启用版本控制防止数据丢失</li>
                    <li>使用加密保护静态数据（SSE-S3 或 SSE-KMS）</li>
                    <li>启用 CloudTrail 审计日志</li>
                    <li>使用 MFA Delete 防止意外删除</li>
                </ul>

                <h2>总结</h2>
                <p>AWS S3 是云原生应用的重要基础设施，掌握 S3 的使用方法对于现代开发至关重要。</p>
            `,
            backLink: "← 返回博客目录"
        },
        en: {
            title: "AWS S3 Getting Started: Complete Guide to Cloud Storage",
            category: "AWS",
            date: "2026-03-08",
            content: `
                <p>Amazon Simple Storage Service (S3) is one of AWS's most popular object storage services, known for its high availability, low cost, and powerful features. This article will help you fully understand S3 and learn to build reliable object storage solutions.</p>

                <h2>What is S3?</h2>
                <p>S3 is an object storage service designed for storing and retrieving any amount of data at scale from web applications. Core features include:</p>
                <ul>
                    <li><strong>Unlimited Capacity</strong>: No storage limit, pay for what you use</li>
                    <li><strong>High Availability</strong>: 99.99% designed availability</li>
                    <li><strong>Durability</strong>: 99.999999999% (eleven 9s) designed durability</li>
                    <li><strong>Versioning</strong>: Object version management to prevent accidental deletion</li>
                    <li><strong>Lifecycle Policies</strong>: Automatically transition objects to cheaper storage tiers</li>
                </ul>

                <h2>Core Concepts</h2>

                <h3>1. Buckets</h3>
                <p>Buckets are containers for storing objects in S3. Each bucket has a globally unique name.</p>

                <h3>2. Objects</h3>
                <p>Objects consist of Key (unique identifier), Value (data up to 5TB), Metadata, and Version ID.</p>

                <h3>3. Storage Classes</h3>
                <p>S3 offers: S3 Standard (frequent access), S3 Intelligent-Tiering (auto optimization), S3 Standard-IA (infrequent), S3 Glacier (archiving).</p>

                <h2>Hands-on: Create and Use S3 Buckets</h2>

                <h3>Step 1: Create a Bucket</h3>
                <ol>
                    <li>Log in to AWS Console, navigate to S3</li>
                    <li>Click "Create bucket"</li>
                    <li>Enter a globally unique bucket name</li>
                    <li>Select a region</li>
                    <li>Configure options (versioning, encryption)</li>
                    <li>Set permissions</li>
                </ol>

                <h3>Step 2: Upload Objects</h3>
                <p>Upload via Console, CLI, or SDK.</p>
                <pre><code>aws s3 cp myfile.txt s3://my-bucket-name/
aws s3 ls s3://my-bucket-name/</code></pre>

                <h3>Step 3: Set Access Permissions</h3>
                <p>S3 provides IAM Policies, Bucket Policies, and ACLs.</p>

                <h2>Versioning & Lifecycle</h2>
                <p>Versioning retains every version. Lifecycle rules auto-transition to cheaper storage.</p>

                <h2>Security Best Practices</h2>
                <ul>
                    <li>Buckets should be private by default</li>
                    <li>Enable versioning</li>
                    <li>Use encryption (SSE-S3 or SSE-KMS)</li>
                    <li>Enable CloudTrail</li>
                    <li>Use MFA Delete</li>
                </ul>

                <h2>Summary</h2>
                <p>AWS S3 is critical for cloud-native applications.</p>
            `,
            backLink: "← Back to Blog"
        },
        ja: {
            title: "AWS S3 入門ガイド：クラウドストレージ完全攻略",
            category: "AWS",
            date: "2026-03-08",
            content: `
                <p>Amazon Simple Storage Service (S3) はAWSで最も人気のオブジェクトストレージサービスで、高い可用性、低コスト、強力な機能で知られています。この記事ではS3を完全に理解し、信頼性の高いオブジェクトストレージソリューションを構築する方法を学びます。</p>

                <h2>S3とは？</h2>
                <p>S3は、Webアプリケーションから大規模にデータを保存・取得するために設計されたオブジェクトストレージサービス。コア機能：</p>
                <ul>
                    <li><strong>無制限の容量</strong>：保存容量に上限なし</li>
                    <li><strong>高い可用性</strong>：99.99%の可用性</li>
                    <li><strong>耐久性</strong>：99.999999999%（11つの9）の耐久性</li>
                    <li><strong>バージョン管理</strong>：オブジェクトのバージョン管理</li>
                    <li><strong>ライフサイクルポリシー</strong>：自動的に安いストレージ階層に移行</li>
                </ul>

                <h2>コアコンセプト</h2>

                <h3>1. バケット</h3>
                <p>バケットはS3でオブジェクトを保存するコンテナ。</p>

                <h3>2. オブジェクト</h3>
                <p>Key、Value（最大5TB）、Metadata、Version IDで構成。</p>

                <h3>3. ストレージクラス</h3>
                <p>S3 Standard、S3 Intelligent-Tiering、S3 Standard-IA、S3 Glacierを提供。</p>

                <h2>実践：S3バケットの作成と使用</h2>

                <h3>ステップ1：バケットを作成</h3>
                <ol>
                    <li>AWSコンソールにログイン、S3に移動</li>
                    <li>「Create bucket」をクリック</li>
                    <li>グローバルユニークなバケット名を入力</li>
                    <li>リージョンを選択</li>
                    <li>オプションを設定</li>
                    <li>権限を設定</li>
                </ol>

                <h3>ステップ2：オブジェクトをアップロード</h3>
                <p>コンソール、CLI、SDKからアップロード可能。</p>

                <h3>ステップ3：アクセス権限を設定</h3>
                <p>IAMポリシー、バケットポリシー、ACLを提供。</p>

                <h2>セキュリティベストプラクティス</h2>
                <ul>
                    <li>バケットはデフォルトで私有</li>
                    <li>バージョン管理を有効に</li>
                    <li>暗号化を使用（SSE-S3）</li>
                    <li>CloudTrailを有効に</li>
                    <li>MFA Deleteを使用</li>
                </ul>

                <h2>まとめ</h2>
                <p>AWS S3はクラウドネイティブアプリケーションに不可欠。</p>
            `,
            backLink: "← ブログに戻る"
        }
    },

    // OpenMV Electric Contest
    "openmv-electric-contest": {
        zh: {
            title: "2020 电赛 F 题总结回顾 — OpenMV 实现视觉方案",
            category: "嵌入式软件",
            date: "2020-09",
            content: `
                <p>我决定把资源倒腾倒腾发上来，一方面分享大致思路，另一方面也当是纪念了。做的是 2020 电赛 F 题：<strong>简易无接触温度测量与身份识别装置</strong></p>

                <h2>整体设计</h2>

                <h3>硬件选择</h3>
                <p>机器视觉模块使用 OpenMV，这一方面是我们在备赛过程中认为 OpenMV 的功能足够，一直在准备 OpenMV，另一方面是当时马上下单 K210 开始学习等到货都已经第三天了，调试来不及风险太大了，所以决定使用 OpenMV。</p>

                <p>好在我们买的是最顶配型号 OpenMV H7 Plus，最终也顺利完成了题目要求的所有任务。</p>

                <p>温度测量方面是 MLX90614 使用某宝的模块 I2C 读取温度，最终我们没有省一拿了省二也是砸在这个模块上，在送测现场出了问题，血的教训，万事都要做好 Plan B 啊！！</p>

                <p>主控使用 STM32C8T6，这是因为我们在赛前已经用顺手了，其他的也行。</p>

                <p>其他硬件包括 OLED 显示温度阈值等，按键，有源蜂鸣器，激光小灯等就不赘述了。</p>

                <p>最后的电路板设计，器件布局如下：</p>

                <h3>软件流程</h3>
                <p>STM32 和 OpenMV 通过串口通信，我们指定一个字母对应进入一个模式，通电后 OpenMV 就在死循环不断等待字母，收到字母即执行对应模式功能，再返回结果。</p>

                <h2>视觉算法</h2>

                <p>由于分工上我主要负责 OpenMV 视觉部分的代码编写等部分，所以这里多说几句视觉方面的 Python 代码编写的心路历程。</p>

                <p>刚开始学习阶段主要参考的资料就是心疼科技的两个函数库链接：</p>
                <ul>
                    <li><a href="https://book.openmv.cc/" target="_blank">OpenMV 官方文档</a></li>
                    <li><a href="https://docs.singtown.com/micropython/zh/latest/openmvcam/library/index.html" target="_blank">OpenMV 函数库</a></li>
                </ul>

                <h3>分辨不同人脸（身份识别）</h3>
                <p>拿到题目第一反应就是中文入门教程里面看到过这个 LBP 分辨不同人脸的应用，于是我第一天也确确实实按照手册的思路拍照测试了，但是实际效果并不好，而且受光线和背景影响很大，脸还必须填满摄像头，就很不方便。</p>

                <p>于是后来又发现了特征点算法，运算时间有了很大提升，但还有一个问题就是如果背景拍到的范围过大，那么将会从背景提取很多无用的特征点，而要求人保持一定的距离把人脸填满屏幕实在太蠢了。</p>

                <p><strong>我的方法是：</strong>先加一层人脸识别，将人脸部分局部放大截取出来再拿去提取特征点并进行特征点比对，通过这种方法，就不用对被识别者有很大的要求，实现类似 K210 一样的功能啦~</p>

                <h3>口罩识别</h3>
                <p>两种模型引申出的两种不同方法：</p>
                <ul>
                    <li><strong>第一种</strong>是用 Haar 算子，将 XML 类型的文件转为 cascade 格式，然后识别。缺点是少量样本训练的口罩模型在识别过程中准确度较低。</li>
                    <li><strong>第二种</strong>是使用内置的 TFLite 神经网络框架运行。现在 OpenMV 手册已经有了 TFLite 口罩识别模型，识别结果大幅提高。</li>
                </ul>

                <h3>现场学习</h3>
                <p>由于使用特征点，现场学习不过就是把拍摄，提取特征点，文件保存放到现场进行罢了，在我这套逻辑下现场学习并没有多出多少难度，我们现场拍摄 20 张够够的了。</p>

                <h3>其他优化算法</h3>
                <ul>
                    <li><strong>直方图均值化：</strong> <code>.histeq(adaptive=True, clip_limit=3)</code> 处理后的图像将具有较大的灰度动态范围和较高的对比度。</li>
                    <li><strong>局部放大后识别：</strong> <code>sensor.get_fb().crop(roi=largest_face)</code> 首先利用固件库自带人脸 Haar 模型进行识别人脸，识别后截取人脸部分再进行特征点比对。</li>
                    <li><strong>自动增益：</strong> <code>sensor.snapshot().gamma_corr(contrast=1.5)</code> 伽马校正用于修正图像中色彩和对比度。</li>
                </ul>

                <h2>总结</h2>
                <p>我们最终获得了福建省二等奖，由于送测的时候 90614 模块出了问题，测温爆炸，反而其他部分包括视觉部分都是满分，遗憾没有省一，就当吸取要准备 Plan B 的教训了害。</p>

                <p>关于 OpenMV 部分代码，主要内容都在上面一段一段都 po 出来了，口罩识别见链接官方有，以上都写出了要点，足够有能力的同学可以复现。</p>

                <blockquote>
                    <p><strong>欢迎在评论区学习讨论，遇到问题的解决和互相交流分享经验，不提供硬件和软件工程代码！！</strong></p>
                </blockquote>
            `,
            backLink: "← 返回博客目录"
        },
        en: {
            title: "2020 Electronic Design Contest Summary - OpenMV Vision Solution",
            category: "Embedded Software",
            date: "2020-09",
            content: `
                <p>I've decided to share my resources and experience from the 2020 Electronic Design Contest. The topic was: <strong>Simple Contactless Temperature Measurement and Identity Recognition Device</strong></p>

                <h2>Overall Design</h2>

                <h3>Hardware Selection</h3>
                <p>We used OpenMV for machine vision. We had been preparing with OpenMV throughout our preparation, and ordering K210 would have taken too long to debug, so we stuck with OpenMV.</p>

                <p>We used the top-tier OpenMV H7 Plus, which successfully completed all required tasks.</p>

                <p>For temperature measurement, we used MLX90614 via I2C. Unfortunately, this module failed during testing, costing us the first prize - a hard lesson about having backup plans!</p>

                <p>The main controller was STM32C8T6, which we were already familiar with.</p>

                <h3>Software Flow</h3>
                <p>STM32 and OpenMV communicate via serial. We assigned letters to different modes - OpenMV waits in a loop for letters, executes the corresponding function, and returns results.</p>

                <h2>Vision Algorithms</h2>

                <p>Key resources:</p>
                <ul>
                    <li><a href="https://book.openmv.cc/" target="_blank">OpenMV Official Documentation</a></li>
                    <li><a href="https://docs.singtown.com/micropython/zh/latest/openmvcam/library/index.html" target="_blank">OpenMV Library Reference</a></li>
                </ul>

                <h3>Face Recognition (Identity Recognition)</h3>
                <p><strong>My approach:</strong> First use face detection to locate and crop the face region, then perform feature point extraction and matching. This way, subjects don't need to fill the entire screen.</p>

                <h3>Mask Detection</h3>
                <p>Two approaches:</p>
                <ul>
                    <li><strong>First:</strong> Use Haar cascade - trained mask model has lower accuracy with limited samples.</li>
                    <li><strong>Second:</strong> Use built-in TFLite neural network framework. Now OpenMV has TFLite mask detection model with much better results.</li>
                </ul>

                <h3>On-site Learning</h3>
                <p>Using feature points, on-site learning is just about capturing photos, extracting feature points, and saving files on-site. With our approach, 20 photos was sufficient.</p>

                <h3>Other Optimization Algorithms</h3>
                <ul>
                    <li><strong>Histogram Equalization:</strong> <code>.histeq(adaptive=True, clip_limit=3)</code> for better contrast</li>
                    <li><strong>Crop then Recognize:</strong> <code>sensor.get_fb().crop(roi=largest_face)</code> - detect face first, then crop for feature matching</li>
                    <li><strong>Gamma Correction:</strong> <code>sensor.snapshot().gamma_corr(contrast=1.5)</code> for color and contrast adjustment</li>
                </ul>

                <h2>Summary</h2>
                <p>We ultimately got the Second Prize in Fujian Province. The temperature module failed during testing, but all other parts including vision scored full marks. A lesson learned: always have a Plan B!</p>

                <blockquote>
                    <p><strong>Welcome to discuss and share experiences in the comments. I don't provide hardware or software engineering code!!</strong></p>
                </blockquote>
            `,
            backLink: "← Back to Blog"
        },
        ja: {
            title: "2020年電子設計コンテストまとめ - OpenMVビジョンソリューション",
            category: "組込みソフトウェア",
            date: "2020-09",
            content: `
                <p>2020年電子設計コンテストの経験を共有します。テーマは「非接触温度測定と身分識別装置」。</p>

                <h2>全体設計</h2>

                <h3>ハードウェア選択</h3>
                <p>機械学習用ビジュアルモジュールにはOpenMVを使用。準備段階でOpenMVを勉強していたため、K210を注文して到着を待っている余裕がなく、OpenMVにしました。</p>

                <p>最上位モデルのOpenMV H7 Plusを使用し、すべてのタスクをクリアしました。</p>

                <p>温度測定にはMLX90614を使用。テスト中にこのモジュールが故障し、1等奖を逃しました。バックアッププランの重要性！</p>

                <p>メインコントローラーには使い慣れたSTM32C8T6を使用。</p>

                <h3>ソフトウェアフロー</h3>
                <p>STM32とOpenMVはシリアル通信。各モードに文字を割り当て、OpenMVはループで文字を待ち、受信した文字に応じて対応する機能を実行し、結果を返します。</p>

                <h2>ビジョンアルゴリズム</h2>

                <p>主な参考資料：</p>
                <ul>
                    <li><a href="https://book.openmv.cc/" target="_blank">OpenMV公式ドキュメント</a></li>
                    <li><a href="https://docs.singtown.com/micropython/zh/latest/openmvcam/library/index.html" target="_blank">OpenMVライブラリリファレンス</a></li>
                </ul>

                <h3>顔認識（身分識別）</h3>
                <p><strong>私の方法：</strong>まず顔検出で顔を検出し面部をトリミングしてから特徴点抽出とマッチング。这样的话、被写体が画面に顔を埋め込む必要がありません。</p>

                <h3>マスク検出</h3>
                <p>2つのアプローチ：</p>
                <ul>
                    <li><strong>最初：</strong>Haarカスケードを使用 - サンプル数が少ないため精度が低い</li>
                    <li><strong>2番目：</strong>組み込みTFLiteニューラルネットワークフレームワークを使用。OpenMVにはTFLiteマスク検出モデルがあり、精度が大幅に向上</li>
                </ul>

                <h3>オンスタイル学習</h3>
                <p>特徴点を使用する場合、オンスタイル学習は写真を撮り、特徴点を抽出し、ファイルを保存するだけです。20枚の写真で十分でした。</p>

                <h2>まとめ</h2>
                <p>福建省2等奖を獲得。温度測定モジュールはテスト中に故障しましたが、ビジョン部分は満点。常にPlan Bを持つことの教訓！</p>

                <blockquote>
                    <p><strong>コメントで議論や経験の共有を歓迎します。ハードウェアやソフトウェアコードは提供しません！！</strong></p>
                </blockquote>
            `,
            backLink: "← ブログに戻る"
        }
    },

    // PN532 NFC Tutorial
    "pn532-nfc-tutorial": {
        zh: {
            title: "使用 PN532 将全加密卡复制到手环上 — NFC 校园门禁卡模拟教程",
            category: "嵌入式软件",
            date: "2021-03",
            content: `
                <blockquote>
                    <p><strong>注意！</strong></p>
                    <p>本教程仅教学模拟相关知识与如何使用手环模拟全加密校园卡，仅供个人学习，请勿修改数据金额，由此带来的任何非法后果均由个人承担。</p>
                    <p>本教程只涉及 0 扇区 UID 模拟教学，不涉及金额等其他信息修改教学。</p>
                </blockquote>

                <p>模拟加密卡想法由来已久，但由于网络上方法步骤参差不齐，看了很多很多资料最近才终于弄清楚了，现进行一个整理，并试图写一个教程。</p>

                <h2>材料准备</h2>
                <p><strong>硬件：</strong>PN532、USB转串口、4根杜邦线、<strong>UID卡</strong>（注意本教程不适用于 CUID/UFUID 卡！）、你要模拟的手环（我的是华为荣耀手环5）+连接手环的手机/含有NFC的手机</p>
                <p><strong>软件：</strong>蛐蛐、MifareOneTool、驱动</p>

                <h2>模拟原理</h2>
                <ul>
                    <li>手环不能直接模拟加密卡，因为加密卡除了扇区0（存UID的扇区）还含有其他信息</li>
                    <li>为了让手环可以模拟，我们需要制作一张只有扇区0（UID同原加密卡相同）含有信息的空白UID卡</li>
                    <li>之所以使用UID卡，是因为它可以使用后门特殊指令，达到对UID（卡号）进行修改的目的</li>
                    <li>为了制作这张满足需求的空白卡，我们要先读出原加密卡的0扇区信息，这涉及到使用蛐蛐进行破解（全加密卡）</li>
                    <li>用手机控制手环，模拟空白卡后的步骤，是为了将原加密卡信息（除了0块之外的63块信息）写入手环中</li>
                </ul>
                <p>一些名称：S50卡 = 加密为 SAK08 的卡 = 常见的校园卡 = MIFARE Classic 1K</p>

                <h2>模拟教程</h2>

                <h3>Step 0：环境准备</h3>
                <p>你需要使用4根杜邦线将USB转串口与PN532连接：</p>
                <ul>
                    <li>GND ---- GND</li>
                    <li>VCC ---- +5V/VCC</li>
                    <li>TXD ---- RXD</li>
                    <li>RXD ---- TXD</li>
                </ul>
                <p>如果你没有安装过驱动，还需要安装 USB 转串口的驱动（CH340 驱动）。</p>

                <h3>Step 1：破解加密卡信息（全加密卡）</h3>
                <p>首先我们来测试环境是否搭好以及卡是否是全加密卡。</p>
                <p>打开 MifareOneTool，点击<strong>检测连接</strong>，应该出现以下信息。然后将校园卡放在 PN532 上，点击<strong>扫描卡片</strong>，这一步可以帮助我们了解卡片的信息，如果是 SAK08 则大概率可以复制。</p>
                <p>然后点击<strong>一键解原卡</strong>，如果是全加密卡，你将会看到破解界面。</p>
                <p>关闭 MifareOneTool，打开蛐蛐，仍然将原卡放置在 PN532 上，点击右上角：<strong>全加密卡破解秘钥</strong>。然后将开始进行嗅探破解，耐心等待，这个过程需要 30-60 分钟的时间，当右侧出现 3 个以上的相同秘钥时，则很有可能是正确的。</p>
                <p>将右侧出现的秘钥保存好，然后复制黏贴到上方已知秘钥中，再点击使用秘钥读取。读取也需要 30 分钟左右的时间，读取完成后原卡信息将保存为蛐蛐同目录下的 <code>key.dump</code>，为了防止被覆盖，强烈建议你复制出来保存好！我们复制出来把它命名为 <code>原卡.dump</code>。</p>

                <h3>Step 2：制作空白卡</h3>
                <p>关闭蛐蛐，再次打开 MifareOneTool，如下依次点击<strong>高级操作模式——Hex编辑器——文件——打开</strong>，打开前面保存的 <code>原卡.dump</code>。</p>
                <p>上下切换扇区以显示信息，我们将扇区0的第0块信息复制出来，然后点击<strong>文件——新建——先点击一下扇区1然后点击扇区0</strong>（这一步的目的是初始化新文件）——再将信息黏贴到新文件的扇区0的第0块——点击<strong>修改扇区</strong>——然后<strong>另存为</strong> <code>空白卡.dump</code>，注意是另存为！是 dump 文件！</p>
                <p>接下来，我们将空白的 UID 卡放到 PN532 上，选择<strong>写UID卡</strong>，打开 <code>空白卡.dump</code> 文件，将其写入 UID 卡中，达到写入卡号的目的。</p>

                <h3>Step 3：模拟</h3>
                <p>将手环连接手机，选择<strong>模拟卡</strong>功能，模拟我们刚刚写好的 UID 卡（注意是模拟，不是创建空白卡！）</p>
                <p>PS：通常加空白卡功能只有安卓手机的 APP 里面才有，苹果手机里面被阉割了找不到，记得用安卓手机哦，我使用的是华为运动健康 APP。</p>
                <p>等待一段时间后模拟成功即可。</p>

                <h3>Step 4：写原卡信息，激活手环</h3>
                <p>在 Step 3 中我们模拟了 0 扇区 0 块，相当于已经写入了 UID，现在还需要写入另外的 63 块信息（加密数据），使得手环完全模拟原卡。</p>
                <p>我们打开蛐蛐，把 UID 卡放在 PN532 上，点击<strong>使用默认密钥读取</strong>。这一步的目的是使得与蛐蛐同目录下的 key.dump 文件中的秘钥（原卡的秘钥）被蛐蛐软件识别并加载，这样知道了秘钥才可以等下写入手环加密卡数据。</p>
                <p>然后拿走 UID 卡，放上手环，浏览文件选择 <code>原卡.dump</code>，点击写入，当看到成功信息时，就说明写入成功了！</p>
                <p>如果是其他信息，则说明写失败，记得多试几次，或者从手机端删除此卡，再重复上述步骤。</p>
                <p><strong>接下来你就可以快乐地去刷手环了！</strong></p>

                <h2>其他模拟校园卡的方式</h2>

                <h3>1. STM32/Arduino + RC522</h3>
                <p>该方法需要在 STM32 上建立工程，使用 RC522 的库函数向 522 发送指令，实现修改白卡 UID 的目的。这种方法的自由度大，适合理解原理和高级 DIY 玩家。</p>

                <h3>2. 小米手机直接模拟</h3>
                <p>据测试，MIUI12 下带有 NFC 功能的小米手机可以直接模拟全加密卡了。如果是弄到手环上，还是按上面的步骤来。</p>

                <h2>参考资料</h2>
                <ul>
                    <li><a href="https://www.bilibili.com/video/BV1PD4y1m78W" target="_blank">B站视频教程</a></li>
                    <li>电子兔淘宝店资料</li>
                </ul>
            `,
            backLink: "← 返回博客目录"
        },
        en: {
            title: "PN532 NFC Tutorial: Copy Encrypted Cards to Smart Bracelets",
            category: "Embedded Software",
            date: "2021-03",
            content: `
                <blockquote>
                    <p><strong>Warning!</strong></p>
                    <p>This tutorial is for educational purposes only. Do not modify data or amounts. Any illegal consequences are the user's responsibility.</p>
                    <p>This tutorial only covers Sector 0 UID simulation, not amount or other information modification.</p>
                </blockquote>

                <p>I've wanted to simulate encrypted cards for a long time. After researching many methods online, I've finally figured it out and want to share a complete guide.</p>

                <h2>Materials Needed</h2>
                <p><strong>Hardware:</strong> PN532, USB to Serial, 4 Dupont wires, <strong>UID Card</strong> (not CUID/UFUID!), Smart bracelet (I used Honor Band 5), Phone with NFC</p>
                <p><strong>Software:</strong> MifareOneTool, Proxmark3 (optional), Drivers</p>

                <h2>How It Works</h2>
                <ul>
                    <li>Smart bracelets can't directly simulate encrypted cards because encrypted cards have information beyond Sector 0 (where UID is stored)</li>
                    <li>To make it work, we need to create a blank UID card with only Sector 0 (same UID as original encrypted card)</li>
                    <li>UID cards can use special backdoor commands to modify UID (card number)</li>
                    <li>To create this blank card, we first need to read Sector 0 from the original encrypted card (requires cracking for fully encrypted cards)</li>
                    <li>Using the phone to simulate the blank card prepares it, then we write the original card's data (63 blocks beyond block 0) to the bracelet</li>
                </ul>

                <h2>Tutorial</h2>

                <h3>Step 0: Environment Setup</h3>
                <p>Connect USB to Serial with PN532 using 4 Dupont wires:</p>
                <ul>
                    <li>GND ---- GND</li>
                    <li>VCC ---- +5V/VCC</li>
                    <li>TXD ---- RXD</li>
                    <li>RXD ---- TXD</li>
                </ul>
                <p>Install CH340 driver if needed.</p>

                <h3>Step 1: Crack Encrypted Card</h3>
                <p>Open MifareOneTool, click <strong>Detect Connection</strong>. Place campus card on PN532, click <strong>Scan Card</strong> to check card info.</p>
                <p>Click <strong>One-Click Crack</strong> for fully encrypted cards.</p>
                <p>Close MifareOneTool, open Proxmark3 client. Place original card on PN532, click <strong>Full Encrypted Card Crack</strong>. Wait 30-60 minutes.</p>
                <p>Save the keys and save card data as <code>original.dump</code>.</p>

                <h3>Step 2: Create Blank Card</h3>
                <p>Open MifareOneTool, go to <strong>Advanced Mode - Hex Editor - File - Open</strong>, open <code>original.dump</code>.</p>
                <p>Copy Sector 0 Block 0 info, create new file, paste to new file's Sector 0 Block 0, save as <code>blank.dump</code>.</p>
                <p>Place blank UID card on PN532, select <strong>Write UID Card</strong>, open <code>blank.dump</code>, write to UID card.</p>

                <h3>Step 3: Simulate</h3>
                <p>Connect bracelet to phone, use <strong>Simulate Card</strong> function to simulate the UID card we just wrote.</p>
                <p>Note: This feature is only available in Android apps, not iPhone. I used Huawei Sports Health app.</p>

                <h3>Step 4: Write Data to Bracelet</h3>
                <p>In Step 3 we simulated Sector 0 Block 0 (UID is written). Now we need to write the other 63 blocks of encrypted data.</p>
                <p>Open Proxmark3, place UID card, click <strong>Read with Default Keys</strong> to load keys.</p>
                <p>Remove UID card, place bracelet, select <code>original.dump</code>, click Write. Success means you're done!</p>
                <p><strong>Now you can use your bracelet to swipe!</strong></p>

                <h2>Other Methods</h2>
                <ul>
                    <li><strong>STM32/Arduino + RC522:</strong> More complex, requires coding, better for understanding principles</li>
                    <li><strong>Xiaomi Phone Direct Simulation:</strong> MIUI12+ with NFC can simulate encrypted cards directly</li>
                </ul>
            `,
            backLink: "← Back to Blog"
        },
        ja: {
            title: "PN532 NFCチュートリアル：暗号化カードをスマートバンドにコピー",
            category: "組込みソフトウェア",
            date: "2021-03",
            content: `
                <blockquote>
                    <p><strong>注意！</strong></p>
                    <p>このチュートリアルは教育目的のみです。データや金額を変更しないでください。</p>
                    <p>このチュートリアルはセクター0のUIDシミュレーションのみです。</p>
                </blockquote>

                <p>暗号化カードのシミュレーションは以前からしたかったのですが、方法が分からず苦労していました。今回は完全なガイドを共有します。</p>

                <h2>必要な材料</h2>
                <p><strong>ハードウェア：</strong>PN532、USBシリアル、4本デュポン線、<strong>UIDカード</strong>（CUID/UFUIDではありません！）、スマートバンド（NFC対応スマホが必要）</p>
                <p><strong>ソフトウェア：</strong>MifareOneTool、Proxmark3、ドライバー</p>

                <h2>原理</h2>
                <ul>
                    <li>スマートバンドは暗号化カードを直接シミュレーションできません</li>
                    <li>動作させるには、セクター0（UID保存場所）のみの空白UIDカードを作成する必要があります</li>
                    <li>UIDカードは後門コマンドを使用してUIDを変更できます</li>
                    <li>まず元の暗号化カードからセクター0情報を読み取る必要があります（完全暗号化カードは解読が必要）</li>
                </ul>

                <h2>チュートリアル</h2>

                <h3>ステップ0：環境設定</h3>
                <p>USBシリアルをPN532に接続：</p>
                <ul>
                    <li>GND ---- GND</li>
                    <li>VCC ---- +5V/VCC</li>
                    <li>TXD ---- RXD</li>
                    <li>RXD ---- TXD</li>
                </ul>

                <h3>ステップ1：暗号化カードを解読</h3>
                <p>MifareOneToolで「検出接続」をクリック。カードをPN532に置き、「スキャン」をクリック。</p>
                <p>「一発解読」をクリック。</p>
                <p>Proxmark3で解読。30-60分必要です。キーを保存し、カードを<code>original.dump</code>として保存。</p>

                <h3>ステップ2：空白カードを作成</h3>
                <p>MifareOneToolで<code>original.dump</code>を開く。セクター0ブロック0をコピー、新規ファイルに貼り付け、<code>blank.dump</code>として保存。</p>
                <p>空白UIDカードを置き、「UIDカードを書く」をクリックし、<code>blank.dump</code>を書く。</p>

                <h3>ステップ3：シミュレーション</h3>
                <p>バンドをスマホに接続。「シミュレーションカード」機能を使用。</p>
                <p>注意：Androidのみ。iPhoneではできません。</p>

                <h3>ステップ4：バンドにデータを書く</h3>
                <p>ステップ3でUIDを書きました。残りの63ブロックの暗号化データを書く必要があります。</p>
                <p>Proxmark3でUIDカードを置き、キーを読み込み。バンドを置き、<code>original.dump</code>を書いて完了！</p>

                <p><strong>以上でバンドでスキャン可能！</strong></p>
            `,
            backLink: "← ブログに戻る"
        }
    }
};

// Function to get blog translation by slug
function getBlogTranslation(slug, lang) {
    if (blogTranslations[slug] && blogTranslations[slug][lang]) {
        return blogTranslations[slug][lang];
    }
    return null;
}

// Function to update blog page content
function updateBlogContent(slug, lang) {
    const trans = getBlogTranslation(slug, lang);
    if (!trans) return false;

    // Update title
    const titleEl = document.querySelector('.blog-post header h1');
    if (titleEl) titleEl.textContent = trans.title;

    // Update category
    const categoryEl = document.querySelector('.blog-post header .post-category');
    if (categoryEl) categoryEl.textContent = trans.category;

    // Update date
    const dateEl = document.querySelector('.blog-post header .post-meta span:first-child');
    if (dateEl) dateEl.textContent = '📅 ' + trans.date;

    // Update content
    const contentEl = document.querySelector('.blog-post .post-content, .blog-post .blog-content');
    if (contentEl) contentEl.innerHTML = trans.content;

    // Update back link
    const backLink = document.querySelector('.blog-post .back-link');
    if (backLink && trans.backLink) {
        backLink.textContent = trans.backLink;
    }

    // Update page title
    document.title = trans.title + ' | Junzhe Lin';

    return true;
}

// Function to update blog index page
function updateBlogIndex(lang) {
    const trans = blogTranslations["blog-index"][lang];
    if (!trans) return;

    // Update page title and description
    const titleEl = document.querySelector('.page-title');
    if (titleEl) titleEl.textContent = trans.pageTitle;

    const descEl = document.querySelector('.page-desc');
    if (descEl) descEl.textContent = trans.pageDesc;

    // Update category titles
    const categoryTitles = document.querySelectorAll('.category-title');
    if (categoryTitles[0]) categoryTitles[0].innerHTML = `<span class="category-icon">☁️</span> ${trans.cloudComputing}`;
    if (categoryTitles[1]) categoryTitles[1].innerHTML = `<span class="category-icon">🔧</span> ${trans.embeddedSoftware}`;

    // Update blog post titles and descriptions
    const postItems = document.querySelectorAll('.post-item[data-post-slug]');

    postItems.forEach((item) => {
        const slug = item.dataset.postSlug;
        const titleLink = item.querySelector('h3 a');
        const desc = item.querySelector('p');

        if (titleLink && trans[slug]) {
            titleLink.textContent = trans[slug];
        }
        if (desc && trans[slug + '-desc']) {
            desc.textContent = trans[slug + '-desc'];
        }
    });
}
