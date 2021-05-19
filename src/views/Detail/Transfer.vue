<template>
    <div class="ds-list">
        
    </div>
</template>

<script>

import store from '@/store'
export default {
    mounted(){
        store.dispatch('GET_TRANSFER')
    },
    computed:{
        
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
