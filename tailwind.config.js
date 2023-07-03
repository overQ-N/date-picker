/** @type {import('tailwindcss').Config} */


const pxToRem = (px) => ({
  [px / 4]: `${px / 16}rem`,
});

const evenRemArray = Array.from({ length: 720 })
  .map((_, index) => index * 2 + 2)
  .map(pxToRem);


export default {
  prefix: 'tw-',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      gray: {
        0: '#ffffff',
        1: '#f9fafb',
        2: '#f3f4f6',
        3: '#e5e7eb',
        4: '#d1d5db',
        5: '#9ca3af',
        6: '#6b7280',
        7: '#111827',
        'alpha-12': 'rgba(17, 24, 39, 0.12)',
        'alpha-40': 'rgba(17, 24, 39, 0.40)',
        'alpha-75': 'rgba(17, 24, 39, 0.75)',
      },
      white: {
        'alpha-75': 'rgba(255,255,255,0.75)',
      },
      red: {
        0: '#fef2f2',
        1: '#fca5a5',
        2: '#ef4444',
        3: '#dc2626',
        4: '#991b1b',
      },
      // 主题色
      theme: {
        default: 'var(--sunzi-theme-color)',
        // default: "rgb(var(--sunzi-theme-color)) / <alpha-value>)",
        '006': 'var(--sunzi-theme-color-006)',
        ...Array.from({ length: 8 }).reduce((prev, curr, index) => {
          const key = `o${index + 1}`;
          prev[key] = `var(--sunzi-theme-color-${key})`;
          return prev;
        }, {}),
      },
      opacity: {
        85: '.85',
      },
      // 设计器 custom-layer
      layer: {
        // 蒙版
        mask: 'rgba(0, 0, 0, 0.5)',
      },
    },
    fontWeight: {
      400: 400,
      500: 500,
      900: 900,
    },
    boxShadow: {
      light: '0 1px 2px rgba(0, 0, 0, 0.05)',
      medium: '0 1px 2px -1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
      dark:
        '0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      deep:
        '0 0 0 1px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      // 盒子内阴影，主要用于边框
      ...Array.from({ length: 4 }).reduce((prev, curr, index) => {
        const key = `inset-${index + 1}`;
        prev[key] = `inset 0 0 0 ${index + 1}px var(--sunzi-theme-color)`;
        return prev;
      }, {}),
      'inset-red-1': '0 0 0 1px #fca5a5',
    },
    // 此配置下不会覆盖 tailwind 的内置变体
    extend: {
      colors: {
        inherit: 'inherit',
      },
      screens: {
        xs: { max: '768px' },
      },
      width: Object.assign({}, ...evenRemArray),
      height: Object.assign({}, ...evenRemArray),
      fontSize: {
        12: ['12px', '18px'],
        14: ['14px', '22px'],
        16: ['16px', '24px'],
        18: ['18px', '26px'],
        20: ['20px', '30px'],
        22: ['22px', '32px'],
        24: ['24px', '34px'],
        26: ['26px', '36px'],
        28: ['28px', '38px'],
        30: ['30px', '40px'],
        32: ['32px', '42px'],
        36: ['36px', '46px'],
        '12-regular': [
          pxToRem(12),
          {
            lineHeight: pxToRem(18),
            fontWeight: '400',
          },
        ],
        '12-medium': [
          pxToRem(12),
          {
            lineHeight: pxToRem(18),
            fontWeight: '500',
          },
        ],
        '12-black': [
          pxToRem(12),
          {
            lineHeight: pxToRem(18),
            fontWeight: '900',
          },
        ],
        '14-regular': [
          pxToRem(14),
          {
            lineHeight: pxToRem(22),
            fontWeight: '400',
          },
        ],
        '14-medium': [
          pxToRem(14),
          {
            lineHeight: pxToRem(22),
            fontWeight: '500',
          },
        ],
        '14-black': [
          pxToRem(14),
          {
            lineHeight: pxToRem(22),
            fontWeight: '900',
          },
        ],
        '16-regular': [
          pxToRem(16),
          {
            lineHeight: pxToRem(24),
            fontWeight: '400',
          },
        ],
        '16-medium': [
          pxToRem(16),
          {
            lineHeight: pxToRem(24),
            fontWeight: '500',
          },
        ],
        '16-black': [
          pxToRem(16),
          {
            lineHeight: pxToRem(24),
            fontWeight: '900',
          },
        ],
        '20-regular': [
          pxToRem(20),
          {
            lineHeight: pxToRem(30),
            fontWeight: '400',
          },
        ],
        '20-medium': [
          pxToRem(20),
          {
            lineHeight: pxToRem(30),
            fontWeight: '500',
          },
        ],
        '20-black': [
          pxToRem(20),
          {
            lineHeight: pxToRem(30),
            fontWeight: '900',
          },
        ],
        '24-regular': [
          pxToRem(24),
          {
            lineHeight: pxToRem(34),
            fontWeight: '400',
          },
        ],
        '24-medium': [
          pxToRem(24),
          {
            lineHeight: pxToRem(34),
            fontWeight: '500',
          },
        ],
        '24-black': [
          pxToRem(24),
          {
            lineHeight: pxToRem(34),
            fontWeight: '900',
          },
        ],
        '32-regular': [
          pxToRem(32),
          {
            lineHeight: pxToRem(38),
            fontWeight: '400',
          },
        ],
        '32-medium': [
          pxToRem(32),
          {
            lineHeight: pxToRem(38),
            fontWeight: '500',
          },
        ],
        '32-black': [
          pxToRem(32),
          {
            lineHeight: pxToRem(38),
            fontWeight: '900',
          },
        ],
        '36-regular': [
          pxToRem(36),
          {
            lineHeight: pxToRem(42),
            fontWeight: '400',
          },
        ],
        '36-medium': [
          pxToRem(36),
          {
            lineHeight: pxToRem(42),
            fontWeight: '500',
          },
        ],
        '36-black': [
          pxToRem(36),
          {
            lineHeight: pxToRem(42),
            fontWeight: '900',
          },
        ],
      },
      opacity: {
        85: '.85',
      },
      padding: Object.assign(
        {
          full: '100%',
        },
        ...evenRemArray,
      ),
      margin: Object.assign(
        {
          full: '100%',
        },
        ...evenRemArray,
      ),
      maxWidth: Object.assign({}, ...evenRemArray),
      backgroundSize: {
        100: '100% 100%',
      },
      animation: {
        'drawer-right': 'drawer-right 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'drawer-right': {
          '0%': { transform: 'translate(100%, 0)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
}

