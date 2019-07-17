var path = require("path");

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  },
};