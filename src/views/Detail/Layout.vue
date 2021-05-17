<template>
    <div class="ds-header">
        <div class="ds-currentstation">
            <div style="display:flex">
                <img class="ds-num" :src="current.path" alt="UID"/>  
                <div class="ds-station">
                    <h3> {{current.zh}}</h3>
                    <div class="ds-transfer-logo">
                        <p>{{current.line}}</p>
                        <img src="@/assets/line-HSR.svg" v-if="current.en==='HSR Taichung Station'" alt="HSR">
                        <img src="@/assets/line-TRA.svg" v-if="current.transit" alt="TRA">
                    </div>
                </div>
            </div>
  
        </div>

        <div class="ds-nav">
            <router-link to="/search" @click="initSearch" class="ds-nav-item">設為起點</router-link>
            <router-link :to="{name:'StationFacilities'}" class="ds-nav-item" @click="openModal" replace>站點資訊</router-link>
            <router-link class="ds-nav-item" :to="{name: 'StationTransfer'}">轉乘資訊</router-link>
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
        padding-top:8px;
        background: var(--modalbg);
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
        background-color: var(--modal-bg);
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

    .ds-num{
        width:48px;
        height:48px;
    }

    .ds-station{
        text-align: start;
        margin-left:12px;
    }

    .ds-station h3{
        width:150px;
        line-height: 23px;
        font-size:19px;
        color:var(--heading);
        margin:0;
        
    }

    .ds-station p{
        color:var(--caption);
        font-weight: 500;
        line-height: 24px;
        font-size:14px;
        margin:0;
        padding-bottom:0;
    }

    .ds-transfer-logo{
        display:flex;
        align-items: center;
    }

    .ds-transfer-logo img{
        margin-left:8px;
        width:24px;
        height:24px;
    }

    .ds-nav-view{
        height:calc( 100vh - 135px);
        overflow: auto;
    }


    .ds-nav-item.router-link-exact-active{
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
        border-top:0.5px solid var(--divider);
        border-bottom:0.5px solid var(--divider);
        background-color:var(--list-bg)
    }

    .ds-list-header{
        text-align: start;
        padding:8px 16px 4px 16px;
        font-size:13px;
        line-height: 18px;
        background-color:var(--list-hd);
        color:var(--caption)
    }

    .ds-list-item{
        height:72px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding:12px 0;
        margin-left:16px;
        border-bottom:1px solid var(--divider)
    }

    .ds-list-item:only-child, .ds-list-item:last-child{
        border-bottom: none;
    }

    .ds-list-footer{
        height:1.5em;
        background-color:var(--list-bg)
    }
</style>