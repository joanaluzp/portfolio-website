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
      <ul class="navbar-menu-list">
        <li
          class="navbar-menu-item"
          @click="scrollToComponent('section-welcome')"
        >
          <p class="description-text medium">welcome</p>
        </li>
        <li
          class="navbar-menu-item"
          @click="scrollToComponent('section-about')"
        >
          <p class="description-text medium">about</p>
        </li>
        <li class="navbar-menu-item" @click="scrollToComponent('section-work')">
          <p class="description-text medium">work</p>
        </li>
        <li
          class="navbar-menu-item"
          @click="scrollToComponent('section-skills')"
        >
          <p class="description-text medium">skills</p>
        </li>
        <li
          class="navbar-menu-item"
          @click="scrollToComponent('section-contact')"
        >
          <p class="description-text medium">contact</p>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
const open = ref(false);
const scrollToComponent = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const clickOutside = (event) => {
  const nav = document.querySelector(".navbar");
  if (nav) {
    if (!nav.contains(event.target)) {
      open.value = false;
    }
  }
};

onMounted(() => {
  window.addEventListener("click", clickOutside);
});
</script>
