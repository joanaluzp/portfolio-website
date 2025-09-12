<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="footer-wrapper">
        <p class="description-text d-inline small">
          <span class="description-text d-inline small font-bold">
            {{ currentYear }}
          </span>
          {{ props.database.data.footer.text }}
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useRoute } from 'vue-router';

const currentYear = ref(new Date().getFullYear());
const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});

const route = useRoute();

const handleScrollFooter = () => {
  const footer = document.querySelector(".footer-wrapper");
  if (!footer) return; // guard

  const windowHeight = window.innerHeight;
  const scrollableHeight = document.documentElement.scrollHeight - windowHeight;
  const currentScroll = window.scrollY;

  if (currentScroll >= scrollableHeight) {
    footer.style.bottom = "0";
  } else {
    footer.style.bottom = "-100px";
  }
};

onMounted(() => {
  if (route.path === "/") {
    window.addEventListener("scroll", handleScrollFooter);
  }
});

onUnmounted(() => {
  if (route.path === "/") {
    window.removeEventListener("scroll", handleScrollFooter);
  }
});
</script>
