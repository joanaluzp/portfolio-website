<template>
  <nav class="navbar">
    <div class="navbar-menu-wrapper" :class="{ 'is-open': open }">
      <ul class="navbar-menu-list">
        <li class="navbar-menu-item">
          <p
            class="description-title bigger"
            @click="scrollToComponent(database.data.nav.about.category)"
          >
            {{ database.data.nav.about.name }}
          </p>
        </li>
        <li class="navbar-menu-item">
          <p
            class="description-title bigger"
            @click="scrollToComponent(database.data.nav.work.category)"
          >
            {{ database.data.nav.work.name }}
          </p>
        </li>
        <li class="navbar-menu-item">
          <p
            class="description-title bigger"
            @click="scrollToComponent(database.data.nav.contact.category)"
          >
            {{ database.data.nav.contact.name }}
          </p>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import database from "../data/db.json";
const open = ref(false);
const prevScroll = ref(0);

const scrollToComponent = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const handleScrollNavbar = () => {
  let scroll = window.pageYOffset;
  let elmNavbar = document.querySelector(".navbar");
  let heightNavbar = elmNavbar ? elmNavbar.offsetHeight : 0;
  if (scroll > heightNavbar) {
    elmNavbar.style.top = "-150px";
    if (scroll < prevScroll.value) {
      elmNavbar.style.top = "15px";
    }
  } else {
    elmNavbar.style.top = "15px";
  }
  prevScroll.value = scroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScrollNavbar);
});
</script>
