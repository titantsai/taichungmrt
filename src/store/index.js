import { createStore } from 'vuex'
import RouteData from '../services/RouteData'

export default createStore({
  state: {
    selected:'110',
    database:{},
    current:{}
  },
  mutations: {
    // 掛載所有路線
    loadData(state,obj){
      state.database = obj
    },

    clearCurrent(state){
      state.current= null
    },

    // 掛載選取車站的資料
    loadCurrent(state,obj){
      state.current = obj
    }
    
  },
  actions: {
    // 取得並呼叫所有路線
    initRoute(){
      RouteData.getRoute()
      .then(response=>{
        console.log(response.data)
        let db = response.data;
        this.commit('loadData',db)
      })
      .catch(err=>console.log(err))
    },
    // 選取車站
    selection(context,payload){
      RouteData.getStation(payload)
      .then(res=>{
        context.commit('clearCurrent');
        context.commit('loadCurrent',res.data)})
    }
  },
  modules: {
  }
})
