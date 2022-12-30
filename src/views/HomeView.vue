<template>
  <main class="pade ">
    <div class="page-home">
      
      <div class="our-balance" >
        <h1 class="our-balance__title">
            Ваш баланс криптовалюти
          </h1>
        <div v-for="balans, index in tofixedBallans" :key="balans">
        <div  class="our-balance__block" >
          <div class="our-balance__forb">
            {{ index.toUpperCase() }}
          </div>
          <div class="our-balance__item">
            {{ balans }}
          </div>
        </div>
        </div>
      </div>
      <section class="valuta-item">
        <ValutaBuy :valutaBuy="valutaBuy"/>    
      </section>
      <section class="valuta-item">
        <ValutaExchange :valutaExchange="tofixedBallutaExchange"/> 
      </section>
    </div>
  </main>
</template>

<script>
  import ValutaBuy from '../components/ValutaBuy.vue';
  import ValutaExchange from '../components/ValutaExchange.vue';
  import axios from 'axios';
 
  export default {
    components: {
      ValutaBuy,
      ValutaExchange
    },
  data() {
    return {   
      ourBallans: [],
      valutaBuy: {},  
      valutaExchange: {}    
    }
  },
  methods: {
  async fetchBallans() {
    try {
      const reponse = await axios.get(`https://crypto-exchange-test1.herokuapp.com/balances/1/`);
      this.ourBallans = reponse.data;     
    } catch (e) {
      alert('Помилка')
    }
  },
  
  async fetchBallutaBuy(curr) {
    try {
      const reponse = await axios.get(`https://crypto-exchange-test1.herokuapp.com/exchange-rate/?buy-curr=UAH&sell-curr=${curr}`);
      this.valutaBuy[curr] = reponse.data.exchange_rate;      
    } catch (e) {
      alert('Помилка')
    }
  },  

  async fetchBallutaExchange(buyCurr, sellCurr) {
    try {
      const reponse = await axios.get(`https://crypto-exchange-test1.herokuapp.com/exchange-rate?buy-curr=${buyCurr}&sell-curr=${sellCurr}`);
      this.valutaExchange[`${buyCurr}  / ${sellCurr}`] = reponse.data.exchange_rate;    
    } catch (e) {
      alert('Помилка')
    }
  }  
},

computed: {
  tofixedBallans() {
    const ourBallansFixed = {};
    for(const key in this.ourBallans) {
      ourBallansFixed[key] = Number(this.ourBallans[key]).toFixed(5)
    } 
   return ourBallansFixed;
  },

  tofixedBallutaExchange() {
    const ourBalluta = {};
    for(const key in this.valutaExchange) {
      ourBalluta[key] = Number(this.valutaExchange[key]).toFixed(5)
    } 
   return ourBalluta;
  },
},


mounted() {
  this.fetchBallans();
  this.fetchBallutaBuy('BTC');
  this.fetchBallutaBuy('ETH');
  this.fetchBallutaBuy('USDT'); 

  this.fetchBallutaExchange('BTC', 'ETH')
  this.fetchBallutaExchange('BTC', 'USDT')
  this.fetchBallutaExchange('ETH', 'BTC')
  this.fetchBallutaExchange('ETH', 'USDT')
  this.fetchBallutaExchange('USDT', 'BTC')
  this.fetchBallutaExchange('USDT', 'ETH')    
 },
}
</script>

<style>
.page-home {
  background-color: #FFFFFF;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;  
}

.our-balance{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 10px 15px;
  background-color: hsl(217, 16%, 63%, 0.4);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.our-balance__forb {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 0.01em;
}

.our-balance__title {
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: #262626;
}

.our-balance__block {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.our-balance__item {
  font-weight: 400;
  font-size: 46px;
  line-height: 110%;
  letter-spacing: 0.015em;
  color: #000DFF;
}

.valuta-item {
display: flex;
flex-direction: column;
 padding: 15px 15px 35px;
 border-bottom: 1px solid #E3E6EB;
}

</style>