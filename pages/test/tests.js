// pages/test/tests.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notedata:[]
  },
  del(ev){
    let id=ev.currentTarget.dataset.id;
    let that=this;
    wx.showModal({
      title: '确认删除',
      content: '请确认是否要删除该条记录',
      success(res){
        if(res.confirm){
          delValue(that,id);
        }
        else if(res.cancel){
          console.log('不删除');
        }
      }
    })
  },
  edit(ev){
    let id=ev.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/edit/index?id='+id,
    })
  },
  turn:function(){
    wx.navigateTo({
      url:'/pages/edit/index',
    })
     },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    getValue(this);
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
function getValue(page){
  let arr=wx.getStorageSync('note');
  if(arr.length){
    page.setData({
      notedata:arr,
    })
  }
}
// 删除功能实现
function delValue(page,id){
  let arr=wx.getStorageSync('note');
  let data=[];
  arr.forEach((item)=>{
    if(id!=item.id){
      data.push(item);
    }
  })
  wx.setStorageSync('note', data);
  page.setData({
    notedata:data,
  })
}