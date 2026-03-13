# Plan de Rediseño: Estilo GSAP Animado

**Proyecto:** VineryDev
**Fecha:** 2026-03-12
**Objetivo:** Transformar el sitio al estilo visual de GSAP.com con animaciones fluidas, diseño responsive completo y sistema de theming flexible.

---

## Resumen Ejecutivo

Transformar VineryDev en un sitio con diseño amplio, animaciones dramáticas estilo GSAP.com, optimizado para todos los dispositivos (mobile, tablet, desktop), con accesibilidad completa y la capacidad de cambiar paletas de colores fácilmente mediante variables CSS.

---

## Fase 1: Sistema de Colores Flexible (Theming)

### 1.1 Expandir Variables CSS

**Archivo:** `src/components/CustomStyles.astro`

Agregar nuevas variables semánticas que separan la "función" del "color":

```css
:root {
  /* === TEMA BASE (Cambia estos para nuevo tema) === */
  --theme-neon: rgb(10 228 72); /* Verde neón GSAP */
  --theme-hot: rgb(254 197 251); /* Rosa hot */
  --theme-fire: rgb(255 135 9); /* Naranja fuego */
  --theme-surface: rgb(14 16 15); /* Fondo oscuro */
  --theme-surface-elevated: rgb(28 32 30);
  --theme-surface-overlay: rgba(14, 16, 15, 0.8);

  /* === COLORES FUNCIONALES (Usan tema) === */
  --aw-color-primary: var(--theme-neon);
  --aw-color-secondary: var(--theme-hot);
  --aw-color-accent: var(--theme-fire);
  --aw-color-bg-page: var(--theme-surface);
  --aw-color-bg-elevated: var(--theme-surface-elevated);

  /* === GRADIENTES === */
  --gradient-primary: linear-gradient(135deg, var(--theme-neon), var(--theme-hot));
  --gradient-fire: linear-gradient(135deg, var(--theme-fire), var(--theme-hot));
  --gradient-cyber: linear-gradient(135deg, var(--theme-neon), var(--theme-fire));
  --gradient-mesh:
    radial-gradient(at 40% 20%, var(--theme-neon) 0px, transparent 50%),
    radial-gradient(at 80% 0%, var(--theme-hot) 0px, transparent 50%),
    radial-gradient(at 0% 50%, var(--theme-fire) 0px, transparent 50%);

  /* === GLASSMORPHISM === */
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  --glass-blur: 20px;
}

.dark {
  /* Dark mode hereda las mismas variables del tema */
  --aw-color-text-heading: rgb(247, 248, 248);
  --aw-color-text-default: rgb(229 236 246);
  --aw-color-text-muted: rgb(229 236 246 / 66%);
}
```

### 1.2 Presets de Tema

Crear archivo de presets para cambio rápido de tema:

**Archivo:** `src/assets/styles/theme-presets.css`

```css
/* ============================================
   TEMA GSAP (Default) - Verde Neón
   ============================================ */
[data-theme='gsap'],
:root {
  --theme-neon: rgb(10 228 72);
  --theme-hot: rgb(254 197 251);
  --theme-fire: rgb(255 135 9);
  --theme-surface: rgb(14 16 15);
  --theme-surface-elevated: rgb(28 32 30);
}

/* ============================================
   TEMA CYBER BLUE
   ============================================ */
[data-theme='cyber'] {
  --theme-neon: rgb(0 212 255);
  --theme-hot: rgb(147 51 234);
  --theme-fire: rgb(236 72 153);
  --theme-surface: rgb(3 6 32);
  --theme-surface-elevated: rgb(15 23 60);
}

/* ============================================
   TEMA SUNSET
   ============================================ */
[data-theme='sunset'] {
  --theme-neon: rgb(251 146 60);
  --theme-hot: rgb(244 63 94);
  --theme-fire: rgb(168 85 247);
  --theme-surface: rgb(15 10 25);
  --theme-surface-elevated: rgb(30 20 45);
}

/* ============================================
   TEMA MATRIX
   ============================================ */
[data-theme='matrix'] {
  --theme-neon: rgb(0 255 65);
  --theme-hot: rgb(0 200 50);
  --theme-fire: rgb(0 150 40);
  --theme-surface: rgb(0 5 0);
  --theme-surface-elevated: rgb(0 15 0);
}

/* ============================================
   TEMA AURORA
   ============================================ */
[data-theme='aurora'] {
  --theme-neon: rgb(134 239 172);
  --theme-hot: rgb(192 132 252);
  --theme-fire: rgb(96 165 250);
  --theme-surface: rgb(10 10 20);
  --theme-surface-elevated: rgb(20 20 40);
}
```

### 1.3 Theme Switcher Component

**Archivo:** `src/components/ui/ThemeSwitcher.astro`

```astro
---
const themes = [
  { id: 'gsap', name: 'Neón', color: '#0ae448' },
  { id: 'cyber', name: 'Cyber', color: '#00d4ff' },
  { id: 'sunset', name: 'Sunset', color: '#fb923c' },
  { id: 'matrix', name: 'Matrix', color: '#00ff41' },
  { id: 'aurora', name: 'Aurora', color: '#86efac' },
];
---

<div class="theme-switcher">
  {
    themes.map((theme) => (
      <button
        data-theme-btn={theme.id}
        style={`--btn-color: ${theme.color}`}
        aria-label={`Cambiar a tema ${theme.name}`}
      >
        <span class="theme-dot" />
      </button>
    ))
  }
</div>

<script>
  function initThemeSwitcher() {
    const buttons = document.querySelectorAll('[data-theme-btn]');
    const saved = localStorage.getItem('theme') || 'gsap';

    document.documentElement.setAttribute('data-theme', saved);

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const theme = btn.dataset.themeBtn;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      });
    });
  }

  document.addEventListener('astro:page-load', initThemeSwitcher);
</script>

<style>
  .theme-switcher {
    display: flex;
    gap: 0.5rem;
  }

  [data-theme-btn] {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 2px solid var(--btn-color);
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  [data-theme-btn]:hover {
    background: var(--btn-color);
    transform: scale(1.2);
  }

  .theme-dot {
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    margin: auto;
    border-radius: 50%;
    background: var(--btn-color);
  }
</style>
```

---

## Fase 2: Hero Section Épico

### 2.1 Nuevo Diseño Hero

**Archivo:** `src/components/widgets/HeroGsap.astro`

```astro
---
interface Props {
  title?: string;
  subtitle?: string;
  tagline?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

const {
  title = 'Creamos\nExperiencias\nDigitales',
  subtitle = 'Diseño y desarrollo web que impulsa tu negocio al siguiente nivel',
  tagline = 'Studio Digital',
  primaryCTA = { text: 'Empezar Proyecto', href: '/contact' },
  secondaryCTA = { text: 'Ver Portfolio', href: '/portfolio' },
} = Astro.props;

const titleLines = title.split('\n');
---

<section class="hero-gsap">
  <!-- Background Elements -->
  <div class="hero-bg" aria-hidden="true">
    <div class="gradient-mesh"></div>
    <div class="floating-elements">
      <div class="float-element float-1"></div>
      <div class="float-element float-2"></div>
      <div class="float-element float-3"></div>
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>
    </div>
    <div class="grid-overlay"></div>
  </div>

  <!-- Content -->
  <div class="hero-content">
    <span class="hero-tagline">{tagline}</span>

    <h1 class="hero-title">
      {titleLines.map((line, i) => <span class={`title-line ${i === 1 ? 'highlight' : ''}`}>{line}</span>)}
    </h1>

    <p class="hero-subtitle">{subtitle}</p>

    <div class="hero-cta">
      <a href={primaryCTA.href} class="btn-primary" data-magnetic>
        <span class="btn-text">{primaryCTA.text}</span>
        <span class="btn-icon">→</span>
      </a>
      <a href={secondaryCTA.href} class="btn-secondary">
        {secondaryCTA.text}
      </a>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div class="scroll-indicator" aria-hidden="true">
    <div class="scroll-line"></div>
    <span>Scroll</span>
  </div>
</section>

<style>
  .hero-gsap {
    position: relative;
    min-height: 100vh;
    min-height: 100dvh; /* Dynamic viewport height for mobile */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--theme-surface);
    padding: 6rem 1.5rem 4rem;
  }

  @media (min-width: 768px) {
    .hero-gsap {
      padding: 8rem 3rem 6rem;
    }
  }

  @media (min-width: 1024px) {
    .hero-gsap {
      padding: 0;
    }
  }

  /* Background */
  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .gradient-mesh {
    position: absolute;
    inset: 0;
    background: var(--gradient-mesh);
    opacity: 0.4;
    filter: blur(80px);
  }

  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  /* Floating Elements */
  .floating-elements {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .float-element {
    position: absolute;
    border-radius: 50%;
    border: 1px solid var(--theme-neon);
    opacity: 0.3;
  }

  .float-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    right: -100px;
  }

  .float-2 {
    width: 200px;
    height: 200px;
    bottom: 20%;
    left: -50px;
  }

  .float-3 {
    width: 150px;
    height: 150px;
    top: 50%;
    right: 20%;
  }

  .glow-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
  }

  .orb-1 {
    width: 400px;
    height: 400px;
    background: var(--theme-neon);
    opacity: 0.15;
    top: -100px;
    right: -100px;
  }

  .orb-2 {
    width: 300px;
    height: 300px;
    background: var(--theme-hot);
    opacity: 0.1;
    bottom: -50px;
    left: -50px;
  }

  @media (max-width: 767px) {
    .float-element,
    .glow-orb {
      transform: scale(0.5);
    }
  }

  /* Content */
  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 1200px;
  }

  .hero-tagline {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--theme-neon);
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--theme-neon);
    border-radius: 9999px;
  }

  @media (min-width: 768px) {
    .hero-tagline {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }

  .hero-title {
    display: flex;
    flex-direction: column;
    font-size: clamp(2.5rem, 10vw, 10rem);
    font-weight: 700;
    line-height: 0.95;
    letter-spacing: -0.03em;
    color: var(--aw-color-text-heading);
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    .hero-title {
      margin-bottom: 2rem;
    }
  }

  .title-line {
    display: block;
  }

  .title-line.highlight {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: var(--aw-color-text-muted);
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }

  @media (min-width: 768px) {
    .hero-subtitle {
      margin-bottom: 3rem;
    }
  }

  /* CTA Buttons */
  .hero-cta {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  @media (min-width: 640px) {
    .hero-cta {
      flex-direction: row;
      justify-content: center;
    }
  }

  .btn-primary {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--theme-surface);
    background: var(--theme-neon);
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 40px color-mix(in srgb, var(--theme-neon) 40%, transparent);
  }

  .btn-primary:active {
    transform: translateY(0);
  }

  .btn-icon {
    transition: transform 0.3s ease;
  }

  .btn-primary:hover .btn-icon {
    transform: translateX(4px);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--aw-color-text-default);
    background: transparent;
    border: 1px solid var(--glass-border);
    border-radius: 9999px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .btn-secondary:hover {
    border-color: var(--theme-neon);
    color: var(--theme-neon);
  }

  /* Scroll Indicator */
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--aw-color-text-muted);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--theme-neon), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%,
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
    50% {
      transform: scaleY(0.5);
      opacity: 0.5;
    }
  }

  @media (max-width: 767px) {
    .scroll-indicator {
      display: none;
    }
  }
</style>
```

### 2.2 Animaciones GSAP del Hero

**Archivo:** `src/components/widgets/HeroGsap.astro` (script section)

```astro
<script>
  import { gsap } from 'gsap';

  function initHeroAnimations() {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Simple fade in without motion
      gsap.set('.hero-tagline, .title-line, .hero-subtitle, .hero-cta', {
        opacity: 1,
      });
      return;
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const isTablet = window.matchMedia('(max-width: 1023px)').matches;

    // Create main timeline
    const heroTL = gsap.timeline({
      defaults: { ease: 'power4.out' },
    });

    if (isMobile) {
      // Mobile: Simpler, faster animations
      heroTL
        .from('.hero-tagline', { y: 20, opacity: 0, duration: 0.6 })
        .from(
          '.title-line',
          {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2');
    } else {
      // Desktop/Tablet: Full dramatic animations
      heroTL
        .from('.hero-tagline', {
          y: 30,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          '.title-line',
          {
            y: 100,
            opacity: 0,
            rotateX: isTablet ? 0 : -40,
            stagger: 0.15,
            duration: 1,
          },
          '-=0.4'
        )
        .from(
          '.hero-subtitle',
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          '.hero-cta',
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.scroll-indicator',
          {
            opacity: 0,
            duration: 0.6,
          },
          '-=0.2'
        );

      // Floating elements animation (desktop only)
      if (!isTablet) {
        gsap.to('.float-1', {
          y: 'random(-30, 30)',
          x: 'random(-20, 20)',
          rotation: 'random(-10, 10)',
          duration: 'random(4, 6)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        gsap.to('.float-2', {
          y: 'random(-25, 25)',
          x: 'random(-15, 15)',
          rotation: 'random(-8, 8)',
          duration: 'random(5, 7)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        gsap.to('.float-3', {
          y: 'random(-20, 20)',
          x: 'random(-10, 10)',
          rotation: 'random(-5, 5)',
          duration: 'random(3, 5)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        // Glow orbs subtle movement
        gsap.to('.glow-orb', {
          scale: 'random(0.9, 1.1)',
          duration: 'random(3, 5)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.5,
        });
      }
    }
  }

  // Initialize on page load
  document.addEventListener('astro:page-load', initHeroAnimations);

  // Cleanup before navigation
  document.addEventListener('astro:before-swap', () => {
    gsap.killTweensOf('.hero-gsap *');
  });
</script>
```

---

## Fase 3: Sistema de Animaciones GSAP Global

### 3.1 Utilidad Principal de Animaciones

**Archivo:** `src/utils/gsap-animations.ts`

```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Device detection
export const getDevice = () => {
  if (typeof window === 'undefined') return 'desktop';
  if (window.matchMedia('(max-width: 767px)').matches) return 'mobile';
  if (window.matchMedia('(max-width: 1023px)').matches) return 'tablet';
  return 'desktop';
};

// Check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Animation configurations per device
const animationConfig = {
  mobile: {
    fadeUp: { y: 30, duration: 0.6 },
    stagger: 0.08,
    triggerStart: 'top 95%',
    parallaxEnabled: false,
    magneticEnabled: false,
  },
  tablet: {
    fadeUp: { y: 50, duration: 0.8 },
    stagger: 0.12,
    triggerStart: 'top 90%',
    parallaxEnabled: true,
    parallaxIntensity: 0.3,
    magneticEnabled: false,
  },
  desktop: {
    fadeUp: { y: 60, duration: 1 },
    stagger: 0.15,
    triggerStart: 'top 85%',
    parallaxEnabled: true,
    parallaxIntensity: 0.5,
    magneticEnabled: true,
  },
};

// Get current config
export const getConfig = () => animationConfig[getDevice()];

/**
 * Initialize all scroll-triggered animations
 */
export function initScrollAnimations() {
  if (prefersReducedMotion()) {
    // Make all elements visible without animation
    gsap.set('[data-animate]', { opacity: 1, y: 0, x: 0, scale: 1, rotation: 0 });
    return;
  }

  const config = getConfig();
  const device = getDevice();

  // Fade Up animations
  gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
    gsap.from(el, {
      y: config.fadeUp.y,
      opacity: 0,
      duration: config.fadeUp.duration,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: config.triggerStart,
        toggleActions: 'play none none none',
      },
    });
  });

  // Fade In animations
  gsap.utils.toArray<HTMLElement>('[data-animate="fade-in"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: config.fadeUp.duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: config.triggerStart,
        toggleActions: 'play none none none',
      },
    });
  });

  // Scale Up animations
  gsap.utils.toArray<HTMLElement>('[data-animate="scale-up"]').forEach((el) => {
    gsap.from(el, {
      scale: 0.8,
      opacity: 0,
      duration: config.fadeUp.duration,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: el,
        start: config.triggerStart,
        toggleActions: 'play none none none',
      },
    });
  });

  // Slide In Left
  gsap.utils.toArray<HTMLElement>('[data-animate="slide-left"]').forEach((el) => {
    gsap.from(el, {
      x: -60,
      opacity: 0,
      duration: config.fadeUp.duration,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: config.triggerStart,
        toggleActions: 'play none none none',
      },
    });
  });

  // Slide In Right
  gsap.utils.toArray<HTMLElement>('[data-animate="slide-right"]').forEach((el) => {
    gsap.from(el, {
      x: 60,
      opacity: 0,
      duration: config.fadeUp.duration,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: config.triggerStart,
        toggleActions: 'play none none none',
      },
    });
  });

  // Stagger animations for grids/lists
  gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((container) => {
    const items = container.querySelectorAll('[data-animate-item]');
    if (items.length === 0) return;

    gsap.from(items, {
      y: config.fadeUp.y * 0.7,
      opacity: 0,
      duration: config.fadeUp.duration * 0.8,
      stagger: config.stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: config.triggerStart,
      },
    });
  });

  // Text reveal (character by character) - desktop only
  if (device === 'desktop') {
    gsap.utils.toArray<HTMLElement>('[data-animate="text-reveal"]').forEach((el) => {
      const text = el.textContent || '';
      el.innerHTML = text
        .split('')
        .map((char) => `<span class="char" style="display:inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      gsap.from(el.querySelectorAll('.char'), {
        y: 50,
        opacity: 0,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: config.triggerStart,
        },
      });
    });
  }

  // Parallax effects (tablet and desktop only)
  if (config.parallaxEnabled) {
    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '0.5') * config.parallaxIntensity!;

      gsap.to(el, {
        y: () => window.innerHeight * speed * -0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }

  // Horizontal scroll sections (desktop only)
  if (device === 'desktop') {
    gsap.utils.toArray<HTMLElement>('[data-animate="horizontal-scroll"]').forEach((section) => {
      const container = section.querySelector('[data-horizontal-container]');
      if (!container) return;

      const scrollWidth = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });
  }
}

/**
 * Initialize magnetic button effects (desktop only)
 */
export function initMagneticButtons() {
  if (getDevice() !== 'desktop' || prefersReducedMotion()) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    });
  });
}

/**
 * Initialize custom cursor (desktop only)
 */
export function initCustomCursor() {
  if (getDevice() !== 'desktop' || prefersReducedMotion()) return;

  const cursor = document.querySelector<HTMLElement>('.custom-cursor');
  const cursorDot = document.querySelector<HTMLElement>('.cursor-dot');

  if (!cursor || !cursorDot) return;

  // Show cursor
  cursor.style.opacity = '1';
  cursorDot.style.opacity = '1';

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(cursorDot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    });
  });

  // Hover effects on interactive elements
  document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 2, duration: 0.3 });
      cursor.classList.add('hovering');
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      cursor.classList.remove('hovering');
    });
  });
}

/**
 * Initialize touch-friendly interactions (mobile/tablet)
 */
export function initTouchInteractions() {
  const device = getDevice();
  if (device === 'desktop') return;

  // Add touch feedback to buttons
  document.querySelectorAll<HTMLElement>('button, .btn-primary, .btn-secondary, a[href]').forEach((el) => {
    el.addEventListener(
      'touchstart',
      () => {
        gsap.to(el, { scale: 0.95, duration: 0.1 });
      },
      { passive: true }
    );

    el.addEventListener(
      'touchend',
      () => {
        gsap.to(el, { scale: 1, duration: 0.2, ease: 'back.out(1.7)' });
      },
      { passive: true }
    );
  });

  // Swipe detection for carousels
  document.querySelectorAll<HTMLElement>('[data-swipeable]').forEach((container) => {
    let startX = 0;
    let currentX = 0;

    container.addEventListener(
      'touchstart',
      (e) => {
        startX = e.touches[0].clientX;
      },
      { passive: true }
    );

    container.addEventListener(
      'touchmove',
      (e) => {
        currentX = e.touches[0].clientX;
      },
      { passive: true }
    );

    container.addEventListener(
      'touchend',
      () => {
        const diff = startX - currentX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
          const event = new CustomEvent('swipe', {
            detail: { direction: diff > 0 ? 'left' : 'right' },
          });
          container.dispatchEvent(event);
        }
      },
      { passive: true }
    );
  });
}

/**
 * Cleanup all GSAP animations and ScrollTriggers
 */
export function cleanup() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  gsap.killTweensOf('*');
}

/**
 * Master initialization function
 */
export function initAllAnimations() {
  initScrollAnimations();
  initMagneticButtons();
  initCustomCursor();
  initTouchInteractions();
}
```

### 3.2 Integración con Layout Principal

**Archivo:** `src/layouts/Layout.astro` (agregar en la sección de scripts)

```astro
<script>
  import { initAllAnimations, cleanup } from '@/utils/gsap-animations';

  // Initialize on page load (works with View Transitions)
  document.addEventListener('astro:page-load', () => {
    // Small delay to ensure DOM is ready
    requestAnimationFrame(() => {
      initAllAnimations();
    });
  });

  // Cleanup before navigation
  document.addEventListener('astro:before-swap', cleanup);
</script>
```

---

## Fase 4: Tipografía Dramática Responsive

### 4.1 Actualizar Tailwind Config

**Archivo:** `tailwind.config.js`

```javascript
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        surface: 'var(--theme-surface)',
        'surface-elevated': 'var(--theme-surface-elevated)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Display sizes - fluid typography
        'display-2xl': [
          'clamp(3rem, 10vw, 10rem)',
          {
            lineHeight: '0.9',
            letterSpacing: '-0.03em',
            fontWeight: '700',
          },
        ],
        'display-xl': [
          'clamp(2.5rem, 8vw, 8rem)',
          {
            lineHeight: '0.95',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        'display-lg': [
          'clamp(2rem, 6vw, 6rem)',
          {
            lineHeight: '1',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        'display-md': [
          'clamp(1.75rem, 4vw, 4rem)',
          {
            lineHeight: '1.1',
            letterSpacing: '-0.01em',
            fontWeight: '600',
          },
        ],
        'display-sm': [
          'clamp(1.5rem, 3vw, 2.5rem)',
          {
            lineHeight: '1.2',
            fontWeight: '600',
          },
        ],
      },
      spacing: {
        // Extra large spacing for dramatic layouts
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem', // 1408px
        '9xl': '96rem', // 1536px
        '10xl': '104rem', // 1664px
      },
      animation: {
        fade: 'fadeInUp 1s both',
        'fade-slow': 'fadeInUp 1.5s both',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px var(--theme-neon)' },
          '50%': { boxShadow: '0 0 40px var(--theme-neon), 0 0 60px var(--theme-neon)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant, addUtilities }) => {
      addVariant('intersect', '&:not([no-intersect])');

      // Custom utilities
      addUtilities({
        '.text-gradient': {
          background: 'var(--gradient-primary)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-fire': {
          background: 'var(--gradient-fire)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-glow': {
          'text-shadow': '0 0 20px var(--theme-neon), 0 0 40px color-mix(in srgb, var(--theme-neon) 50%, transparent)',
        },
        '.text-outline': {
          '-webkit-text-stroke': '2px var(--theme-neon)',
          '-webkit-text-fill-color': 'transparent',
        },
        '.glow-box': {
          'box-shadow': '0 0 30px color-mix(in srgb, var(--theme-neon) 30%, transparent)',
        },
        '.glow-box-strong': {
          'box-shadow': '0 0 40px var(--theme-neon), 0 0 80px color-mix(in srgb, var(--theme-neon) 50%, transparent)',
        },
      });
    }),
  ],
  darkMode: 'class',
};
```

---

## Fase 5: Componentes Actualizados

### 5.1 Botones Estilo GSAP

**Archivo:** `src/components/ui/Button.astro` (actualizar)

```astro
---
import type { HTMLAttributes } from 'astro/types';

interface Props extends HTMLAttributes<'a' | 'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  magnetic?: boolean;
}

const {
  variant = 'primary',
  size = 'md',
  class: className = '',
  href,
  type = 'button',
  magnetic = false,
  ...rest
} = Astro.props;

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variants = {
  primary: 'btn-gsap-primary',
  secondary: 'btn-gsap-secondary',
  outline: 'btn-gsap-outline',
  ghost: 'btn-gsap-ghost',
  link: 'btn-gsap-link',
};

const Tag = href ? 'a' : 'button';
const attrs = href ? { href } : { type };
---

<Tag
  class:list={['btn-gsap', variants[variant], sizes[size], className]}
  data-magnetic={magnetic ? '' : undefined}
  {...attrs}
  {...rest}
>
  <span class="btn-content">
    <slot />
  </span>
  <span class="btn-bg" aria-hidden="true"></span>
</Tag>

<style>
  .btn-gsap {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 600;
    border-radius: 9999px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    border: none;
    outline: none;
  }

  .btn-content {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition:
      transform 0.3s ease,
      color 0.3s ease;
  }

  .btn-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .btn-gsap:hover .btn-bg {
    transform: scaleX(1);
  }

  .btn-gsap:active {
    transform: scale(0.98);
  }

  /* Primary */
  .btn-gsap-primary {
    background: var(--theme-neon);
    color: var(--theme-surface);
  }

  .btn-gsap-primary .btn-bg {
    background: var(--theme-surface);
  }

  .btn-gsap-primary:hover {
    color: var(--theme-neon);
    box-shadow: 0 10px 40px color-mix(in srgb, var(--theme-neon) 40%, transparent);
  }

  /* Secondary */
  .btn-gsap-secondary {
    background: var(--theme-surface-elevated);
    color: var(--aw-color-text-default);
    border: 1px solid var(--glass-border);
  }

  .btn-gsap-secondary .btn-bg {
    background: var(--theme-neon);
  }

  .btn-gsap-secondary:hover {
    color: var(--theme-surface);
    border-color: var(--theme-neon);
  }

  /* Outline */
  .btn-gsap-outline {
    background: transparent;
    color: var(--theme-neon);
    border: 2px solid var(--theme-neon);
  }

  .btn-gsap-outline .btn-bg {
    background: var(--theme-neon);
  }

  .btn-gsap-outline:hover {
    color: var(--theme-surface);
  }

  /* Ghost */
  .btn-gsap-ghost {
    background: transparent;
    color: var(--aw-color-text-default);
  }

  .btn-gsap-ghost .btn-bg {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
  }

  .btn-gsap-ghost:hover {
    color: var(--theme-neon);
  }

  /* Link */
  .btn-gsap-link {
    background: transparent;
    color: var(--theme-neon);
    padding: 0;
  }

  .btn-gsap-link .btn-bg {
    display: none;
  }

  .btn-gsap-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--theme-neon);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  .btn-gsap-link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  /* Touch feedback for mobile */
  @media (hover: none) {
    .btn-gsap:active {
      transform: scale(0.95);
    }

    .btn-gsap:active .btn-bg {
      transform: scaleX(1);
    }
  }
</style>
```

### 5.2 Cards con Efecto Glass

**Archivo:** `src/components/ui/CardGsap.astro`

```astro
---
interface Props {
  class?: string;
  hover?: boolean;
  glowColor?: 'primary' | 'secondary' | 'accent';
}

const { class: className = '', hover = true, glowColor = 'primary' } = Astro.props;

const glowColors = {
  primary: 'var(--theme-neon)',
  secondary: 'var(--theme-hot)',
  accent: 'var(--theme-fire)',
};
---

<div class:list={['card-gsap', hover && 'card-hover', className]} style={`--glow-color: ${glowColors[glowColor]}`}>
  <slot />
</div>

<style>
  .card-gsap {
    position: relative;
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-hover:hover {
    border-color: var(--glow-color);
    transform: translateY(-5px);
    box-shadow:
      0 0 30px color-mix(in srgb, var(--glow-color) 20%, transparent),
      inset 0 0 30px color-mix(in srgb, var(--glow-color) 5%, transparent);
  }

  /* Gradient border effect on hover */
  .card-hover::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, var(--glow-color), transparent 50%, var(--glow-color));
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .card-hover:hover::before {
    opacity: 1;
  }

  /* Responsive padding */
  @media (max-width: 767px) {
    .card-gsap {
      padding: 1.5rem;
      border-radius: 1rem;
    }
  }

  /* Touch feedback */
  @media (hover: none) {
    .card-hover:active {
      transform: scale(0.98);
      border-color: var(--glow-color);
    }
  }
</style>
```

---

## Fase 6: Cursor Personalizado

### 6.1 Componente de Cursor

**Archivo:** `src/components/ui/CustomCursor.astro`

```astro
---
// This component is only rendered on desktop
---

<div class="custom-cursor" aria-hidden="true">
  <div class="cursor-ring"></div>
</div>
<div class="cursor-dot" aria-hidden="true"></div>

<style>
  .custom-cursor,
  .cursor-dot {
    display: none;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @media (hover: hover) and (pointer: fine) {
    .custom-cursor,
    .cursor-dot {
      display: block;
    }
  }

  .cursor-ring {
    width: 40px;
    height: 40px;
    border: 1px solid var(--theme-neon);
    border-radius: 50%;
    transition:
      width 0.3s ease,
      height 0.3s ease,
      border-color 0.3s ease,
      background 0.3s ease;
  }

  .custom-cursor.hovering .cursor-ring {
    width: 60px;
    height: 60px;
    background: color-mix(in srgb, var(--theme-neon) 10%, transparent);
    border-color: var(--theme-neon);
  }

  .cursor-dot {
    width: 6px;
    height: 6px;
    background: var(--theme-neon);
    border-radius: 50%;
  }

  /* Hide cursor when it leaves the window */
  .custom-cursor.hidden,
  .cursor-dot.hidden {
    opacity: 0;
  }
</style>

<script>
  // Only initialize on desktop with mouse
  function shouldShowCustomCursor() {
    return (
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  function initCursor() {
    if (!shouldShowCustomCursor()) return;

    const cursor = document.querySelector<HTMLElement>('.custom-cursor');
    const cursorDot = document.querySelector<HTMLElement>('.cursor-dot');

    if (!cursor || !cursorDot) return;

    // Show cursor after a brief delay
    setTimeout(() => {
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    }, 500);

    // Hide default cursor on supported elements
    document.body.style.cursor = 'none';

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
      });
    });

    // Handle mouse enter/leave window
    document.addEventListener('mouseleave', () => {
      cursor.classList.add('hidden');
      cursorDot.classList.add('hidden');
    });

    document.addEventListener('mouseenter', () => {
      cursor.classList.remove('hidden');
      cursorDot.classList.remove('hidden');
    });
  }

  document.addEventListener('astro:page-load', initCursor);
</script>
```

---

## Fase 7: Layout Amplio y Espaciado

### 7.1 Utilidades CSS Adicionales

**Archivo:** `src/assets/styles/gsap-utilities.css`

```css
/* ============================================
   GSAP STYLE UTILITIES
   ============================================ */

/* Wide Containers */
.container-wide {
  width: 100%;
  max-width: 1600px;
  margin-inline: auto;
  padding-inline: clamp(1rem, 5vw, 4rem);
}

.container-full {
  width: 100%;
  padding-inline: clamp(1rem, 5vw, 6rem);
}

/* Section Spacing */
.section-gsap {
  padding-block: clamp(4rem, 10vh, 10rem);
}

.section-gsap-sm {
  padding-block: clamp(3rem, 6vh, 6rem);
}

.section-gsap-lg {
  padding-block: clamp(6rem, 15vh, 15rem);
}

/* Grid Spacing */
.grid-gsap {
  display: grid;
  gap: clamp(1.5rem, 4vw, 3rem);
}

.grid-gsap-lg {
  display: grid;
  gap: clamp(2rem, 5vw, 4rem);
}

/* Flex Spacing */
.flex-gsap {
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);
}

/* Stack Spacing */
.stack-gsap > * + * {
  margin-top: clamp(1.5rem, 4vw, 3rem);
}

.stack-gsap-sm > * + * {
  margin-top: clamp(1rem, 2vw, 1.5rem);
}

.stack-gsap-lg > * + * {
  margin-top: clamp(2rem, 6vw, 5rem);
}

/* ============================================
   RESPONSIVE GRID LAYOUTS
   ============================================ */

.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
}

.grid-auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
}

/* ============================================
   DECORATIVE ELEMENTS
   ============================================ */

.gradient-mesh-bg {
  position: relative;
}

.gradient-mesh-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-mesh);
  opacity: 0.3;
  filter: blur(100px);
  pointer-events: none;
  z-index: -1;
}

.glow-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--theme-neon), transparent);
}

.glow-line-vertical {
  width: 1px;
  background: linear-gradient(180deg, transparent, var(--theme-neon), transparent);
}

/* ============================================
   REDUCED MOTION
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ============================================
   MOBILE OPTIMIZATIONS
   ============================================ */

@media (max-width: 767px) {
  /* Reduce blur effects on mobile for performance */
  .glass,
  .card-gsap,
  [style*='backdrop-filter'] {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  /* Simplify gradients */
  .gradient-mesh-bg::before {
    filter: blur(60px);
  }
}

/* ============================================
   HIGH CONTRAST MODE
   ============================================ */

@media (prefers-contrast: high) {
  .card-gsap {
    border-width: 2px;
    backdrop-filter: none;
    background: var(--theme-surface);
  }

  .btn-gsap {
    border-width: 2px;
  }
}
```

---

## Fase 8: Widget Wrapper Actualizado

### 8.1 WidgetWrapper con Animaciones

**Archivo:** `src/components/ui/WidgetWrapper.astro` (actualizar)

```astro
---
interface Props {
  id?: string;
  isDark?: boolean;
  containerClass?: string;
  classes?: Record<string, string>;
  bg?: string;
  animate?: 'fade-up' | 'fade-in' | 'scale-up' | 'stagger' | 'none';
}

const { id, isDark = false, containerClass = '', classes = {}, bg, animate = 'fade-up' } = Astro.props;
---

<section
  class:list={['section-gsap relative', isDark && 'dark', classes.container]}
  id={id}
  data-animate={animate !== 'none' ? animate : undefined}
  {...bg ? { style: `background: ${bg}` } : {}}
>
  <div class:list={['container-wide', containerClass, classes.inner]}>
    <slot />
  </div>
</section>
```

---

## Resumen de Archivos a Crear/Modificar

### Archivos Nuevos

| Archivo                                 | Propósito                   |
| --------------------------------------- | --------------------------- |
| `src/utils/gsap-animations.ts`          | Sistema de animaciones GSAP |
| `src/assets/styles/theme-presets.css`   | Presets de temas            |
| `src/assets/styles/gsap-utilities.css`  | Utilidades CSS              |
| `src/components/widgets/HeroGsap.astro` | Nuevo Hero                  |
| `src/components/ui/CardGsap.astro`      | Card con glass effect       |
| `src/components/ui/CustomCursor.astro`  | Cursor personalizado        |
| `src/components/ui/ThemeSwitcher.astro` | Selector de tema            |

### Archivos a Modificar

| Archivo                                 | Cambios                           |
| --------------------------------------- | --------------------------------- |
| `src/components/CustomStyles.astro`     | Variables de tema expandidas      |
| `tailwind.config.js`                    | Tipografía, colores, utilidades   |
| `src/layouts/Layout.astro`              | Script GSAP global + CustomCursor |
| `src/components/ui/Button.astro`        | Estilos GSAP                      |
| `src/components/ui/WidgetWrapper.astro` | Data attributes para animaciones  |

---

## Orden de Implementación Recomendado

| Fase | Descripción                | Prioridad |
| ---- | -------------------------- | --------- |
| 1    | Sistema de Colores/Theming | Alta      |
| 2    | Hero Section Nuevo         | Alta      |
| 3    | Sistema GSAP Global        | Alta      |
| 4    | Tipografía Dramática       | Media     |
| 5    | Botones y Cards            | Media     |
| 6    | Cursor Personalizado       | Baja      |
| 7    | Layout Amplio              | Media     |
| 8    | Widget Wrapper             | Media     |

---

## Consideraciones de Accesibilidad

- `prefers-reduced-motion`: Todas las animaciones respetan esta preferencia
- `prefers-contrast`: Estilos alternativos para alto contraste
- Cursor personalizado: Solo en desktop, con fallback nativo
- Touch targets: Mínimo 44x44px en móvil
- Focus visible: Estados de foco claros en todos los elementos interactivos

---

## Performance

- **Mobile**: Animaciones simplificadas, parallax desactivado, blur reducido
- **Tablet**: Animaciones moderadas, parallax sutil
- **Desktop**: Experiencia completa con todos los efectos
- **Lazy loading**: ScrollTrigger carga animaciones bajo demanda
- **Cleanup**: Todas las animaciones se limpian en navegación

---

**Plan preparado por:** BMad Master
**Estado:** Listo para aprobación e implementación
