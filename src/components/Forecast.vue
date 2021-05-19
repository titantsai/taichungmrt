<template>
    <div>
        <div class="wx-widget" v-if="ForeCast">
            <img class="wx-icon" :src="`../images/wx/${ForeCast.location[0].weatherElement[0].time[0].parameter.parameterValue}.svg`">
            
            <div class="wx-temp">{{ForeCast.location[0].weatherElement[1].time[1].parameter.parameterName}}°</div>
            </div>
    </div>    
</template>

<script>
import store from '@/store'
export default {
    computed:{
        ForeCast(){
            return store.state.wxData.records
        }
    }
}
</script>

<style scoped>
    .wx-widget{
        position:fixed;
        top:3em;
        right:1em;
        border-radius: 8px;
        display:inline-flex;
        align-items: center;
        padding:8px;
        background-color:var(--trns-bg);
        backdrop-filter:blur(20px) brightness(100%)
    }

    .wx-icon{
        width:36px;
    }

    .wx-temp{
        color:var(--heading);
        font-size:19px;
        font-weight: 300;
        margin-left:3px;
    }

    @media screen and (max-width:512px){
        .wx-widget{
            top:4em;
            right:1em;
        }
    }
</style>