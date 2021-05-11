<template>
    <div class="ds-list">
        <div class="ds-list-header">停車場</div>
        <ul>

        </ul>
        <div class="ds-list-header">iBike微笑單車</div>
        <ul>
            <li class="ds-list-item ds-list-ibike">
                <div class="ds-service-img" style="display:flex;align-items:center">
                    <img src="@/assets/ibike.svg" alt="">
                    <div class="ds-service-name">{{filterBike.sna.slice(11)}}</div>
                </div>
                <div class="ds-ibike-status">
                    <span class="ds-ibike-rentable">{{filterBike.sbi}}</span>/{{filterBike.tot}}
                </div>
            </li>
        </ul>
        <div class="ds-list-header">公車轉乘</div>
        <ul>

        </ul>
    </div>
</template>

<script>

import store from '@/store'
export default {
    data(){
        return{
            
        }
    },

    computed:{
        bikes(){
            return store.state.bikes
        },

        filterBike(){
            let id = store.state.current.bike;
            
            return store.getters.getBikesById(`${id}`)
        }
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
    .ds-ibike-rentable{
        font-size:17px;
    }
</style>
