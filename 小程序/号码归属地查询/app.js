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
      fail: function(err) {
        // 接口调用失败的回调函数
        console.log("失败")
        console.log(err)
      },
      complete: function(res) {
        // 接口调用结束的回调函数（调用成功、失败都会执行）
        console.log("complete")
        console.log(res)
      }
    })
  }
})