module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        extract: true,
        spriteFilename: svgPath => `sprite${svgPath.substr(-4)}`,
      });
    svgRule.use('svg-transform-loader').loader('svg-transform-loader');
    svgRule
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [
          { removeTitle: true },
          {
            removeAttrs: {
              attrs: '(fill|stroke)',
            },
          },
        ],
      });
    config.plugin('svg-sprite-loader-plugin').use(require('svg-sprite-loader/plugin'), [
      {
        plainSprite: true,
      },
    ]);
  },
};
