# neutrino-coffeescript

this preset is simple wrapper for [coffee-loader](https://github.com/webpack-contrib/coffee-loader)

### usage
package.json:
```
{
  "scripts": {
    "start": "neutrino start --use neutrino-coffeescript",
    "build": "neutrino build --use neutrino-coffeescript"
  }
}
```

or .neutrinorc.js:
```
module.exports = {
  use: ['neutrino-coffeescript']
};
```

with react:
```
module.exports = {
  use: [
    '@neutrinojs/react',
    'neutrino-coffeescript', {
      loader: {
        transpile: {
          presets: ['react']
        }
      },
      extentions: ['coffee', 'cjsx']
    }
  ]
};
```
loader is options for [coffee-loader](https://github.com/webpack-contrib/coffee-loader), default: `{}`

extentions is string array of file extentions, default: `['coffee']`
