<template>
  <nav class="navbar">
    <div class="navbar-menu-wrapper">
      <ul class="navbar-menu-list">
        <li class="navbar-menu-item">
          <p
            class="description-title bigger"
            @click="scrollToComponent(props.database.data.nav.about.category)"
          >
            {{ props.database.data.nav.about.name }}
          </p>
        </li>
        <li class="navbar-menu-item">
          <p
            class="description-title bigger"
            @click="scrollToComponent(props.database.data.nav.work.category)"
          >
            {{ props.database.data.nav.work.name }}
          </p>
        </li>
        <li class="navbar-menu-item">
          <p
            class="description-title bigger"
            @click="scrollToComponent(props.database.data.nav.contact.category)"
          >
            {{ props.database.data.nav.contact.name }}
          </p>
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

/* const handleScrollNavbar = () => {
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
  window.addEventListener("scroll", handleScrollNavbar);
}); */
</script>
