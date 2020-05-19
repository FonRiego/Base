module.exports = {
  devServer: {
    port: 8089
  },

  chainWebpack: config => {
    // eslint
    config.module.rule('eslint').use('eslint-loader').options({ fix: true })

    // pug
    config.module.rule('pug').oneOf('pug-vue')
      .clear()
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .options({ basedir: './' })
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/vars/vars.scss";'
      }
    }
  }
}