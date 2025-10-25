import { getPermalink, getBlogPermalink } from './utils/permalinks';

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
      text: 'Precios',
      href: getPermalink('/pricing'),
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
        { text: 'Desarrollo Web', href: '/services#desarrollo-web' },
        { text: 'Automatizaciones', href: '/services#automatizacion' },
        { text: 'Infraestructura Cloud', href: '/services#infraestructura' },
        { text: 'Marketing Digital', href: '/services#marketing' },
        { text: 'Diseño & Fotografía', href: '/services#diseno' },
        { text: 'Seguridad', href: '/services#seguridad' },
      ],
    },
    {
      title: 'Tecnologías',
      links: [
        { text: 'React & Vue.js', href: '/services#frontend' },
        { text: 'Laravel & Node.js', href: '/services#backend' },
        { text: 'AWS & Cloud', href: '/services#cloud' },
        { text: 'N8N & Zapier', href: '/services#automatizaciones' },
        { text: 'Ver Stack Completo', href: '/services#tech-stack' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Portafolio', href: '/portfolio' },
        { text: 'Casos de Éxito', href: '/portfolio#casos-exito' },
        { text: 'Precios', href: '/pricing' },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contacto', href: '/contact' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Preguntas Frecuentes', href: '/#faq' },
        { text: 'Proceso de Trabajo', href: '/#proceso' },
        { text: 'Formas de Pago', href: '/pricing#formas-pago' },
        { text: 'Agendar Consulta', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos de Servicio', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/vinerytech' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/vinerytech' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: 'https://twitter.com/vinerytech' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/vinerytech' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contacto@vinerytech.com' },
  ],
  footNote: `
    <div class="text-sm">
      <p class="mb-1">© ${new Date().getFullYear()} <strong>VineryTech</strong> - Agencia de Desarrollo Full-Stack</p>
      <p class="text-xs text-muted">Desarrollo Web · Automatización · Cloud · Marketing Digital · Diseño · Seguridad</p>
    </div>
  `,
};
