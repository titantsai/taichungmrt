<template>
    <div>
        <p>啟程站：{{current.zh}}</p>
        <p>抵達站：{{dest.zh}}</p>
    </div>

    <div v-if="fareData">
        <div class="fd-list">
            搭乘時間：{{fareData.TravelTime}}分鐘
        </div>

        <div class="fd-list fd-pricetable">
            <div>
                <div>單程票</div>
                <div>{{fareData.Fares[0].Price}}</div>
            </div>
            <div>
                <div>電子票證</div>
                <div>{{fareData.Fares[4].Price}}</div>
            </div>
            <div>
                <div>敬老卡</div>
                <div>{{fareData.Fares[1].Price}}</div>
            </div>
        </div>
        
    </div>
</template>

<script>
import store from '@/store'
export default {
    mounted(){
    },
    computed:{
        current(){
            return store.state.current
        },
        dest(){
            return store.state.dest
        },
        fareData(){
            return store.state.fare[0]
        }
    }
}
</script>

<style scoped>
    .fd-pricetable{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr
    }
</style>