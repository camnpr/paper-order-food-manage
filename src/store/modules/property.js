import { toRaw, reactive } from '@vue/reactivity'

export default {
  namespaced: true,
  state: {
    VisitorInfo: '空',    // 访客列表所有数据
    VisitorDetail: reactive([]),    // 访客查询的数据
    CarInfo: '', // 汽车所有数据
    carDetails: reactive([]) //汽车查询数据


  },
  mutations: {
    // 保存数据到state中 
    saveVisitorInfo(state, val) {
      state.VisitorInfo = val
    },
    saveCarInfo(state, val) {
      state.CarInfo = val
    }
  },
  actions: {
    // 查询对应详情页的数据
    visitorDetail(ctx, val) {
      let id = val
      let VisitorInfo = toRaw(ctx.state.VisitorInfo)      // 转换为普通对象
      let result = VisitorInfo.filter((item) => item.id === id)      // 数组过滤 返回查询的结果
      ctx.state.VisitorInfo.splice(0) //清空原数组
      ctx.state.VisitorDetail.push(result)      // 查到的数据传到state中
    },
    //查询汽车搜索的数据
    CarSearch(ctx, val) {
      let id = val
      let CarInfo = toRaw(ctx.state.CarInfo)      // 转换为普通对象
      let result = CarInfo.filter((item) => item.ownerId === id)      // 数组过滤 返回查询的结果
      ctx.state.carDetails.splice(0) //清空原数组
      ctx.state.carDetails.push(result)      // 查到的数据传到state中
    },


  },
  getters: {

  }
}
