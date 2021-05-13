<template>
    <div class="ds-list">
        <div class="ds-list-header">首末班車</div>
        <ul>
            <li class="ds-list-item ds-list-schedule" v-for="time in current.servicetime" :key="time.to">
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
            <li class="ds-list-item ds-list-exit" v-for="exit in current.exits" :key="exit.num">
                <div class="ds-exit">
                    <img class="ds-exit-num" :src="exit.src" alt="">
                    <div class="ds-exit-name">
                        <h3>{{exit.name}}</h3>
                        <p>{{exit.hints}}</p>
                    </div>
                </div>

                <div class="ds-exit-type-group">
                    <img v-if="exit.stair" src="@/assets/fac-stair.svg">
                    <img v-if="exit.escalator" src="@/assets/fac-escalator.svg"> 
                    <img v-if="exit.elevator" src="@/assets/fac-elevator.svg">  
                </div>
            </li>
        </ul>

        <div class="ds-list-header">車站設施</div>
            <ul>
                <li class="ds-list-item" v-for="service in current.services" :key="service.name">
                    <div class="ds-service-img"><img :src="service.src" alt=""></div>
                    <div class="ds-service-name">
                        <h3>{{service.name}}</h3>
                        <p>{{service.position}}</p>
                    </div>
                </li>
            </ul>
        <div class="ds-list-footer"></div>
    </div>
</template>

<script>

import store from '@/store'

export default {
    data(){
        return{
        }
    },
    mounted(){

    },
    computed:{
        current(){
            return store.state.stationInfo
        }
    }
}
</script>

<style>
    
    .ds-schedule-via, .ds-exit-num, .ds-service-img img{
        margin-right:16px;
        width:37px;
        height:37px;
    }

    

    .ds-list-schedule, .ds-list-exit{
        display: flex;
        justify-content: space-between;
    }

    .ds-time{
        display: flex;
        font-size:15px;
        color:var(--heading);
        align-items: center;}

    .ds-badge{
        padding:4px 4px;
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