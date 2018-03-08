const defaultOptions = {
  loader: {
    transpile: {
      // plugins: ['transform-es2015-modules-commonjs'],
      // presets: ['es2015', 'react']
    }
  },
  extentions: ['coffee']
}

module.exports = ({config}, userOptions={}) => {
  const options = Object.assign({}, defaultOptions, userOptions);
  const coffeeFileReg = new RegExp(`.(${options.extentions.join('|')})$`);
  return config
  .resolve
    .extensions
      .when(options.extentions,
        ({store}) => options.extentions.forEach( ext => store.add(`.${ext}`)))
      .end()
    .end()
  .module
    .rule('coffeescript')
      .test(coffeeFileReg)
        .use('coffee')
          .loader(require.resolve('coffee-loader'))
          .when(options.loader, use => use.options(options.loader))
        .end();
}
