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
              @click="selectStation(station.id)">
              <span class="route-station-dot" :class="{hasTransit:station.transit}" :style="{borderColor:`${route.color}`}"></span>
              <div class="route-station-tag" :class="`${station.position.tag}`">{{station.zh}}</div>
            </div>
        </div>
    </div>

    <div class="bottom-sheet">
      <div class="bottom-sheet_header">
        <h3 class="">{{selected.name}}</h3>
        <p class="">{{selected.line}}</p>
      </div>
        <div>
          <div class="list-header">出入口</div>
          <ul class="sheet-list">
            <li class="list-item" v-for="exit in selected.exits" :key="exit">
                <div class="item-icon">
                  <img :src="exit.src"> 
                </div>               
                <div>                  
                  <h5>{{exit.name}}</h5>
                  <p>{{exit.hints}}</p>
                  <div class="exit-types">
                    <img v-if="exit.stair" class="exit-icon" src="../assets/fac-stair.png" alt="樓梯"/>
                    <img v-if="exit.elevator" class="exit-icon" src="../assets/fac-elevator.png" alt="電梯"/>
                    <img v-if="exit.escalator" class="exit-icon" src="../assets/fac-escalator.png" alt="電扶梯"/>
                  </div>
                </div>
            </li>
          </ul>
          <div class="list-header">站點設施</div>
          <ul class="sheet-list">
            <li class="list-item" v-for="service in selected.services" :key="service.name">
              <div style="align-content:center">
                <h5>{{service.name}}</h5>
                <p>{{service.position}}</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import RouteData from '@/services/RouteData.js'
import Panzoom from 'panzoom'

export default {
    mounted(){
      RouteData.getRoute()
      .then(response=>this.Routes=response.data)
      .catch(error=>console.log(error)),
      
      this.panzoom = Panzoom(document.querySelector('#routemap'),{
        bounds:true,
        smoothScroll:false,
        minZoom:0.5,
        maxZoom:2,
        initialZoom:0.75,
      })
    },
    data(){
      return{
        Routes:[],
        selected:{}
      }
    },
    methods:{
      selectStation(index){
        RouteData.getStation(index)
        .then(res=>this.selected=res.data)
        .catch(err=>console.log(err))
      }
    }
}
</script>

<style scoped>

  .route{
    width:90%;
    margin-left:auto;
    margin-right: auto;
    height:100%;
    overflow:hidden;
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

  .bottom-sheet{
    position:absolute;
    top:0;
    left:0;
    width:375px;
    z-index:3;
    height:100%;
    background-color:white;
    overflow-y:auto;
  }

  .bottom-sheet_header{
    display: block;
  }

  .header-name{
    display:flex;
    font-size:19px;
    font-weight: 500;
    color:var(--heading);
  }

  .header-line{
    display: flex;
    font-size:12px;
    font-weight: 300;
    color:var(--caption);
    margin:0;
    padding:0;
  }

  .sheet-list{
    list-style: none;
    padding:0;
    margin:0;
  }

  .item-icon{
    width:60px;
    height:60px;
    margin:0 16px;
  }

  .exit-types{
    margin-top:6px;
  }

  .exit-icon{
    width:24px;
    height: 24px;
    margin-right:10px;
  }

  .list-header{
    background-color:var(--grey);
    font-size:13px;
    text-align: start;
    padding:16px 16px 8px 16px
  }


  .list-item{
    height:101px;
    padding:0;
    margin:0;
    border-bottom: 0.5px solid #B8B8BB;
    text-align: start;
    display: flex;
  }

  .list-item:only-child, .list-item:last-child{
    border-bottom:none
  }

  .list-item div{
    align-self: center;
  }

  .list-item h5{
    margin:0;
    font-size: 17px;
    color:var(--black);
    line-height: 22px;
    margin-bottom:2px;
  }

  .list-item p{
    font-size: 12px;
    color:var(--caption);
    line-height: 14px;
    margin:0;
  }
  

</style>