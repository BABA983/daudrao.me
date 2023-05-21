const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const hoverPlugin = plugin(function ({ addVariant, e, postcss }) {
  addVariant('hover', ({ container, separator }) => {
    console.log(container, separator);
    const hoverRule = postcss.atRule({
      name: 'media',
      params: '(hover: hover)',
    });
    hoverRule.append(container.nodes);
    container.append(hoverRule);
    hoverRule.walkRules((rule) => {
      rule.selector = `.${e(
        `hover${separator}${rule.selector.slice(1)}`
      )}:hover`;
    });
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      red: '#df9997',
      green: '#badb97',
      yellow: '#dfbc98',
      blue: '#97bcde',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [hoverPlugin],
};
