<template>
  <div class="route">
    <div class="route-map" id="routemap">
        <div v-for="route in Routes" :key="route.id">
            <div class="route-bg">
              <img :src="route.path" alt="">
            </div>
            
            <div  
              class="route-station" 
              v-for="station in route.stations" 
              :key="station.id" 
              :style="{top:`${station.position.top}`,left:`${station.position.left}`}"
              @click="selectStation(station)">
              <span class="route-station-dot" :class="{hasTransit:station.transit}" :style="{borderColor:`${route.color}`}"></span>
              <div class="route-station-tag" :class="`${station.position.tag}`">{{station.zh}}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

//import Panzoom from '@panzoom/panzoom'

export default {
    mounted(){
      // const elem = document.querySelector('#routemap')
      // const parent = elem.parentElement
      // let panzoom = Panzoom(elem,{
      //   maxScale:2,
      //   minScale:0.5,
      //   startScale:0.75,
      //   excludeClass:'route-station',
      // })
      // parent.addEventListener('wheel', panzoom.zoomWithWheel)
    },
    data(){
      return{
        
      }
    },
    methods:{
      selectStation(index){
        if(store.state.fareSelection){
          store.dispatch('setDest',index)
          store.dispatch('getFare')
          store.dispatch('clearSearchMode')
          return
        }
          store.dispatch('clearSearchMode')
          store.dispatch('clearFare')
          this.$router.replace({name:'StationInfo' , params:{id: `${index.uid}`}})        
          store.dispatch('showSelected',index);
          
      }
    },
    computed:{
        Routes(){
            return store.state.database
        },
        searchMode(){
          return store.state.fareSelection
        }
    }
}
</script>

<style scoped>

  .route{
    overflow:hidden;
    -webkit-overflow-scrolling: none;
  }

  .route-map{
    touch-action:pan-x pan-y pinch-zoom;
    position:relative;
    width:840px;
    height:570px;
    margin-left:auto;
    margin-right:auto;
  }


  @media screen and (max-width:512px) {
      .route{
        min-height:570px;
        overflow-x:auto;
        overflow-y:hidden;
      }
  }

  .route-bg{
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
  }

  .router-link-exact-active.route-station{
    background-color:none;
  }

  .router-link-exact-active.route-station .route-station-tag{
    font-size:16px;
    font-weight: 700;
 
  }

  .router-link-exact-active.route-station .route-station-dot{
    width:16px;
    height:16px;
    border:4px solid;
  }

  .route-station{
    position: absolute;
    cursor: pointer;
  }

  .route-station-dot{
    display:block;
    width:10px;
    height:10px;
    border:3px solid var(--green);
    border-radius: 50%;
    background-color:var(--grey);
    z-index:2;
    transform:translate(-50%, -50%);
   
  }

  .route-station-tag{
    color:var(--map-tag);
    position:absolute;
    display: block;
    width:64px;
    text-align: center;
    font-size:14px;
  }

  .top{top:-30px;left:-32px;}

  .bottom{top:15px;left:-32px;}

  .left{top:-8px;left:-84px;text-align:end}

  .right{top:-8px;left:15px;text-align:start}

  .bottom-left{top:15px;left:-75px;width:72px;text-align: end;}

  .hasTransit{
    background-color:#494949;
  }
</style>