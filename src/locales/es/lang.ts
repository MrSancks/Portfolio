const lang = {
  sections: {
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Habilidades',
    education: 'Educación',
    contact: 'Contacto',
  },
  navigation: {
    brandInitials: 'CR',
    brandTooltip: 'Cristian Camilo',
    languageTooltip: 'Idioma',
    themeTooltip: 'Tema',
  },
  hero: {
    title: 'Cristian Camilo Rojas Corredor\nDesarrollador Full Stack',
    subtitle:
      'Desarrollador Full Stack de 22 años enfocado en aplicaciones modernas, escalables y seguras para logística, inteligencia de negocio y automatización de procesos.',
    badge: 'Desarrollador Full Stack',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Agendar reunión',
    resultsTag: 'Resultados',
    resultsDescription:
      'Arquitecturas escalables, pipelines CI/CD y experiencias inmersivas que optimizan operaciones y convierten usuarios en clientes fieles.',
    satisfactionLabel: 'Satisfacción',
    stats: [
      { value: '+25', label: 'Proyectos y productos entregados end-to-end' },
      { value: '+15', label: 'Tecnologías aplicadas entre frontend, backend y DevOps' },
      { value: '4.4/5', label: 'Promedio académico y enfoque en calidad técnica' },
    ],
  },
  about: {
    content:
      'Soy un Desarrollador Full Stack con experiencia en el diseño y desarrollo de aplicaciones web modernas, escalables y seguras. He participado en proyectos de transformación digital, logística, inteligencia de negocio y automatización de procesos, utilizando tecnologías como Vue.js (Quasar, Vuetify), Angular, React, Node.js, .NET, Java y en menor medida Python para tareas de análisis de datos, automatización y web scraping.\n\nMi experiencia incluye:\n\n- Desarrollo de interfaces web responsivas y optimizadas para la experiencia de usuario.\n- Construcción de APIs RESTful y microservicios para plataformas de alto rendimiento.\n- Integración de frontend y backend garantizando consistencia visual, funcionalidad y escalabilidad.\n- Implementación de arquitecturas limpias (Clean Architecture) y patrones de diseño (CQRS, DDD).\n- CI/CD con GitLab, Docker y AWS para despliegues automatizados.\n- Testing automatizado con Jest, JUnit y Postman.\n- Documentación técnica con Swagger y Confluence para una colaboración eficiente entre equipos.\n\nBusco aportar mi conocimiento en desarrollo full stack y soluciones basadas en datos a un equipo global, participando en proyectos de alto impacto con tecnologías modernas.',
    sidebar: {
      tag: 'Impacto en equipos',
      title: 'Experiencias digitales que aceleran negocios',
      description:
        'Lidero soluciones donde convergen UX, arquitectura limpia y automatización. Trabajo con squads ágiles para crear productos que resuelven retos reales en logística, retail y finanzas.',
      differentialTitle: 'Diferencial',
      differentialDescription:
        'Traducción clara de necesidades de negocio a roadmaps técnicos priorizados, asegurando entregas constantes y medibles.',
      chips: ['Arquitectura limpia', 'Bancos de pruebas', 'Observabilidad', 'Automatización'],
    },
  },
  experience: {
    intro:
      'Experiencias donde impulsé transformación digital, automatización y analítica uniendo frontend, backend y DevOps.',
    viewDetails: 'Ver detalles',
    modal: {
      close: 'Cerrar',
    },
    items: [
      {
        id: 'controlt',
        title: 'ControlT – Medellín, Colombia',
        role: 'Desarrollador Full Stack',
        period: '04/06/2024 - 30/09/2025',
        summary:
          'Optimizé el ecosistema CT Finance construyendo módulos web y microservicios que sostienen operaciones logísticas y financieras end-to-end.',
        details: [
          'Desarrollé e integré módulos frontend en Vue.js (Quasar, Vuetify), Angular y React, elevando rendimiento, mantenibilidad y experiencia de usuario.',
          'Implementé microservicios en .NET, NestJS y Java con principios de Clean Architecture y CQRS para asegurar escalabilidad y separación de responsabilidades.',
          'Diseñé consultas y procedimientos optimizados en PostgreSQL y SQL Server, reduciendo hasta 30% los tiempos de respuesta de reportes.',
          'Configuré pipelines CI/CD en GitLab con despliegues contenedorizados en AWS (EC2, RDS, S3, SQS).',
          'Introduje pruebas unitarias e integraciones con Jest, Postman y JUnit, disminuyendo errores en producción.',
          'Documenté servicios y módulos en Swagger y Confluence, estandarizando la comunicación entre equipos.',
          'Proyecto destacado: Módulo Financiero en .NET 8 y Vue 3 (Quasar) aplicando CQRS y Vertical Slice que redujo 45% la validación de fletes.',
          'Proyecto destacado: Módulo de Asignación de Servicios en Angular y .NET bajo arquitectura orientada a eventos que minimizó reprocesos y tiempos muertos.',
          'Proyecto destacado: Plataforma BI en Python (Pandas, Plotly) para visualizar KPIs financieros y operativos integrada al ecosistema ControlT.',
          'Proyecto destacado: Visor en Java 15 para monitoreo GPS y Verify en React + NestJS + Python para verificación de antecedentes y riesgos.',
        ],
        links: [{ href: 'https://controlt.io/', label: 'Sitio web' }],
      },
      {
        id: 'el-creativo-web',
        title: 'El Creativo Web – Medellín, Colombia',
        role: 'Desarrollador Full Stack',
        period: '30/12/2022 - 29/05/2024',
        summary:
          'Lideré soluciones web para retail, educación y servicios priorizando escalabilidad, automatización y experiencias centradas en el usuario.',
        details: [
          'Construí componentes reutilizables en Angular, Vue y React que aceleraron entregas y redujeron costos de mantenimiento.',
          'Desarrollé APIs RESTful con NestJS, Laravel y Java, garantizando consistencia entre frontend y backend.',
          'Implementé automatizaciones con n8n y asistentes virtuales con IA, reduciendo tareas manuales y mejorando la atención al cliente.',
          'Diseñé bases de datos relacionales optimizadas en MySQL y SQL Server y gestioné despliegues con Docker y GitLab CI/CD.',
          'Proyecto destacado: Mitiendaenlinea.com.co con Laravel y Angular para digitalizar tarjetas de presentación mediante códigos QR y métricas en tiempo real.',
          'Proyecto destacado: Asistentes IA y flujos automatizados con n8n integrando sistemas internos, Gmail, Sheets y CRMs, disminuyendo más del 50% de labores administrativas.',
        ],
        links: [],
      },
      {
        id: 'disenos-modas',
        title: 'Diseños y Modas Ca y Ka – Villavicencio, Colombia',
        role: 'Desarrollador Full Stack',
        period: '30/03/2021 - 13/07/2021',
        summary:
          'Diseñé e implementé un sistema integral de gestión de inventarios que centralizó operaciones y mejoró el control financiero.',
        details: [
          'Construí módulos para control contable, seguimiento de ventas, gestión de proveedores y reportes financieros automáticos.',
          'Participé en el levantamiento de requerimientos con el área administrativa y los traduje en funcionalidades de alto impacto.',
          'Desarrollé alertas y validaciones internas para prevenir inconsistencias en el registro de datos y agilizar decisiones.',
          'Implementé análisis de rotación de productos y costos operativos para reducir pérdidas y optimizar compras.',
          'Automatizé tareas contables recurrentes, disminuyendo más del 50% el tiempo de generación de reportes.',
          'Elaboré manuales de usuario y documentación funcional para la capacitación del personal operativo y técnico.',
          'La solución se convirtió en la base para la digitalización de procesos administrativos y la comunicación entre áreas.',
        ],
        links: [],
      },
    ],
  },
  projectsSection: {
    tag: 'Portafolio',
    heading: 'Productos con impacto comprobado',
    description:
      'Selección enfocada en asistentes inteligentes, plataformas de agronegocio y ecosistemas logísticos. Cada proyecto demuestra dominio de arquitectura limpia, integraciones en tiempo real y despliegues listos para clientes exigentes.',
    recognitionTag: 'Reconocimientos',
    recognitionValue: 'Proyecto Meritorio 2024',
    metrics: [
      { value: '3', label: 'Verticales' },
      { value: '100%', label: 'Arquitectura propia' },
    ],
  },
  projects: {
    cardCta: 'Ver proyecto',
    items: [
      {
        id: 'kinetra',
        title: 'Kinetra-Route',
        description:
          'Plataforma modular de logística urbana con microservicios en .NET 8, mensajería RabbitMQ y Redis, microfrontends en Angular, React, Vue y Svelte integrados con Module Federation y monitoreo en tiempo real con SignalR.',
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
        links: [{ href: 'https://github.com/MrSancks/front-hackaton', label: 'Repositorio' }],
      },
      {
        id: 'hayp',
        title: 'HAYP Virtual Advisor',
        period: '01/06/2023 – 15/06/2024',
        description:
          'Asistente virtual para ensamblaje de computadoras reconocido como Proyecto Meritorio 2024. Diseñé el backend con lógica de recomendación inteligente, scraping técnico y endpoints REST consumidos por asistentes en tiempo real.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
        highlight: 'Proyecto Meritorio 2024',
        tags: ['NestJS', 'Node.js', 'REST APIs', 'Integraciones IA', 'Scraping', 'PostgreSQL'],
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
          'Prototipo frontend individual que conecta agricultores y empresas mediante tableros por rol, mapas interactivos y flujos de negociación en tiempo real para cadenas de abastecimiento justas.',
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80',
        tags: ['React 18', 'React Router 7', 'Tailwind CSS', 'Context API', 'JWT', 'Axios', 'react-markdown'],
        links: [
          { href: 'https://front-hackaton-tan.vercel.app/', label: 'Demo' },
          { href: 'https://github.com/MrSancks/front-hackaton', label: 'Repositorio' },
        ],
      },
    ],
  },
  skills: {
    intro:
      'Conjunto de habilidades usado en los proyectos destacados: arquitectura limpia, integraciones en tiempo real y despliegues listos para producción.',
    counterSuffix: 'skills',
    groups: [
      {
        label: 'Stack principal',
        items: ['TypeScript', 'Express', 'React 18', 'React Router 7', 'Tailwind CSS', '.NET 8', 'Module Federation'],
      },
      {
        label: 'Integraciones y datos',
        items: ['RabbitMQ', 'Redis', 'SignalR', 'REST APIs', 'Scraping de datos', 'Integraciones IA'],
      },
      {
        label: 'Frontend avanzado',
        items: ['Context API', 'JWT Auth', 'Chat en tiempo real', 'React Markdown', 'Remark GFM'],
      },
      {
        label: 'DevOps y despliegue',
        items: ['Docker', 'GitHub Actions', 'Railway', 'Render', 'Nginx', 'Docker Compose'],
      },
    ],
  },
  education: {
    intro:
      'Formación profesional que respalda la práctica: bases sólidas en ingeniería de software, arquitectura, metodologías ágiles y analítica.',
    focus: [
      { category: 'Diseño', topic: 'Arquitectura limpia' },
      { category: 'Liderazgo', topic: 'Metodologías ágiles' },
    ],
    degree: {
      label: 'Título',
      name: 'Tecnólogo en desarrollo de software',
      institution: 'Corporación Universitaria Minuto de Dios — Villavicencio, Colombia',
      period: 'Jun 2021 — May 2024 — Promedio 4.4/5',
      highlights: [
        '• Construcción de servicios backend, apps móviles y experiencias web con enfoque en escalabilidad.',
        '• Pruebas automatizadas, DevOps y despliegue en la nube integrados al currículo.',
        '• Liderazgo de proyectos ágiles y participación en ferias de innovación académica.',
      ],
    },
  },
  contact: {
    intro:
      'Cuéntame sobre tu reto: automatización, migración de arquitecturas, nuevas features o lanzamientos completos. Respondo en menos de 24 horas.',
    availabilityLabel: 'Disponibilidad',
    availabilityValue: 'Consultorías y desarrollo end-to-end',
    emailLabel: 'camilo.roajs9723@gmail.com',
    sessionNote: 'Agenda una sesión estratégica de 30 minutos.',
  },
  contactForm: {
    namePlaceholder: 'Nombre',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Mensaje',
    submit: 'Enviar',
    success: '¡Mensaje enviado!',
  },
  themeToggle: {
    ariaLabel: 'Cambiar tema',
  },
};

export default lang;
