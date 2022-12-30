<template>
  <div v-for="valuta, index in valutaExchange" class="valuta" :key="valuta.id">
    <div class="valuta__forb">
      {{ index }}
    </div>
    <span class="valuta__rate"> {{ valuta }}</span>
    <button   
        class="valuta__btn"
        @click="hadleclickBuy(index, valuta)"
      >   
      ОБМІН
    </button>
  </div>
</template>
<script>

export default {
  props: {
    valutaExchange: {
      type: Array,
      required: true,
    }
  },
  methods: {
    hadleclickBuy(index, valuta) {     
      this.$router.replace({ 
        name: "exchange", 
        params: {id: index }, 
        query: {value: valuta}})
    }
  }
}

</script>
<style>

.valuta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
}

.valuta__forb {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
}
.valuta__rate {
  font-weight: 500;
  font-size: 16px;
}

.valuta__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 40px;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  background-color: #1238C0;
  border-radius: 10px;
  border: none;
}


</style>
