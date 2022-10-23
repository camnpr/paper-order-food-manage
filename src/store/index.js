
import { createStore } from 'vuex'
import property from './modules/property'
// 创建一个新的 store 实例
export default createStore({
  // 模块引入
  modules: {
    property
  }
})
