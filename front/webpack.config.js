const path = require("path");

const scssLoader = [
  "style-loader",
  {
    loader: "css-loader",
    options: {
      modules: {
        mode: "local",
        localIdentName: "[path][name]__[local]--[hash:base64:5]",
        context: path.resolve(__dirname, "src")
      }
    }
  },
  "sass-loader"
];

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/../back/public")
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/env"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: scssLoader
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    ]
  },
  devtool: "source-map"
};
