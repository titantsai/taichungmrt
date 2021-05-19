import { createStore } from 'vuex'
import RouteData from '../services/RouteData'

export default createStore({
  state: {
      modalCollapsed:true,
      fareSelection:false,
      database:{},
      current:{},
      dest:{},
      fare:{},
      stationInfo:{},
      wxData:{}
  },
  mutations: {
    // 掛載所有路線
    loadData(state,obj){
      state.database = obj
    },

    selectedInfo(state,res){
      state.current = res
    },

    setDest(state,payload){
      state.dest = payload
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

    clearFare(state){
      state.fare = {}
      state.dest={}
    },

    loadStationInfo(state,data){
      state.stationInfo = data
    },

    collapseModal(state){
      state.modalCollapsed = true
    },

    expandModal(state){
      state.modalCollapsed = false
    },

    uplinkForecast(state,wx){
      state.wxData = wx
    }

  },
  actions: {
    // 取得並呼叫所有路線
    INIT_ROUTE(){
      RouteData.getRoute()
      .then(response=>{
        let db = response.data;
        this.commit('loadData',db)
      })
      .catch(err=>console.log(err))
    },
    
    SHOW_SELECTED(context,response){
      context.commit('selectedInfo',response)
    },

    SET_SEARCH_MODE(){
      this.commit('collapseModal')
      this.commit('setFareSearch')
    },

    CLEAR_SEARCH_MODE(){
      this.commit('clearFareSearch')
    },

    SET_DEST(context,payload){
      context.commit('setDest',payload)
    },

    GET_FARE(context,data){
        if(this.state.current.uid===this.state.dest.uid){
        alert('請選擇不同的起迄站')
        context.commit('clearFare')
        return
        } 

        RouteData.getFare(this.state.current.uid,this.state.dest.uid)
        .then(response=>{
        data = response.data;
        context.commit('loadFare',data)
        context.commit('expandModal')})
        .catch(error=>console.log(error))
    },

    CLEAR_FARE(context){
      context.commit('clearFare')
    },

    GET_STATION_INFO(context,data){
      RouteData.getStationInfo(this.state.current.uid)
      .then(response=>{
        data = response.data;
        context.commit('loadStationInfo',data)
      })
      .catch(error=>console.log(error))
    },

    GET_TRANSFER(){
      RouteData.getStationTransfer(this.state.current.uid)
      .then(response=> console.log(response.data))
    },

    GET_FORECAST(context,wxdata){
        setTimeout(()=>{
          RouteData.getForecast()
          .then(res=>{
          wxdata=res.data
          context.commit('uplinkForecast',wxdata)})
        },3000)
    }

  },
  getters: {

    GET_BIKES_By_ID:(state) => (id) => {
        return state.bikes.find(bike => bike.sno === id)
    }
  },
  modules: {
  }
})
