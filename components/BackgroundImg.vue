<template>
  <section class="section section-background homepage">
    <div v-if="randomItem" class="background-img">
      <template v-if="randomItem.images.length > 0">
        <div
          class="background-img-item"
          :style="{
            'background-image': 'url(' + randomItem.images[0].image + ')',
          }"
        ></div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
let categoryItems = ref([]);
const randomItem = ref(null);

const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});

const filteredCategoryItems = computed(() => {
  return categoryItems.value.filter((item) => {
    return (
      item.images.length > 0 ||
      item.category === "front-end development" ||
      (item.images.length > 0 && item.category === "video art")
    );
  });
});

onMounted(() => {
  categoryItems.value = props.database.data.work.categoryItem;
  const filteredItems = filteredCategoryItems.value;
  if (filteredItems.length > 0) {
    randomItem.value =
      filteredItems[Math.floor(Math.random() * filteredItems.length)];
  }
});
</script>
