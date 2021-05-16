import { createRouter, createWebHashHistory } from 'vue-router'
import MapView from '../views/Home.vue'
import StationLayout from '../views/Detail/Layout.vue'
import StationFacilities from '../views/Detail/Facilities.vue'
import StationTransfer from '../views/Detail/Transfer.vue'
import FareSearch from '../views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Map',
    component: MapView,
    children:[
      {
      path:'/station/:id',
      name:'StationInfo',
      component:StationLayout,
      children:[
        {
          path:'facilities',
          name:'StationFacilities',
          component:StationFacilities
        },
        {
          path:'transfer',
          name:'StationTransfer',
          component:StationTransfer
        }

      ]},
      {
        path:'/search',
        name:'FareSearch',
        component:FareSearch
      }
    ]
  },

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
