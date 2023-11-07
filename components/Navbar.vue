<template>
  <header class="header">
    <div class="header-mobile-icon" @click="open = !open">
      <img
        src="../assets/images/animated-disk-image-0055.gif"
        :class="{ 'd-none': open }"
      />
      <img
        src="../assets/images/animated-goodbye-image-0011.gif"
        class="close"
        :class="{ 'd-block': open }"
      />
    </div>
  </header>
  <nav class="navbar" :class="{ 'is-open': open }">
    <ul class="navbar-menu">
      <li @click="scrollToComponent('section-welcome')"><p>welcome</p></li>
      <li @click="scrollToComponent('section-about')"><p>about</p></li>
      <li @click="scrollToComponent('section-work')"><p>work</p></li>
      <li @click="scrollToComponent('section-skills')"><p>skills</p></li>
      <li @click="scrollToComponent('section-contact')"><p>contact</p></li>
    </ul>
  </nav>
</template>

<script setup>
const open = ref(false);
const scrollToComponent = (id) => {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: "smooth" });
};
</script>
