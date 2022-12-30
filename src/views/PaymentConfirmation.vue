<template>
   <main class="pade ">
    <div class="payment">
        <div class="payment-item payment-item-transaction">
          <h2 class="transaction-title">Транзакцію створено</h2>
          <p class="transaction-item">Ви отримуєте: {{result}} {{id}} </p>
          <p class="transaction-item">Потрібно переказати: 
            {{ sum }}  {{ curentValuta }}
          </p>
        </div>
        <h2 class="requisites-title">Реквізити для переказу:</h2>
        <div class="payment-item payment-item-requisites">
         
          <p  class="requisites-item">
            Карта: 4342 4454 6545 6464
          </p>
          <p  class="requisites-item">
            Отримувач: PAVLO SHELEST
          </p>
          <p  class="requisites-item">
            Банк: PRIVATBANK 
          </p>          
        </div>
    </div>
    <div class="valuta__buy">
          <button
           @click="hadleclickBuy(id, result)"
            class="valuta__buy-btn">
            ПІДТВЕРДЖУЮ ОПЛАТУ
          </button>
        </div>
   </main>
</template>

<script>
export default {

  data() {
    return {
      id:  this.$route.query['id'],
      sum: this.$route.query['sum'],
      result: this.$route.query['result'],   
      curentValuta: this.$route.query['curentValuta'],   
    }
  },
  methods: {   
    hadleclickBuy(id, result) {    
        this.$router.replace({ 
        name: "transaction", 
        params: '/transaction', 
        query: { id: id, result: result }})
    }
  }
}
</script>
  

<style>
.payment-item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  
  margin-bottom: 25px;
}
.payment-item-transaction {
    padding: 20px 15px 30px 75px;
}

.transaction-title{
  position: relative;
  font-weight: 500;
  font-size: 20px;
  color: #1238C0;
}
.transaction-title::before{
  position: absolute;
  display: block;
  content: "";
  width: 17px;
  height: 17px;
  background-image: url(../assets/Vector.svg);
  left: -35px;
  top: 5px;

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
</style>
