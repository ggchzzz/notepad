// pages/edit/index.js
var utils=require('../../utils/util');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    datatemp:'',
    id:0,
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options',options)
    let id =options.id;
    if(id){
      getValue(this,id);
      console.log('this',this);
    }
    else {
      this.setData({
        id:new Date().getTime()
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (ev) {
    // console.log(ev)
  },
  sure:function(){
  let re=/^\s$/;
  if(!this.data.content||re.test(this.data.content)){
    return;
  }
  this.setData({
    time:utils.formatTime(new Date()),
  })
  setValue(this);
    wx.navigateBack();
  },
  show:function(ev){
    this.setData({
      content:ev.detail.value,
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
function setValue(page){
  console.log('setvalue执行了')
  let arr=wx.getStorageSync('note');
  let data=[];
  let flag=true;
  if(arr.length){
    arr.forEach((item)=>{
      if(item.id==page.data.id){
        item.time=utils.formatTime(new Date());
        item.content=page.data.content;
        flag=false;
      }
      data.push(item)
      })  
    }
    console.log('data',data);
    if(flag){
      data.push(page.data);
    }
    wx.setStorageSync('note', data)
  }
  function getValue(page,id){
    console.log('getvalue执行了')
    let arr=wx.getStorageSync('note');
    if(arr.length){
      arr.forEach((item)=>{
        if(item.id==id){
          page.setData({
            id:item.id,
            content:item.content
          })
        }
      })
    }
  
}