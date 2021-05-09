<template>
    <div class="ds-list">
        <div class="ds-list-header">列車時刻表</div>
        <ul>

        </ul>
        <div class="ds-list-header">出入口資訊</div>
        <ul>
            <li class="ds-list-item" v-for="exit in selected.exits" :key="exit.num">
                <div class="ds-exit-icon"><img :src="exit.src" :alt="exit.num"></div>
                <div class="ds-exit-name">
                    <h3>{{exit.name}}</h3>
                    <p>{{exit.hints}}</p>
                    <div class="ds-exit-type-group">
                            <img src="../assets/fac-stair.png" v-show="exit.stair" alt="stair">
                        <img src="../assets/fac-escalator.png" v-show="exit.escalator" alt="escalator">
                            <img src="../assets/fac-elevator.png" v-show="exit.elevator" alt="elevator">
                    </div>
                </div>
            </li>
        </ul>
        <div class="ds-list-header">車站設施</div>
        <ul>
            <li class="ds-list-item" v-for="service in selected.services" :key="service.name">
                <div class="ds-service-img"><img :src="service.src" alt=""></div>
                <div class="ds-service-name">
                    <h3>{{service.name}}</h3>
                    <p>{{service.position}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>