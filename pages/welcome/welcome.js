// pages/welcome/welcome.js
Page({
  onTap : function(){
    wx.redirectTo({
      url: "../post/post"
    });
  }
})