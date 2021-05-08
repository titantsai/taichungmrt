<template>
    <div class="bottom-sheet">
      <div class="bottom-sheet_header">
        <div class="station_num">
          <img :src="selected.src" alt="">
        </div>
        <div>
          <h3 class="">{{selected.name}}</h3>
          <p class="">{{selected.line}}</p>
        </div>
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
              <div class="item-icon">
                <img :src="service.src" alt="">
              </div>
              <div style="align-content:center">
                <h5>{{service.name}}</h5>
                <p>{{service.position}}</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import RouteData from '@/services/RouteData.js'

export default {
    data(){
      return{
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

  .bottom-sheet{
    display:block;
    width:375px;
    top:0;
    z-index:3;
    background-color:white;
    overflow-y:auto;
  }

  .bottom-sheet_header{
    display: block;
    padding:16px;
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

  .item-icon img{
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