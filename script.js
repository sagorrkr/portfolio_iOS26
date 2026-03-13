let isEnglish = true;
const translations = {
    name: {
        en: "Ridoy Kumar Roy",
        Cn: "罗酷"
    },
    title: {
        en: "Data Enthusiast",
        Cn: "数据爱好者"
    },
    tiles: {
        overview: { 
            title: { en: "Overview", Cn: "概述" },
            subtitle: { en: "About me", Cn: "关于我" }
        },
        experience: { 
            title: { en: "Experience", Cn: "经验" },
            subtitle: { en: "Professional journey", Cn: "职业之旅" }
        },
        education: { 
            title: { en: "Education", Cn: "教育" },
            subtitle: { en: "Academic background", Cn: "学术背景" }
        },
        skills: { 
            title: { en: "Skills", Cn: "技能" },
            subtitle: { en: "", Cn: "" }
        },
        certification: { 
            title: { en: "Certificates", Cn: "证书" },
            subtitle: { en: "", Cn: "" }
        },
        extras: { 
            title: { en: "Projects & Awards", Cn: "项目与奖项" },
            subtitle: { en: "Achievements & Publications", Cn: "成就与出版物" }
        }
    },
    leftTiles: {
        resume: { en: "See resume", Cn: "查看简历" },
        lightMode: { en: "Light mode", Cn: "灯光模式" },
        darkMode: { en: "Dark mode", Cn: "深色模式" },
        translateCn: { en: "翻译成中文", Cn: "Translate to English" }
    },
    backButton: {
        en: "Back",
        Cn: "返回"
    },
    sections: {
        overview: {
            title: { en: "Overview", Cn: "概述" },
            content: { 
                en: "I graduated with a computer science degree and spent two years in marketing at a multinational corporation (MNC), where I discovered my passion for data by mastering its manipulation to drive decisions. Now, I’m pursuing a Master’s in Information and Communication Engineering at Hohai University, building on my expertise in model development, optimization, and statistical analysis with tools like Python, SQL, and data visualization. My drive lies in making data-driven decisions and contributing to research, while I also explore Visible Light Communication and positioning as a side interest, constantly seeking new ways to apply my skills.",
                Cn: "我本科毕业于计算机科学专业，曾在一家跨国公司（MNC）从事市场营销工作两年。在此期间，我通过数据分析和应用推动业务决策，从而发现了自己对数据领域的热情。目前，我正在河海大学攻读信息与通信工程硕士学位，专注于利用Python、SQL及数据可视化工具进行模型开发、优化与统计分析。我的目标是通过数据驱动决策支持研究，同时以可见光通信（VLC）与定位技术为兴趣方向，不断探索技能的新应用场景。"
            }
        },
        skills: {
            title: { en: "Skills", Cn: "技能" },
            content: { 
                en: [
                    "ML/AI: Random Forest, CNN, LSTM, Logistic Regression, Linear Regression (malware classification)",
                    "Programming: Python, Java (basic), C++ (basic)",
                    "Databases: MySQL, MongoDB",
                    "Ad Tech: Google Ad Manager, Campaign Manager 360, CNet, AdBook (9% revenue growth)",
                    "Visualization: matplotlib, seaborn (research data analysis)",
                    "Tools: GitHub, MS Office, Google Workspace",
                    "Operating Systems: Linux, Windows, Mac OS, Android",
                    "Languages: English (Fluent), Bengali (Native), Chinese (Intermediate), Hindi (Verbal Only)"
                ],
                Cn: [
                    "机器学习/人工智能：随机森林、卷积神经网络（CNN）、长短期记忆网络（LSTM）、逻辑回归、线性回归（恶意软件分类）",
                    "编程语言：Python、Java（基础）、C++（基础）",
                    "数据库：MySQL、MongoDB",
                    "广告技术：Google Ad Manager、Campaign Manager 360、CNet、AdBook（收入增长9%）",
                    "数据可视化：matplotlib、seaborn（研究数据分析）",
                    "开发工具：GitHub、MS Office、Google Workspace",
                    "操作系统：Linux、Windows、Mac OS、Android",
                    "语言能力：英语（流利）、孟加拉语（母语）、中文（中级）、印地语（仅口语）"
                ]
            }
        },
        education: {
            title: { en: "Education", Cn: "教育" },
            content: {
                en: [
                    {
                        title: "Masters of Engineering - Hohai University, Nanjing, China (2024-ongoing)",
                        points: ["Masters in Information & Communication Engineering.",
                                 "Major courseworks: Digital Signal Processing, Digital Communications, Optimization Methods, Computer-Aided Design, Distributed Computing." 
                        ]
                    },
                    {
                        title: "Bachelor of Engineering, Nanjing University of Posts & Telecommunications (2018-2022)",
                        points: [
                            "Bachelors in Computer Science & Technology.",
                            "Major courseworks:  Data Structures & Algorithms, Computer Architecture, DBMS, Computer Communications and Networks, Information Security Technology."
                        ]
                    },
                    {
                        title: "Higher Secondary(12th) - Police Lines School & College, Rangpur (2015-2016)",
                        points: [
                            "Subjects - Physics, Chemistry, Maths, ICT, English."
                        ]
                    },
                    {
                        title: "Secondary(10th) - Mohendra Nagar High School  (2013-2014)",
                        points: [
                            "Subjects - Science, Maths, Social science, English."
                        ]
                    }
                ],
                Cn: [
                    {
                        title: "硕士的工程学 - 河海大学，南京，中国 (2024年至今)",
                        points: [
                            "信息与通信工程硕士.",
                            "核心专业课程: 数字信号处理, 数字通信, 最优化方法, 计算机辅助设计, 分布式计算."
                        ]
                    },
                    {
                        title: "工学学士，南京邮电大学（中国南京，2018-2022)",
                        points: [
                            "计算机科学与技术学士.",
                            "核心专业课程：数据结构与算法、计算机体系结构、数据库管理系统、计算机通信与网络、信息安全技术."
                        ]
                    },
                    {
                        title: "高中（12年级）- 警察线路学校和学院, Rangpur （2015-2016）",
                        points: [
                            "科目-物理、化学、数学、ICT、英语."
                        ]
                    },
                    {
                        title: "中学（10年级）-Mohendra Nagar高中（2013-2014）",
                        points: [
                            "科目-科学、数学、社会科学、英语."
                        ]
                    }
                ]
            }
        },
        experience: {
            title: { en: "Experience", Cn: "经验" },
            content: {
                en: [
                    {
                        title: "Executive of Digital Ad Ops(Hybrid) - ServicEngine Ltd. (Jan 2023 - Sept 2024)",
                        points: [
                            "Oversaw digital ad campaigns; managed setup and troubleshooting with Google Ad Manager, meeting all deadlines.",
                            "Produced performance reports; used Campaign Manager 360 and GAM to collaborate with teams, delivered campaigns on budget.",
                            "Enhanced new advertiser visibility; optimized ad rotation in CNet, increasing conversions by ~15%.",
                            "Boosted revenue by ~9%; executed campaigns via AdBook with strategic communication.",
                            "Created multiple dashboards analyzing impressions and spends at yearly and quarterly level using Tableau, performed feature selection of core business variables for robust models.",
                            "Helped extract core, external variables and automate feature engineering using Python, SQL.",
                            "Awarded Star Performer for 3 quarters (recognized in 3 out of 4 quarterly cycles)."
                        ]
                    },
                    {
                        title: "Research Assistant - School of Computer Science,NJUPT (Jan 2022- June 2022)",
                        points: [
                            "Researched and developed models for classifying encrypted malware using machine learning techniques, including Random Forest, CNN, Logistic Regression, Naive Bayes, and Linear Regression.",
                            "Gathered and analyzed data using various statistical and machine learning tools.",
                            "Built simulation tool to allocate data and predict malicious attacks of multiple potential scenarios using Python",
                            "Collaborated with a team of researchers to present findings at conferences and publish research papers in a relevant journal."
                        ]
                    },

                ],
                Cn: [
                    {
                        title: "数字广告运营主管（混合办公模式）- ServicEngine有限公司 （2023年1月-2024年9月）",
                        points: [
                            "负责监督数字广告活动；通过Google Ad Manager管理广告设置与问题排查，确保所有项目按时交付.",
                            "制作绩效报告；运用Campaign Manager 360和GAM进行跨团队协作，实现预算内广告投放.",
                            "提升新广告主曝光度；优化CNet平台广告轮播策略，转化率提升约15%.",
                            "通过AdBook执行战略传播方案，推动收入增长约9%.",
                            "使用Tableau创建多维数据看板分析年度/季度展示量与支出，完成核心业务变量的特征选择以构建稳健模型.",
                            "运用Python和SQL协助提取核心及外部变量，实现特征工程自动化.",
                            "三次荣获\"季度明星员工\"称号（一年四个考核季度中三次获奖.",
                        ]
                    },
                    {
                        title: "科研助理 - 南京邮电大学计算机学院（2022年1月-2022年6月)",
                        points: [
                            "研究并开发加密恶意软件分类模型，应用随机森林、CNN、逻辑回归、朴素贝叶斯和线性回归等机器学习技术.",
                            "使用多种统计与机器学习工具进行数据收集与分析.",
                            "基于Python构建模拟工具，分配数据并预测多种潜在场景的恶意攻击.",
                            "与研究团队协作，在学术会议展示成果并于相关期刊发表论文."
                        ]
                    },
                    

                ]
            }
        },
        certification: {
            title: { en: "Certifications", Cn: "所获证书" },
            content: {
                en: [
                    "<a href='https://drive.google.com/file/d/1KvXkNNufPHcMqCFsdjd-NF-HKqdahO8x/view?usp=drive_link' target='_blank' class='achievement-link'>Google Cybersecurity Training</a>",
                    "<a href='https://drive.google.com/file/d/1scIczYd8Z2QVOpz4xQop2gmjfU7_M7SH/view' target='_blank' class='achievement-link'>Microsoft Cybersecurity Training</a>",
                    "<a href='https://www.coursera.org/account/accomplishments/verify/B34BCJVCASFP' target='_blank' class='achievement-link'>Google Ads for Beginners</a>",
                    "<a href='https://skillshop.credential.net/33f3b3c3-2197-424d-ab83-23b17e9bcd25#acc.L5bNMkuh' target='_blank' class='achievement-link'>Google Ads - Measurement Certification</a>",
                    "<a href='https://www.coursera.org/account/accomplishments/verify/R2Z7P74SDUFC' target='_blank' class='achievement-link'>Business Analysis & Process Management</a>",
                    "<a href='https://www.udemy.com/certificate/UC-3746f766-8971-4613-ac00-0fe0a2d8ea74/' target='_blank' class='achievement-link'>Python for Machine Learning with Numpy, Pandas & Matplotlib</a>",
                    "<a href='https://www.coursera.org/account/accomplishments/verify/UAGWHVD4N3BG' target='_blank' class='achievement-link'>Introduction to Data Analysis using Microsoft Excel</a>",
                    "<a href='https://www.coursera.org/account/accomplishments/verify/UJAYAFT982CQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project' target='_blank' class='achievement-link'>AWS S3 Basics</a>"
                ],
                Cn: [
                    "<a href='https://drive.google.com/file/d/1KvXkNNufPHcMqCFsdjd-NF-HKqdahO8x/view?usp=drive_link' target='_blank' class='achievement-link'>谷歌网络安全培训</a>",
                    "<a href='https://drive.google.com/file/d/1scIczYd8Z2QVOpz4xQop2gmjfU7_M7SH/view' target='_blank' class='achievement-link'>微软网络安全培训</a>",
                    "<a href='https://www.coursera.org/account/accomplishments/verify/B34BCJVCASFP' target='_blank' class='achievement-link'>谷歌广告入门课程</a>",
                    "<a href='https://skillshop.credential.net/33f3b3c3-2197-424d-ab83-23b17e9bcd25#acc.L5bNMkuh' target='_blank' class='achievement-link'>谷歌广告测量认证</a>",
                    "<a href='https://www.coursera.org/account/accomplishments/verify/R2Z7P74SDUFC' target='_blank' class='achievement-link'>商业分析与流程管理</a>",
                    "<a href='https://www.udemy.com/certificate/UC-3746f766-8971-4613-ac00-0fe0a2d8ea74/' target='_blank' class='achievement-link'>Python机器学习（NumPy、Pandas及Matplotlib应用)</a>",
                    "<a href='https://www.coursera.org/account/accomplishments/verify/UAGWHVD4N3BG' target='_blank' class='achievement-link'>Microsoft Excel数据分析入门</a>",
                    "<a href='https://www.coursera.org/account/accomplishments/verify/UJAYAFT982CQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project' target='_blank' class='achievement-link'>AWS S3基础课程</a>"
                 ]
            }
        },
        extras: {
            title: { en: "Key Achievements & Publications", Cn: "主要成就和出版物" },
            content: {
                en: [
                    "Community Award for Outstanding results in Secondary School Certificate by ISKCON Bangladesh (2014)",
                    "Academic First Class scholarship Four-time recipient of scholarship (2018-2022)",
                    "<a href='https://twasp.info/journal/Rd3951HG/a-few-approaches-in-encrypted-malware-classifications' target='_blank' class='achievement-link'>A few approaches in Encrypted Malware Classifications [2022]</a>",
                    "<a href='https://mail.twasp.info/journal/Xs2831RV/hybrid-cnn-rnn-and-svm-techniques-for-improved-webshell-detection' target='_blank' class='achievement-link'>Hybrid CNN-RNN and SVM Techniques for Improved Webshell Detection[2024]</a>",
                    "<a href='https://ieeexplore.ieee.org/abstract/document/11171834' target='_blank' class='achievement-link'>Analyzing Threats in Public Wi-Fi: A Study of Attack Vectors, Vulnerability and User Awareness(2025)</a>",
                    "<a href='https://www.ijisrt.com/aipowered-spatial-computing-in-cad-a-review-of-immersive-design-tools-and-methods' target='_blank' class='achievement-link'>AI-Powered Spatial Computing in CAD: A Review of Immersive Design Tools and Methods(2025）</a>",
                    "<a href='https://twasp.info/journal/OE47162w/adaptive-ddos-detection-using-rfcnnbilstm-hybrid-pipeline' target='_blank' class='achievement-link'>Adaptive DDoS Detection Using RF–CNN–BiLSTM Hybrid Pipelin(2025)</a>",
                    "<a href='https://www.ijisrt.com/a-study-on-digital-mti-processors-frequency-pulse' target='_blank' class='achievement-link'>A Study on Digital MTI Processors & Frequency pulse(2025)</a>",
                    "<a href='https://proceedings.aijr.org/index.php/ap/article/view/122' target='_blank' class='achievement-link'>Addressing Security Vulnerabilities in Modern Cloud Computing: A Case Study and Hybrid Mitigation Approach(2025)</a>"
                ],
                Cn: [
                    "ISKCON孟加拉国中学证书优秀成绩社区奖（2014）",
                    "学术类一等奖学金四次获得者（(2018-2022)）",
                    "<a href='https://twasp.info/journal/Rd3951HG/a-few-approaches-in-encrypted-malware-classifications' target='_blank' class='achievement-link'>加密恶意软件分类的几种方法[2022]</a>",
                    "<a href='https://mail.twasp.info/journal/Xs2831RV/hybrid-cnn-rnn-and-svm-techniques-for-improved-webshell-detection' target='_blank' class='achievement-link'>改进Webshell检测的混合CNN-RNN和SVM技术[2024]</a>",
                    "<a href='https://ieeexplore.ieee.org/abstract/document/11171834' target='_blank' class='achievement-link'>公共Wi-Fi威胁分析：攻击媒介、漏洞和用户意识研究（2025）</a>",
                    "<a href='https://www.ijisrt.com/aipowered-spatial-computing-in-cad-a-review-of-immersive-design-tools-and-methods' target='_blank' class='achievement-link'>CAD中的人工智能空间计算：沉浸式设计工具和方法综述（2025</a>",
                    "<a href='https://twasp.info/journal/OE47162w/adaptive-ddos-detection-using-rfcnnbilstm-hybrid-pipeline' target='_blank' class='achievement-link'>使用RF的自适应DDoS检测–CNN–BiLSTM混合管道（2025）</a>",
                    "<a href='https://www.ijisrt.com/a-study-on-digital-mti-processors-frequency-pulse' target='_blank' class='achievement-link'>数字MTI处理器与频率脉冲研究（2025）</a>",
                    "<a href='https://proceedings.aijr.org/index.php/ap/article/view/122' target='_blank' class='achievement-link'>现代云计算安全漏洞的应对：案例分析与混合缓解方法(2025)</a>"
                ]
            }
        }
    }
};

// State management
let currentView = 'tiles';
let currentSection = null;

function updateContent() {
    const lang = isEnglish ? 'en' : 'Cn';

    // Update profile section
    document.getElementById('name').textContent = translations.name[lang];
    document.getElementById('title').textContent = translations.title[lang];

    // Update left tiles
    document.querySelector('.tile-resume .tile-text').textContent = translations.leftTiles.resume[lang];
    const modeToggle = document.querySelector('.tile-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    modeToggle.querySelector('.tile-text').textContent = isLightMode ? 
        translations.leftTiles.darkMode[lang] : translations.leftTiles.lightMode[lang];
    document.querySelector('.tile-lang .tile-text').textContent = isEnglish ? 
        translations.leftTiles.translateCn.en : translations.leftTiles.translateCn.Cn;

    // Update right tiles
    const tiles = document.querySelectorAll('.tile-grid-right .tile');
    tiles.forEach(tile => {
        const section = tile.getAttribute('data-section');
        if (section && translations.tiles[section]) {
            const titleElement = tile.querySelector('.tile-title');
            const subtitleElement = tile.querySelector('.tile-subtitle');
            
            if (titleElement) {
                titleElement.textContent = translations.tiles[section].title[lang];
            }
            if (subtitleElement) {
                subtitleElement.textContent = translations.tiles[section].subtitle[lang];
            }
        }
    });

    // Update back button
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.innerHTML = `<span class="back-icon">←</span> ${translations.backButton[lang]}`;
    }

    // Update section content
    Object.keys(translations.sections).forEach(sectionKey => {
        const section = document.getElementById(sectionKey);
        if (section) {
            const titleElement = section.querySelector('h3');
            if (titleElement) {
                titleElement.textContent = translations.sections[sectionKey].title[lang];
            }
            
            const contentElement = section.querySelector('p, ul, div');
            if (contentElement) {
                const content = translations.sections[sectionKey].content[lang];
                if (Array.isArray(content)) {
                    if (typeof content[0] === 'object') {
                        // For education and experience sections
                        let html = '';
                        content.forEach((item, index) => {
                            html += `<h4>${item.title}</h4><ul>`;
                            item.points.forEach(point => {
                                html += `<li>${point}</li>`;
                            });
                            html += '</ul>';
                            if (sectionKey === 'experience' && index < content.length - 1) {
                                html += '<hr class="experience-divider">';
                            }
                        });
                        contentElement.innerHTML = html;
                    } else {
                        // For skills, certification, and extras sections
                        contentElement.innerHTML = content.map(item => `<li>${item}</li>`).join('');
                    }
                } else {
                    // For overview section
                    contentElement.textContent = content;
                }
            }
        }
    });
}

function toggleLanguage() {
    isEnglish = !isEnglish;
    updateContent();
}

function showTileGrid() {
    const tileGrid = document.getElementById('tile-grid');
    const contentView = document.getElementById('content-view');
    
    contentView.classList.remove('active');
    setTimeout(() => {
        contentView.style.display = 'none';
        tileGrid.style.display = 'grid';
        setTimeout(() => {
            tileGrid.classList.add('active');
        }, 50);
    }, 300);
    
    currentView = 'tiles';
    currentSection = null;
}

function showContent(sectionId) {
    const tileGrid = document.getElementById('tile-grid');
    const contentView = document.getElementById('content-view');
    
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Transition Cnom tiles to content
    tileGrid.classList.remove('active');
    setTimeout(() => {
        tileGrid.style.display = 'none';
        contentView.style.display = 'flex';
        setTimeout(() => {
            contentView.classList.add('active');
        }, 50);
    }, 300);
    
    currentView = 'content';
    currentSection = sectionId;
}

function toggleMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    
    const modeToggle = document.querySelector('.tile-mode');
    const lang = isEnglish ? 'en' : 'Cn';
    modeToggle.querySelector('.tile-icon').textContent = isLightMode ? '🌑' : '☀️';
    modeToggle.querySelector('.tile-text').textContent = isLightMode ? 
        translations.leftTiles.darkMode[lang] : translations.leftTiles.lightMode[lang];

    // Update background if you have a function for that
    if (typeof updateBackgroundMode === 'function') {
        updateBackgroundMode(isLightMode);
    }
}

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        // Create a temporary tooltip
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Copied!';
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            pointer-events: none;
            z-index: 1000;
            transform: translateX(-50%);
            left: 50%;
            top: -30px;
        `;
        
        element.style.position = 'relative';
        element.appendChild(tooltip);
        
        setTimeout(() => {
            tooltip.remove();
        }, 1500);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateContent();
    
    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', toggleLanguage);

    // Mode toggle
    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', toggleMode);

    // Right side tile click handlers
    const rightTiles = document.querySelectorAll('.tile-grid-right .tile');
    rightTiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            showContent(targetSection);
        });
    });

    // Back button handler
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', showTileGrid);

    // Email and phone copy handlers
    const emailTile = document.getElementById('email-tile');
    const phoneTile = document.getElementById('phone-tile');
    
    emailTile.addEventListener('click', function() {
        const emailText = document.getElementById('email-info').textContent;
        copyToClipboard(emailText, this);
    });
    
    phoneTile.addEventListener('click', function() {
        const phoneText = document.getElementById('phone-info').textContent;
        copyToClipboard(phoneText, this);
    });

    // Prevent link tiles Cnom interfering with their anchor tags
    const linkTiles = document.querySelectorAll('.tile-resume, .tile-github, .tile-linkedin');
    linkTiles.forEach(tile => {
        tile.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    // Add entrance animations for tiles
    const allTiles = document.querySelectorAll('.tile');
    allTiles.forEach((tile, index) => {
        tile.style.animationDelay = `${index * 0.05}s`;
        tile.style.animation = 'fadeInScale 0.5s ease forwards';
    });
});

// Add CSS animation for tile entrance
const style = document.createElement('style');
style.textContent = `
    @keyCnames fadeInScale {
        Cnom {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);