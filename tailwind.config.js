module.exports = {
  purge: [
    // Caminhos para seus componentes React
    "./components/**/*.jsx",
    "./pages/**/*.jsx",
  ],
  darkMode: false, // Ou 'media' ou 'class'
  theme: {
    extend: {
      screens: {
        sm: "640px", // Personalize o breakpoint para telas pequenas
        md: "768px", // Personalize o breakpoint para telas médias
        lg: "1024px", // Personalize o breakpoint para telas grandes
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
