const apiHost = 'https://www.xkjtencent.cn';// 开发环境

const COMMON = { // 各模块经常复用的模块
      GET:{
        // 获取一级媒体类型列表
        MEDIA_FIRST_TYPE_LIST: `${apiHost}/api/v1/supplier/common/list/media-first-type`,

        GET_USER_LIST: `${apiHost}/api/v1/userList`,

        GET_ROOM_LIST: `${apiHost}/api/v1/roomList`,

        GET_ROOM_DETAIL: `${apiHost}/api/v1/roomDetail`,
      },

      POST:{

        CREATE_ROOM: `${apiHost}/api/v1/createRoom`,

        ADD_ONE_ROUND: `${apiHost}/api/v1/addOneRound`,
      },
}

module.exports={
  COMMON
}