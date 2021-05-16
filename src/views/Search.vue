<template>
    <div class="fd-container">
        <div class="fd-header">
            <div style="display:flex">
                <img class="ds-indicator" src="@/assets/fareinfo.svg">
                <div>
                    <div class="fd-header-orig">{{current.zh}}</div>
                    <div v-if="dest" class="fd-header-dest">{{dest.zh}}</div>
                </div>
            </div>
            <div v-if="fareData">
                <div class="fd-traveltime">{{fareData.TravelTime}}<span>分</span></div>
            </div>
        </div>

        <div v-if="fareData" class="fd-pricetable">
            <div>
                <p class="fd-faretype">單程票</p>
                <h3 class="fd-fareprice">{{fareData.Fares[0].Price}}元</h3>
            </div>
            <div>
                <p class="fd-faretype">電子票證</p>
                <h3 class="fd-fareprice">{{fareData.Fares[4].Price}}元</h3>
            </div>
            <div>
                <p class="fd-faretype">愛心票</p>
                <h3 class="fd-fareprice">{{fareData.Fares[1].Price}}元</h3>
            </div>
        
        </div>
    </div>
</template>

<script>
import store from '@/store'
export default {
    data(){
        return{
            placeholder:'請選擇終點站'
        }
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
    .fd-container{
        padding:16px 32px;
    }

    .fd-header{
        display:flex;
        justify-content:space-between;
        align-items: center;
    }

    .ds-indicator{
        margin-right:10px
    }

    .fd-header-orig{
        text-align:start;
        color:var(--black);
        font-weight: 400;
        font-size: 17px;
        line-height: 22px;
    }

    .fd-header-dest{
        margin-top:6px;
        text-align:start;
        color:var(--heading);
        font-weight: 500;
        font-size:19px;
    }

    .fd-traveltime{
        font-size:21px;
        font-weight: 700;
        color:var(--blue)
    }

    .fd-traveltime span{
        font-size:15px;
        color:var(--blue);
    }

    .fd-pricetable{
        margin-top:16px;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;

    }

    .fd-faretype{
        font-size:13px;
        color:var(--caption);
        text-align:center
    }

    .fd-fareprice{
        margin-top:8px;
        color:var(--blue);
        font-weight: 500;
        text-align:center
    }
</style>