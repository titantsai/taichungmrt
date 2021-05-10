<template>
  <div class="map">

    <div class="detail-sheet">
        <div class="ds-header">
            <div class="ds-currentstation">
                <div class="ds-num">
                    <img :src="selected.src"> 
                </div>
                <div class="ds-station"> 
                    <h3>{{selected.name}}</h3>
                    <p>{{selected.line}}</p>
                </div>
            </div>
            <div class="ds-nav">
                <router-link to="/#" class="ds-nav-item">旅程規劃</router-link>
                <router-link to="/facilities" class="ds-nav-item">車站資訊</router-link>
                <router-link to="/transfer" class="ds-nav-item">轉乘資訊</router-link>
            </div>
        </div>
        
        <router-view class="ds-nav-view">

        </router-view>
    </div>

    <div class="map-view">
      <RouteMap />
    </div>
  </div>

</template>

<script>

import store from '@/store'
import RouteData from '@/services/RouteData.js'
import RouteMap from '../components/RouteMap'

export default {
  components:{
    RouteMap
  },
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
        getStationInfo(id){
            RouteData.getStation(id)
            .then(res=>this.current=res.data)
            .catch(err=>console.log(err))
        }
    },

    computed:{
        
        Routes(){
            return store.state.database
        },

        selected(){
            return store.state.current
        }
    },
    watch:{

    }
}
</script>

<style>
    .map{
        display:inline-flex;
        height:100%;
        width:100%;
        position:relative
    }

    .list-view{
        width:375px;
        position:absolute;
    }

    .map-view{
        position: absolute;
        left:375px;
        width:calc(100vw - 375px);
        height: 100%;
        padding:3em;
        box-sizing: border-box;
        display:flex
    }

    .detail-sheet{
        width:375px;
        height:100vh;
        background:var(--grey);
    }

    .ds-header{
        padding:16px;
        background: var(--white);
        height:135px;
        box-sizing: border-box;
    }

    .ds-currentstation{
        display: flex;
    }

    .ds-nav{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap:12px;
        margin:1em 0;
        background-color: var(--white);
    }

    .ds-nav-item{
        padding:8px;
        background: var(--grey);
        border-radius: 6px;
        font-size:13px;
        text-decoration: none;
        color:var(--caption)
    }

    .ds-num img{
        margin-right:16px;
        width:37px;
        height:37px;
    }

    .ds-station{
        text-align: start;
    }

    .ds-station h3{
        line-height: 23px;
        font-size:19px;
        color:var(--black);
        margin:0;
        margin-bottom: 3px;
    }

    .ds-station p{
        line-height: 14px;
        font-size:12px;
        margin:0;
    }

    .ds-nav-view{
        height:calc( 100vh - 135px);
        overflow: auto;
    }

    .router-link-exact-active{
        background-color:var(--blue);
        color:var(--white)
    }

    .ds-list{
        background-color:var(--grey);
    }

    .ds-list ul{
        list-style: none;
        margin:0;
        padding:0;
        border-top:0.5px solid #b8b8b848;
        border-bottom:0.5px solid #b8b8b848;
        background-color:var(--white)
    }

    .ds-list-header{
        text-align: start;
        padding:8px 16px 4px 16px;
        font-size:13px;
        line-height: 18px;
        color:var(--caption)
    }

    .ds-list-item{
        height:72px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding:12px 0;
        margin-left:16px;
        border-bottom:1px solid #b8b8b836
    }

    .ds-list-item:only-child, .ds-list-item:last-child{
        border-bottom: none;
    }

    .ds-list-footer{
        height:1.5em;
        background-color:var(--grey)
    }

    @media screen and (max-width:512px) {
        .detail-sheet{
            position:absolute;
            z-index:3;
            top:60px;
            width: 100%;
            border-radius: 10px 10px 0 0;
            overflow:hidden;
        }
        
    }
</style>