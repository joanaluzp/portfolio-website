<template>
  <header class="header">
    <div class="header-toggle-wrapper" @click="open = !open">
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
    <nav class="navbar" :class="{ 'is-open': open }">
      <ul class="navbar-menu">
        <li @click="scrollToComponent('section-welcome')">
          <p class="description-text medium">welcome</p>
        </li>
        <li @click="scrollToComponent('section-about')">
          <p class="description-text medium">about</p>
        </li>
        <li @click="scrollToComponent('section-work')">
          <p class="description-text medium">work</p>
        </li>
        <li @click="scrollToComponent('section-skills')">
          <p class="description-text medium">skills</p>
        </li>
        <li @click="scrollToComponent('section-contact')">
          <p class="description-text medium">contact</p>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
const open = ref(false);
const scrollToComponent = (id) => {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: "smooth" });
};
</script>
