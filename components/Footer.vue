<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="footer-wrapper">
        <p class="description-text d-inline small">
          <span class="description-text d-inline small font-bold">
            {{ currentYear }}
          </span>
          {{ props.database.data.footer.text }}
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
const currentYear = ref(new Date().getFullYear());
const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});
</script>
