// components/dialog-new-room/dialog-new-room.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    modalHidden: {
      type: Boolean,
      value: true
    }, 

    title:{

      type:String,
      value:"内容"
    } 
  },

  /**
   * 组件的初始数据
   */
  data: {
    name:''
  },

  /**
   * 组件的方法列表
   */
  methods: {


    sureClick: function(){

      this.triggerEvent("sureEvent", {name:this.data.name})
    },

    bindReplaceInput: function(e){

      this.setData({

        name:e.detail.value
      })
    }
  }
})
