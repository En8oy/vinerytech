/**
 * Configuración centralizada del sitio
 * Usa variables de entorno PUBLIC_* para valores configurables
 */

export const siteConfig = {
  // URL y nombre del sitio
  url: import.meta.env.PUBLIC_SITE_URL || 'https://vinery.dev',
  name: import.meta.env.PUBLIC_SITE_NAME || 'VineryDev',

  // Contacto
  contact: {
    email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'contacto@vinery.dev',
    phone: import.meta.env.PUBLIC_CONTACT_PHONE || '+52 55 1234 5678',
    whatsapp: import.meta.env.PUBLIC_CONTACT_WHATSAPP || '+5215512345678',
  },

  // Redes sociales
  social: {
    linkedin: import.meta.env.PUBLIC_SOCIAL_LINKEDIN || 'https://linkedin.com/company/vinerydev',
    github: import.meta.env.PUBLIC_SOCIAL_GITHUB || 'https://github.com/vinerydev',
    twitter: import.meta.env.PUBLIC_SOCIAL_TWITTER || 'https://twitter.com/vinerydev',
    instagram: import.meta.env.PUBLIC_SOCIAL_INSTAGRAM || 'https://instagram.com/vinerydev',
  },

  // Calendly
  calendly: import.meta.env.PUBLIC_CALENDLY_URL || 'https://calendly.com/vinerydev',

  // Ubicación
  location: import.meta.env.PUBLIC_LOCATION || 'Ciudad de México, México',
  timezone: import.meta.env.PUBLIC_TIMEZONE || 'UTC-6 (CST)',
} as const;

// Helper para generar URLs canónicas
export function getCanonicalUrl(path: string): string {
  const baseUrl = siteConfig.url.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

// Helper para generar mailto links
export function getMailtoLink(subject?: string): string {
  const email = siteConfig.contact.email;
  if (subject) {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  }
  return `mailto:${email}`;
}

// Helper para generar WhatsApp links
export function getWhatsAppLink(message?: string): string {
  const phone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
  if (message) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${phone}`;
}

export default siteConfig;
