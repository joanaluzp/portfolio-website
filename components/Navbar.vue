<template>
  <nav class="navbar d-lg-none" @click="open = !open">
    <p class="description-title menu d-block d-xl-none" v-if="open">
      {{ database.data.nav.menu.open }}
    </p>
    <p class="description-title menu d-block d-xl-none" v-else>
      {{ database.data.nav.menu.close }}
    </p>
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

const clickOutside = (event) => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (!navbar.contains(event.target)) {
      open.value = false;
    }
  }
};

const handleScrollNavbar = () => {
  let scroll = window.pageYOffset;
  let elmNavbar = document.querySelector(".navbar");
  let heightNavbar = elmNavbar ? elmNavbar.offsetHeight : 0;
  if (scroll > heightNavbar) {
    elmNavbar.style.top = "-300px";
    if (scroll < prevScroll.value) {
      elmNavbar.style.top = "15px";
    }
  } else {
    elmNavbar.style.top = "15px";
  }
  prevScroll.value = scroll;
};

onMounted(() => {
  window.addEventListener("click", clickOutside);
  window.addEventListener("scroll", handleScrollNavbar);
});
</script>
