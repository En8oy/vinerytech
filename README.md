# VineryDev

Sitio web corporativo de **VineryDev** - Agencia de Desarrollo Full-Stack especializada en automatización, desarrollo web, infraestructura cloud y marketing digital.

## Tecnologías

- **Framework:** [Astro 5.0](https://astro.build/) - Framework web moderno con renderizado estático
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- **Animaciones:** [Granim.js](https://sarcadass.github.io/granim.js/) - Gradientes animados
- **Tipografía:** Inter (UI) + DM Sans (Headings)
- **Iconos:** [Tabler Icons](https://tabler-icons.io/)
- **Linting:** ESLint + Prettier
- **Commits:** Conventional Commits con Husky + Commitlint

## Características

- Diseño **glassmorphism** con efectos de blur y transparencia
- **Gradientes animados** en el hero con Granim.js
- Soporte para **modo oscuro/claro**
- **SEO optimizado** con Open Graph y meta tags
- **Blog integrado** con MDX y categorías
- **Responsive design** mobile-first
- **Performance optimizada** - Score 90+ en Lighthouse
- **Variables de entorno** para configuración centralizada

## Requisitos

- Node.js >= 18.17.1
- npm o pnpm

## Instalación

```bash
# Clonar repositorio
git clone <repository-url>
cd vinerytech

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
# URL del sitio
PUBLIC_SITE_URL=https://vinery.dev
PUBLIC_SITE_NAME=VineryDev

# Contacto
PUBLIC_CONTACT_EMAIL=contacto@vinery.dev
PUBLIC_CONTACT_PHONE=+52 55 1234 5678
PUBLIC_CONTACT_WHATSAPP=+5215512345678

# Redes Sociales
PUBLIC_SOCIAL_LINKEDIN=https://linkedin.com/company/vinerydev
PUBLIC_SOCIAL_GITHUB=https://github.com/vinerydev
PUBLIC_SOCIAL_TWITTER=https://twitter.com/vinerydev
PUBLIC_SOCIAL_INSTAGRAM=https://instagram.com/vinerydev

# Calendly
PUBLIC_CALENDLY_URL=https://calendly.com/vinerydev

# Ubicación
PUBLIC_LOCATION=Ciudad de México, México
PUBLIC_TIMEZONE=UTC-6 (CST)
```

## Estructura del Proyecto

```
/
├── public/                 # Archivos estáticos
│   ├── robots.txt
│   └── _headers
├── src/
│   ├── assets/
│   │   ├── images/        # Imágenes del sitio
│   │   └── styles/
│   │       └── tailwind.css  # Estilos personalizados
│   ├── components/
│   │   ├── blog/          # Componentes del blog
│   │   ├── common/        # Componentes compartidos
│   │   ├── ui/            # UI components (Button, ItemGrid, etc.)
│   │   │   └── GranimBackground.astro  # Gradiente animado
│   │   └── widgets/       # Widgets (Hero, Features, etc.)
│   ├── data/
│   │   ├── post/          # Posts del blog (Markdown)
│   │   └── freelancer-data.ts  # Datos de servicios
│   ├── layouts/           # Layouts de página
│   ├── pages/             # Rutas del sitio
│   │   ├── index.astro    # Página principal
│   │   ├── services.astro # Servicios
│   │   ├── portfolio.astro # Portafolio
│   │   ├── pricing.astro  # Precios
│   │   ├── contact.astro  # Contacto
│   │   ├── terms.md       # Términos y condiciones
│   │   ├── privacy.md     # Política de privacidad
│   │   └── [...blog]/     # Rutas del blog
│   ├── utils/
│   │   ├── siteConfig.ts  # Configuración centralizada
│   │   └── permalinks.ts  # Utilidades de URLs
│   ├── config.yaml        # Configuración de Astro
│   └── navigation.ts      # Menús de navegación
├── .env                   # Variables de entorno (no commitear)
├── .env.example           # Ejemplo de variables
├── astro.config.ts        # Configuración de Astro
├── tailwind.config.js     # Configuración de Tailwind
└── package.json
```

## Comandos

| Comando                  | Descripción                                       |
| ------------------------ | ------------------------------------------------- |
| `npm run dev`            | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`          | Genera build de producción en `./dist/`           |
| `npm run preview`        | Preview del build de producción                   |
| `npm run check`          | Verifica errores de Astro, ESLint y Prettier      |
| `npm run fix`            | Corrige errores de ESLint y formatea con Prettier |
| `npm run check:astro`    | Solo verificación de Astro                        |
| `npm run check:eslint`   | Solo verificación de ESLint                       |
| `npm run check:prettier` | Solo verificación de Prettier                     |

## Páginas Disponibles

| Ruta         | Descripción                                      |
| ------------ | ------------------------------------------------ |
| `/`          | Página principal con hero, servicios, stats, FAQ |
| `/services`  | Detalle de servicios ofrecidos                   |
| `/portfolio` | Portafolio de proyectos                          |
| `/pricing`   | Planes y precios                                 |
| `/contact`   | Formulario de contacto                           |
| `/blog`      | Listado de artículos                             |
| `/terms`     | Términos y condiciones                           |
| `/privacy`   | Política de privacidad                           |

## Configuración Centralizada

El archivo `src/utils/siteConfig.ts` centraliza toda la configuración del sitio usando variables de entorno:

```typescript
import { siteConfig } from '~/utils/siteConfig';

// Acceder a la configuración
siteConfig.url; // https://vinery.dev
siteConfig.name; // VineryDev
siteConfig.contact.email; // contacto@vinery.dev
siteConfig.social.linkedin; // URL de LinkedIn

// Helpers disponibles
getCanonicalUrl('/blog'); // https://vinery.dev/blog
getMailtoLink('Consulta'); // mailto:contacto@vinery.dev?subject=Consulta
getWhatsAppLink('Hola!'); // https://wa.me/5215512345678?text=Hola!
```

## Personalización de Estilos

### Colores y Variables CSS

Editar `src/components/CustomStyles.astro`:

```css
:root {
  --aw-color-primary: 79 70 229; /* Indigo */
  --aw-color-secondary: 30 58 138; /* Blue */
  --aw-color-accent: 109 40 217; /* Violet */
}
```

### Clases de Glassmorphism

Disponibles en `src/assets/styles/tailwind.css`:

```css
.glass        /* Efecto glass básico */
.glass-light  /* Glass para modo claro */
.glass-dark   /* Glass para modo oscuro */
.glass-card   /* Card con efecto glass */
.glow-primary /* Efecto glow */
```

### Gradiente Animado

El componente `GranimBackground.astro` maneja el gradiente animado del hero. Colores configurables:

```javascript
gradients: [
  ['#0f172a', '#1e3a5f', '#312e81'], // Slate → Blue → Indigo
  ['#1e1b4b', '#1e3a8a', '#0f172a'], // Indigo → Blue → Slate
  // ...
];
```

## Convenciones de Commits

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/). Ver `CONTRIBUTING.md` para más detalles.

```bash
# Ejemplos válidos
git commit -m "feat: agregar página de servicios"
git commit -m "fix(hero): corregir gradiente en mobile"
git commit -m "docs: actualizar README"
```

## Deploy

### Build de Producción

```bash
npm run build
```

Los archivos generados estarán en `./dist/`

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vinerydev/vinerytech)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/vinerydev/vinerytech)

## Licencia

Este proyecto es privado y propietario de VineryDev.

---

Desarrollado con Astro + Tailwind CSS | VineryDev
