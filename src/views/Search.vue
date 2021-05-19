<template>
    <div class="fd-container">
        <div class="fd-header">
            <div class="fd-heading">旅程時間與票價</div>
            <span class="fd-divider"></span>
            <div class="fd-header-search">
                <div class="fd-nav">
                    <div class="fd-orig"><span class="orig-icon"></span>{{current.zh}}</div>
                    <div class="fd-dest"><span class="dest-icon"></span>{{dest.zh || placeholder}}</div>
                    <span class="fd-link"></span>
                </div>
                <div v-if="fareData" class="fd-duration">{{fareData.TravelTime}}分</div>
            </div>
        </div>

        <div v-if="fareData" class="ds-list">
            <div class="ds-list-header">票價</div>
            <ul>
                <li class="ds-list-item fd-fare-item">
                    <h3 class="fd-faretype">單程票</h3>
                    <p class="fd-fareprice">{{fareData.Fares[0].Price}}<span class="fd-fareprice-unit">元</span></p>
                </li>
                <li class="ds-list-item fd-fare-item">
                    <h3 class="fd-faretype">電子票證</h3>
                    <p class="fd-fareprice">{{fareData.Fares[4].Price}}<span class="fd-fareprice-unit">元</span></p>
                </li>
                <li class="ds-list-item fd-fare-item">
                    <h3 class="fd-faretype">愛心票</h3>
                    <p class="fd-fareprice">{{fareData.Fares[1].Price}}<span class="fd-fareprice-unit">元</span></p>
                </li>
            </ul>
            <div class="ds-list-footer"></div>
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
        margin-top:12px;
    }
    .fd-header{
        padding:10px 16px 16px 16px;
    }

    .fd-divider{
        margin:1em -1em 1em 0;
        display:flex;
        height:0.5px;
        background-color:var(--list-divider);
    }

    .fd-heading{
        color:var(--caption);
        text-align:start;
    }

    .fd-header-search{
        margin-top:8px;
        margin-bottom:8px;
        display:flex;
        align-items:center;
        justify-content: space-between;
        position:relative;
    }

    .fd-orig, .fd-dest{
        line-height:19px;
        margin-left:1em;
        display:flex;
        align-items: center;
        font-size:19px;
        text-align: start;
        font-weight: 500;
    }

    .fd-orig{
        color:var(--caption);
    }

    .fd-dest{
        margin-top:2em;
        color:var(--heading)
    }

    .orig-icon{
        margin-left:2px;
        margin-right:8px;
        display:block;
        width:6px;
        height:6px;
        border-radius: 3px;
        background-color:var(--caption);
        
    }

    .dest-icon{
        margin-right:8px;
        display: block;
        width:10px;
        height:10px;
        background-color:var(--heading)
    }

    .fd-link{
        display:flex;
        align-self: center;
        width:0.5px;
        height:2em;
        background-color:#888888;
        position:absolute;
        top:19px;
        left:23.5px;
        transform: translateX(50%);
    }

    .fd-duration{
        display:block;
        height:48px;
        width:48px;
        border-radius:8px;
        background-color:var(--system-blue);
        color:white;
        font-size:17px;
        font-weight: 500;
        line-height:48px;
    }

    .fd-fare-item{
        display:flex;
        justify-content: space-between;
        padding-right:1em;
    }

    .fd-faretype{
        color:var(--heading);
        font-size:15px;
        font-weight:500;
    }

    .fd-fareprice{
        color:var(--heading);
        font-weight:300;
    }

    .fd-fareprice-unit{
        font-size:13px;
        padding-left:4px;
        font-weight: 500;
    }

    .ds-list-header{
        border-top:0.5px solid var(--list-divider);
        padding-top:12px;
    }

    .ds-list-footer{
        display:block;
        height:300px;
    }
</style>