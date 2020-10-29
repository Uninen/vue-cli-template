module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.ts',
    './src/**/*.js',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
