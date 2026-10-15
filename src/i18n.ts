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
          title: 'Software Development Engineer',
          product: 'Makeform.ai',
          company: 'Louerable',
          location: 'Sunnyvale, California',
          period: 'Oct 2025 - Present',
          achievements: [
            'Contributed to the MCP server, extending tools for form creation, editing, publishing, and data queries so AI assistants can operate the platform directly.',
            'Owned form embedding, enabling users to integrate forms into their own websites, and maintained the public-facing embed SDK.',
            'Owned PDF export for submissions, faithfully reproducing every form structure, and extended it to automated email delivery.',
            'Built with Next.js (TypeScript) + Supabase, using Claude Code / Codex as the primary development workflow while owning solution design, code review, and test coverage.',
          ],
        },
        {
          title: 'Software Engineer Intern',
          product: 'ArmUI & Bin-picking',
          company: 'Megvii',
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
                'Implemented a Python workstation enabling robotic arm bin-picking using an eye-in-hand stereo camera.',
                'Handled stereo camera calibration, hand-eye calibration, motion planning, and collision detection to keep the system running reliably.',
                'Showcased at Megvii Technology Open Day 2022.',
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
          skills: ['Claude Code', 'Codex', 'MCP'],
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
          company: 'Louerable',
          location: '美国·硅谷',
          period: '2025.10 - 至今',
          achievements: [
            '参与开发 MCP 服务，扩展表单创建、编辑、发布及数据查询工具，让 AI 助手能够直接操作平台功能。',
            '独立负责表单嵌入能力，支持用户将表单集成至自有网站，并维护对外投放的嵌入 SDK。',
            '独立负责提交数据的 PDF 导出能力，覆盖各类表单结构的完整还原，并扩展至邮件自动投递。',
            '基于 Next.js（TypeScript）+ Supabase 开发，以 Claude Code / Codex 为主要开发方式，负责方案设计、代码评审与测试覆盖。',
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
          skills: ['Claude Code', 'Codex', 'MCP'],
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
