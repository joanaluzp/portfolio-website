<template>
  <nav class="navbar">
    <div class="navbar-menu-wrapper" :class="{ 'is-open': open }">
      <ul class="navbar-menu-list">
        <li class="navbar-menu-item" v-for="item in navOption" :key="item.id">
          <p
            class="description-text"
            @click="scrollToComponent(item.category)"
          >
            {{ item.name }}
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
const navOption = ref([]);

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
  navOption.value = database.data.nav.menu;
  window.addEventListener("scroll", handleScrollNavbar);
});
</script>
