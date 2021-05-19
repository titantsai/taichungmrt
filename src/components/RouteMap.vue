<template>
  <div class="route">
    <div class="route-map" id="routemap">
        <div v-for="route in Routes" :key="route.id">
            <div class="route-bg">
              <img :src="route.path" alt="">
            </div>
            
            <div
            :class="{active:active(station.uid)}"
              class="route-station" 
              v-for="station in route.stations" 
              :key="station.uid" 
              :style="{top:`${station.position.top}`,left:`${station.position.left}`}"
              @click="selectStation(station)">
              <div class="route-station-dot" :class="{hasTransit:station.transit}" :style="{borderColor:`${route.color}`}" ></div>
              <div class="route-station-tag" :class="`${station.position.tag}`">{{station.zh}}</div>
            </div>
     
        </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

import Panzoom from '@panzoom/panzoom'

export default {
    mounted(){
        const elem = document.querySelector('#routemap')
        const parent = elem.parentElement
        let preset = {}

        if(window.screen.width<=512){
          preset={maxScale:2,minScale:0.5,startScale:0.75,startX:-320,startY:-50}
        }else{
          preset={maxScale:2,minScale:1,startX:0,startY:0}
        }
        const panzoom = Panzoom(elem,preset)
        
        parent.addEventListener('wheel', panzoom.zoomWithWheel)
    },
    data(){
      return{
        
      }
    },
    methods:{
      selectStation(index){
        if(index.line === 'tra'){return}
        else if(store.state.fareSelection){
          store.dispatch('SET_DEST',index)
          store.dispatch('GET_FARE')
          return
        }
          store.dispatch('CLEAR_SEARCH_MODE')
          store.dispatch('CLEAR_FARE')
          this.$router.replace({name:'StationInfo' , params:{id: `${index.uid}`}})
          store.dispatch('SHOW_SELECTED',index);
      },
      active(index){
        return index.toString() === this.$route.path.slice(9)
      }
    },
    computed:{
        Routes(){
            return store.state.database
        },
        searchMode(){
          return store.state.fareSelection
        },
    }
}
</script>

<style scoped>

  .route{
    overflow:hidden;
    -webkit-overflow-scrolling: none;
    height:90%;
    display:flex;
    align-items:center
  }

  .route-map{
    touch-action:pan-x pan-y pinch-zoom;
    position:relative;
    width:840px;
    height:570px;
    margin:auto auto;
  }


  @media screen and (max-width:512px) {
      .route{
        margin-top:60px;
        height:70%;
        min-height:570px;
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
    width:8px;
    height:8px;
    border-radius: 50%;
    background-color:var(--white);
    border:1px solid var(--map-tag);
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

  .bottom-left{top:15px;left:-100px;width:96px;text-align: end;}

  .hasTransit{
    border:1px solid;
    background-color:#505050;
    
  }

  .active .route-station-dot{
    width:12px;
    height:12px;
    border:3px solid;
    box-shadow: 0 2px 4px rgba(0,0,0,.36);
    transition:width height .2s ease-in
  }

  .active  .route-station-tag{
    font-size:16px;
    font-weight:500;
    color:var(--green);
    transition: font-size .1s ease-in
  }
</style>