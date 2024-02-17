<template>
  <div class="maintenance" v-if="maintenance">
    <p class="description-text text-center big">website under maintenance :(</p>
  </div>
  <main class="main" v-else>
    <Navbar />
    <section class="sections">
      <NuxtPage />
    </section>
  </main>
</template>
<script setup>
const maintenance = ref(true);
</script>
