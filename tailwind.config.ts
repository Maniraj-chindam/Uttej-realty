import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Warm Ivory Background
                ivory: {
                    50: '#F9F7ED',
                    100: '#F4F0DB',
                    200: '#EDE9D5',
                    300: '#E5DFCA',
                    400: '#D9D1B8',
                    500: '#CCC3A5',
                    600: '#B8AD8E',
                },
                // Champagne Gold Accents
                champagne: {
                    50: '#FDF9F3',
                    100: '#FAF0E0',
                    200: '#F5E1C0',
                    300: '#EBCC96',
                    400: '#DEB86B',
                    500: '#C9A962',
                    600: '#B8943D',
                    700: '#9A7A32',
                    800: '#7D612A',
                    900: '#664E24',
                },
                // Stone Gray Surfaces
                stone: {
                    50: '#F8F7F6',
                    100: '#EEEDEB',
                    200: '#E0DEDB',
                    300: '#C9C6C2',
                    400: '#A8A29E',
                    500: '#8A8480',
                    600: '#6F6A66',
                    700: '#5A5652',
                    800: '#494643',
                    900: '#3D3B38',
                },
                // Charcoal Text
                charcoal: {
                    50: '#F5F5F5',
                    100: '#E8E8E8',
                    200: '#D1D1D1',
                    300: '#A3A3A3',
                    400: '#737373',
                    500: '#525252',
                    600: '#404040',
                    700: '#2E2E2E',
                    800: '#1C1C1C',
                    900: '#0F0F0F',
                    950: '#080808',
                },
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'Helvetica Neue', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display-xl': ['5.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
                'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'display': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
                'display-sm': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                'headline': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.005em' }],
                'title': ['1.5rem', { lineHeight: '1.35' }],
                'body-lg': ['1.125rem', { lineHeight: '1.7' }],
                'body': ['1rem', { lineHeight: '1.75' }],
                'caption': ['0.875rem', { lineHeight: '1.6' }],
                'micro': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '34': '8.5rem',
                '38': '9.5rem',
                '42': '10.5rem',
            },
            boxShadow: {
                'soft': '0 4px 30px -5px rgba(0, 0, 0, 0.04)',
                'soft-lg': '0 10px 50px -10px rgba(0, 0, 0, 0.06)',
                'luxury': '0 30px 80px -20px rgba(0, 0, 0, 0.08)',
                'luxury-lg': '0 40px 100px -25px rgba(0, 0, 0, 0.1)',
                'glow-gold': '0 0 60px -10px rgba(201, 169, 98, 0.3)',
                'inner-luxury': 'inset 0 2px 20px 0 rgba(0, 0, 0, 0.03)',
            },
            animation: {
                'fade-in': 'fadeIn 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
                'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
                'fade-in-down': 'fadeInDown 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
                'slide-in-left': 'slideInLeft 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
                'slide-in-right': 'slideInRight 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
                'scale-in': 'scaleIn 1s cubic-bezier(0.22, 1, 0.36, 1)',
                'reveal': 'reveal 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
                'float': 'float 8s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-60px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(60px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                reveal: {
                    '0%': { clipPath: 'inset(0 100% 0 0)' },
                    '100%': { clipPath: 'inset(0 0% 0 0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms',
                '800': '800ms',
                '1000': '1000ms',
                '1200': '1200ms',
            },
            transitionTimingFunction: {
                'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            backdropBlur: {
                'xs': '2px',
            },
        },
    },
    plugins: [],
};

export default config;
