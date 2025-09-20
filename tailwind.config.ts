import type { Config } from 'tailwindcss';

const config: Config = {
  // Path untuk file yang akan di-scan oleh Tailwind
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Mengaktifkan dark mode berdasarkan class 'dark' di elemen <html>
  darkMode: 'class',
  theme: {
    extend: {
      // Menambahkan font Inter, sama seperti di kode HTML asli
      fontFamily: {
        inter: ['Inter', 'sans-serif',    'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'],
      },
      // Menambahkan konfigurasi untuk animasi kustom
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 1s ease-out 0.3s both',
        'float': 'float 3s ease-in-out infinite',
        'pulse-on-hover': 'pulse 0.5s ease-in-out',
        'spin': 'spin 1s ease-in-out infinite',
      },
      // Mendefinisikan keyframes untuk animasi kustom
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(50px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        spin: {
          'to': { transform: 'rotate(360deg)' },
        },
      },
      // Menambahkan konfigurasi untuk warna
      colors: {
        'gray-50': '#f9fafb',
        'gray-200': '#e5e7eb',
        'gray-300': '#d1d5db',
        'gray-400': '#9ca3af',
        'gray-500': '#6b7280',
        'gray-600': '#4b5563',
        'gray-700': '#374151',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
        "50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"
      },
      // Menyesuaikan konfigurasi transisi
      transitionProperty: {
        'colors': 'background-color, color, border-color',
        'transform': 'transform',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;