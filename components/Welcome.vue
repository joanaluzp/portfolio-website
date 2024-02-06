<template>
  <section class="section section-welcome" id="section-welcome">
    <div class="welcome-text-wrapper" :class="{ 'is-open': open }">
      <h3 class="welcome-text-box description-text small text-justify">
        {{ database.data.welcome.text }}
      </h3>
      <p
        class="welcome-text-btn description-title text-right font-italic click-me"
        :class="{ 'font-bold': open }"
        @click="open = !open"
      >
        {{ open ? database.data.welcome.close : database.data.welcome.btn }} 👈
      </p>
    </div>
  </section>
</template>
<script setup>
import database from "../data/db.json";
const open = ref(false);

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
