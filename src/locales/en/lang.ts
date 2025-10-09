const lang = {
  sections: {
    home: 'Home',
    about: 'About me',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  },
  navigation: {
    brandInitials: 'CR',
    brandTooltip: 'Cristian Camilo',
    languageTooltip: 'Language',
    themeTooltip: 'Theme',
  },
  hero: {
    title: 'Cristian Camilo Rojas Corredor\nFull Stack Developer',
    subtitle:
      '22-year-old Full Stack Developer focused on modern, scalable, and secure applications for logistics, business intelligence, and process automation.',
    badge: 'Full Stack Developer',
    ctaProjects: 'View projects',
    ctaContact: 'Book a call',
    resultsTag: 'Outcomes',
    resultsDescription:
      'Scalable architectures, CI/CD pipelines, and immersive experiences that streamline operations and turn users into loyal customers.',
    satisfactionLabel: 'Satisfaction',
    stats: [
      { value: '+25', label: 'End-to-end projects and products delivered' },
      { value: '+15', label: 'Technologies applied across frontend, backend, and DevOps' },
      { value: '4.4/5', label: 'GPA with a strong focus on technical quality' },
    ],
  },
  about: {
    content:
      'I am a Full Stack Developer with experience designing and building modern, scalable, and secure web applications. I have contributed to digital transformation, logistics, business intelligence, and automation initiatives using technologies such as Vue.js (Quasar, Vuetify), Angular, React, Node.js, .NET, Java, and Python for data analysis, automation, and web scraping.\n\nMy experience covers:\n\n- Building responsive web interfaces optimised for user experience.\n- Delivering RESTful APIs and microservices for high-performance platforms.\n- Connecting frontends and backends to ensure visual consistency, functionality, and scalability.\n- Applying Clean Architecture and patterns like CQRS and DDD.\n- Running CI/CD workflows with GitLab, Docker, and AWS for automated deployments.\n- Strengthening quality with automated testing using Jest, JUnit, and Postman.\n- Producing technical documentation with Swagger and Confluence for efficient collaboration.\n\nI aim to contribute my full stack expertise and data-driven solutions to a global team, building high-impact projects with modern technologies.',
    sidebar: {
      tag: 'Team impact',
      title: 'Digital experiences that accelerate business',
      description:
        'I lead solutions where UX, clean architecture, and automation meet. I partner with agile squads to build products that tackle real challenges in logistics, retail, and finance.',
      differentialTitle: 'Differential',
      differentialDescription:
        'Clear translation of business needs into prioritised technical roadmaps, ensuring consistent and measurable delivery.',
      chips: ['Clean architecture', 'Testing suites', 'Observability', 'Automation'],
    },
  },
  experience: {
    intro:
      'Roles where I drove digital transformation, automation, and analytics by connecting frontend, backend, and DevOps.',
    viewDetails: 'View details',
    modal: {
      close: 'Close',
    },
    items: [
      {
        id: 'controlt',
        title: 'ControlT – Medellín, Colombia',
        role: 'Full Stack Developer',
        period: '04/06/2024 - 30/09/2025',
        summary:
          'Optimised the CT Finance ecosystem by delivering web modules and microservices that power end-to-end logistics and financial operations.',
        details: [
          'Built and integrated frontend modules in Vue.js (Quasar, Vuetify), Angular, and React, improving performance, maintainability, and UX.',
          'Implemented microservices in .NET, NestJS, and Java using Clean Architecture and CQRS to guarantee scalability and clear separation of responsibilities.',
          'Designed optimised queries and stored procedures in PostgreSQL and SQL Server, cutting report response times by up to 30%.',
          'Set up GitLab CI/CD pipelines with Docker deployments on AWS (EC2, RDS, S3, SQS).',
          'Introduced unit and integration testing with Jest, Postman, and JUnit, reducing production incidents.',
          'Documented services and modules in Swagger and Confluence to keep frontend and backend teams aligned.',
          'Featured project: Financial Module in .NET 8 and Vue 3 (Quasar) applying CQRS and Vertical Slice, reducing freight validation times by 45%.',
          'Featured project: Service Assignment Module in Angular and .NET with event-driven architecture that lowered rework and idle time.',
          'Featured project: BI platform in Python (Pandas, Plotly) for financial and operational KPIs integrated with the ControlT ecosystem.',
          'Featured project: Visor in Java 15 for real-time GPS monitoring and Verify in React + NestJS + Python for risk and background verification.',
        ],
        links: [{ href: 'https://controlt.io/', label: 'Website' }],
      },
      {
        id: 'el-creativo-web',
        title: 'El Creativo Web – Medellín, Colombia',
        role: 'Full Stack Developer',
        period: '30/12/2022 - 29/05/2024',
        summary:
          'Led full stack solutions for retail, education, and services, prioritising scalability, automation, and user experience.',
        details: [
          'Built reusable components in Angular, Vue, and React that accelerated delivery and lowered maintenance costs.',
          'Developed RESTful APIs with NestJS, Laravel, and Java, ensuring consistency between frontend and backend.',
          'Implemented automations with n8n and AI-driven virtual assistants, reducing manual work and elevating customer service.',
          'Designed optimised relational databases in MySQL and SQL Server and orchestrated deployments with Docker and GitLab CI/CD.',
          'Featured project: Mitiendaenlinea.com.co with Laravel and Angular to digitise business cards via QR codes and real-time metrics.',
          'Featured project: AI assistants and automated workflows with n8n integrating internal systems, Gmail, Sheets, and CRMs, cutting administrative effort by over 50%.',
        ],
        links: [],
      },
      {
        id: 'disenos-modas',
        title: 'Diseños y Modas Ca y Ka – Villavicencio, Colombia',
        role: 'Full Stack Developer',
        period: '30/03/2021 - 13/07/2021',
        summary:
          'Designed and delivered an end-to-end inventory management system that centralised operations and strengthened financial control.',
        details: [
          'Built modules for accounting control, sales tracking, vendor management, and automated financial reports.',
          'Gathered requirements with the administrative team and translated them into high-impact features for daily operations.',
          'Developed internal alerts and validations to prevent data inconsistencies and speed up decision-making.',
          'Implemented product turnover and operational cost analysis to reduce losses and optimise purchasing.',
          'Automated recurring accounting tasks, cutting report generation time by more than 50%.',
          'Produced user manuals and functional documentation to onboard operational and technical staff.',
          'The system laid the foundation for digitising administrative processes and unifying operational information.',
        ],
        links: [],
      },
    ],
  },
  projectsSection: {
    tag: 'Portfolio',
    heading: 'Products with measurable impact',
    description:
      'Focused selection covering intelligent assistants, agribusiness platforms, and logistics ecosystems. Each project showcases clean architecture, real-time integrations, and production-ready deployments.',
    recognitionTag: 'Recognition',
    recognitionValue: 'Meritorious Project 2024',
    metrics: [
      { value: '3', label: 'Verticals' },
      { value: '100%', label: 'In-house architecture' },
    ],
  },
  projects: {
    cardCta: 'View project',
    items: [
      {
        id: 'kinetra',
        title: 'Kinetra-Route',
        description:
          'Modular urban logistics ecosystem with .NET 8 microservices, RabbitMQ and Redis messaging, microfrontends in Angular, React, Vue, and Svelte powered by Module Federation, plus SignalR for live monitoring.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
        tags: [
          '.NET 8',
          'RabbitMQ',
          'Redis',
          'SignalR',
          'Module Federation',
          'Docker Compose',
          'GitHub Actions',
          'Nginx',
        ],
        links: [{ href: 'https://github.com/MrSancks/front-hackaton', label: 'Repository' }],
      },
      {
        id: 'hayp',
        title: 'HAYP Virtual Advisor',
        period: '01/06/2023 – 15/06/2024',
        description:
          'Virtual advisor for PC assembly recognised as 2024 Meritorious Project. I delivered the backend with intelligent recommendation logic, technical data scraping, and REST endpoints consumed by real-time assistants.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
        highlight: 'Meritorious Project 2024',
        tags: ['NestJS', 'Node.js', 'REST APIs', 'AI integrations', 'Data scraping', 'PostgreSQL'],
        links: [
          { href: 'https://github.com/MrSancks/Back_HAYP', label: 'Backend' },
          { href: 'https://github.com/MrSancks/Front_HAYP', label: 'Frontend' },
          { href: 'https://github.com/MrSancks/Scrap_HAYP', label: 'Scraper' },
        ],
      },
      {
        id: 'metagro',
        title: 'MetAgro',
        description:
          'Individual frontend prototype linking farmers and enterprises through role-based dashboards, interactive maps, and real-time negotiation flows that foster fair supply chains.',
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80',
        tags: ['React 18', 'React Router 7', 'Tailwind CSS', 'Context API', 'JWT', 'Axios', 'react-markdown'],
        links: [
          { href: 'https://front-hackaton-tan.vercel.app/', label: 'Demo' },
          { href: 'https://github.com/MrSancks/front-hackaton', label: 'Repository' },
        ],
      },
    ],
  },
  skills: {
    intro:
      'Skillset applied across flagship projects: clean architectures, real-time integrations, and production-ready delivery.',
    counterSuffix: 'skills',
    groups: [
      {
        label: 'Core stack',
        items: ['TypeScript', 'Express', 'React 18', 'React Router 7', 'Tailwind CSS', '.NET 8', 'Module Federation'],
      },
      {
        label: 'Integrations & data',
        items: ['RabbitMQ', 'Redis', 'SignalR', 'REST APIs', 'Data scraping', 'AI integrations'],
      },
      {
        label: 'Advanced frontend',
        items: ['Context API', 'JWT Auth', 'Real-time chat', 'React Markdown', 'Remark GFM'],
      },
      {
        label: 'DevOps & delivery',
        items: ['Docker', 'GitHub Actions', 'Railway', 'Render', 'Nginx', 'Docker Compose'],
      },
    ],
  },
  education: {
    intro:
      'Professional training that backs daily practice: strong foundations in software engineering, architecture, agile methodologies, and analytics.',
    focus: [
      { category: 'Design', topic: 'Clean Architecture' },
      { category: 'Leadership', topic: 'Agile methodologies' },
    ],
    degree: {
      label: 'Degree',
      name: 'Software Development Technologist',
      institution: 'Corporación Universitaria Minuto de Dios — Villavicencio, Colombia',
      period: 'Jun 2021 — May 2024 — GPA 4.4/5',
      highlights: [
        '• Built backend services, mobile apps, and web experiences with a scalability mindset.',
        '• Embedded automation testing, DevOps, and cloud deployment within the curriculum.',
        '• Led agile projects and presented at academic innovation fairs.',
      ],
    },
  },
  contact: {
    intro:
      'Tell me about your challenge: automation, architecture migrations, new features, or full product launches. I reply in under 24 hours.',
    availabilityLabel: 'Availability',
    availabilityValue: 'Consulting and end-to-end development',
    emailLabel: 'camilo.roajs9723@gmail.com',
    sessionNote: 'Book a 30-minute strategy session.',
  },
  contactForm: {
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Message',
    submit: 'Send',
    success: 'Message sent!',
  },
  themeToggle: {
    ariaLabel: 'Switch theme',
  },
};

export default lang;
