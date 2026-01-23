import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ImpressumPage from '../views/ImpressumPage.vue'
import DatenschutzPage from '../views/DatenschutzPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    {
      path: '/drinks',
      name: 'drinks',
      beforeEnter() {
        window.location.replace(`${import.meta.env.BASE_URL}Karte_Pallas.pdf`)
      },
    },
    { path: '/impressum', name: 'impressum', component: ImpressumPage },
    { path: '/datenschutz', name: 'datenschutz', component: DatenschutzPage },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
