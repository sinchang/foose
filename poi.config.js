const path = require('path')
const pkg = require('./package')

module.exports = {
  entry: [
    'docs/src/polyfills.js',
    'docs/src/index.js'
  ],
  dist: 'dist-doc',
  html: {
    title: pkg.productName,
    description: pkg.description,
    template: path.join(__dirname, 'index.ejs')
  },
  postcss: {
    plugins: [
      // Your postcss plugins
    ]
  },
  webpack(config) {
    config.resolve.alias.vue$ = 'vue/dist/vue.js'
    config.resolve.alias['@'] = path.join(__dirname, 'packages')
    return config
  },
  extendWebpack(config) {
    config.module.rule('markdown')
      .test(/\.md$/)
      .exclude
        .add(/(node_modules|bower_components)/)
        .end()
      .use('vue')
        .loader('vue-loader')
        .end()
      .use('markdown-to-vue')
        .loader('markdown-to-vue-loader')
        .options({
          componentWrapper: '<example></example>',
          preWrapper: '<highlight></highlight>'
          // tableClass: 'table table--bordered table--striped table--responsive',
        })
  }
}
