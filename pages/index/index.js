//index.js
//获取应用实例

import { getUserList} from '../../service/common.js'
const app = getApp()

Page({
  data: {
    userList:[]
  },
  onLoad: function () {

    getUserList()
    .then((data)=>{
      this.setData({
        userList:data.data
      })
    })
  },

  selectRole: function (e) {
    wx.setStorageSync( 'userId', e.currentTarget.id);

    wx.navigateTo({
      url: '../room/room',
    })
  }
})
