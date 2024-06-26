/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      limeGreen: "#CFF434",
      green: "#11D200",
      greenLight: "#00FF75",
      greenDark: "#003A10",
      red: "#DD0C0C",
      white: "#fff",
    },
    extend: {
      screens: {
        xs: "360px", // Exemplo de breakpoint personalizado para telas pequenas
        sm: "640px", // Padrão para telas pequenas
        md: "768px", // Padrão para telas médias
        lg: "1024px", // Padrão para telas grandes
        xl: "1280px", // Padrão para telas extra grandes
      },
    },
  },
  plugins: [],
};
