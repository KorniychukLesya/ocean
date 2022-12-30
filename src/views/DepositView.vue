<template>
    <main class="pade ">
    <div class="page-deposit">
      <section class="deposit">
        <article  class="deposit-item">
          <label class="deposit-valuta">{{ curentValuta }}</label>
          <form>
            <input
              class="deposit-sum deposit-sum--input"
              type="number"
              :value="sum"
              @input="handleSum"
            />
          </form>
        </article>
        <article class="deposit-item">
          <div class="deposit-valuta">{{ id }}</div>
          <div class="deposit-sum">{{ result }}</div>
        </article>
        <button
        class="valuta__buy-btn"
        @click="hadleclickBuy(sum, result, id, curentValuta)"
        >КУПИТИ</button>
      </section>
      <section class="deposit-identification">
      </section>
    </div>
    <section class="transaction">
      <input class="transaction__item"
       :value="`P2P транзакція`"
      >
      <input class="transaction__item"
        :value="`................`"
      >
      <input class="transaction__item"
       :value="`................`"
      >
    </section>

  </main>
  </template>

<script>
export default {

  data() {
    return {
      curentValuta: "UAH",
      id: this.$route.params['id'],
      value: this.$route.query['value'],    
      sum: 0,
      result: 0,
    }
  },
  methods: {
    handleSum(event) {
      this.sum = event.target.value;     
      this.result = (+this.sum / +this.value).toFixed(7);
    },

    hadleclickBuy(sum, result, id, curentValuta) {     
      this.$router.replace({ 
        name: "payment", 
        params: '/payment', 
        query: { id: id, sum: sum, result: result, curentValuta: curentValuta }})
    }
  }
}
</script>
  
<style>
  .page-deposit {
    background-color: #FFFFFF;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 40px 20px;
    margin-bottom: 35px;
}

  .deposit{
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .deposit-item {
   display: flex;
   justify-content: space-between;
  }

.deposit-valuta {
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 0.01em;
}

.deposit-sum {
  width: 135px;
  height: 60px;
  font-weight: 500;
  font-size: 20px;
  padding: 12px;
}
 
 .deposit-sum--input {
  width: 135px;
  height: 60px;
  border: 1.5px solid #5F5F68;
  border-radius: 10px;
 }

 .valuta__buy-btn {
  width: 100%;
  height: 60px;
  font-weight: 500;
  font-size: 24px;
  color: #fff;
  background-color: #1238C0;
  border-radius: 10px;
  border: none;
}

.transaction {
  display: flex;
  flex-direction: column;
  gap: 20px;
 
}

.transaction__item {
  height: 40px;
  padding: 14px;
  background: #FFFFFF;
  border-radius: 10px;
  border: none;
  font-weight: 400;
  font-size: 18px;
}

</style>
