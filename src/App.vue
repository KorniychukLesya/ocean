<script>
import {RouterLink,  RouterView } from 'vue-router';
export default {
components: {
  RouterLink,
  RouterView
    },
  }

</script>

<template>
  <header>
    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="105" height="20" />
    </RouterLink>
  </header>

  <RouterView /> 
</template>

<style scoped>
header {
  padding: 20px 27px;
}

.logo {
  display: block;
  margin: 0;
}

</style>
