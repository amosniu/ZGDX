//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/dianxin_lunbotu01.jpg',
      '/images/dianxin_lunbotu02.jpg',
      '/images/dianxin_lunbotu03.jpg',
      '/images/dianxin_lunbotu04.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  }
})
