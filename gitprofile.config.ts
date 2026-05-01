// gitprofile.config.ts

const CONFIG = {
  scratch: {
    username: 'tym_isaac', //TODO: Your Scratch username. (Required)
    limit: 8, // How many projects to display; maximum 20
    sortBy: 'date', // date | views | remixes
    corsProxy: 'https://scratchapicors-8nbi5t6td-theyoungmaker.vercel.app/', //TODO: Enter your CORS Proxy here
  },
  github: {
    username: 'isaac69892', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/gitprofile',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Co-Curricular Activities & Achievements',
      // To hide the `External Projects` section, keep it empty.
  projects: [
        {
          title: 'Academic & Leadership',
          description: `
              Edusave Awards
              - Edusave Certificate of Academic Achievement 2024
              - Edusave Certificate of Academic Achievement 2023
              - CCC - CDC Education Merit Award 2023

               Leadership Assignments
              - Senior Executive Committee (ExCo) Prefect 2026 (Primary 6)
              - ExCo Prefect 2025 (Primary 5) 
              - Produced video to explain roles and responsiblities of prefects, showcased during the Prefect Investiture Ceremony 2026
              - Oragnised Teacher's Day Concert 2025 - Planning and execution of event, including coordinating with teachers, students, and vendors to ensure a successful celebration
              - Mentored new ExCo Prefects in their duties and responsibilities, fostering leadership skills and teamwork
              - Mentored incoming Primary 4 prefects in their duties and responsibilities, fostering leadership skills and teamwork

            `,
          imageUrl: 'https://i.ibb.co/WWCg8c83/5d4f8688-f463-4a4a-8a0d-39128de4c055.png',
          link: 'https://drive.google.com/drive/u/8/folders/1tHj9k8zFhtxBVSEPkRz3gtM8GvWY5TXJ',
        },
        {
          title: 'Science and Mathematics Achievements',
          description: `- SJI 18th Matheylmpics (Singapore Primary Schools) (2025)
                        - Certificate of Participation Singapore Primary Science Olympiad (2025)
                        - Certificate of Award for Class 2 for Mental Arithmetic test in 82nd International Abacus & Mental Arithmetic Competition and Mathematics UnionTest (2025)
                        - Certificate of Award for Class 5 for Abacus test in 82nd International Abacus & Mental Arithmetic Competition and Mathematics UnionTest (2025)
                        - Certificate of Award for Class 6 for Abacus test in 80th International Abacus & Mental Arithmetic Competition and Mathematics UnionTest (2024)
                        - Certificate of Award for Class 3 for Mental Arithmetic in 80th International Abacus & Mental Arithmetic Competition and Mathematics UnionTest (2024)
                        - Certificate of Award for Class 4 for Mental Arithmetic in 78th International Abacus & Mental Arithmetic Competition and Mathematics UnionTest (2023)
                        - Certificate of Award 76th International Abacus & Mental Arithmetic Competition and Mathematics UnionTest (2022)
                       `,
          imageUrl:
            'https://i.ibb.co/XrMQF0Rq/5a478229-e3c6-421d-afe4-c381be1063ba.png',
            link: 'https://drive.google.com/drive/u/8/folders/1tHj9k8zFhtxBVSEPkRz3gtM8GvWY5TXJ',
        },
        {
          title: ' Coding and Robotics',
          description: `First Lego League (2026) 
                         - Represented The Young Maker in First Lego League Competition

                        National Robotics Challenge (NRC) (2025)
                        - Represented The Young Maker in National Robotics Challenge Open Category
                        
                       Coding Olympics Singapore Science Centre(2025)
                        - Represented The Young Maker in Coding Olympics 2025

                       Coding Olympics Singapore Science Centre (2024)
                        - Represented The Young Maker in Coding Olympics 2024`,
          imageUrl:
            'https://i.ibb.co/RTZG7tg9/1bc6dcb8-a577-46db-a6cd-2fae42bb4b78.png',
          link: 'https://drive.google.com/drive/u/8/folders/1-VsbvzqDINyM6KJN2FdS_ILzET_F5t9c',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of The Isaac Poon Zheng Hao',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    facebook: '',
    instagram: '',
    tiktok: '',
    email: '',
    website: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    phone: '',
  },
  resume: {
    fileUrl: 'https://drive.google.com/drive/u/8/folders/1Jkssn6lSAiKId5itLYN8WuV3NCbWM6BN', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Scratch',
    'Microbit',
    'JavaScript',
    'Design Thinking',
    'Python',
    'Git',
    'CSS',
    'MakeCode',
    'ScratchJr',
    'Hopscotch',
    'Robotics - LEGO Spike Prime',
    'Robotics - LEGO WeDo 2.0',
    'Typescript',
    'HTML, CSS '

  ],
  experiences: [
    {
    },
  ],
  certifications: [
      {
      name: 'National Robotics Competition Open Category Primary',
      body: 'National Robotics Competition by Science Center Singapore',
      year: '2025',
      link: 'https://drive.google.com/file/d/1WBKSH4Z0TllWd2DpJJSk3dU33VYl_9qq/view?usp=drive_link',
    },
      {
      name: 'Coding Olympics 2025',
      body: 'Science Centre Board Singapore',
      year: '2025',
      link: 'https://drive.google.com/file/d/1AHKrZnUsTPJDnbYd4tDiFNAGXd45ICtC/view?usp=drive_link',
    },
      {
      name: 'Practical Python',
      body: 'The Young Maker',
      year: '2025',
      link: 'https://drive.google.com/file/d/1ro6DinZewyqpLFFX20WIV2x-AEBSFPMJ/view?usp=drive_link',
    },
    {
      name: 'Coding Olympics 2024',
      body: 'Science Centre Board Singapore',
      year: '2024',
      link: 'https://drive.google.com/file/d/1Te40mAvlfp23kHz0RE42_kRCbaAe3Ie5/view?usp=drive_link',
    },
    {
      name: 'Python Advanced',
      body: 'The Young Maker',
      year: '2024',
      link: 'https://drive.google.com/file/d/14XiDjy3ZdhQGQgcGlt-9q3BzNJtJnCxi/view?usp=drive_link',
    },
    {
      name: 'Python Intermediate',
      body: 'The Young Maker',
      year: '2024',
      link: 'https://drive.google.com/file/d/1xPj4yYGNAheyjwuahD8m6wxLr7WiKHuI/view?usp=drive_link',
    },
  
  ],
  educations: [
    {
      institution: 'St Joseph Institution Junior',
      degree: 'Primary School',
      from: '2021',
      to: '2026',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'sunset',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
  class="text-primary" href="https://github.com/arifszn/gitprofile"
  target="_blank"
  rel="noreferrer"
>GitProfile</a> & <div class="flex items-center"><img src="https://i.ibb.co/L10rd94/TYMLogo-Background.png" width="20" height="20" alt="TYMLogo-Background" border="0" /> <a class="text-primary" href="https://theyoungmaker.com/" target="_blank" rel="noreferrer">The Young Maker </a></div>`,

  enablePWA: true,
};

export default CONFIG;
