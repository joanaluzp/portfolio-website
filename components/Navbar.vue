<template>
  <nav class="navbar">
    <div class="navbar-menu-wrapper">
      <ul class="navbar-menu-list">
        <li class="navbar-menu-item animation item-01">
          <NuxtLink :to="{ path: '/' }">
            <p class="description-title big">
              {{ props.database.data.nav.home.name }}
            </p>
          </NuxtLink>
        </li>
        <li class="navbar-menu-item animation item-02">
          <NuxtLink :to="{ path: '/about/' }">
            <p class="description-title big">
              {{ props.database.data.nav.about.name }}
            </p>
          </NuxtLink>
        </li>
        <li class="navbar-menu-item animation item-03">
          <NuxtLink :to="{ path: '/work/' }">
            <p class="description-title big">
              {{ props.database.data.nav.work.name }}
            </p>
          </NuxtLink>
        </li>
        <li class="navbar-menu-item animation item-04">
          <NuxtLink :to="{ path: '/contact/' }">
            <p class="description-title big">
              {{ props.database.data.nav.contact.name }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
const prevScroll = ref(0);
const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});

const handleScrollNavbar = () => {
  let scroll = window.pageYOffset;
  let elmNavbar = document.querySelector(".navbar");
  const elmNavbarItem = document.querySelectorAll(".navbar-menu-item");
  let heightNavbar = elmNavbar ? elmNavbar.offsetHeight : 0;
  if (scroll > heightNavbar) {
    elmNavbar.style.top = "-150px";
    elmNavbarItem.forEach((el) => {
      el.classList.remove("animation");
    });
    if (scroll < prevScroll.value) {
      elmNavbar.style.top = "0";
      elmNavbarItem.forEach((el) => {
        el.classList.add("animation");
      });
    }
  } else {
    elmNavbar.style.top = "0";
    elmNavbarItem.forEach((el) => {
      el.classList.add("animation");
    });
  }
  prevScroll.value = scroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScrollNavbar);
});
</script>
