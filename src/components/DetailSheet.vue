<template>
    <div class="detail-sheet">
        <div class="ds-header">
            <div class="ds-num">
                <img :src="selected.src"> 
            </div>
            <div class="ds-station"> 
                <h3>{{selected.name}}</h3>
                <p>{{selected.line}}</p>
            </div>
        </div>
        <div class="ds-nav">

        </div>
        <div class="ds-nav-view">
            <div class="ds-list">
                <div class="ds-list-header">出入口</div>
                <ul>
                    <li class="ds-list-item" v-for="exit in selected.exits" :key="exit.num">
                        <div class="ds-exit-icon"><img :src="exit.src" :alt="exit.num"></div>
                        <div class="ds-exit-name">
                            <h3>{{exit.name}}</h3>
                            <p>{{exit.hints}}</p>
                            <div class="ds-exit-type-group">
                                 <img src="../assets/fac-stair.png" v-show="exit.stair" alt="stair">
                                <img src="../assets/fac-escalator.png" v-show="exit.escalator" alt="escalator">
                                 <img src="../assets/fac-elevator.png" v-show="exit.elevator" alt="elevator">
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="ds-list-header">車站設施</div>
                <ul>
                    <li class="ds-list-item" v-for="service in selected.services" :key="service.name">
                        <div class="ds-service-img"><img :src="service.src" alt=""></div>
                        <div class="ds-service-name">
                            <h3>{{service.name}}</h3>
                            <p>{{service.position}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store'
import RouteData from '@/services/RouteData.js'

export default {
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

<style scoped>
    .detail-sheet{
        width:375px;
        top:0;
        left:0;
        background: white;
    }

    .ds-header{
        padding:16px;
        display: flex;
        align-items: center;
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

    .ds-list{
        background-color:var(--grey);
    }

    .ds-list ul{
        list-style: none;
        margin:0;
        padding:0;
        border-top:0.5px solid #b8b8b836;
        border-bottom:0.5px solid #b8b8b836;
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
        display: flex;
        align-items: center;
        padding:16px 0;
        margin-left:16px;
        border-bottom:1px solid #b8b8b836
    }

    .ds-exit-icon{
        display:block;
        margin-right:16px;
        width:60px;
        height:60px;
    }

    .ds-exit-name h3, p{
        margin:0;
        margin-bottom:3px;
        text-align: start;
    }

    .ds-exit-name h3{
        font-size:17px;
        line-height: 22px;
        color:var(--heading);
    }

    .ds-exit-name p{
        font-size:12px;
        line-height: 14px;
        color:var(--caption)
    }

    .ds-exit-type-group{
        text-align: start;
    }

    .ds-exit-type-group img{
        width:24px;
        height:24px;
        margin-right:10px
    }

    .ds-service-img img{
        width:30px;
        height:30px;
        margin-right:16px;
    }

    .ds-service-name{
        text-align: start;
    }

    .ds-service-name h3, p{
        margin:0;
        margin-bottom: 3px;
    }

    .ds-service-name h3{
        font-size:17px;
        color:var(--heading)
    }

    .ds-service-name p{
        font-size:12px;
        color:var(--caption)
    }
</style>