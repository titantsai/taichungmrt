
<template>
    <div class="container">
        <div class="ms-sheet" id="bottomsheet" :class="{msCollapsed:modalCollapsed}" @touchstart="initTouch" @touchmove="handleTouch" @touchend="endTouch">
            <div class="ms-handle"><span></span></div>
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
                    <router-link to="/facilities" class="ds-nav-item" @click="openModal" replace>站點資訊</router-link>
                    <button class="ds-nav-item" to="transfer">轉乘資訊</button>
                </div>
            </div>
            <router-view class="ds-nav-view">
        
            </router-view>

        </div>

        <div class="map-container">
            <RouteMap/>
        </div>
    </div>
</template>

<script>
import store from '@/store'
import RouteMap from '../components/RouteMap'
export default {
    components:{
       RouteMap
    },
    data(){
        return{
            modalCollapsed: true,
            fullHeight:'',
            initY:'',
            endY:'',
        }
    },
    created(){
        store.dispatch('initRoute')
    },
    methods:{
        initTouch(e){
            this.initY = e.touches[0].clientY
            this.fullHeight = e.touches[0].pageY
            console.log(e.touches[0])
        },

        handleTouch(e){
            if(this.modalCollapsed === true){
                let modalheight = `calc( 100% - ${e.touches[0].clientY}px)`
                document.querySelector('#bottomsheet').style.height = modalheight
            } 
        },

        endTouch(e){
            this.endY = e.changedTouches[0].clientY;
            if(this.endY < this.initY){
                this.modalCollapsed = false
                document.querySelector('#bottomsheet').style.height= '100%';
            }
            else if(this.endY > this.initY){
                this.modalCollapsed = true
                document.querySelector('#bottomsheet').classList.add="msCollapsed"
            }
        },
        openModal(){
            this.modalCollapsed = false;
            document.querySelector('#bottomsheet').style.height='100%';
        },

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
        }
    },
}
</script>

<style>
    body > .app-container {
        display:flex;
        width: 100vw;
        height:100%;
        height:-moz-available;
        height:-webkit-fill-available;
        height: fill-available;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch; /* enables “momentum” (smooth) scrolling */
    }
    
    .ms-sheet{
        box-sizing:border-box;
        position:absolute;
        bottom:0;
        max-height: 100%;
        height:100vh;
        width:375px;
        background-color: var(--white);
        overflow: hidden;
    }

    .map-container{
        position:absolute;
        width: calc( 100% - 375px);
        height:100%;
        left:375px;
        z-index:1;
    }
    
    @media screen and (max-width:512px){
        .ms-sheet{
            width:100vw;
            padding:16px;
            max-height:100%;
            min-height: 150px;
            position:fixed;
            padding:0;
            z-index:2;
        }

        .ms-handle{
            margin-top:16px;
            display:flex;
            justify-content: center;
            margin-bottom:8px;
        }

        .ms-handle span{
            width:37px;
            height:5px;
            background-color:#494949;
            border-radius: 2.5px;
        }

        .msCollapsed{
            height:150px !important;
        }

        .map-container{
            left:0;
            position:absolute;
            z-index:0px;
            width:100%;
            height:calc(100% - 150px);
            overflow: hidden;
        }
    }
    .map{
        display:flex;
        height:100%;
        width:100%;
        position:relative
    }

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
        color:var(--caption)
    }

    .ds-num img{
        margin-right:8px;
        width:37px;
        height:37px;
    }

    .ds-station{
        text-align: start;
        margin-left:8px;
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