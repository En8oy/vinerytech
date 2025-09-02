// Contenido específico para automatización y tecnología

export const automationContent = {
  // Casos de uso específicos por industria
  useCases: {
    title: "Casos de Éxito por Industria",
    subtitle: "Soluciones probadas que ya están transformando empresas como la tuya",
    industries: [
      {
        name: "E-Commerce",
        icon: "tabler:shopping-cart",
        savings: "$125,000/año ahorrados",
        tasks: [
          "Sincronización automática de inventario entre tienda y warehouse",
          "Actualización de precios en 10+ marketplaces simultáneamente",
          "Procesamiento automático de órdenes y facturas",
          "Chatbot que resuelve 80% de consultas de clientes"
        ],
        metrics: {
          timeReduced: "35 horas/semana",
          errorReduction: "98%",
          roi: "450%"
        }
      },
      {
        name: "Servicios Financieros",
        icon: "tabler:report-money",
        savings: "$200,000/año ahorrados",
        tasks: [
          "Reconciliación bancaria automática diaria",
          "Generación de reportes regulatorios sin intervención",
          "Detección de fraude con IA en tiempo real",
          "Onboarding digital de clientes en 5 minutos"
        ],
        metrics: {
          timeReduced: "50 horas/semana",
          errorReduction: "99.9%",
          roi: "600%"
        }
      },
      {
        name: "Recursos Humanos",
        icon: "tabler:users",
        savings: "$80,000/año ahorrados",
        tasks: [
          "Screening automático de CVs con IA",
          "Onboarding digital de empleados",
          "Procesamiento de nómina sin errores",
          "Gestión automática de vacaciones y permisos"
        ],
        metrics: {
          timeReduced: "25 horas/semana",
          errorReduction: "95%",
          roi: "380%"
        }
      },
      {
        name: "Marketing Digital",
        icon: "tabler:chart-line",
        savings: "$95,000/año ahorrados",
        tasks: [
          "Publicación multi-canal automatizada",
          "A/B testing automático con optimización IA",
          "Generación de reportes de campaña en tiempo real",
          "Lead scoring y nurturing inteligente"
        ],
        metrics: {
          timeReduced: "30 horas/semana",
          errorReduction: "90%",
          roi: "420%"
        }
      }
    ]
  },

  // Calculadora de ROI
  roiCalculator: {
    title: "Calcula tu ROI de Automatización",
    subtitle: "Descubre cuánto puedes ahorrar automatizando tus procesos",
    inputs: [
      {
        label: "Empleados en tareas repetitivas",
        id: "employees",
        placeholder: "5",
        multiplier: 2080 // horas anuales
      },
      {
        label: "Horas semanales en tareas manuales",
        id: "hours",
        placeholder: "20",
        multiplier: 52 // semanas al año
      },
      {
        label: "Costo promedio por hora ($)",
        id: "hourly_rate",
        placeholder: "25",
        multiplier: 1
      },
      {
        label: "Tasa de error actual (%)",
        id: "error_rate",
        placeholder: "5",
        multiplier: 0.01
      }
    ],
    results: {
      timeSaved: "Horas ahorradas al año",
      moneySaved: "Ahorro anual estimado",
      roiPercentage: "ROI esperado",
      paybackPeriod: "Período de recuperación"
    }
  },

  // Comparación Antes vs Después
  transformation: {
    title: "La Transformación Digital que tu Empresa Necesita",
    before: {
      title: "ANTES: El caos manual",
      icon: "tabler:mood-sad",
      problems: [
        "10+ horas semanales copiando datos entre sistemas",
        "Errores costosos por entrada manual de datos",
        "Reportes que toman días en prepararse",
        "Empleados frustrados con tareas repetitivas",
        "Decisiones basadas en datos desactualizados",
        "Horas extras constantes para cumplir deadlines",
        "Clientes esperando días por respuestas simples"
      ]
    },
    after: {
      title: "DESPUÉS: Automatización inteligente",
      icon: "tabler:rocket",
      benefits: [
        "0 horas en tareas repetitivas - todo automatizado",
        "99.9% de precisión en procesamiento de datos",
        "Reportes generados en segundos, no días",
        "Equipo enfocado en trabajo estratégico y creativo",
        "Dashboards con datos en tiempo real 24/7",
        "Cero horas extras por tareas operativas",
        "Respuestas instantáneas a clientes con IA"
      ]
    }
  },

  // Proceso de implementación
  implementation: {
    title: "De la Idea a la Automatización en 4 Semanas",
    subtitle: "Mi proceso probado para implementar automatizaciones sin interrumpir tu operación",
    phases: [
      {
        week: "Semana 1",
        title: "Auditoría y Mapeo",
        description: "Identifico TODOS tus procesos automatizables y calculo el ROI de cada uno",
        deliverables: [
          "Mapa completo de procesos",
          "Análisis de ROI por proceso",
          "Roadmap de implementación"
        ],
        icon: "tabler:search"
      },
      {
        week: "Semana 2-3",
        title: "Desarrollo y Testing",
        description: "Construyo y pruebo las automatizaciones en ambiente controlado",
        deliverables: [
          "Bots y scripts funcionando",
          "Integraciones configuradas",
          "Documentación técnica"
        ],
        icon: "tabler:code"
      },
      {
        week: "Semana 4",
        title: "Implementación",
        description: "Deploy gradual sin interrumpir tu operación diaria",
        deliverables: [
          "Automatizaciones en producción",
          "Monitoreo configurado",
          "Equipo capacitado"
        ],
        icon: "tabler:rocket"
      },
      {
        week: "Ongoing",
        title: "Optimización",
        description: "Mejora continua y nuevas automatizaciones según necesidades",
        deliverables: [
          "Reportes de performance",
          "Ajustes y mejoras",
          "Soporte 24/7"
        ],
        icon: "tabler:trending-up"
      }
    ]
  },

  // Preguntas frecuentes específicas
  automationFaqs: [
    {
      question: "¿Qué pasa si mis sistemas son muy antiguos o no tienen API?",
      answer: "Especialidad en sistemas legacy. Uso técnicas de RPA y screen scraping para automatizar CUALQUIER sistema, sin importar su antigüedad. He automatizado desde mainframes de los 80s hasta Excel sheets compartidos."
    },
    {
      question: "¿La automatización reemplazará a mis empleados?",
      answer: "No. La automatización POTENCIA a tu equipo. Elimina las tareas aburridas y repetitivas para que puedan enfocarse en trabajo estratégico, creativo y de mayor valor. Tus empleados te lo agradecerán."
    },
    {
      question: "¿Qué tan seguras son las automatizaciones?",
      answer: "Implemento múltiples capas de seguridad: encriptación de datos, autenticación robusta, logs de auditoría y cumplimiento con GDPR/SOC2. Más seguro que procesos manuales donde los errores son comunes."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "Los primeros resultados son visibles en 7-14 días. ROI completo típicamente en 30-45 días. Algunas automatizaciones simples pueden estar funcionando en 48 horas."
    },
    {
      question: "¿Qué pasa si algo falla?",
      answer: "Todas las automatizaciones incluyen: 1) Sistema de alertas inmediatas, 2) Fallback a proceso manual si es necesario, 3) Soporte 24/7 el primer mes, 4) Logs detallados para debugging rápido."
    },
    {
      question: "¿Puedo empezar con algo pequeño para probar?",
      answer: "Absolutamente. Ofrezco un 'Pilot de Automatización' desde $500 donde automatizamos un proceso simple para que veas el valor antes de escalar. 95% de los pilots se convierten en proyectos completos."
    }
  ],

  // Llamadas a la acción potentes
  ctas: {
    hero: "Agenda una Demo de 15 min y te muestro cómo automatizar tu proceso más tedioso",
    calculator: "Calcula cuánto pierdes cada mes por no automatizar",
    testimonial: "Únete a 45+ empresas que ya automatizan con nosotros",
    footer: "¿Listo para recuperar 20+ horas semanales? Hablemos.",
    guarantee: "Garantía de ROI en 90 días o te devuelvo el 100%"
  },

  // Métricas de impacto
  impactMetrics: [
    {
      metric: "2.5M+",
      label: "Datos procesados sin errores",
      icon: "tabler:database"
    },
    {
      metric: "99.9%",
      label: "Uptime de automatizaciones",
      icon: "tabler:activity"
    },
    {
      metric: "< 1seg",
      label: "Tiempo de respuesta promedio",
      icon: "tabler:bolt"
    },
    {
      metric: "0",
      label: "Intervención humana requerida",
      icon: "tabler:user-off"
    }
  ],

  // Tecnologías y herramientas
  techStack: {
    automation: ["Python", "Selenium", "Puppeteer", "UiPath", "Power Automate"],
    integration: ["Zapier", "Make", "n8n", "Apache Airflow", "Kafka"],
    ai: ["OpenAI GPT-4", "LangChain", "Pinecone", "TensorFlow", "Hugging Face"],
    cloud: ["AWS Lambda", "Google Cloud Functions", "Azure Functions", "Vercel"],
    monitoring: ["Datadog", "Grafana", "Sentry", "PagerDuty", "Prometheus"]
  }
};