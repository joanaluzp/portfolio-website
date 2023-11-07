<template>
  <nav class="navbar">
    <div class="navbar-toggle-wrapper" @click="open = !open">
      <p
        class="description-title capitalize bigger"
        :class="{ 'd-none': open }"
      >
        open
      </p>
      <p
        class="closed description-title capitalize bigger"
        :class="{ 'd-block': open }"
      >
        hide
      </p>
    </div>
    <div class="navbar-menu-wrapper" :class="{ 'is-open': open }">
      <ul class="navbar-menu">
        <li @click="scrollToComponent('section-welcome')">
          <p class="description-text medium white">welcome</p>
        </li>
        <li @click="scrollToComponent('section-about')">
          <p class="description-text medium white">about</p>
        </li>
        <li @click="scrollToComponent('section-work')">
          <p class="description-text medium white">work</p>
        </li>
        <li @click="scrollToComponent('section-skills')">
          <p class="description-text medium white">skills</p>
        </li>
        <li @click="scrollToComponent('section-contact')">
          <p class="description-text medium white">contact</p>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
const open = ref(false);
const scrollToComponent = (id) => {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: "smooth" });
};

const clickOutside = (event) => {
  const nav = document.querySelector(".navbar");
  if (!nav.contains(event.target)) {
    open.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", clickOutside);
});
</script>
