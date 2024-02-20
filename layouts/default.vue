<template>
  <div class="maintenance" v-if="maintenance">
    <p class="description-text text-center big">website under maintenance :(</p>
  </div>
  <main class="main" v-else>
    <LazyNavbar :database="database" />
    <section class="sections">
      <NuxtPage :database="database" />
    </section>
    <LazyFooter :database="database" />
  </main>
</template>
<script setup>
import database from "../data/db.json";
const maintenance = ref(true);
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
