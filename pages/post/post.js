var postData = require("../../data/post-data");
Page({
  data: {},
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数

    this.setData({
      postList: postData.postList
    });
  },

})