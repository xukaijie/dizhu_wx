// pages/roomDetail/roomDetail.js

import { getUserList, addOneRound, getRoomDetail } from '../../service/common.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    rounds:[],
    modalHidden: true,
    cureentUserId:"",
    roomId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    var cureentUserId = wx.getStorageSync('userId');
    var roomId = wx.getStorageSync('roomId');

    this.setData({
      cureentUserId: cureentUserId,
      roomId: roomId
    })
    getRoomDetail({ roomId: roomId })
      .then((data) => {
        getUserList()
          .then((data1) => {
            this.setData({
              rounds: data.data,
              userList: data1.data
            })
          })
      
      })
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


  getRommDetail: function (roomId){
    getRoomDetail({ roomId: roomId})
    .then((data)=>{
        this.setData({
          rounds:data.data
        })
    })
  },

  _sureEvent: function (e) {

    this.setData({

      modalHidden: true
    })

    console.log(e.detail.name);
    var num = parseInt(e.detail.name);

    if (typeof num !== 'number'){
        wx.showModal({
          title: '傻逼',
          content: '傻逼输入数字',
        })

        return;
    };

    var cureentUserId = this.data.cureentUserId

    var params = {};

    params[cureentUserId] = num;

    var other = -(num/2);

    for (var i = 0; i < this.data.userList.length;i++){

      if (this.data.userList[i].userId !== this.data.cureentUserId){

          params[this.data.userList[i].userId] = other;
      }
    }


    addOneRound({

      roomId:this.data.roomId,
      detail:params
    }).then(()=>{

      this.getRommDetail(this.data.roomId)
    })

  },

  newRound: function(){

    this.setData({

      modalHidden:false
    })
  },

  refresh:function(){

    this.getRommDetail(this.data.roomId)
  }
})