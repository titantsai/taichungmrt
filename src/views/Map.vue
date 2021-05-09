<template>

  <div class="map">
    <DetailSheet />
    <RouteMap />
  </div>

</template>

<script>

import RouteMap from '../components/RouteMap'
import DetailSheet from '../components/DetailSheet'

export default {
  components:{
    RouteMap,
    DetailSheet
    }
}
</script>

<style scoped>
  .map{
    display:flex;
    justify-content: center;
  }
</style>