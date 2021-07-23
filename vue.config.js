module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/shop_treelife/' : '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'TreeLife';
      return args;
    });
  },
};
