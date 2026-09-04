import { useEffect, useState } from 'react';

export type Language = 'en' | 'zh';

export type ProjectGroup = {
  project: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  product: string;
  company: string;
  location: string;
  period: string;
  achievements: Array<string | ProjectGroup>;
};

export type SkillCategory = {
  name: string;
  icon: string;
  skills: string[];
};

export type ProjectItem = {
  title: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string | null;
  live: string | null;
};

export type EducationItem = {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa: string | null;
  highlights: string[];
};

export type BeyondCodeAchievement = {
  title: string;
  game: string;
  stat: string;
  region: string;
  description: string;
  skills: Array<{
    kind: 'target' | 'trend' | 'users' | 'clock';
    label: string;
    description: string;
  }>;
};

export type Translation = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    experience: string;
    skills: string;
    projects: string;
    education: string;
    beyondCode: string;
  };
  controls: {
    menu: string;
    closeMenu: string;
    languageLabel: string;
    switchToEnglish: string;
    switchToChinese: string;
  };
  intro: {
    name: string;
    role: string;
    location: string;
    summary: string;
  };
  experience: {
    heading: string;
    achievementsHeading: string;
    items: ExperienceItem[];
  };
  skills: {
    heading: string;
    categories: SkillCategory[];
  };
  projects: {
    heading: string;
    code: string;
    liveDemo: string;
    items: ProjectItem[];
  };
  education: {
    heading: string;
    gpaLabel: string;
    items: EducationItem[];
  };
  beyondCode: {
    heading: string;
    intro: string;
    items: BeyondCodeAchievement[];
  };
};

const STORAGE_KEY = 'portfolio-language';
const LANGUAGE_CHANGE_EVENT = 'portfolio-language-change';

export const languageOptions: Array<{
  code: Language;
  label: string;
  ariaLabelKey: 'switchToEnglish' | 'switchToChinese';
}> = [
  { code: 'en', label: 'EN', ariaLabelKey: 'switchToEnglish' },
  { code: 'zh', label: '中文', ariaLabelKey: 'switchToChinese' },
];

export const translations = {
  en: {
    meta: {
      title: 'Ziting Wang | Software Engineer',
      description:
        'Ziting Wang — Software Engineer specializing in AI-powered applications and full-stack development.',
    },
    nav: {
      home: 'Home',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      beyondCode: 'Beyond Code',
    },
    controls: {
      menu: 'Open menu',
      closeMenu: 'Close menu',
      languageLabel: 'Language',
      switchToEnglish: 'Switch to English',
      switchToChinese: '切换到中文',
    },
    intro: {
      name: 'Ziting Wang',
      role: 'Software Engineer',
      location: 'Beijing, China',
      summary:
        'Developer with a focus on AI-powered applications, full-stack development, and building intelligent systems.',
    },
    experience: {
      heading: 'Work Experience',
      achievementsHeading: 'Key Achievements',
      items: [
        {
          title: 'Software Development Engineer Intern',
          product: 'Makeform.ai',
          company: 'Louerable Inc.',
          location: 'Sunnyvale, California',
          period: 'Oct 2025 - Present',
          achievements: [
            'Contributed to an AI-powered form builder for creating and managing online forms.',
            'Developed and shipped production features using Next.js/TypeScript and Supabase (PostgreSQL).',
            'Leveraged AI-assisted development tools (e.g., Claude) to accelerate prototyping, testing, and debugging during feature development.',
          ],
        },
        {
          title: 'Software Engineer Intern',
          product: 'ArmUI & Bin-picking',
          company: 'Megvii Technology Limited',
          location: 'Beijing, China',
          period: 'Jul 2021 - Sep 2022',
          achievements: [
            {
              project: 'ArmUI',
              items: [
                'Developed a full-stack Vue.js + Python application displaying real-time robot palletizer status and historical task data.',
                'Built data visualization features, palletizer calibration tools, and automated data/image acquisition workflows for model training.',
                "Delivered an early version showcased at CeMAT Asia 2021 as part of Megvii's Smart Warehouse Solution.",
              ],
            },
            {
              project: 'Bin-picking',
              items: [
                'Implemented a Python workstation enabling robotic arm bin-picking using eye-in-hand stereo camera with calibration and motion planning.',
                'Presented demo at MegTech Open Day 2022, attracting 300+ employees and media visitors.',
              ],
            },
          ],
        },
      ],
    },
    skills: {
      heading: 'Skills',
      categories: [
        {
          name: 'Languages',
          icon: '💻',
          skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
        },
        {
          name: 'Frontend',
          icon: '🎨',
          skills: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'HTML5', 'CSS3'],
        },
        {
          name: 'Backend',
          icon: '⚙️',
          skills: ['Django', 'Flask', 'Node.js', 'REST APIs', 'Supabase'],
        },
        {
          name: 'Database',
          icon: '🗄️',
          skills: ['PostgreSQL', 'Redis', 'MySQL'],
        },
        {
          name: 'Cloud & DevOps',
          icon: '☁️',
          skills: ['Google Cloud Platform', 'Docker', 'Git'],
        },
        {
          name: 'AI & Tools',
          icon: '🤖',
          skills: ['Claude AI', 'Codex'],
        },
      ],
    },
    projects: {
      heading: 'Projects',
      code: 'Code',
      liveDemo: 'Live Demo',
      items: [
        {
          title: 'F1-RAFTBot',
          period: 'Mar 2025 - Apr 2025',
          location: 'Sunnyvale, CA',
          description:
            'A domain-specific chatbot for Formula 1 using the RAFT (Retrieval-Augmented Fine-Tuning) framework to enhance factual accuracy and mitigate hallucinations in large language models.',
          highlights: [
            'Developed domain-specific chatbot using RAFT framework',
            'Responsible for corpus collection and model training',
            'Enhanced factual accuracy in LLM responses',
          ],
          tech: ['Python', 'LLMs', 'RAFT', 'Fine-tuning', 'NLP'],
          github: null,
          live: null,
        },
        {
          title: 'Etsy Recommendation Service',
          period: 'Sep 2024 - Dec 2024',
          location: 'Sunnyvale, CA',
          description:
            'A Python-based recommendation prototype that samples Etsy product suggestions from a cloud-stored probability distribution with optimized data access.',
          highlights: [
            'Developed recommendation prototype sampling from probability distributions',
            'Designed data management pipeline with cloud infrastructure',
            'Configured Redis and optimized database access latency',
          ],
          tech: ['Python', 'Redis', 'Cloud Infrastructure', 'Data Pipeline'],
          github: null,
          live: null,
        },
      ],
    },
    education: {
      heading: 'Education',
      gpaLabel: 'GPA',
      items: [
        {
          degree: 'Master of Science in Computer Science',
          school: 'Northeastern University',
          location: 'San Jose, California',
          period: 'Sep 2023 - May 2025',
          gpa: '3.83/4.0',
          highlights: ['Focus on AI/ML and software engineering'],
        },
        {
          degree: 'B.S. Cognitive Science + B.S. Computer Science',
          school: 'Rensselaer Polytechnic Institute',
          location: 'Troy, New York',
          period: 'Sep 2016 - May 2020',
          gpa: null,
          highlights: [],
        },
      ],
    },
    beyondCode: {
      heading: 'Beyond Code',
      intro:
        'Competitive gaming has taught me valuable skills that translate directly to software engineering: goal execution, system optimization, and high-pressure team collaboration.',
      items: [
        {
          title: 'Mythic+ Seasonal Title',
          game: 'World of Warcraft',
          stat: '2x Top 0.1%',
          region: 'US & Oceania',
          description:
            'Earned two seasonal Mythic+ titles by achieving top 0.1% rating in the region across multiple seasons, demonstrating consistent high-level dungeon performance.',
          skills: [
            {
              kind: 'target',
              label: 'Goal Execution',
              description: 'Season-long strategic planning',
            },
            {
              kind: 'trend',
              label: 'Optimization',
              description: 'Data-driven performance tuning',
            },
            {
              kind: 'users',
              label: 'Team Synergy',
              description: 'Coordinated 5-player execution',
            },
          ],
        },
        {
          title: 'Cutting Edge Raider',
          game: 'World of Warcraft',
          stat: '2 Tiers',
          region: 'Limited Schedule',
          description:
            'Cleared mythic raid content at the highest difficulty while maintaining an efficient raid schedule, demonstrating time management and rapid skill acquisition.',
          skills: [
            {
              kind: 'clock',
              label: 'Efficiency',
              description: 'Achieved with minimal raid hours',
            },
            {
              kind: 'users',
              label: 'Collaboration',
              description: '20-person coordinated encounters',
            },
            {
              kind: 'trend',
              label: 'Adaptability',
              description: 'Quick strategy iteration',
            },
          ],
        },
      ],
    },
  },
  zh: {
    meta: {
      title: '王子霆 | 软件工程师',
      description: '王子霆 — 专注于 AI 驱动应用与全栈开发的软件工程师。',
    },
    nav: {
      home: '首页',
      experience: '工作经历',
      skills: '技能',
      projects: '项目',
      education: '教育经历',
      beyondCode: '编程之外',
    },
    controls: {
      menu: '打开菜单',
      closeMenu: '关闭菜单',
      languageLabel: '语言',
      switchToEnglish: 'Switch to English',
      switchToChinese: '切换到中文',
    },
    intro: {
      name: '王子霆',
      role: '软件工程师',
      location: '中国·北京',
      summary: '专注于 AI 驱动应用、全栈开发和智能系统构建的软件工程师。',
    },
    experience: {
      heading: '工作经历',
      achievementsHeading: '关键成果',
      items: [
        {
          title: '软件开发工程师',
          product: 'Makeform.ai（AI 表单构建平台）',
          company: 'Louerable Inc.',
          location: '美国·加州',
          period: '2025.10 - 至今',
          achievements: [
            '参与开发一款 AI 驱动的表单构建平台，用于在线表单的创建与管理。',
            '基于 Next.js（TypeScript）+ Supabase（PostgreSQL）开发并上线生产级功能。',
            '利用 AI 辅助开发工具（如 Claude）提升原型开发、测试与调试效率。',
          ],
        },
        {
          title: '软件开发工程师实习生',
          product: 'ArmUI 与 Bin-picking 项目',
          company: '旷视科技',
          location: '中国·北京',
          period: '2021.07 - 2022.09',
          achievements: [
            {
              project: 'ArmUI',
              items: [
                '开发基于 Vue.js + Python 的全栈系统，实现机器人码垛状态的实时监控与历史任务数据展示。',
                '构建数据可视化模块、码垛校准工具以及自动化数据/图像采集流程，用于模型训练。',
                '项目早期版本在 CeMAT Asia 2021 上作为智能仓储解决方案进行推出。',
              ],
            },
            {
              project: 'Bin-picking',
              items: [
                '开发基于 Python 的工业工作站，实现机械臂通过手眼一体双目相机完成抓取任务。',
                '负责双目相机标定、手眼标定、运动规划及碰撞检测，确保系统稳定运行。',
                '项目在 2022 年旷视科技“技术开放日”推出。',
              ],
            },
          ],
        },
      ],
    },
    skills: {
      heading: '技能',
      categories: [
        {
          name: '编程语言',
          icon: '💻',
          skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
        },
        {
          name: '前端',
          icon: '🎨',
          skills: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'HTML5', 'CSS3'],
        },
        {
          name: '后端',
          icon: '⚙️',
          skills: ['Django', 'Flask', 'Node.js', 'REST APIs', 'Supabase'],
        },
        {
          name: '数据库',
          icon: '🗄️',
          skills: ['PostgreSQL', 'Redis', 'MySQL'],
        },
        {
          name: '云与 DevOps',
          icon: '☁️',
          skills: ['Google Cloud Platform', 'Docker', 'Git'],
        },
        {
          name: 'AI 与工具',
          icon: '🤖',
          skills: ['Claude AI', 'Codex'],
        },
      ],
    },
    projects: {
      heading: '项目',
      code: '代码',
      liveDemo: '在线演示',
      items: [
        {
          title: 'F1-RAFTBot',
          period: '2025年3月 - 2025年4月',
          location: '加州桑尼维尔',
          description:
            '面向 Formula 1 领域的聊天机器人，使用 RAFT（检索增强微调）框架提升事实准确性，并减少大语言模型幻觉。',
          highlights: [
            '使用 RAFT 框架开发领域专用聊天机器人',
            '负责语料收集与模型训练',
            '提升大语言模型回答的事实准确性',
          ],
          tech: ['Python', 'LLMs', 'RAFT', 'Fine-tuning', 'NLP'],
          github: null,
          live: null,
        },
        {
          title: 'Etsy Recommendation Service',
          period: '2024年9月 - 2024年12月',
          location: '加州桑尼维尔',
          description:
            '基于 Python 的推荐原型，可从云端概率分布中采样 Etsy 商品推荐，并优化数据访问效率。',
          highlights: [
            '开发从概率分布中采样的推荐原型',
            '设计基于云基础设施的数据管理流程',
            '配置 Redis 并优化数据库访问延迟',
          ],
          tech: ['Python', 'Redis', 'Cloud Infrastructure', 'Data Pipeline'],
          github: null,
          live: null,
        },
      ],
    },
    education: {
      heading: '教育经历',
      gpaLabel: 'GPA',
      items: [
        {
          degree: '计算机科学硕士',
          school: 'Northeastern University',
          location: '加州圣何塞',
          period: '2023年9月 - 2025年5月',
          gpa: '3.83/4.0',
          highlights: ['方向侧重 AI/ML 与软件工程'],
        },
        {
          degree: '认知科学理学士 + 计算机科学理学士',
          school: 'Rensselaer Polytechnic Institute',
          location: '纽约州特洛伊',
          period: '2016年9月 - 2020年5月',
          gpa: null,
          highlights: [],
        },
      ],
    },
    beyondCode: {
      heading: '编程之外',
      intro:
        '高强度 PVE 竞赛长期训练出的目标拆解、路线规划、复盘优化和团队沟通能力，同样适用于复杂软件系统的交付。',
      items: [
        {
          title: '史诗钥石大秘境赛季称号',
          game: '魔兽世界',
          stat: '2x 地区前 0.1%',
          region: '美服与大洋洲',
          description:
            '两次在史诗钥石大秘境赛季结算时进入地区前 0.1%，获得赛季称号；长期围绕路线、配装、职业分工和限时节奏做复盘优化。',
          skills: [
            {
              kind: 'target',
              label: '目标拆解',
              description: '围绕赛季分数线制定阶段计划',
            },
            {
              kind: 'trend',
              label: '复盘优化',
              description: '基于日志和路线持续调优',
            },
            {
              kind: 'users',
              label: '五人协作',
              description: '稳定执行分工和限时节奏',
            },
          ],
        },
        {
          title: '千钧一发（Cutting Edge）',
          game: '魔兽世界',
          stat: '2 个团本版本',
          region: '有限开荒时间',
          description:
            '在当前版本内击败史诗难度最终首领，两次获得“千钧一发”光辉事迹；在有限开荒时间内完成机制学习、职责配合和战术迭代。',
          skills: [
            {
              kind: 'clock',
              label: '时间管理',
              description: '在有限团队日程内推进进度',
            },
            {
              kind: 'users',
              label: '团队配合',
              description: '20人团队机制执行与沟通',
            },
            {
              kind: 'trend',
              label: '快速适应',
              description: '根据失败原因快速调整策略',
            },
          ],
        },
      ],
    },
  },
} satisfies Record<Language, Translation>;

function normalizeLanguage(value: string | null | undefined): Language {
  return value === 'zh' ? 'zh' : 'en';
}

function readStoredLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  return normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
}

function applyDocumentLanguage(language: Language) {
  if (typeof document === 'undefined') {
    return;
  }

  const translation = translations[language];
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.dataset.language = language;
  document.title = translation.meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', translation.meta.description);
  }
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  useEffect(() => {
    applyDocumentLanguage(language);
  }, [language]);

  useEffect(() => {
    const handleLanguageChange = (event: Event) => {
      const nextLanguage = normalizeLanguage(
        (event as CustomEvent<{ language?: Language }>).detail?.language,
      );
      setLanguageState(nextLanguage);
    };

    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
    return () => {
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
    };
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    const normalizedLanguage = normalizeLanguage(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, normalizedLanguage);
    setLanguageState(normalizedLanguage);
    window.dispatchEvent(
      new CustomEvent(LANGUAGE_CHANGE_EVENT, {
        detail: { language: normalizedLanguage },
      }),
    );
  };

  return {
    language,
    setLanguage,
    t: translations[language],
  };
}
