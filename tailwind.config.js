module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#A52422',
            hover: '#8C1E1C'
          },
          secondary: {
            DEFAULT: '#A4BAB7',
            hover: '#8FA7A4'
          },
          accent: {
            light: '#EFF2C0',
            DEFAULT: '#BEA57D',
            dark: '#080F0F'
          }
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      },
    },
    plugins: [],
  }
  