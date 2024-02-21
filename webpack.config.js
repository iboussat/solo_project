const path = require('path');

module.exports = {
  mode: 'development',
    
  entry: './client/javascript/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  module: {
    rules: [
        {
            test: /\.jsx?/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-env', {targets: "defaults"}],
                            ['@babel/preset-react', {targets: "defaults"}]
                    ],
                }
            }
        },
        {
            test: /\.(sa|sc|c)ss$/,
            exclude: /(node_modules)/,
            use: [
                {
                    loader: "css-loader",
                },
                {
                    loader: "postcss-loader"
                },
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass")
                    }
                    
                }
                
            ]
        }

    ]
  },
};
