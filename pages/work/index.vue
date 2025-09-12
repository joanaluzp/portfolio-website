<template>
  <section class="section section-work item-list">
    <div class="section-work-option">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8 offset-lg-4">
            <div class="work-choose-btn-wrapper">
              <div class="work-choose-btn-list d-flex">
                <div
                  class="work-choose-btn-item"
                  :class="{
                    active:
                      categoryOption ===
                      `${props.database.data.work.category.frontEnd}`,
                  }"
                  @click="
                    changeWorkOption(
                      `${props.database.data.work.category.frontEnd}`
                    )
                  "
                >
                  <p class="description-text medium text-justify">
                    {{ props.database.data.work.category.frontEnd }}
                  </p>
                </div>
                <div
                  class="work-choose-btn-item"
                  :class="{
                    active:
                      categoryOption ===
                      `${props.database.data.work.category.videoArt}`,
                  }"
                  @click="
                    changeWorkOption(
                      `${props.database.data.work.category.videoArt}`
                    )
                  "
                >
                  <p class="description-text medium text-justify">
                    {{ props.database.data.work.category.videoArt }}
                  </p>
                </div>
                <div
                  class="work-choose-btn-item"
                  :class="{
                    active:
                      categoryOption ===
                      `${props.database.data.work.category.miscellaneous}`,
                  }"
                  @click="
                    changeWorkOption(
                      `${props.database.data.work.category.miscellaneous}`
                    )
                  "
                >
                  <p class="description-text medium text-justify">
                    {{ props.database.data.work.category.miscellaneous }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-8 d-none d-lg-block">
            <img class="work-index-img" :src="props.database.data.work.img" />
          </div>
          <div class="col-12 col-lg-4">
            <ul
              class="work-option-list-wrapper version-work-list"
              v-if="
                categoryOption ===
                `${props.database.data.work.category.frontEnd}`
              "
            >
              <li
                class="work-option-item"
                v-for="item in workDataFrontEnd"
                :key="item.id"
              >
                <NuxtLink :to="{ path: '/work/' + item.id }">
                  <div class="row align-items-center">
                    <div class="col-12">
                      <h1 class="description-text font-italic work-title">
                        {{ item.name }}
                      </h1>
                    </div>
                  </div>
                  <template v-if="item.images.length > 0">
                    <img
                      class="work-img"
                      :title="item.name"
                      :alt="item.name"
                      :src="item.images[0].image"
                    />
                  </template>
                </NuxtLink>
              </li>
            </ul>
            <ul
              class="work-option-list-wrapper version-work-list"
              v-if="
                categoryOption ===
                `${props.database.data.work.category.videoArt}`
              "
            >
              <li
                class="work-option-item"
                v-for="item in workDataVideoArt"
                :key="item.id"
              >
                <NuxtLink :to="{ path: '/work/' + item.id }">
                  <div class="row align-items-center">
                    <div class="col-12">
                      <h1 class="description-text font-italic work-title">
                        {{ item.name }}
                      </h1>
                    </div>
                  </div>
                  <template v-if="item.images.length > 0">
                    <img
                      class="work-img"
                      :title="item.name"
                      :alt="item.name"
                      :src="item.images[0].image"
                    />
                  </template>
                </NuxtLink>
              </li>
            </ul>
            <ul
              class="work-option-list-wrapper version-work-list"
              v-if="
                categoryOption ===
                `${props.database.data.work.category.miscellaneous}`
              "
            >
              <li
                class="work-option-item"
                v-for="item in workDataMiscellaneous"
                :key="item.id"
              >
                <NuxtLink :to="{ path: '/work/' + item.id }">
                  <div class="row align-items-center">
                    <div class="col-12">
                      <h1 class="description-text font-italic work-title">
                        {{ item.name }}
                      </h1>
                    </div>
                  </div>
                  <template v-if="item.images.length > 0">
                    <img
                      class="work-img"
                      :title="item.name"
                      :alt="item.name"
                      :src="item.images[0].image"
                    />
                  </template>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});
const categoryOption = ref(`${props.database.data.work.category.frontEnd}`);
const workDataVideoArt = ref([]);
const workDataFrontEnd = ref([]);
const workDataMiscellaneous = ref([]);

const changeWorkOption = (elm) => {
  let workElmSection = document.querySelector(".section-work");
  workElmSection.scrollIntoView({ behavior: "smooth", top: 0 });
  categoryOption.value = elm;
    localStorage.setItem("lastCategory", elm);

};

onMounted(() => {
  const savedCategory = localStorage.getItem("lastCategory");
  if (savedCategory) {
    categoryOption.value = savedCategory;
  }
  
  workDataFrontEnd.value = props.database.data.work.categoryItem
    .filter((item) => item.category === "front-end development")
    .sort((a, b) => b.year - a.year);

  workDataVideoArt.value = props.database.data.work.categoryItem
    .filter((item) => item.category === "video art")
    .sort((a, b) => b.year - a.year);

  workDataMiscellaneous.value = props.database.data.work.categoryItem
    .filter((item) => item.category === "miscellaneous")
    .sort((a, b) => b.year - a.year);
});

</script>
