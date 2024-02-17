<template>
  <LazyAbout />
  <LazyWork />
  <LazyContact />
</template>

<script setup>
import AOS from "aos";
onMounted(() => AOS.init());
</script>
