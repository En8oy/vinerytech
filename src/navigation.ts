import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // VISTAS NO NECESARIAS PARA LANDING DE SERVICIOS FREELANCE:
    // - Homes: múltiples templates de home no son necesarios
    // - Landing: páginas de landing adicionales no son necesarias
    // - Widgets: página de demostración no necesaria
    // - Blog subdivisiones: categorías y tags no son prioritarios inicialmente
    
    {
      text: 'Servicios',
      href: getPermalink('/services'),
    },
    {
      text: 'Portafolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Sobre Mí',
      href: getPermalink('/about'),
    },
    {
      text: 'Proceso',
      href: getPermalink('/#process'),
    },
    {
      text: 'Precios',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Agendar Consulta', href: '/contact', class: 'btn-primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Desarrollo Web', href: '/services#web-development' },
        { text: 'Backend & APIs', href: '/services#backend-development' },
        { text: 'Apps Móviles', href: '/services#mobile-development' },
        { text: 'Consultoría', href: '/services#consulting' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Portafolio', href: '/portfolio' },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Stack Tecnológico', href: '/about#tech-stack' },
        { text: 'Proceso de Trabajo', href: '/#process' },
        { text: 'Testimonios', href: '/#testimonials' },
      ],
    },
    {
      title: 'Información',
      links: [
        { text: 'Sobre Mí', href: '/about' },
        { text: 'Precios', href: '/pricing' },
        { text: 'FAQ', href: '/#faq' },
        { text: 'Contacto', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/vinerytech' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/vinerytech' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: 'https://twitter.com/vinerytech' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contacto@vinerytech.com' },
  ],
  footNote: `
    © 2024 VineryTech · Automatización y Desarrollo Inteligente · Todos los derechos reservados.
  `,
};
