<template>
  <Contact :database="database"/>
</template>
<script setup>
const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});
</script>