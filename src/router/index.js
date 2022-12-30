import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DepositView from '../views/DepositView.vue'
import ExchangeView from '../views/ExchangeView.vue'
import PaymentConfirmation from '../views/PaymentConfirmation.vue'
import TransactionSuccess from '../views/TransactionSuccess.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/:id',
      name: 'deposit',    
      component: DepositView
    },

    {
      path: '/:id',
      name: 'exchange',    
      component: ExchangeView
    },

    {
      path: '/payment',
      name: 'payment',    
      component: PaymentConfirmation
    },

    {
      path: '/transaction',
      name: 'transaction',    
      component: TransactionSuccess
    },
   
  ]
})

export default router
