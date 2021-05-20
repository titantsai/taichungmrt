<template>
    <div class="ds-list" v-if="transfer">
        <div class="ds-list-header">轉乘停車場</div>
        <ul v-if="transfer.parking">
            <li class="ds-list-item trans-list-item" v-for="parking in transfer.parking" :key="parking">
                <div style="display:flex;padding-right:1em;align-items:center">
                    <div class="ds-service-img">
                        <img src="@/assets/transfer-bike.svg" v-if="parking.type==='bike'">
                        <img src="@/assets/transfer-motorbike.svg" v-if="parking.type==='motorbike'">
                    </div>
                    <div class="ds-service-name">
                        <h3>{{parking.name}}</h3>
                    </div>
                </div>
                <div style="display:flex;padding-right:1em">
                    <p class="parking-amount">車格總數：{{parking.amount}}</p>
                </div>
            </li>    
        </ul>

        <ul v-else>
            <li class="ds-list-item">
                <p style="font-size:15px;color:var(--caption)">本站無轉乘停車場</p>
            </li>
        </ul>
        <div class="ds-list-header">Youbike2.0</div>
        <ul>
            <li class="ds-list-item ds-list-bikes" v-for="bike in transfer.bikes" :key="bike.uid">
                <div style="display:flex;align-items:center">
                    <div class="ds-service-img"><img class="ds-ubike-logo" src="@/assets/ubike.png"></div>
                    <div class="ds-service-name">
                        <h3>{{getBikeStatus(bike.uid).sna.slice(11)}}</h3>
                    </div>
                </div>
                <div class="ds-bike-amount">{{getBikeStatus(bike.uid).sbi}}<span>/{{getBikeStatus(bike.uid).tot}}</span></div>
            </li>
        </ul>
        <div class="ds-list-header">公車及客運</div>
        <ul>
            <li class="ds-list-item" v-for="(busroute,index) in transfer.bus" :key="index">
                <div class="ds-bus-num">{{busroute.id}}</div>
                <div class="ds-bus-info">
                    <h3 class="ds-bus-headSign">{{busroute.headSign}}</h3>
                    <p class="ds-bus-stop">{{busroute.stop}}</p>
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
            counter:500
        }
    },
    mounted(){
        store.dispatch('GET_TRANSFER')
    },
    methods:{
        getBikeStatus(id){
            return store.state.bikesData.find(data=>data.sno === `${id}`)
        }
    },
    computed:{
        transfer(){
            return store.state.transferData
        }
    }
}
</script>

<style scoped>
    .trans-list-item{
        justify-content: space-between;
    }

    .parking-name{
        color:var(--heading);
        display:flex;
        align-items: center;
    }

    .parking-type{
        width:37px;
        height:37px;
        margin-right:8px;
    }

    .parking-amount{
        color:var(--caption);
        font-size:15px;
    }

    .ds-bus-num{
        font-size:17px;
        width:54px;
        text-align:start;
        font-weight:500;
        color:var(--system-blue);
        }

    .ds-bus-info{
        align-self: center;
    }

    .ds-bus-headSign{
        text-align: start;
        font-size: 15px;
        color:var(--heading);
        margin:0;
        margin-bottom:6px;
        font-weight: 400;
    }

    .ds-bus-stop{
        font-size:13px;
        color:var(--caption);
        margin:0;
    }

    .ds-list-bikes{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ds-ubike-logo{
        width:37px;
        height: 37px;
        margin-right:16px;
    }

    .ds-ubike-name{
        font-weight: 400;
        font-size:15px;
        color:var(--heading)
    }

    .ds-bike-amount{
        margin-right:16px;
        font-size:17px;
        font-weight: 500;
        color:var(--heading)
    }

    .ds-bike-amount span{
        font-size:13px;
        color:var(--caption);
    }
    
</style>
