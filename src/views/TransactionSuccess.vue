<template>
    <main class="pade">
     <div v-if="togl" class="pade-transaction-good">
        <div class="pade-transaction">
        <div class="transaction">
          <h2 class="transaction-title">ТРАНЗАКЦІЯ УСПІШНА</h2>
          <p class="transaction-item">{{ result }} {{ id }} було зараховано до вашого балансу</p>         
        </div>         
     </div>
       <button class="valuta__buy-btn" @click="hadleclickBuy( )">
             ПЕРЕЙТИ ДО КАБІНЕТУ
       </button>
     </div>   
     <div class="transaction-watch" v-else>
      <WatchLoader />
     <div class="transaction-text">
       <p>ОЧІКУЙТЕ</p>
       <p>ПІДТВЕРДЖЕННЯ</p>   
     </div>       
     </div>
    </main>
 </template>
 
 <script>
 import WatchLoader from '../components/WatchLoader.vue'
 
 export default {
    components: {
        WatchLoader      
    },

    data() {
    return {
      togl: false,
      id:  this.$route.query['id'],
      result: this.$route.query['result'],   
    }
  },
 
   methods: {   
    hadleclickBuy() {     
        this.$router.push('/')
    
    },
    settt() {setInterval(() => {
      this.togl = true;     
    }, 3000)
   }
  },
  
 mounted() {
  this.settt();
 }
}
 </script>
 
 <style>
 
 .pade-transaction {
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 20px;
   background-color: #FFFFFF;
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
   border-radius: 10px;
   padding: 20px 15px 30px 75px;   
   margin-bottom: 25px;
 }
 
 .transaction-title{
   font-weight: 500;
   font-size: 20px;
   color: #1238C0;
 }
 
 .transaction-item {
   font-weight: 400;
   font-size: 16px;
 }
 
 .requisites-title {
   font-weight: 500;
   font-size: 18px;
   margin-bottom: 25px;
 }
 
 .payment-item-requisites {
     padding: 15px;
     margin-bottom: 40px;
 }
 
 .requisites-item{
   font-weight: 400;
   font-size: 18px;
   line-height: 140%;
 }
 
 .valuta__buy {
     padding: 20px;
     background-color: #FFFFFF;
 
 }

 .valuta__buy-btn {
   width: 100%;
   height: 40px;
   font-weight: 500;
   font-size: 20px;
   color: #fff;
   background-color: #1238C0;
   border-radius: 10px;
   border: none;
 } 

 .transaction-watch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }

 .transaction-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 45px;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
 }
 
 </style>
 