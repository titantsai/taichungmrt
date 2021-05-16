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

    setSearchMode(){
      this.commit('setFareSearch')
    },

    clearSearchMode(){
      this.commit('clearFareSearch')
    },

    setDest(context,payload){
      context.commit('setDest',payload)
    },

    getFare(context,data){
      if(this.state.current.uid===this.state.dest.uid){
        alert('請選擇不同的起迄站')
        return
      }
      RouteData.getFare(this.state.current.uid,this.state.dest.uid)
      .then(response=>{
        console.log(response.data);
        data = response.data;
        context.commit('loadFare',data);
      })
      .catch(error=>console.log(error))
    },

    clearFare(context){
      context.commit('clearFare')
    },

    getStationInfo(context,data){
      RouteData.getStationInfo(this.state.current.uid)
      .then(response=>{
        data = response.data;
        context.commit('loadStationInfo',data)
      })
      .catch(error=>console.log(error))
    },

    getStationTransfer(){
      RouteData.getStationTransfer(this.state.current.uid)
      .then(response=> console.log(response.data))
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
