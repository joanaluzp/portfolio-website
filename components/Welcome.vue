<template>
  <div class="welcome-text-wrapper" :class="{ 'is-open': open }">
    <h3 class="welcome-text-box description-text text-justify">
      {{ props.database.data.welcome.text }}
    </h3>
    <p
      class="welcome-text-btn description-title text-right font-italic click-me"
      :class="{ 'font-bold': open }"
      @click="open = !open"
    >
      {{
        open
          ? props.database.data.welcome.close
          : props.database.data.welcome.btn
      }}
      👈
    </p>
  </div>
</template>
<script setup>
const open = ref(false);
const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});
const clickOutside = (event) => {
  const box = document.querySelector(".welcome-text-wrapper");
  if (box) {
    if (!box.contains(event.target)) {
      open.value = false;
    }
  }
};

onMounted(() => {
  window.addEventListener("click", clickOutside);
});
</script>
