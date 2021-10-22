/*
 * @Author: your name
 * @Date: 2021-10-22 16:10:49
 * @LastEditTime: 2021-10-22 16:13:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dist\webpack.config.js
 */
module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      scss: {
        javascriptEnabled: true,
      }
    }
  }
}