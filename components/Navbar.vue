<template>
  <nav class="navbar">
    <div class="navbar-menu-wrapper">
      <ul class="navbar-menu-list d-lg-none">
        <li class="navbar-menu-item animation item-01">
          <NuxtLink :to="{ path: '/about/' }">
            <p class="description-title big">
              {{ props.database.data.nav.about.name }}
            </p>
          </NuxtLink>
        </li>
        <li class="navbar-menu-item animation item-02">
          <NuxtLink :to="{ path: '/contact/' }">
            <p class="description-title big">
              {{ props.database.data.nav.contact.name }}
            </p>
          </NuxtLink>
        </li>
      </ul>
      <ul class="navbar-menu-list d-none d-lg-flex">
        <li class="navbar-menu-item animation item-01">
          <NuxtLink :to="{ path: '/about/' }">
            <p class="description-title big">
              {{ props.database.data.nav.about.name }}
            </p>
          </NuxtLink>
        </li>
        <li class="navbar-menu-item animation item-02">
          <NuxtLink :to="{ path: '/work/' }">
            <p class="description-title big">
              {{ props.database.data.nav.work.name }}
            </p>
          </NuxtLink>
        </li>
        <li class="navbar-menu-item animation item-03">
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
    elmNavbar.style.top = "-100px";
    elmNavbarItem.forEach((el) => {
      el.classList.remove("animation");
      el.classList.add("opacity-0");
    });
    if (scroll < prevScroll.value) {
      elmNavbar.style.top = "15px";
      elmNavbarItem.forEach((el) => {
        el.classList.add("animation");
        el.classList.remove("opacity-0");
      });
    }
  } else {
    elmNavbar.style.top = "15px";
    elmNavbarItem.forEach((el) => {
      el.classList.add("animation");
      el.classList.remove("opacity-0");
    });
  }
  prevScroll.value = scroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScrollNavbar);
});
</script>
