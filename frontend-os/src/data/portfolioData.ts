import type { Project, AboutInfo } from '../types/portfolio'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras y pasarela de pago',
    longDescription:
      'Desarrollo de una plataforma de e-commerce full-stack utilizando React y Node.js. Incluye sistema de autenticación, gestión de productos, carrito de compras, integración con pasarela de pago y panel de administración. Implementé optimizaciones de rendimiento, SEO y experiencia de usuario.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    category: 'web',
    featured: true,
    year: 2024,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real',
    longDescription:
      'Aplicación web progresiva (PWA) para gestión de tareas con funcionalidades de colaboración en tiempo real. Utiliza WebSockets para sincronización instantánea, drag-and-drop para reorganización de tareas, y notificaciones push. Diseñada con enfoque en productividad y usabilidad.',
    technologies: ['React', 'WebSockets', 'PWA', 'Firebase', 'Tailwind CSS'],
    category: 'web',
    featured: true,
    year: 2024,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 'project-3',
    title: 'Mobile Weather App',
    description: 'Aplicación móvil de pronóstico del tiempo con geolocalización',
    longDescription:
      'Aplicación móvil nativa desarrollada con React Native que proporciona pronósticos del tiempo detallados. Incluye geolocalización automática, alertas meteorológicas, gráficos interactivos y soporte para múltiples ubicaciones. Optimizada para rendimiento y consumo de batería.',
    technologies: ['React Native', 'TypeScript', 'OpenWeather API', 'Redux'],
    category: 'mobile',
    featured: false,
    year: 2023,
    githubUrl: 'https://github.com',
  },
  {
    id: 'project-4',
    title: 'Data Visualization Dashboard',
    description: 'Dashboard interactivo para visualización de datos empresariales',
    longDescription:
      'Dashboard de análisis de datos con visualizaciones interactivas y en tiempo real. Permite a los usuarios explorar grandes volúmenes de datos mediante gráficos dinámicos, filtros avanzados y exportación de reportes. Construido con D3.js y optimizado para rendimiento.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    category: 'web',
    featured: false,
    year: 2023,
    githubUrl: 'https://github.com',
  },
]

export const aboutInfo: AboutInfo = {
  name: 'Clemente Falcone',
  title: 'Full Stack Developer',
  bio: 'Desarrollador full stack apasionado por crear soluciones digitales innovadoras. Especializado en React, TypeScript y arquitecturas escalables. Me enfoco en escribir código limpio, crear experiencias de usuario excepcionales y seguir las mejores prácticas de desarrollo.',
  skills: [
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Docker',
    'Git',
    'Tailwind CSS',
    'Next.js',
  ],
  experience: [
    {
      company: 'Tech Company',
      position: 'Senior Full Stack Developer',
      period: '2022 - Presente',
      description:
        'Lidero el desarrollo de aplicaciones web escalables, colaborando con equipos multidisciplinarios para entregar productos de alta calidad.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS'],
    },
    {
      company: 'Startup XYZ',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description:
        'Desarrollé y mantuve múltiples aplicaciones web, implementando nuevas funcionalidades y optimizando el rendimiento existente.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
    },
  ],
  education: [
    {
      institution: 'Universidad Tecnológica',
      degree: 'Ingeniería en Sistemas',
      period: '2016 - 2020',
      description: 'Especialización en desarrollo de software y arquitecturas de sistemas',
    },
  ],
  contact: {
    email: 'contacto@example.com',
    github: 'https://github.com/clementefalcone',
    linkedin: 'https://linkedin.com/in/clementefalcone',
    twitter: 'https://twitter.com/clementefalcone',
  },
}
