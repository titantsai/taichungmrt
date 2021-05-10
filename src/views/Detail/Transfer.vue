<template>
    <div class="ds-list">
        <div class="ds-list-header">停車場</div>
        <ul>

        </ul>
        <div class="ds-list-header">iBike</div>
        <ul>

        </ul>
        <div class="ds-list-header">公車轉乘</div>
        <ul>

        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/store'

export default {
    data(){
        return{
            IBikes:{}
        }
    },
    watch(){
        
    },
    mounted(){
        this.iBikeStat(store.state.current.iBikeUID)
    },

    methods:{
        iBikeStat(){
            axios.get(`https://datacenter.taichung.gov.tw/swagger/OpenData/9af00e84-473a-4f3d-99be-b875d8e86256?filters`)
            .then(res=>{
                console.log(res.data)})
            .catch(err=>console.log(err))
        }
    },
    computed:{

    }
}
</script>

<style scoped>

</style>
