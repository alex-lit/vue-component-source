module.exports = {
  assetsDir: 'assets',

  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },

  css: {
    sourceMap: true,
  },

  outputDir: process.env.OUTPUT_DIR || 'dist',

  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue-component-source/' : '/',
};
