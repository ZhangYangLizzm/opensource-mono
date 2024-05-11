/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1677ff",
      },
      container: {
        center: true,
        screens: {
          mobile: { max: '640px' },
          tablet: '768px',
          pc: '1024px',
        }
      },
      screens: {
        mobile: { max: '640px' },
        tablet: '768px',
        pc: '1024px',
      }

    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
