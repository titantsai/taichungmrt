import { createRouter, createWebHashHistory } from 'vue-router'
import MapView from '../views/Home.vue'

import StationFacilities from '../views/Detail/Facilities.vue'
import StationTransfer from '../views/Detail/Transfer.vue'
import StationTimeFare from '../views/Detail/TimeFare'

const routes = [
  {
    path: '/',
    name: 'Map',
    component: MapView,
    children:[
      {name:'fare',path:'fare',component:StationTimeFare},
      {name:'facilities',path:'facilities',component:StationFacilities},
      {name:'transfer',path:'transfer',component:StationTransfer}
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
