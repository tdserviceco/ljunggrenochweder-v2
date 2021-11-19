const stage1 = { stage: 1 };
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')(stage1),
    require('postcss-mixins'),
    require('autoprefixer'),
    require('cssnano'),
  ]
}