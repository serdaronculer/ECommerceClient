import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AdminView from '../views/AdminView.vue'
import Dashboard from '@/module/admin/components/dashboard/Dashboard.vue';
import Customer from '@/module/admin/components/customers/Customer.vue';
import Home from '@/views/Home.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    children: [
      {
        path: '',
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "products",
        name: "productsAdmin",
        component: () => import('@/module/admin/components/products/Product.vue')
      },
      {
        path: "customers",
        name: "customers",
        component: () => import('@/module/admin/components/customers/Customer.vue')
      },
      {
        path: "orders",
        name: "orders",
        component: () => import('@/module/admin/components/orders/Order.vue')
      },
    ],
  },

  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      { path: "basket", name: "basket", component: () => import('@/module/ui/components/baskets/Basket.vue') },
      { path: "products", name: "productsUi", component: () => import('@/module/ui/components/products/Product.vue') },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
