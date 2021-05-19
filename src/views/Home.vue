
<template>
    <div class="container">
        <transition name="swipeUp" mode="out-in">
            
            <div class="ms-sheet" id="bottomsheet" v-if="$route.path !== '/'" :class="{msCollapsed:modalCollapsed}" @touchstart="initTouch" @touchmove="handleTouch" @touchend="endTouch">
                <div class="ms-handle-container">
                    <span class="ms-handle"></span>
                    <div class="ms-closebtn" @click="closeModal">
                        <img src="../assets/xmark.circle.fill.svg">
                    </div>
                </div>
                <router-view></router-view>
            </div>
        

            <div class="ms-sheet-placeholder" v-else>
                <img src="../assets/chevron.up.svg"/> 點選車站即可查看詳細資訊
            </div>

        </transition>

        <div class="map-container">
            <RouteMap/>
            <Weather/>
        </div>
    </div>
</template>

<script>
import store from '@/store'
import Weather from '../components/Forecast'
import RouteMap from '../components/RouteMap'
export default {
    components:{
       RouteMap,
       Weather
    },
    data(){
        return{
            fullHeight:'',
            initY:'',
            endY:'',
            modalHeight:'',
        }
    },
    created(){
        store.dispatch('initRoute')
        store.dispatch('getForecast')
    },

    methods:{
        initTouch(e){
            this.initY = e.touches[0].clientY
            this.fullHeight = e.touches[0].pageY
        },

        handleTouch(e){
            let modalheight = '';
            if(store.state.modalCollapsed === true){
                modalheight = `calc( 100% - ${e.touches[0].clientY}px)`}
            else if (store.state.modalCollapsed === false && this.initY>44 && this.initY<150){
                modalheight = `calc( 100% - ${e.touches[0].clientY}px)`}
            
            document.querySelector('#bottomsheet').style.height = modalheight

        },

        endTouch(e){
            //若滑動小於初始值，展開表單
            this.endY = e.changedTouches[0].clientY;
            if(this.endY < this.initY){
                store.commit('expandModal')
                document.querySelector('#bottomsheet').style.height= '100%';
            }

             //若滑動初始值為header區域，滑動大於初始值，收合表單
            else if(this.initY<73 && this.initY>44 && this.endY>this.initY){
                 store.commit('collapseModal')
                 document.querySelector('#bottomsheet').style.height='184px';
            }
        },
        closeModal(){
            this.$router.push('/')
            store.commit('collapseModal')
            store.dispatch('clearSearchMode')
            store.dispatch('clearFare')
        }
        
    },
    computed:{
        modalCollapsed(){
            return store.state.modalCollapsed
        }
    }
    
}
</script>

<style scoped>
    body > .app-container {
        display:flex;
        width: 100vw;
        height:100%;
        height:-moz-available;
        height:-webkit-fill-available;
        height: fill-available;
        overflow-y: scroll;
        -webkit-overflow-scrolling: auto; /* enables “momentum” (smooth) scrolling */
    }
    
    .ms-sheet{
        box-sizing:border-box;
        position:absolute;
        bottom:0;
        max-height: 100%;
        height:100vh;
        width:375px;
        background-color: var(--modal-bg);
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0,0,0,0.16);
    }

    .ms-sheet-placeholder{
        width:100%;
        position:fixed;
        bottom:0;
        z-index:1;
        padding:16px;
        background-color:var(--modal-bg);
        box-shadow:0 -2px 4px rgba(0,0,0,0.16);
        color:var(--caption);
        transition:all .2s
    }

    .map-container{
        position:absolute;
        width: calc( 100% - 375px);
        height:100%;
        left:375px;
        z-index:1;
    }

    .ms-closebtn img{
        position:absolute;
        top:16px;
        right:16px;
    }
    
       
    .map{
        display:flex;
        height:100%;
        width:100%;
        position:relative
    }


     @media screen and (max-height:750px){
         .ms-sheet-placeholder{
            height:48px;
            box-sizing:border-box;
         }
     }   

     @media screen and (max-width:512px){
        .ms-sheet{
            box-shadow: 0 -1x 2px rgba(0,0,0,0.3);
            border-radius:10px 10px 0 0 ;
            width:100vw;
            padding:16px;
            max-height:calc(100% - 44px);
            min-height: 184px;
            position:fixed;
            padding:0;
            z-index:2;
            padding-bottom:34px;
            transition: height .3s cubic-bezier(0.165, 0.84, 0.44, 1) 
        }
        
        .ms-sheet-placeholder{
            display: flex;
            align-items:center;
            width:100%;
            height:64px;
            box-sizing:border-box;
            font-size:14px;
            color:var(--caption);
            background-color:var(--modal-bg);
            box-shadow: 0 -1px 2px rgba(0,0,0,0.16);
            padding:16px;
        }

        .ms-sheet-placeholder img{
            height:8px;
            margin-right:16px
        }

        .ms-handle-container{
            margin-top:6px;
            display:flex;
            justify-content: center;
            margin-bottom:8px;
        }

        .ms-handle{
            position: relative;
            width:37px;
            height:5px;
            background-color:var(--modal-handle);
            border-radius: 2.5px;
        }

        .ms-closebtn img{
            position:absolute;
            top:16px;
            right:16px;
            width:30px;
            height:30px;
            border-radius: 24px;
            background-color:var(--grey);
        }

        .msCollapsed{
            height:184px;
            transition: height .3s cubic-bezier(0.075, 0.82, 0.165, 1)
        }

        .map-container{
            left:0;
            position:absolute;
            z-index:0;
            width:100%;
            height:calc(100% - 64px);
            overflow: hidden;
            -webkit-overflow-scrolling: auto;
        }

        .swipeUp-enter, .swipeUp-leave-to{
            height:0;
        }

        .swipeUp-enter-active, .swipeUp-leave-active{
            transition: all .1s ease-in
        }

        .swipeUp-leave {
            height:183px;
        }

        .swipeUp-enter-to{
            height:64px
        }
    }
    
</style>