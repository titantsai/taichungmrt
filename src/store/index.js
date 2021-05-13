import { createStore } from 'vuex'
import RouteData from '../services/RouteData'

export default createStore({
  state: {
      fareSelection:false,
      database:{},
      current:{},
      origin:'',
      dest:'',
      fare:{},
      stationInfo:{},
  },
  mutations: {
    // 掛載所有路線
    loadData(state,obj){
      state.database = obj
    },

    selectedInfo(state,res){
      state.current = res
    },

    setOrigin(state,payload){
      state.origin = payload
      console.log(state.origin)
    },

    setDest(state,payload){
      state.dest = payload
      console.log(state.dest)
    },

    setFareSearch(state){
      state.fareSelection=true
    },

    clearFareSearch(state){
      state.fareSelection=false
    },

    loadFare(state,data){
      state.fare = data
    },

    loadStationInfo(state,data){
      state.stationInfo = data
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
    
    showSelected(context,response){
      context.commit('selectedInfo',response)
    },

    setOrigin(context,payload){
      context.commit('setOrigin',payload)
    },

    setDest(context,payload){
      context.commit('setDest',payload)
    },

    getFare(context,data){
      RouteData.getFare(this.state.origin,this.state.dest)
      .then(response=>{
        data = response.data;
        context.commit('loadFare',data)
      })
    },

    getStationInfo(context,data){
      RouteData.getStationInfo(this.state.current.uid)
      .then(response=>{
        data = response.data;
        context.commit('loadStationInfo',data)
      })
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
