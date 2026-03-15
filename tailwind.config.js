/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      /* ================= COLOR SYSTEM ================= */
      colors: {
        canvas: {
          DEFAULT: '#F4F6F9',
          soft: '#E6EDF4',
          subtle: '#DDE7F2',
          dark: '#0F172A',
        },

        surface: {
          glass: 'rgba(255,255,255,0.35)',
          strong: 'rgba(255,255,255,0.55)',
          solid: '#FFFFFF',
          hover: 'rgba(255,255,255,0.85)',
        },

        text: {
          primary: '#0F172A',
          secondary: '#334155',
          muted: '#64748B',
          inverse: '#F8FAFC',
        },

        brand: {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },

        accent: {
          cyan: '#22D3EE',
          violet: '#8B5CF6',
          pink: '#EC4899',
        },

        border: 'rgba(15,23,42,0.08)',
      },

      /* ================= GRADIENTS ================= */
      backgroundImage: {
        'soft-gradient':
          'linear-gradient(180deg, #F4F6F9 0%, #E6EDF4 100%)',

        'glass-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.35))',

        'accent-gradient':
          'linear-gradient(90deg, #22D3EE, #8B5CF6)',

        'violet-cyan':
          'linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%)',

        'pink-violet':
          'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',

        'brand-glow':
          'radial-gradient(600px circle at top, rgba(59,130,246,0.25), transparent 70%)',
      },

      /* ================= GLASS EFFECT ================= */
      backdropBlur: {
        xs: '2px',
        sm: '6px',
        md: '12px',
        lg: '18px',
        xl: '24px',
        '2xl': '32px',
      },

      backdropSaturate: {
        110: '1.1',
        120: '1.2',
        130: '1.3',
      },

      /* ================= SHADOWS ================= */
      boxShadow: {
        soft: '0 12px 32px rgba(15,23,42,0.08)',
        lift: '0 24px 48px rgba(15,23,42,0.12)',
        hoverLift: '0 32px 64px rgba(15,23,42,0.14)',

        glowCyan: '0 0 60px rgba(34,211,238,0.35)',
        glowViolet: '0 0 60px rgba(139,92,246,0.35)',
        glowPink: '0 0 60px rgba(236,72,153,0.35)',
      },

      /* ================= RADIUS ================= */
      borderRadius: {
        sm: '0.375rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        full: '9999px',
      },

      /* ================= MOTION SYSTEM ================= */
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },

        floatSoft: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },

        glowPulse: {
          '0%,100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },

        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },

      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'scale-in': 'scaleIn 0.45s cubic-bezier(0.16,1,0.3,1) both',

        float: 'floatSoft 6s ease-in-out infinite',
        glow: 'glowPulse 4.5s ease-in-out infinite',

        'slide-left': 'slideLeft 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.16,1,0.3,1) both',
      },

      /* ================= TYPOGRAPHY ================= */
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },

      /* ================= RESPONSIVE BREAKPOINTS ================= */
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      /* ================= SPACING TOKENS ================= */
      spacing: {
        'section-sm': '64px',
        'section-md': '96px',
        'section-lg': '128px',
        'section-xl': '160px',
      },
    },
  },

  plugins: [],

  safelist: [
    'bg-accent-cyan',
    'bg-accent-violet',
    'bg-accent-pink',
    'text-accent-cyan',
    'text-accent-violet',
    'text-accent-pink',
    'shadow-glowCyan',
    'shadow-glowViolet',
    'shadow-glowPink',
  ],
};
