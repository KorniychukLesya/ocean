<script>

export default {
  props: {
    valutaBuy: {
      type: Array,
      required: true,
    }
  },
  methods: {
    hadleclickBuy(valuta, index) {     
      this.$router.replace({ 
        name: "deposit", 
        params: {id: index }, 
        query: {value: valuta}})
    }
  }
}

</script>

<template>
  <div v-for="valuta, index  in valutaBuy" class="valuta" :key="valuta.index">
    <div class="valuta__forb">
      {{ index }}
    </div>
    <span class="valuta__rate"> {{ valuta }}</span>
  
    <button   
        class="valuta__buy-btn"
        @click="hadleclickBuy(valuta, index)"
      >   
        Купити
      </button>
  </div>
</template>
<style scoped>

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
  width:  70px;
  height: 60px;
  font-weight: 500;
  font-size: 20px;
  border: 1.5px solid #5F5F68;
  border-radius: 10px;

}
.valuta__rate {
  font-weight: 500;
font-size: 16px;

}
.valuta__buy-btn {
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
