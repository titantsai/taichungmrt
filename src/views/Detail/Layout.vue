<template>
    <div class="ds-header">
        <div class="ds-currentstation">
            <div style="display:flex">
                <img v-if="current" class="ds-num" :src="current.path" alt="UID"/>  
                <h3 class="ds-station"> {{current.zh}}</h3>
                 <img class="ds-transfer-icon" src="@/assets/line-HSR.svg" v-if="current.uid===119">
                <img class="ds-transfer-icon" src="@/assets/line-TRA.svg" v-if="current.transit">
            </div>
           
        </div>


        <transition name="slide" mode="in-out">
            <div class="ds-nav">
                <router-link to="/search" @click="initSearch" class="ds-nav-item" replace>設為起點</router-link>
                <router-link :to="{name:'StationFacilities'}" class="ds-nav-item" @click="openModal" replace>站點資訊</router-link>
                <router-link class="ds-nav-item" :to="{name: 'StationTransfer'}" @click="openModal" replace>轉乘資訊</router-link>
            </div>
        </transition>
    </div>
    <router-view class="ds-nav-view">

    </router-view>
</template>

<script>
import store from '@/store'
export default {
    methods:{
        initSearch(){
            store.commit('collapseModal')
            store.dispatch('SET_SEARCH_MODE')
        },

        endSearch(){
            store.dispatch('CLEAR_SEARCH_MODE')
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
        margin-top:8px;
        padding:16px;
        padding-top:8px;

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
    }

    .ds-nav-item{
        text-align:center;
        width:64px;
        border:none;
        padding:8px 0;
        font-size:14px;
        font-weight: 500;
        color:var(--caption);
        text-decoration: none;
        justify-self: center;
    }

    .ds-nav-item.router-link-exact-active{
        border-bottom:2px solid var(--system-blue);
        color:var(--heading)
    }

    .ds-num{
        width:37px;
        height:37px;
    }

    .ds-station{
        text-align: start;
        margin: auto 16px auto 16px;
        align-items: center;
        line-height: 23px;
        font-size:19px;
        color:var(--heading);
    }

    .ds-transfer-icon{
        align-self:center;
        margin-right:8px;
        width:24px;
        height:24px;
    }

    .ds-nav-view{
        height:calc( 100vh - 135px);
        overflow: auto;
    }


    .ds-list{
        height:calc(100% - 150px);
        overflow-y: auto;
    }

    .ds-list ul{
        list-style: none;
        margin:0;
        padding:0;
        border-top:0.5px solid var(--list-divider);
        border-bottom:0.5px solid var(--list-divider);
        background-color:var(--list-bg)
    }

    .ds-list-header{
        text-align: start;
        padding:8px 16px 4px 16px;
        font-size:13px;
        line-height: 18px;
        color:var(--caption);
        background-color:var(--list-hd);
    }

    .ds-list-item{
        height:72px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding:12px 0;
        margin-left:16px;
        border-bottom:1px solid var(--list-divider)
    }

    .ds-list-item:only-child, .ds-list-item:last-child{
        border-bottom: none;
    }

    .ds-list-footer{
        height:1.5em;
        background-color:var(--list-hd)
    }

    .slide-enter-active,
    .slide-leave-active{
        transition:opacity 1s, transform 1s;
    }

    .slide-enter,
    .slide-leave-to{
        opacity: 0;
        transform:translate(-30%)
    }


</style>