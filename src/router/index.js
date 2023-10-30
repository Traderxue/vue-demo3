import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: () => import("@/views/index.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/Home/home.vue"),
        },
        {
          path: "/home",
          component: () => import("@/views/Home/home.vue"),
        },
        {
          path: "/market",
          component: () => import("@/views/Market/market.vue")
        },
        {
          path: "/trade",
          component: () => import("@/views/Trade/trade.vue")
        },
        {
          path: "/mine",
          component: () => import("@/views/Mine/mine.vue"),
        }
      ]
    },
    {
      path: "/chart",
      component: () => import("@/components/chart.vue")
    },
    {
      path: "/wallet",
      component: () => import("@/views/Mine/components/wallet.vue")
    },
    {
      path: "/record",
      component: () => import("@/views/Mine/components/record.vue")
    },
    {
      path: "/lang",
      component: () => import("@/components/lang.vue")
    },
    {
      path: "/login",
      component: () => import("@/views/Login/login.vue")
    },
    {
      path: "/register",
      component: () => import("@/views/Register/register.vue")
    }
  ]
})

export default router
