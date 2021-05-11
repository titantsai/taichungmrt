<template>
    <div class="ds-list">
        <div class="ds-list-header">停車場</div>
        <ul>

        </ul>
        <div class="ds-list-header">iBike微笑單車</div>
        <ul>
            <li class="ds-list-item ds-list-ibike" v-for="IBike in IBikes" :key="IBike.sno" :id="IBike.sno">
                <div style="display:flex;align-items:center">
                    <img style="width:37px;height:37px;marginRight:16px;" src="@/assets/ibike.jpg"/>
                    <div>{{IBike.sna.slice(11)}}</div>
                </div>
                <div class="ds-ibike-status"><span style="fontSize:17px;fontWeight:500">{{IBike.sbi}}</span>/{{IBike.tot}}</div>
            </li>
        </ul>
        <div class="ds-list-header">公車轉乘</div>
        <ul>

        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            IBikes:{}
        }
    },
    watch(){
        
    },
    mounted(){
        this.iBikeStat()
    },

    methods:{
        iBikeStat(){
            axios.get(`https://datacenter.taichung.gov.tw/swagger/OpenData/9af00e84-473a-4f3d-99be-b875d8e86256?filters`)
            .then(res=>{this.IBikes = res.data.retVal})
            .catch(err=>console.log(err))
        }
    },
    computed:{

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
