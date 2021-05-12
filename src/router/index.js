import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Map.vue'
import StationFacilities from '../views/Detail/Facilities.vue'
import StationTransfer from '../views/Detail/Transfer.vue'
import StationTimeFare from '../views/Detail/TimeFare'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
