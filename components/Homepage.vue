<template>
  <section class="section section-work homepage">
    <div class="section-work-modal d-lg-none">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <NuxtLink :to="{ path: '/work/' }">
              <div class="work-modal">
                <p class="description-title bigger">
                  {{ props.database.data.work.modal }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="section-work-option">
      <ul class="work-option-list-wrapper version-work-background">
        <li
          v-for="item in filteredCategoryItems"
          :key="item.id"
          :style="{ left: item.randomLeft + 'px', top: item.randomTop + 'px' }"
          class="work-option-item"
        >
          <NuxtLink :to="{ path: '/work/' + item.id }">
            <h1
              class="description-text work-title"
              :class="{ 'no-img': item.images.length === 0 }"
            >
              {{ item.name }}
            </h1>
            <div
              class="work-item-swiper-wrapper"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <template v-if="item.images.length > 0">
                <img
                  class="work-item-swiper"
                  :title="item.name"
                  :alt="item.name"
                  :src="item.images[0].image"
                />
              </template>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
let categoryItems = ref([]);
const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});

const filteredCategoryItems = computed(() => {
  return categoryItems.value.filter((item) => {
    return item.images.length > 0;
  });
});

const effectSkewBg = () => {
  const workElmItem = document.querySelectorAll(
    ".work-option-list-wrapper.version-work-background .work-option-item .work-item-swiper"
  );
  if (workElmItem) {
    workElmItem.forEach((elm) => {
      const skewX = Math.floor(Math.random() * 100) - 100;
      const skewY = Math.floor(Math.random() * 100) - 100;
      elm.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
    });
  }
};

function randomWorkArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getRandomPosition() {
  const randomLeftValue = Math.random() * (900 - -700) + -700;
  const randomTopValue = Math.random();
  return { left: randomLeftValue, top: randomTopValue };
}

onMounted(() => {
  categoryItems.value = props.database.data.work.categoryItem;
  if (categoryItems.value) {
    randomWorkArray(categoryItems.value);
    categoryItems.value.forEach((item) => {
      const randomPosition = getRandomPosition();
      item.randomLeft = randomPosition.left;
      item.randomTop = randomPosition.top;
    });
  }
});

onUpdated(() => {
  effectSkewBg();
});
</script>
