// Datos para Landing Page de Servicios de Desarrollo Web Freelance
import { siteConfig } from '~/utils/siteConfig';

export const freelancerData = {
  // Información Personal y Profesional
  hero: {
    name: 'VineryDev',
    title: 'Experto en Automatización y Desarrollo',
    tagline: 'Automatizo procesos que ahorran miles de horas a tu empresa',
    description:
      'Transformo tareas repetitivas en sistemas inteligentes. Especializado en RPA, integraciones API, web scraping y soluciones cloud que reducen costos operativos hasta un 70%.',
    cta: {
      primary: 'Calcular ROI de Automatización',
      secondary: 'Ver Casos de Éxito',
    },
    avatar: '/images/profile.jpg',
    stats: [
      { label: 'Horas Automatizadas', value: '100k+' },
      { label: 'Procesos Optimizados', value: '150+' },
      { label: 'ROI Promedio', value: '320%' },
      { label: 'Clientes Activos', value: '45+' },
    ],
  },

  // Servicios Ofrecidos
  services: [
    {
      id: 'automation',
      title: 'Automatización de Procesos (RPA)',
      icon: 'tabler:robot',
      description: 'Elimina tareas repetitivas y reduce errores humanos en un 95%',
      features: [
        'Automatización de data entry y reportes',
        'Bots de procesamiento de documentos',
        'Automatización de emails y notificaciones',
        'Integración entre sistemas sin API',
        'Web scraping inteligente',
      ],
      technologies: ['Python', 'Selenium', 'UiPath', 'Zapier', 'Make'],
      startingPrice: 'Desde $1,500',
      roi: 'ROI típico: 300-500% en 3 meses',
    },
    {
      id: 'api-integration',
      title: 'Integraciones y APIs',
      icon: 'tabler:api',
      description: 'Conecta todos tus sistemas y aplicaciones en un ecosistema unificado',
      features: [
        'Integración de CRM, ERP y sistemas legacy',
        'APIs REST y GraphQL personalizadas',
        'Webhooks y sincronización en tiempo real',
        'Migración de datos automatizada',
        'Middleware y orquestación de servicios',
      ],
      technologies: ['Node.js', 'Python', 'AWS Lambda', 'PostgreSQL', 'Redis'],
      startingPrice: 'Desde $2,000',
      roi: 'Reduce tiempo de operaciones en 60%',
    },
    {
      id: 'ai-solutions',
      title: 'Soluciones con IA',
      icon: 'tabler:brain',
      description: 'Potencia tu negocio con inteligencia artificial aplicada',
      features: [
        'Chatbots inteligentes con GPT',
        'Análisis predictivo de datos',
        'Procesamiento de lenguaje natural',
        'Visión por computadora',
        'Sistemas de recomendación',
      ],
      technologies: ['OpenAI API', 'LangChain', 'TensorFlow', 'Python', 'Pinecone'],
      startingPrice: 'Desde $3,000',
      roi: 'Aumenta productividad 40%',
    },
    {
      id: 'web-development',
      title: 'Desarrollo Web Avanzado',
      icon: 'tabler:code',
      description: 'Aplicaciones web ultrarrápidas y escalables',
      features: [
        'Dashboards en tiempo real',
        'Plataformas SaaS completas',
        'E-commerce con automatización',
        'Portales empresariales',
        'PWAs offline-first',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
      startingPrice: 'Desde $4,000',
      roi: 'Mejora conversión hasta 35%',
    },
  ],

  // Stack Tecnológico
  techStack: {
    frontend: [
      { name: 'React', level: 95, icon: 'tabler:brand-react' },
      { name: 'TypeScript', level: 90, icon: 'tabler:brand-typescript' },
      { name: 'Vue.js', level: 85, icon: 'tabler:brand-vue' },
      { name: 'Tailwind CSS', level: 95, icon: 'tabler:brand-tailwind' },
      { name: 'Next.js', level: 90, icon: 'tabler:brand-nextjs' },
    ],
    backend: [
      { name: 'Node.js', level: 95, icon: 'tabler:brand-nodejs' },
      { name: 'Python', level: 85, icon: 'tabler:brand-python' },
      { name: 'PostgreSQL', level: 90, icon: 'tabler:database' },
      { name: 'MongoDB', level: 85, icon: 'tabler:brand-mongodb' },
      { name: 'Docker', level: 80, icon: 'tabler:brand-docker' },
    ],
    tools: [
      { name: 'Git', level: 95, icon: 'tabler:brand-git' },
      { name: 'AWS', level: 80, icon: 'tabler:brand-aws' },
      { name: 'Vercel', level: 90, icon: 'tabler:brand-vercel' },
      { name: 'Figma', level: 75, icon: 'tabler:brand-figma' },
      { name: 'Jest', level: 85, icon: 'tabler:test-pipe' },
    ],
  },

  // Proyectos Destacados
  portfolio: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description:
        'Plataforma de comercio electrónico completa con gestión de inventario, pagos integrados y panel de administración',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      features: [
        'Carrito de compras avanzado',
        'Sistema de pagos seguro',
        'Panel de administración',
        'Análisis en tiempo real',
      ],
      link: 'https://example.com',
      github: 'https://github.com/username/project',
      client: 'TechStore Inc.',
      duration: '3 meses',
      results: {
        conversion: '+35%',
        performance: '95/100 Lighthouse',
        users: '10k+ usuarios activos',
      },
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'Web Application',
      description: 'Dashboard analítico para SaaS con visualización de datos en tiempo real y reportes automatizados',
      image: '/images/projects/dashboard.jpg',
      technologies: ['Vue.js', 'Python', 'D3.js', 'Redis'],
      features: [
        'Visualización de datos interactiva',
        'Reportes automatizados',
        'Notificaciones en tiempo real',
        'API REST documentada',
      ],
      link: 'https://example.com',
      client: 'Analytics Pro',
      duration: '4 meses',
      results: {
        efficiency: '+50% productividad',
        uptime: '99.9%',
        api_response: '<200ms promedio',
      },
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'Mobile Application',
      description: 'Aplicación bancaria móvil con autenticación biométrica y transferencias seguras',
      image: '/images/projects/banking.jpg',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
      features: ['Autenticación biométrica', 'Transferencias P2P', 'Historial de transacciones', 'Notificaciones push'],
      client: 'FinTech Solutions',
      duration: '6 meses',
      results: {
        downloads: '50k+',
        rating: '4.8/5',
        security: 'Certificación PCI DSS',
      },
    },
  ],

  // Proceso de Trabajo
  workProcess: [
    {
      step: 1,
      title: 'Consulta Inicial',
      description: 'Reunión para entender tus necesidades, objetivos y alcance del proyecto',
      icon: 'tabler:message-circle',
      duration: '1-2 días',
    },
    {
      step: 2,
      title: 'Propuesta y Planificación',
      description: 'Documento detallado con alcance, timeline y presupuesto del proyecto',
      icon: 'tabler:clipboard-list',
      duration: '2-3 días',
    },
    {
      step: 3,
      title: 'Desarrollo Iterativo',
      description: 'Construcción del proyecto con entregas parciales y feedback continuo',
      icon: 'tabler:code',
      duration: 'Variable',
    },
    {
      step: 4,
      title: 'Testing y Revisión',
      description: 'Pruebas exhaustivas y ajustes basados en tu feedback',
      icon: 'tabler:test-pipe',
      duration: '1 semana',
    },
    {
      step: 5,
      title: 'Despliegue',
      description: 'Lanzamiento en producción y configuración de hosting',
      icon: 'tabler:rocket',
      duration: '1-2 días',
    },
    {
      step: 6,
      title: 'Soporte Post-Lanzamiento',
      description: 'Mantenimiento y soporte técnico durante el primer mes',
      icon: 'tabler:lifebuoy',
      duration: '30 días',
    },
  ],

  // Testimonios
  testimonials: [
    {
      id: 1,
      name: 'María González',
      position: 'CEO',
      company: 'StartupTech',
      content:
        'Excelente trabajo en nuestra plataforma. Entregó a tiempo y superó nuestras expectativas. El código es limpio y bien documentado.',
      rating: 5,
      image: '/images/testimonials/maria.jpg',
      projectType: 'SaaS Platform',
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      position: 'CTO',
      company: 'Digital Agency',
      content:
        'Profesional y eficiente. Nos ayudó a migrar toda nuestra infraestructura a microservicios. Gran conocimiento técnico.',
      rating: 5,
      image: '/images/testimonials/carlos.jpg',
      projectType: 'Backend Architecture',
    },
    {
      id: 3,
      name: 'Ana Martínez',
      position: 'Product Manager',
      company: 'E-Commerce Corp',
      content:
        'Transformó completamente nuestra tienda online. Las ventas aumentaron un 40% después del rediseño. Altamente recomendado.',
      rating: 5,
      image: '/images/testimonials/ana.jpg',
      projectType: 'E-Commerce',
    },
  ],

  // Planes de Precios
  pricing: [
    {
      id: 'hourly',
      name: 'Por Hora',
      price: '$75-150',
      period: 'hora',
      description: 'Ideal para consultoría o proyectos pequeños',
      features: [
        'Consultoría técnica',
        'Debugging y fixes',
        'Code review',
        'Optimizaciones puntuales',
        'Soporte técnico',
      ],
      highlighted: false,
    },
    {
      id: 'project',
      name: 'Por Proyecto',
      price: 'Desde $2,000',
      period: 'proyecto',
      description: 'Precio fijo para proyectos con alcance definido',
      features: [
        'Alcance claramente definido',
        'Timeline establecido',
        'Entregas por hitos',
        'Revisiones incluidas',
        '30 días de soporte post-lanzamiento',
      ],
      highlighted: true,
      badge: 'Más Popular',
    },
    {
      id: 'retainer',
      name: 'Retainer Mensual',
      price: '$5,000+',
      period: 'mes',
      description: 'Dedicación continua para desarrollo y mantenimiento',
      features: [
        '40-80 horas mensuales',
        'Prioridad en solicitudes',
        'Mantenimiento continuo',
        'Nuevas características',
        'Soporte 24/7',
        'Consultoría estratégica incluida',
      ],
      highlighted: false,
    },
  ],

  // FAQs
  faqs: [
    {
      question: '¿Cuánto tiempo toma desarrollar un proyecto típico?',
      answer:
        'Depende del alcance del proyecto. Un sitio web simple puede tomar 2-4 semanas, mientras que una aplicación compleja puede requerir 3-6 meses. Durante la consulta inicial, proporcionaré un timeline detallado.',
    },
    {
      question: '¿Trabajas con startups o solo empresas establecidas?',
      answer:
        'Trabajo con todo tipo de clientes: startups, PYMEs, empresas establecidas y emprendedores individuales. Adapto mis servicios y precios según las necesidades y presupuesto de cada cliente.',
    },
    {
      question: '¿Ofreces mantenimiento post-lanzamiento?',
      answer:
        'Sí, todos los proyectos incluyen 30 días de soporte gratuito post-lanzamiento. Después, ofrezco planes de mantenimiento mensual o soporte por hora según tus necesidades.',
    },
    {
      question: '¿Qué tecnologías utilizas?',
      answer:
        'Me especializo en el stack JavaScript moderno (React, Node.js, TypeScript) pero también trabajo con Python, bases de datos SQL/NoSQL, y servicios cloud como AWS y Vercel.',
    },
    {
      question: '¿Puedes trabajar con mi equipo existente?',
      answer:
        'Absolutamente. Tengo experiencia colaborando con equipos internos, ya sea como desarrollador adicional o como líder técnico. Uso metodologías ágiles y herramientas de colaboración estándar.',
    },
    {
      question: '¿Cómo manejas los cambios en el alcance del proyecto?',
      answer:
        'Los cambios menores están incluidos. Para cambios significativos, proporciono una estimación del impacto en tiempo y costo antes de proceder, asegurando transparencia total.',
    },
  ],

  // Información de Contacto (usa siteConfig para valores centralizados)
  contact: {
    email: siteConfig.contact.email,
    phone: siteConfig.contact.phone,
    whatsapp: siteConfig.contact.whatsapp,
    location: siteConfig.location,
    timezone: siteConfig.timezone,
    availability: 'Lun-Vie, 9:00 AM - 6:00 PM CST',
    responseTime: 'Respuesta en menos de 2 horas',
    preferredContact: 'whatsapp',
    calendly: siteConfig.calendly,
    social: {
      linkedin: siteConfig.social.linkedin,
      github: siteConfig.social.github,
      twitter: siteConfig.social.twitter,
      instagram: siteConfig.social.instagram,
      website: siteConfig.url,
    },
  },

  // Certificaciones y Educación
  credentials: {
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        year: '2023',
        credential: 'ABC123XYZ',
      },
      {
        name: 'Google Cloud Professional Developer',
        issuer: 'Google',
        year: '2022',
        credential: 'DEF456UVW',
      },
    ],
    education: [
      {
        degree: 'Ingeniería en Sistemas',
        institution: 'Universidad Tecnológica',
        year: '2018',
        honors: 'Cum Laude',
      },
    ],
    courses: [
      'Advanced React Patterns - Frontend Masters',
      'System Design - Educative.io',
      'Microservices with Node.js - Udemy',
    ],
  },
};
