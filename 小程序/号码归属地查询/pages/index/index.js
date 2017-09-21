var app=getApp();
Page({
  data:{
    phoneNumber:null,
    phoneInfo:null,
    disabled:true,
    historyList: []  // 查询历史
  },
  //输入
  bindPhoneInput(event){
    this.setData({
      phoneNumber:event.detail.value,
      // phoneInfo:null
    });
    this.clearQueryRst();
    this.setDisabled();
  },
  //验证手机是否为11位
  setDisabled(){
    this.setData({
      disabled:(this.data.phoneNumber && this.data.phoneNumber.toString().lenght===11)?false:true
    })
  },
  //查询
  queryPhoneInfo(){
    app.getPhoneInfo(this.data.phoneNumber,data => this.setData({
      phoneInfo:data
    }));
    this.addQueryHistory(this.data.phoneNumber); // 添加搜索记录
  },
  //将搜索记录添加到缓存
  addQueryHistory(phoneNumber){
    var historyList = wx.getStorageSync('historyList') || [];
    if(historyList.indexOf(phoneNumber)===-1){
      historyList.unshift(phoneNumber);
      wx.setStorageSync('historyList', historyList);
    }
    this.setData({
      historyList:historyList
    })
  },
  // 页面加载后，从缓存中读取最近搜索列表
  onLoad:function(){
    this.setData({
      historyList:wx.getStorageSync('historyList')||[]
    })
  },
  // 用户点击记录之后，将其添加到输入框
  selectHistory(event){
    this.setData({
      phoneNumber:event.currentTarget.dataset.number,
      disabled:false
    });
     this.clearQueryRst();
  },
  /**
   * 清空查询结果
   */
  clearQueryRst() {
    this.setData({
      phoneInfo: null
    })
  }
})