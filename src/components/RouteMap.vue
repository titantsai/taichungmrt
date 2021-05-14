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
import Panzoom from 'panzoom'

export default {
    created(){

    },
    mounted(){
      this.panzoom = Panzoom(document.querySelector('#routemap'),{
        bounds:true,
        boundsPadding:0.75,
         smoothScroll:false,
         minZoom:0.5,
         maxZoom:2,
         initialZoom:0.75,
       })
    },
    data(){
      return{
        
      }
    },
    methods:{
      selectStation(index){
        if(store.state.fareSelection){
          store.dispatch('setDest',index);
          store.dispatch('getFare')
          return
        }
          store.dispatch('showSelected',index);
          store.dispatch('getStationInfo')
      }
    },
    computed:{
        Routes(){
            return store.state.database
        }
    }
}
</script>

<style scoped>

  .route{
    overflow:hidden;
    width: 100%;
    height: 100%;
  }

  .route-map{
    position:relative;
    width:840px;
    height:570px;
    margin-left:auto;
    margin-right:auto;
  }


  @media screen and (max-width:512px) {
      .route{
        max-width:100%;
        width:375px;
        min-height:570px;
        overflow-x:auto;
        overflow-y:hidden;
      }

      .route-map{
        transform: matrix(0.75,0,0,0.75,-100,-50);
      }
  }

  .route-bg{
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
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