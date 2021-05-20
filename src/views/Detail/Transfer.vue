<template>
    <div class="ds-list" v-if="transfer">
        <div class="ds-list-header">轉乘停車場</div>
        <ul v-if="transfer.parking">
            <li class="ds-list-item trans-list-item" v-for="parking in transfer.parking" :key="parking">
                <div class="parking-name">
                    <img class="parking-type" src="@/assets/transfer-bike.svg" v-if="parking.type==='bike'">
                    <img class="parking-type" src="@/assets/transfer-motorbike.svg" v-if="parking.type==='motorbike'">
                    <p>{{parking.name}}</p>
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
        <div class="ds-list-header">公共自行車</div>
        <ul>
            <li class="ds-list-item">

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
    mounted(){
        store.dispatch('GET_TRANSFER')
    },
    computed:{
        transfer(){
            return store.state.transferData
        }
    }
}
</script>

<style scoped>
    .ds-list-ibike{
        display: flex;
        justify-content: space-between;
    }

    .ds-ibike-status{
        color:var(--heading);
        font-size:13px;
        margin-right:16px;
    }
    .ds-ibike-rentable{
        font-size:17px;
    }

    .trans-list-item{
        display: flex;
        justify-content:space-between;
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
        margin-right:4px;
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
        font-weight: 500;
    }

    .ds-bus-stop{
        font-size:13px;
        color:var(--caption);
        margin:0;
    }
</style>
