module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
      './public/**/*.html',
      './src/**/*.vue',
      
  ],
  theme: {
    extend: {
      colors: {
          "awesome-color": "#56b890",
      },
    },
  },
  variants: {
    zIndex: ['responsive', 'hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
