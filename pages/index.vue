<template>
  <LazyWork :database="database"/>
</template>

<script setup>
import AOS from "aos";
const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});
onMounted(() => AOS.init());
</script>
 