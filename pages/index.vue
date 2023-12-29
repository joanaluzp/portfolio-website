<template>
  <main class="main">
    <LazyNavbar />
    <section class="sections">
      <LazyWelcome />
      <LazyAbout />
      <LazyWork />
      <LazyContact />
    </section>
  </main>
</template>

<script setup>
import AOS from "aos";
onMounted(() => AOS.init());
</script>
