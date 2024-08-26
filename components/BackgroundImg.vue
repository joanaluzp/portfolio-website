<template>
  <section v-if="!hideBackground" class="section section-background homepage">
    <div v-if="randomImage" class="background-img">
      <img
        class="background-img-item"
        style="filter: url(#svgFilter)"
        :src="randomImage"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";

let categoryItems = ref([]);
const randomItem = ref(null);
const randomImage = ref(null);
const route = useRoute();

const hideBackground = computed(() => {
  const id = route.params.id; 
  return route.path === "/" || route.path === `/work/${id}`;
});

const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});

const filteredCategoryItems = computed(() => {
  return categoryItems.value.filter((item) => {
    return item.images && item.images.length > 0;
  });
});

const selectRandomItem = () => {
  const filteredItems = filteredCategoryItems.value;
  if (filteredItems.length > 0) {
    randomItem.value =
      filteredItems[Math.floor(Math.random() * filteredItems.length)];
    if (randomItem.value.images.length > 0) {
      randomImage.value =
        randomItem.value.images[
          Math.floor(Math.random() * randomItem.value.images.length)
        ].image;
    }
  }
};

watch(
  () => route.path,
  () => {
    if (!hideBackground.value) {
      selectRandomItem();
    }
  }
);

onMounted(() => {
  categoryItems.value = props.database.data.work.categoryItem;
  if (!hideBackground.value) {
    selectRandomItem();
  }
});
</script>
