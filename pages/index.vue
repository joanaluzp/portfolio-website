<template>
  <main class="main">
    <Navbar />
    <Welcome/>
    <section class="sections">
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
