# hello-webpack-2
Getting started with Webpack 2
https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.7mjdh7b5i

Webpack, Dev-Server und eine Library für einen Import installieren.
```
npm init -y
npm install --save-dev webpack@beta webpack-dev-server@beta
npm install --save moment
```

`src/app.js` erstellen und anschließend Webpack ausprobieren.
```
./node_modules/.bin/webpack
./node_modules/.bin/webpack -p
```
`-p` steht für *Production* Build, wodurch das Bundle unleserlich und minifiziert wird.

`src/index.html` erstellen und anschließend den Dev-Server ausprobieren.
```
./node_modules/.bin/webpack-dev-server
```
Änderungen an der JavaScript Datei sollten zu einem automatisch reload der Seite führen.

Webpack spricht nur JavaScript. Wenn man zB. ES6 via Babel benutzen möchte, dann müssen entsprechende **Loader** hinzugefügt werden.

```
npm install --save-dev babel-loader babel-core babel-preset-es2015
```
Die `webpack.config.js` muss anschließend wie folgt erweitert werden.
```
module.exports = {
  // …
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      },
    ],
  },
// …
};
```
