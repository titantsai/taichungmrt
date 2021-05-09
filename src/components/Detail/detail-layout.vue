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
            <div class="ds-nav-item">票價查詢</div>
            <div class="ds-nav-item">旅程時間</div>
            <div class="ds-nav-item">車站資訊</div>
            <div class="ds-nav-item">轉乘資訊</div>
        </div>
        <div class="ds-nav-view">
            <router-view></router-view>
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
        grid-template-columns: 1fr 1fr 1fr 1fr;
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
        display: flex;
        align-items: center;
        padding:12px 0;
        margin-left:16px;
        border-bottom:1px solid #b8b8b836
    }

    .ds-list-item:only-child, .ds-list-item:last-child{
        border-bottom: none;
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