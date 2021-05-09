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
        height:100%;
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
</style>