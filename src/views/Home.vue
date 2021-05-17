
<template>
    <div class="container">
        
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
            fullHeight:'',
            initY:'',
            endY:'',
            modalHeight:'',
        }
    },
    created(){
        store.dispatch('initRoute')
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
        background-color: var(--modalbg);
        overflow: hidden;
    }

    .map-container{
        position:absolute;
        width: calc( 100% - 375px);
        height:100%;
        left:375px;
        z-index:1;
    }
       
    .map{
        display:flex;
        height:100%;
        width:100%;
        position:relative
    }


     @media screen and (max-width:512px){
        .ms-sheet{
            box-shadow: 0 -1x 2px rgba(0,0,0,0.3);
            border-radius:8px 8px 0 0 ;
            width:100vw;
            padding:16px;
            max-height:calc(100% - 44px);
            min-height: 184px;
            position:fixed;
            padding:0;
            z-index:2;
            padding-bottom:34px;
        }
        
        .ms-sheet-placeholder{
            position:fixed;
            display: flex;
            align-items:center;
            width:100%;
            height:64px;
            bottom:0;
            font-size:14px;
            color:var(--caption);
            background-color:var(--modalbg);
            box-shadow: 0 -1px 2px rgba(0,0,0,0.3);
        }

        .ms-sheet-placeholder img{
            height:8px;
            margin-left:32px;
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
            background-color:#494949;
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
    }
    
</style>