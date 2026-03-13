/**
 * GSAP Animations System
 * Sistema global de animaciones con ScrollTrigger optimizado para todos los dispositivos.
 * Respeta prefers-reduced-motion y adapta animaciones según el dispositivo.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ============================================
// DEVICE & PREFERENCE DETECTION
// ============================================

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const getDevice = (): DeviceType => {
  if (typeof window === 'undefined') return 'desktop';
  if (window.matchMedia('(max-width: 767px)').matches) return 'mobile';
  if (window.matchMedia('(max-width: 1023px)').matches) return 'tablet';
  return 'desktop';
};

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// ============================================
// ANIMATION CONFIGURATIONS
// ============================================

interface AnimationConfig {
  fadeUp: { y: number; duration: number };
  stagger: number;
  triggerStart: string;
  parallaxEnabled: boolean;
  parallaxIntensity: number;
  magneticEnabled: boolean;
}

const animationConfigs: Record<DeviceType, AnimationConfig> = {
  mobile: {
    fadeUp: { y: 20, duration: 0.4 },
    stagger: 0.05,
    triggerStart: 'top 92%',
    parallaxEnabled: false,
    parallaxIntensity: 0,
    magneticEnabled: false,
  },
  tablet: {
    fadeUp: { y: 25, duration: 0.5 },
    stagger: 0.06,
    triggerStart: 'top 90%',
    parallaxEnabled: true,
    parallaxIntensity: 0.2,
    magneticEnabled: false,
  },
  desktop: {
    fadeUp: { y: 30, duration: 0.6 },
    stagger: 0.08,
    triggerStart: 'top 88%',
    parallaxEnabled: true,
    parallaxIntensity: 0.3,
    magneticEnabled: true,
  },
};

export const getConfig = (): AnimationConfig => animationConfigs[getDevice()];

// ============================================
// SCROLL ANIMATIONS
// ============================================

export function initScrollAnimations(): void {
  if (prefersReducedMotion()) {
    // Make all elements visible without animation
    gsap.set('[data-animate]', { opacity: 1, y: 0, x: 0, scale: 1, rotation: 0 });
    gsap.set('[data-animate-item]', { opacity: 1, y: 0, x: 0, scale: 1 });
    return;
  }

  const config = getConfig();

  // Fade Up animations
  gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
    gsap.from(el, {
      y: config.fadeUp.y,
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

  // Fade In animations
  gsap.utils.toArray<HTMLElement>('[data-animate="fade-in"]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: config.fadeUp.duration,
      ease: 'power1.out',
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
      scale: 0.95,
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

  // Slide In Left
  gsap.utils.toArray<HTMLElement>('[data-animate="slide-left"]').forEach((el) => {
    gsap.from(el, {
      x: -30,
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

  // Slide In Right
  gsap.utils.toArray<HTMLElement>('[data-animate="slide-right"]').forEach((el) => {
    gsap.from(el, {
      x: 30,
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

  // Stagger animations for grids/lists
  gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((container) => {
    const items = container.querySelectorAll('[data-animate-item]');
    if (items.length === 0) return;

    gsap.from(items, {
      y: config.fadeUp.y * 0.6,
      opacity: 0,
      duration: config.fadeUp.duration,
      stagger: config.stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: config.triggerStart,
      },
    });
  });

  // Headline animations (for section titles)
  gsap.utils.toArray<HTMLElement>('[data-animate="headline"]').forEach((el) => {
    gsap.from(el, {
      y: config.fadeUp.y * 0.5,
      opacity: 0,
      duration: config.fadeUp.duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: config.triggerStart,
      },
    });
  });

  // Counter/Stats animation
  gsap.utils.toArray<HTMLElement>('[data-animate="counter"]').forEach((el) => {
    const target = el.dataset.value || el.textContent || '0';
    const suffix = target.replace(/[0-9]/g, '');

    gsap.from(el, {
      textContent: 0,
      duration: 2,
      ease: 'power2.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: el,
        start: config.triggerStart,
      },
      onUpdate: function () {
        el.textContent = Math.round(parseFloat(el.textContent || '0')) + suffix;
      },
    });
  });
}

// ============================================
// PARALLAX EFFECTS
// ============================================

export function initParallaxEffects(): void {
  if (prefersReducedMotion()) return;

  const config = getConfig();
  if (!config.parallaxEnabled) return;

  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0.5') * config.parallaxIntensity;

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

  // Parallax backgrounds
  gsap.utils.toArray<HTMLElement>('[data-parallax-bg]').forEach((el) => {
    const speed = parseFloat(el.dataset.parallaxBg || '0.3') * config.parallaxIntensity;

    gsap.to(el, {
      backgroundPositionY: () => `${window.innerHeight * speed * 0.5}px`,
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

// ============================================
// MAGNETIC BUTTONS
// ============================================

export function initMagneticButtons(): void {
  if (getDevice() !== 'desktop' || prefersReducedMotion()) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((btn) => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
  });
}

// ============================================
// TOUCH INTERACTIONS
// ============================================

export function initTouchInteractions(): void {
  const device = getDevice();
  if (device === 'desktop' || prefersReducedMotion()) return;

  // Touch feedback for buttons
  document.querySelectorAll<HTMLElement>('button, .btn, a[href]').forEach((el) => {
    el.addEventListener(
      'touchstart',
      () => {
        gsap.to(el, { scale: 0.97, duration: 0.1 });
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

    el.addEventListener(
      'touchcancel',
      () => {
        gsap.to(el, { scale: 1, duration: 0.2 });
      },
      { passive: true }
    );
  });
}

// ============================================
// HOVER EFFECTS (Desktop)
// ============================================

export function initHoverEffects(): void {
  if (getDevice() !== 'desktop' || prefersReducedMotion()) return;

  // Card hover effects
  document.querySelectorAll<HTMLElement>('[data-hover="lift"]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        y: -8,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });

  // Glow hover effects
  document.querySelectorAll<HTMLElement>('[data-hover="glow"]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        boxShadow: '0 0 30px color-mix(in srgb, var(--theme-neon) 40%, transparent)',
        duration: 0.3,
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        boxShadow: 'none',
        duration: 0.3,
      });
    });
  });
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================

export function initScrollProgress(): void {
  const progressBar = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!progressBar) return;

  gsap.to(progressBar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    },
  });
}

// ============================================
// REVEAL ON SCROLL (Section reveals)
// ============================================

export function initSectionReveals(): void {
  if (prefersReducedMotion()) {
    gsap.set('section[data-reveal]', { opacity: 1 });
    return;
  }

  const config = getConfig();

  gsap.utils.toArray<HTMLElement>('section[data-reveal]').forEach((section) => {
    const children = section.querySelectorAll('[data-reveal-child]');

    // Fade in the section
    gsap.from(section, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: section,
        start: config.triggerStart,
        toggleActions: 'play none none none',
      },
    });

    // Stagger children if present
    if (children.length > 0) {
      gsap.from(children, {
        y: config.fadeUp.y * 0.6,
        opacity: 0,
        duration: config.fadeUp.duration * 0.8,
        stagger: config.stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: config.triggerStart,
        },
      });
    }
  });
}

// ============================================
// CLEANUP
// ============================================

export function cleanup(): void {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  gsap.killTweensOf('*');
}

// ============================================
// MASTER INITIALIZATION
// ============================================

export function initAllAnimations(): void {
  // Wait for DOM to be ready
  if (typeof window === 'undefined') return;

  // Refresh ScrollTrigger after images load
  ScrollTrigger.refresh();

  // Initialize all animation systems
  initScrollAnimations();
  initParallaxEffects();
  initMagneticButtons();
  initTouchInteractions();
  initHoverEffects();
  initScrollProgress();
  initSectionReveals();

  // Refresh ScrollTrigger after a short delay to account for lazy-loaded content
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
}

// ============================================
// AUTO-REFRESH ON RESIZE
// ============================================

let resizeTimeout: ReturnType<typeof setTimeout>;

export function initResizeHandler(): void {
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  });
}
