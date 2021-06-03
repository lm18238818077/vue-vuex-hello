
module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? 'https://f3-xz.veimg.cn/activity/2021/zjdf/' : '/',
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://api-lms3.9first.com/',
        pathRewrite: { '^/api': '' },
      },
    }
  }
};
