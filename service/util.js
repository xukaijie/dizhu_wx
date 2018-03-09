const Promise = require('../lib/es6-promise.min.js').Promise

const checkCode = (res) => {

  var data = res.data;
  if (!data) {
    return false
  }
  
  if (data.err === -1){

    wx.showModal({
      title: '错误',
      content: data.message || "请求失败",
    })
    return false;
  }

  return true;
}

const getJson = (url,params={})=>{
    var paramArray = [];
    for (var key in params){
      paramArray.push(key+'='+params[key]);
    }
    var urlString = paramArray.length === 0?url:url+'?'+ paramArray.join('&');

    return new Promise((resolve, reject) => {
      wx.request({
        url: urlString,
        method: 'GET',
        success: res => {
          if (!checkCode(res)) {
            reject(res)
          }
          else {
            resolve(res.data) // unwrap data
          }
        },
        fail: err => {

          console.log(err);
          wx.showToast({
            title: '失败',
            content:err,
            duration: 2000
          })
          reject(err)
        }
      })
    })
}


const postJson = (url,data = {},params = {}) => {
  var paramArray = [];
  var paramString = '';
  for (var key in params) {
    paramArray.push(key + '=' + params[key]);
  }
  var urlString = paramString.length === 0 ? url : '?' + paramArray.join('&');

  return new Promise((resolve, reject) => {
    wx.request({
      url: urlString,
      method: 'POST',
      data: data,
      success: res => {
        if (!checkCode(res)) {
          reject(res)
        }
        else {
          resolve(res.data) // unwrap data
        }
      },
      fail: err => {
        wx.showToast({
          title: '失败',
          content:err,
          duration: 2000
        })
        reject(err)
      }
    })
  })
}

module.exports={
  getJson,
  postJson
}