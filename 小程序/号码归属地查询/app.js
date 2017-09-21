//app.js
App({
  getPhoneInfo(phoneNum,callback){
    wx.request({
      url: 'https://www.iteblog.com/api/mobile.php?mobile=' + phoneNum,
      header: {
        'content-type':'application/json'
      }, // 设置请求的 header
      success: function(res){
        // success
        callback(res.data)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})