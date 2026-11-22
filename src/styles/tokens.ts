/**
 * Rehan Portfolio 2.0 - Design Tokens System
 * Premium Tech-Executive Dark-First Design Language
 */

export const tokens = {
  colors: {
    // Canvas & Surfaces
    canvas: {
      dark: '#0A0B10', // Deep obsidian navy
      darkElevated: '#121520', // Card surface
      darkSurface: '#181C2C', // Hover / elevated modal surface
      darkBorder: 'rgba(255, 255, 255, 0.08)',
      darkBorderHighlight: 'rgba(99, 102, 241, 0.35)',

      light: '#F8FAFC',
      lightElevated: '#FFFFFF',
      lightSurface: '#F1F5F9',
      lightBorder: 'rgba(15, 23, 42, 0.08)',
      lightBorderHighlight: 'rgba(99, 102, 241, 0.4)',
    },

    // Typography Colors
    text: {
      darkPrimary: '#F1F5F9', // Warm off-white
      darkSecondary: '#94A3B8', // Slate silver
      darkMuted: '#64748B', // Low contrast
      darkInverted: '#0A0B10',

      lightPrimary: '#0F172A', // Slate 900
      lightSecondary: '#475569', // Slate 600
      lightMuted: '#94A3B8',
      lightInverted: '#F8FAFC',
    },

    // Confident Accent: Electric Indigo -> Cyan
    brand: {
      indigo: '#6366F1',
      indigoLight: '#818CF8',
      indigoDark: '#4F46E5',
      cyan: '#22D3EE',
      cyanLight: '#67E8F9',
      cyanDark: '#0891B2',
      violet: '#8B5CF6',
    },

    // Gradients
    gradients: {
      primaryAccent: 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)',
      subtleCardGlow: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
      heroMesh: 'radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(34, 211, 238, 0.12) 0px, transparent 50%)',
      glassStroke: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.02))',
    },

    // Semantic Feedback
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#06B6D4',
      active: '#10B981',
      upcoming: '#6366F1',
      completed: '#64748B',
      pending: '#F59E0B',
      verified: '#10B981',
      rejected: '#EF4444',
    },
  },

  typography: {
    fontFamilies: {
      display: '"Space Grotesk", "Clash Display", sans-serif',
      body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      code: '"JetBrains Mono", monospace',
    },
    fontSizes: {
      hero: 'clamp(3rem, 6vw + 1rem, 6rem)', // 48px to 96px
      h1: 'clamp(2.25rem, 4vw + 1rem, 3.75rem)', // 36px to 60px
      h2: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)', // 28px to 44px
      h3: 'clamp(1.25rem, 2vw + 0.5rem, 1.75rem)', // 20px to 28px
      bodyLarge: '1.125rem', // 18px
      bodyBase: '1rem', // 16px
      bodySmall: '0.875rem', // 14px
      caption: '0.75rem', // 12px
    },
    lineHeights: {
      tight: 1.1,
      heading: 1.25,
      body: 1.65,
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },

  // 8px Spacing System
  spacing: {
    xxs: '4px',
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    '2xl': '64px',
    '3xl': '96px',
    '4xl': '128px',
    containerMaxWidth: '1200px',
  },

  // Radius scale
  radius: {
    sm: '8px',
    md: '12px',
    card: '18px', // consistent 16-24px
    button: '9999px', // pill-shaped or 14px
    full: '9999px',
  },

  // Shadows & Glassmorphism
  shadows: {
    cardRest: '0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 0 1px 1px rgba(255, 255, 255, 0.06)',
    cardHover: '0 12px 35px -4px rgba(99, 102, 241, 0.25), 0 0 1px 1px rgba(99, 102, 241, 0.4)',
    glowIndigo: '0 0 45px -8px rgba(99, 102, 241, 0.35)',
    glowCyan: '0 0 45px -8px rgba(34, 211, 238, 0.3)',
    pillButton: '0 8px 24px -4px rgba(99, 102, 241, 0.4)',
  },

  // Motion Curves & Durations
  motion: {
    duration: {
      instant: '150ms',
      fast: '250ms',
      normal: '400ms',
      deliberate: '650ms',
    },
    easing: {
      luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
    stagger: 0.08,
  },
} as const;

export type DesignTokens = typeof tokens;
