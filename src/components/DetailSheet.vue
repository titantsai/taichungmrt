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
            <div class="ds-nav-item">旅程規劃</div>
            <div class="ds-nav-item">車站資訊</div>
            <div class="ds-nav-item">轉乘資訊</div>
        </div>
        <div class="ds-nav-view">
            <div class="ds-list">
                <div class="ds-list-header">首末班車</div>
                <ul>
                    <li class="ds-list-item ds-list-schedule" v-for="time in selected.servicetime" :key="time.to">
                        <div class="ds-schedule">
                            <div class="ds-schedule-via"><img :src="time.via"/></div>
                            <div class="ds-schedule-name">
                                <h3>往{{time.to}}</h3>
                            </div>
                        </div>

                        <div style="display:flex;margin-right:16px;">
                            <div class="ds-time"><span class="ds-badge">首</span>{{time.first}}</div>
                            <div class="ds-time"><span class="ds-badge">末</span>{{time.last}}</div>
                        </div>
                    </li>
                </ul>
                <div class="ds-list-header">出入口資訊</div>
                <ul>
                    <li class="ds-list-item ds-list-exit" v-for="exit in selected.exits" :key="exit.num">
                        <div class="ds-exit">
                            <img class="ds-exit-num" :src="exit.src" alt="">
                            <div class="ds-exit-name">
                                <h3>{{exit.name}}</h3>
                                <p>{{exit.hints}}</p>
                            </div>
                        </div>
                        <div class="ds-exit-type-group">
                            <img src="../assets/fac-stair.png">
                            <img src="../assets/fac-escalator.png"> 
                            <img src="../assets/fac-elevator.png">  
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
        height:100vh;
        top:0;
        left:0;
        background:var(--grey);
        overflow: auto;
    }

    .ds-header{
        padding:16px;
        display: flex;
        align-items: center;
        background: var(--white);
    }

    .ds-nav{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap:12px;
        padding:16px;
        background-color: var(--white);
    }

    .ds-nav-item{
        padding:8px;
        background: var(--grey);
        border-radius: 6px;
        font-size:13px;
        color:var(--caption)
    }

    .ds-schedule-via, .ds-exit-num, .ds-num img,.ds-service-img img{
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
        margin-bottom:1.5em;
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

    .ds-list-schedule, .ds-list-exit{
        display: flex;
        justify-content: space-between;
    }

    .ds-time{
        display: flex;
        font-size:15px;
        color:var(--heading);}

    .ds-badge{
        padding:2px 4px;
        font-size:12px;
        border-radius: 4px;
        background-color:var(--caption);
        color:var(--white);
        margin:0 6px;
        vertical-align: baseline;
    }

    .ds-schedule,.ds-exit{
        display:flex;
        align-items: center;
    }

    .ds-schedule-name h3{
        margin:0;
        font-size:17px;
        color:var(--heading);
        padding:0;
        line-height: 22px;
        font-weight:400;
    }

    .ds-exit-name h3, p{
        margin:0;
        margin-bottom:3px;
        text-align: start;
    }

    .ds-exit-name h3{
        font-weight:400;
        font-size:17px;
        line-height: 22px;
        color:var(--heading);
    }

    .ds-exit-name p{
        font-weight: 400;
        font-size:12px;
        line-height: 14px;
        color:var(--caption)
    }

    .ds-exit-type-group{
        margin:0;
        margin-right:16px;
    }

    .ds-exit-type-group img{
        width:24px;
        height:24px;
        margin-left:8px
    }

    .ds-service-name{
        text-align: start;
    }

    .ds-service-name h3, p{
        font-weight:400;
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