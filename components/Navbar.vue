<template>
  <nav class="navbar">
    <p class="description-title menu d-block d-lg-none" @click="open = true" v-if="open">
      {{ database.data.nav.menu.open }}
    </p>
    <p class="description-title menu d-block d-lg-none" @click="open = false" v-else>
      {{ database.data.nav.menu.close }}
    </p>
    <div class="navbar-menu-wrapper" :class="{ 'is-open': open }">
      <ul class="navbar-menu-list">
        <NuxtLink :to="{ path: '/about/' }">
          <li class="navbar-menu-item">
            <p class="description-title bigger">
              {{ props.database.data.nav.about.name }}
            </p>
          </li>
        </NuxtLink>
        <NuxtLink :to="{ path: '/work/' }">
          <li class="navbar-menu-item">
            <p class="description-title bigger">
              {{ props.database.data.nav.work.name }}
            </p>
          </li>
        </NuxtLink>
        <NuxtLink :to="{ path: '/contact/' }">
          <li class="navbar-menu-item">
            <p class="description-title bigger">
              {{ props.database.data.nav.contact.name }}
            </p>
          </li></NuxtLink
        >
      </ul>
    </div>
  </nav>
</template>
<script setup>
const open = ref(false);
const prevScroll = ref(0);
const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});

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
