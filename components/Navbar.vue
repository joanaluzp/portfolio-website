<template>
  <nav class="navbar">
    <div class="navbar-toggle-wrapper" @click="open = !open">
      <p
        class="description-title capitalize bigger"
        :class="{ 'd-none': open }"
      >
        {{ database.data.nav.open }}
      </p>
      <p
        class="closed description-title capitalize bigger"
        :class="{ 'd-block': open }"
      >
        {{ database.data.nav.hide }}
      </p>
    </div>
    <div class="navbar-menu-wrapper" :class="{ 'is-open': open }">
      <ul class="navbar-menu-list">
        <li class="navbar-menu-item" v-for="item in navOption" :key="item.id">
          <p
            class="description-text medium"
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
const navOption = ref([]);

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
  navOption.value = database.data.nav.menu;
});
</script>
