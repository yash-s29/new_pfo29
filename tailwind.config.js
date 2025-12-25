/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ---------------- COLOR SYSTEM ---------------- */
      colors: {
        canvas: {
          DEFAULT: '#F4F6F9', // main background
          soft: '#E6EDF4',    // section background
          subtle: '#DDE7F2',  // separators / subtle lines
        },
        surface: {
          glass: 'rgba(255,255,255,0.35)',
          strong: 'rgba(255,255,255,0.55)',
          solid: '#FFFFFF',
          hover: 'rgba(255,255,255,0.85)',
        },
        text: {
          primary: '#1F2937',   // dark slate
          secondary: '#374151', // medium slate
          muted: '#6B7280',     // cool gray
        },
        brand: {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
        accent: {
          cyan: '#22D3EE',
          violet: '#8B5CF6',
          pink: '#EC4899',   // new accent for diversity
        },
        border: 'rgba(31,41,55,0.08)',
      },

      /* ---------------- GRADIENTS ---------------- */
      backgroundImage: {
        'soft-gradient': 'linear-gradient(180deg, #F4F6F9 0%, #E6EDF4 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.75), rgba(255,255,255,0.35))',
        'brand-glow': 'radial-gradient(600px circle at top, rgba(59,130,246,0.18), transparent 70%)',
        'accent-gradient': 'linear-gradient(90deg, #22D3EE, #8B5CF6)',
        'violet-cyan': 'linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%)',
      },

      /* ---------------- BLUR ---------------- */
      backdropBlur: {
        xs: '2px',
        sm: '6px',
        md: '12px',
        lg: '18px',
        xl: '24px', // extra soft blur for glass effect
      },

      /* ---------------- SHADOWS ---------------- */
      boxShadow: {
        soft: '0 12px 32px rgba(31,41,55,0.08)',
        lift: '0 24px 48px rgba(31,41,55,0.12)',
        glowCyan: '0 0 60px rgba(34,211,238,0.25)',
        glowViolet: '0 0 60px rgba(139,92,246,0.25)',
        hoverLift: '0 32px 64px rgba(31,41,55,0.14)',
      },

      /* ---------------- BORDER RADIUS ---------------- */
      borderRadius: {
        sm: '0.375rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        full: '9999px',
      },

      /* ---------------- ANIMATIONS ---------------- */
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },

      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
        float: 'float 8s ease-in-out infinite',
        glow: 'glowPulse 5s ease-in-out infinite',
        'slide-left': 'slideInLeft 0.6s ease-out both',
        'slide-right': 'slideInRight 0.6s ease-out both',
      },

      /* ---------------- TYPOGRAPHY ---------------- */
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },

      /* ---------------- RESPONSIVE ---------------- */
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      /* ---------------- SPACING / CUSTOM ---------------- */
      spacing: {
        carousel: '404px', // if using custom carousels
        'section-lg': '96px',
        'section-xl': '128px',
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
    'hover:bg-accent-cyan',
    'hover:bg-accent-violet',
    'hover:bg-accent-pink',
  ],
};
