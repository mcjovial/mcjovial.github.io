// gitprofile.config.js

const config = {
  github: {
    username: 'mcjovial', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mcjovial',
    twitter: 'mcjovial1',
    facebook: 'mcjovial',
    instagram: 'mcjovial',
    dribbble: '',
    behance: '',
    medium: 'mcjovial',
    dev: 'mcjovial',
    stackoverflow: '', // format: userid/username
    website: 'https://mcjovial.dev',
    phone: '+2349038821990',
    email: 'emmanuelelias455@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/e/2PACX-1vTinIHr8Ynjq09jab--nQRPtp1lf0Mj_SNRDi3u9gt_YRPzQ4wUpMvU2fvRUKLV8xnDrPCK15SJDvTb/pub', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Typescript',
    'GoLang',
    'React.js',
    'React-Native',
    'Node.js',
    'Nest.js',
    'PHP',
    'Laravel',
    'Java',
    'Springboot',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'K8s',
    'Gin',
    'CSS',
    'Antd',
    'Tailwind',
    'Serverless framework',
    'AWS',
    'GCP',
    'Digital Ocean',
    'i18n',
    'TypeORM',
  ],
  experiences: [
    {
      company: 'IntegerSaaS',
      position: 'Platform Engineer',
      from: 'February 2023',
      to: 'Present',
      companyLink: 'https://integersaas.com',
    },
    {
      company: 'Heartszibah',
      position: 'Lead Software Engineer',
      from: 'June 2022',
      to: 'March 2023',
      companyLink: 'https://heartszibah.com',
    },
    {
      company: 'Roar Nigeria Hub',
      position: 'Software Engineer',
      from: 'December 2019',
      to: 'August 2022',
      companyLink: 'https://roarnigeria.org/',
    },
    {
      company: 'Blaitware',
      position: 'Senior Software Engineer & DevOps',
      from: 'February 2016',
      to: 'December 2019',
      companyLink: 'https://blaitware.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Nigeria, Nsukka',
      degree: 'B.Eng Mechanical Engineering',
      from: '2016',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'FarmToDoorExpress PWA',
      description:
        'Designed and developed the "Customer frontend PWA" and "Admin, Delivery & Vendor dashboard," for a geolocation-based grocery shopping and delivery marketplace with a focus on Tanzania. It is a Mustardgreen-owned startup. >>> Typescript, ReactJs, React native, NextJs, NestJs, MongoDB, Circle CI, Digital Ocean',
      imageUrl: 'https://media.licdn.com/dms/image/C4D2DAQHvgYrO-FFjEQ/profile-treasury-image-shrink_800_800/0/1667891501268?e=1676772000&v=beta&t=YJbFR9k_BYb6MDnQd0ds1YdYoGxxeQ7CS-OD7LYhuqo',
      link: 'https://farmtodoorexpress.com/',
    },
    {
      title: 'FarmToDoorExpress mobile apps',
      description:
        'Designed and developed the "Customer & Delivery mobile apps" for a geolocation-based grocery shopping and delivery marketplace with a focus on Tanzania. It is a Mustardgreen-owned startup. >>> Typescript, ReactJs, React native, Circle CI',
      imageUrl: 'https://media.licdn.com/dms/image/C4D2DAQHvgYrO-FFjEQ/profile-treasury-image-shrink_800_800/0/1667891501268?e=1676772000&v=beta&t=YJbFR9k_BYb6MDnQd0ds1YdYoGxxeQ7CS-OD7LYhuqo',
      link: 'https://farmtodoorexpress.com/',
    },
    {
      title: 'Heartszibah Ecomerce',
      description:
        'designed and created the "Customer frontend PWA," and "Ecommerce & Fintech backend," for a rapidly expanding conglomerate LLC with a co-operate office in Port Harcourt, Nigeria, and physical and online stores dedicated to offering first-rate and world-beating product and service lines. >>> Typescript, ReactJs, NextJs, NestJs, K8s, MongoDB, Circle CI, AWS',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://hz-next-shop.vercel.app/',
    },
    {
      title: 'Heartszibah Admin',
      description:
        'Designed and developed the "Admin, & Vendor dashboard" for a rapidly expanding conglomerate LLC with a co-operate office in Port Harcourt, Nigeria, that manages the business,s e-commerce and Fintech Apps. This conglomerate has both physical and online stores dedicated to offering first-rate and world-beating product and service lines. >>> Typescript, NextJs, NestJs, K8s, MongoDB, Circle CI, AWS',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://hz-next-admin.vercel.app/',
    },
//     {
//       title: 'Heartszibah Admin',
//       description:
//         'Designed and developed the "Admin, & Vendor dashboard" for a rapidly expanding conglomerate LLC with a co-operate office in Port Harcourt, Nigeria, that manages the business,s e-commerce and Fintech Apps. This conglomerate has both physical and online stores dedicated to offering first-rate and world-beating product and service lines. >>> Typescript, NextJs, NestJs, K8s, MongoDB, Circle CI, AWS',
//       imageUrl: 'https://via.placeholder.com/250x250',
//       link: 'https://hz-next-admin.vercel.app/',
//     },
    {
      title: 'ecoMERN',
      description:
        'Beautifully Designed and developed Fullstack multivendor marketplace built for Demo but includes realistic ecommerce features. >>> Typescript, NextJs, NestJs, K8s, MongoDB, Github actions, AWS',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://ecomern.vercel.app/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'mcjovial', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/mcjovial.github.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
