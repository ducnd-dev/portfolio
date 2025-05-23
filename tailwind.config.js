/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
          DEFAULT: '#10b981',
          dark: '#047857',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
          DEFAULT: '#d946ef',
          dark: '#a21caf',
        },
        tertiary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
          DEFAULT: '#f97316',
          dark: '#c2410c',
        },
        dark: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          lighter: '#334155',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
        // Thêm gradient tùy chỉnh
        'primary-gradient': 'linear-gradient(to right, #3b82f6, #1d4ed8)',
        'secondary-gradient': 'linear-gradient(to right, #10b981, #047857)',
        'accent-gradient': 'linear-gradient(to right, #d946ef, #a21caf)',
        'tertiary-gradient': 'linear-gradient(to right, #f97316, #c2410c)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'shine': 'shine 1.5s infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': { backgroundSize: '400% 400%', backgroundPosition: 'center top' },
          '50%': { backgroundSize: '200% 200%', backgroundPosition: 'center center' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundSize: '200% 200%', backgroundPosition: 'left center' },
          '50%': { backgroundSize: '200% 200%', backgroundPosition: 'right center' },
        },
        'gradient-xy': {
          '0%, 100%': { backgroundSize: '400% 400%', backgroundPosition: 'left center' },
          '50%': { backgroundSize: '200% 200%', backgroundPosition: 'right center' },
        },
        'shine': {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['light'],
  },
  safelist: [
    // Gradient từ primary
    'from-primary', 'from-primary-50', 'from-primary-100', 'from-primary-200', 'from-primary-300',
    'from-primary-400', 'from-primary-500', 'from-primary-600', 'from-primary-700', 'from-primary-800',
    'from-primary-900',
    
    // Gradient từ secondary
    'from-secondary', 'from-secondary-50', 'from-secondary-100', 'from-secondary-200', 'from-secondary-300',
    'from-secondary-400', 'from-secondary-500', 'from-secondary-600', 'from-secondary-700', 'from-secondary-800',
    'from-secondary-900',
    
    // Gradient từ accent
    'from-accent', 'from-accent-50', 'from-accent-100', 'from-accent-200', 'from-accent-300',
    'from-accent-400', 'from-accent-500', 'from-accent-600', 'from-accent-700', 'from-accent-800',
    'from-accent-900',
    
    // Gradient từ tertiary
    'from-tertiary', 'from-tertiary-50', 'from-tertiary-100', 'from-tertiary-200', 'from-tertiary-300',
    'from-tertiary-400', 'from-tertiary-500', 'from-tertiary-600', 'from-tertiary-700', 'from-tertiary-800',
    'from-tertiary-900',
    
    // Gradient tới
    'to-primary', 'to-secondary', 'to-accent', 'to-tertiary',
    'to-primary-500', 'to-secondary-500', 'to-accent-500', 'to-tertiary-500',
    
    // Các hướng gradient phổ biến
    'bg-gradient-to-r', 'bg-gradient-to-l', 'bg-gradient-to-t', 'bg-gradient-to-b',
    'bg-gradient-to-tr', 'bg-gradient-to-tl', 'bg-gradient-to-br', 'bg-gradient-to-bl',
  ],
}