export const navItems = [
  { href: "/", label: "Homepage" },
  { href: "/publication/", label: "Publications" },
  { href: "/CV/", label: "CV" },
  { href: "/student/", label: "Students" },
  { href: "/life/", label: "Life" },
];

export const profile = {
  name: "Shaolun RUAN (阮劭伦)",
  bio: "Data Analysis and Visualization Lab",
  description: "Postdoctoral Researcher at the University of Konstanz, working in Data Visualization and Human-Computer Interaction.",
  avatar: "/assets/images/IMG_8212.JPG",
  email: "slruan.2021@phdcs.smu.edu.sg",
  location: "Germany 🇪🇺",
  links: [
    {
      href: "mailto:slruan.2021@phdcs.smu.edu.sg",
      html: '<i class="fas fa-fw fa-envelope" aria-hidden="true"></i> slruan.2021@phdcs.smu.edu.sg',
    },
    {
      html: '<i class="fa fa-fw fa-map-marker" aria-hidden="true"></i> Germany 🇪🇺',
    },
    {
      href: "https://github.com/shaolunruan",
      html: '<i class="fab fa-fw fa-github" aria-hidden="true"></i> Github',
    },
    {
      href: "https://orcid.org/0000-0002-6163-9786",
      html: '<i class="fa-brands fa-orcid"></i> ORCID',
    },
    {
      href: "https://www.linkedin.com/in/shaolunruan-942857252",
      html: '<img width="70" src="/assets/photo-gallery/LinkedIn_Logo_2013.svg" aria-hidden="true" alt="LinkedIn">',
    },
  ],
};

export const footer = {
  text: "Shaolun Ruan's Personal Website @All Rights Reserved.",
  counterScript:
    "https://counter1.optistats.ovh/private/counter.js?c=wnll7l6jujfdrx9cdjftjy4buqjlmbf3&down=async",
  counterImage:
    "https://counter1.optistats.ovh/private/freecounterstat.php?c=wnll7l6jujfdrx9cdjftjy4buqjlmbf3",
};

export const siteTranslations = {
  en: {
    navItems,
    profileBio: profile.bio,
    profileDescription: profile.description,
    locationHtml: '<i class="fa fa-fw fa-map-marker" aria-hidden="true"></i> Germany 🇪🇺',
    footerText: footer.text,
    languageLabel: "中文",
    languageAriaLabel: "切换到中文",
  },
  zh: {
    navItems: [
      { href: "/", label: "首页" },
      { href: "/publication/", label: "学术论文" },
      { href: "/CV/", label: "简历" },
      { href: "/student/", label: "学生" },
      { href: "/life/", label: "生活" },
    ],
    profileBio: "数据分析与可视化实验室",
    profileDescription: "德国康斯坦茨大学博士后研究员，研究方向为数据可视化与人机交互。",
    locationHtml: '<i class="fa fa-fw fa-map-marker" aria-hidden="true"></i> 德国 🇪🇺',
    footerText: "阮劭伦个人网站 · 保留所有权利。",
    languageLabel: "EN",
    languageAriaLabel: "Switch to English",
  },
};
