import { createStore } from 'vuex'
import RouteData from '../services/RouteData'

export default createStore({
  state: {
    dest:'109',
    selected:'110',
    database:{},
    current:{},
    bikes: {},
    fareSearchMode:false,
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
    },

    setCurrentID(state,id){
      state.selected = id
    },

    mountYoubike(state,db){
      state.bikes = db
    },

    setFareMode(state){
      state.fareSearchMode = true
    },

    unsetFareMode(state){
      state.fareSearchMode = false
    },

    setDest(state,id){
      state.dest = id
    }
    
  },
  actions: {
    // 取得並呼叫所有路線
    initRoute(){
      RouteData.getRoute()
      .then(response=>{
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
        context.commit('setCurrentID',payload)
        context.commit('loadCurrent',res.data)})
    },

    //票價查詢模式
    setFareMode(){
      this.commit('setFareMode')
    },

    //關閉票價查詢模式
    clearFareMode(){
      this.commit('unsetFareMode')
    },

    //載入終點站
    setDest(context,id){
      context.commit('setDest',id)
    },

    //取得Youbike即時資料
    getYoubike(){
      RouteData.getYouBikeStat()
      .then(response=>this.commit('mountYoubike',response.data.retVal))
      .catch(error=>console.log(error))
    }
  },
  getters: {

    getBikesById:(state) => (id) => {
        return state.bikes.find(bike => bike.sno === id)
    }
  },
  modules: {
  }
})
