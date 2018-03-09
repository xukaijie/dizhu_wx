var {COMMON}=require('../config/index.js');
var { getJson,postJson} = require('./util.js');

const getOpenedMediaFirstType = (params={})=> {
   return getJson(COMMON.GET.MEDIA_FIRST_TYPE_LIST,params);
}

const createRoom = (params) => {
  return postJson(COMMON.POST.CREATE_ROOM,params)
}

const getUserList = ()=>{
  return getJson(COMMON.GET.GET_USER_LIST);
}

const getRoomList = () => {
  return getJson(COMMON.GET.GET_ROOM_LIST);
}

const addOneRound = (params) =>{

  return postJson(COMMON.POST.ADD_ONE_ROUND, params)
}

const getRoomDetail = (params) => {
  return getJson(COMMON.GET.GET_ROOM_DETAIL,params);
}
module.exports={
  getOpenedMediaFirstType,
  createRoom,
  getUserList,
  getRoomList,
  addOneRound,
  getRoomDetail
}