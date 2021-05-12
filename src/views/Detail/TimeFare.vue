<template>

    <button @click="searchFare">搜尋</button>
    
    <div class="ds-list">
        <div class="ds-list-header">票價資訊</div>
        <ul>
            <li class="ds-list-item" v-for="fare in fareData.Fares" :key="fare">{{fareType[fare.TicketType-1]}}{{fareClass[fare.FareClass-1]}},{{fare.Price}}元</li>
        </ul>
        <div class="ds-list-header">旅程時間</div>
        <ul>
            <li class="ds-list-item">旅程時間： {{fareData.TravelTime}}分</li>
        </ul>
    </div>
</template>

<script>

import store from '@/store'
import RouteData from '@/services/RouteData'

export default {
    mounted(){
        this.$store.dispatch('setFareMode')
    },
    unmounted(){
        this.$store.dispatch('clearFareMode')
    },
    data(){
        return {
            fareData:{},
            fareType:['一般','來回','電子票證','回數','定期(30天)','定期(60天)'],
            fareClass:['成人票','學生票','孩童票','敬老票','愛心票','愛心孩童票','愛心陪伴票','團體票']
   }
    },
    methods:{
        searchFare(){
            if(this.$store.state.selected === this.$store.state.dest){alert('請選擇與起點不同的車站'); return}
            RouteData.getFare(this.$store.state.selected,this.$store.state.dest)
            .then(response=>this.fareData = response.data[0])
        }
    },
    computed:{
        selectedDest(){
            return store.state.dest
        }
    }
}
</script>

<style scoped>

</style>