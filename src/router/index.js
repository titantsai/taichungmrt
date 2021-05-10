import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Map.vue'
import StationFacilities from '../views/Detail/Facilities.vue'
import StationTransfer from '../views/Detail/Transfer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
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
