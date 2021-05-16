<template>
    <div class="ds-header">
        <div class="ds-currentstation">
            <div style="display:flex">
                <img class="ds-num" :src="current.path"/>  
                <div class="ds-station">
                    <h3> {{current.zh}}</h3>
                    <p>{{current.line}}</p>
                </div>
            </div>    

            <div style="display:flex">
                <img src="@/assets/line-HSR.svg" v-show="current.en==='HSR Taichung Station'" alt="">
                <img src="@/assets/line-TRA.svg" style="margin-left:8px" v-show="current.transit" alt="">
            </div>
        </div>

        <div class="ds-nav">
            <a class="ds-nav-item">路線規劃</a>
            <router-link :to="{name:'StationFacilities'}" class="ds-nav-item" @click="openModal" replace>站點資訊</router-link>
            <button class="ds-nav-item" to="transfer">轉乘資訊</button>
        </div>
    </div>
    <router-view class="ds-nav-view">

    </router-view>
</template>

<script>
import store from '@/store'
export default {
    methods:{
        initSearch(){
            store.dispatch('setSearchMode')
        },

        endSearch(){
            store.dispatch('clearSearchMode')
        },

        setOrigin(id){
            store.commit('setFareSearch');
            store.dispatch('setOrigin',id)
        },

        setDest(id){
            store.dispatch('setDest',id);
            if(store.state.origin === store.state.dest){ alert('請選擇不同的起迄站'); return}
            store.dispatch('getFare');
            store.commit('clearFareSearch')
        },
        openModal(){
            store.commit('expandModal')
            document.querySelector('#bottomsheet').style.height='100%';
        }
    },
    computed:{
        fareSearchMode(){
            return store.state.fareSelection
        },

        current(){
            return store.state.current
        },

        dest(){
            return store.state.dest
        },

        fareData(){
            return store.state.fare[0]
        },
    },
}
</script>

<style>

    .list-view{
        width:375px;
        position:absolute;
    }

    .map-view{
        position: absolute;
        left:375px;
        width:calc(100vw - 375px);
        height: 100%;
        padding:3em;
        box-sizing: border-box;
        display:flex
    }

    .detail-sheet{
        position:relative;
        width:375px;
        height:100vh;
        background:var(--grey);
        bottom: 0;
    }

    .ds-header{
        padding:16px;
        background: var(--white);
        box-sizing: border-box;
    }

    .ds-currentstation{
        display: flex;
        justify-content: space-between;
    }

    .ds-nav{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap:16px;
        margin-top:1em;
        background-color: var(--white);
    }

    .ds-nav-item{
        background-color:var(--grey);
        border:none;
        border-radius:4px;
        padding:8px;
        font-size:14px;
        font-weight: 400;
        color:var(--caption);
        text-decoration: none;
    }

    .ds-num img{
        width:37px;
        height:37px;
    }

    .ds-station{
        text-align: start;
        margin-left:16px;
    }

    .ds-station h3{
        line-height: 23px;
        font-size:19px;
        color:var(--black);
        margin:0;
        margin-bottom: 3px;
    }

    .ds-station p{
        line-height: 16px;
        font-size:14px;
        margin:0;
    }

    .ds-nav-view{
        height:calc( 100vh - 135px);
        overflow: auto;
    }

    .router-link-exact-active{
        background-color:var(--blue);
        color:var(--white)
    }

    .ds-list{
        background-color:var(--grey);
        height:calc(100% - 150px);
        overflow-y: auto;
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

    .ds-list-footer{
        height:1.5em;
        background-color:var(--grey)
    }
</style>