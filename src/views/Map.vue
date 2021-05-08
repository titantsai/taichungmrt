<template>

  <div class="map">
    <RouteMap />
  </div>

</template>

<script>

import RouteMap from '../components/RouteMap'

export default {
  components:{
    RouteMap,
    }
}
</script>

<style scoped>
  .map{
    display:flex;
    justify-content: center;
  }
</style>