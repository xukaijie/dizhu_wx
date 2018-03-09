// pages/room/room.js
import { getRoomList, createRoom } from '../../service/common.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

    roomList:[],
    modalHidden:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    this.getRoomListPage();
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
  
  },

  getRoomListPage: function(){

    getRoomList()
      .then((data) => {

        this.setData({
          roomList: data.data
        })
      })
  },

  newRoom: function () {

    this.setData({
      modalHidden:false
    })
  },

  _sureEvent:function(e){

    createRoom(e.detail)
    .then(()=>{
      this.getRoomListPage();
      this.setData({
        modalHidden:true
      })
    })
  },

  clickRoom: function(e){

    wx.setStorageSync('roomId', e.currentTarget.id);
    wx.navigateTo({
      url: '../roomDetail/roomDetail',
    })
  }
})