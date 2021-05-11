<template>
    <div class="ds-list">
        <div class="ds-list-header">停車場</div>
        <ul>

        </ul>
        <div class="ds-list-header">iBike微笑單車</div>
        <ul>
            <li class="ds-list-item ds-list-ibike" v-for="Bike in YouBikes" :key="Bike">
                
            </li>
        </ul>
        <div class="ds-list-header">公車轉乘</div>
        <ul>

        </ul>
    </div>
</template>

<script>
import store from '@/store'

export default {
    data(){
        return{
            
        }
    },
    watch(){
        
    },
    created(){
        this.$store.dispatch('getYoubike');
    },
    methods:{
        getStationBike(id){
            return store.state.YouBike[id]
        }
    },
    computed:{
        YouBikes(){
            return store.state.YouBike
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
</style>
