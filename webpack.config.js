//const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        // test: /\.(png|jp(e*)g|svg)$/,
        //   use: [{
        //       loader: 'url-loader',
        //       options: {
        //           limit: 8000, // Convert images < 8kb to base64 strings
        //           name: 'images/[hash]-[name].[ext]'
        //       }
        //   }]
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        // use: {
        //   // loader: "file-loader"
        //   // options: {
        //   //   name: "[name].[ext]",
        //   //   outputPath: "images",
        //   //   publicPath: "assets"
        //   // }
        // }
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "_images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        // loader: "url-loader?limit=100000"
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000, // Convert images < 8kb to base64 strings
              name: "_fonts/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(xml|gexf)$/i,
        // use: "raw-loader"
        use: [
          {
            loader: "raw-loader"
            // options: {
            //   limit: 100000000000000 // Convert images < 8kb to base64 strings
            //   // name: "_data/[name].[ext]"
            // }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/public",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new ExtractTextPlugin("style.css")
  ],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
    // compress: true,
    port: 8060
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      login_url:
        "http://localhost:8595/rest/user-mng/v1/get-token-by-user-pass",
      add_tracker_url:
        "http://localhost:8595/rest/social-analyzer/v1/tracker-add"
    })
  },
  node: { fs: "empty" }
};
