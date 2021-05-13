<template>
    <div class="ds-list">
        <div class="ds-list-header">票價</div>
        <ul>
            <li class="ds-list-item">一般票：{{fareData.Fares[0].Price}}元</li>
            <li class="ds-list-item">敬老、愛心、陪同票：{{fareData.Fares[1].Price}}元</li>
            <li class="ds-list-item">電子票證：{{fareData.Fares[4].Price}}元</li>
        </ul>
        <div class="ds-list-header"></div>
        <ul>
            <li class="ds-list-item">{{fareData.TravelTime}}分鐘</li>
        </ul>
    </div>
</template>

<script>

import store from '@/store'

export default {
    data(){
        return {
            fareType:['一般','來回','電子票證','回數','定期(30天)','定期(60天)'],
            fareClass:['成人票','學生票','孩童票','敬老票','愛心票','愛心孩童票','愛心陪伴票','團體票']
        }
    },
    computed:{
        fareData(){
            return store.state.fare[0]
        }
    }
}
</script>

<style scoped>

</style>