<template>
  <section class="section section-work" id="section-work">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="work-title-wrapper d-flex justify-content-center"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <p
              class="description-title uppercase font-bold-italic d-inline bigger"
            >
              {{ database.data.work.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-work-option">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="work-option-list-wrapper list-effect">
              <li
                class="work-option-item"
                v-for="item in workData.slice().reverse()"
                :key="item.id"
              >
                <NuxtLink
                  :to="{ path: '/work/' + item.id }"
                  v-if="
                    categoryOption ===
                      `${database.data.work.category.front_end}` &&
                    item.category === 'front-end development'
                  "
                >
                  <h1 class="description-text work-title">
                    {{ item.name }}
                  </h1>
                  <div
                    class="work-item-swiper-wrapper video"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                    v-if="item.images.length > 0"
                  >
                    <video class="work-item-swiper video" loop muted autoplay>
                      <source :src="item.images[0].image" type="video/mp4" />
                    </video>
                  </div>
                </NuxtLink>
                <NuxtLink
                  :to="{ path: '/work/' + item.id }"
                  v-if="
                    categoryOption ===
                      `${database.data.work.category.video_art}` &&
                    item.category === 'video art'
                  "
                >
                  <h1 class="description-text work-title">
                    {{ item.name }}
                  </h1>
                  <div
                    class="work-item-swiper-wrapper photo"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                    v-if="item.images.length > 0"
                  >
                    <img
                      class="work-item-swiper photo"
                      :title="item.name"
                      :alt="item.name"
                      :src="item.images[0].image"
                    />
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="work-choose-btn-options-wrapper">
            <div
              class="work-choose-btn-options d-flex flex-wrap align-items-center"
            >
              <div
                class="work-choose-btn"
                :class="{
                  active:
                    categoryOption ===
                    `${database.data.work.category.front_end}`,
                }"
                @click="
                  categoryOption = `${database.data.work.category.front_end}`
                "
              >
                <p class="description-text text-justify font-bold-italic">
                  {{ database.data.work.category.front_end }}
                </p>
              </div>
              <div
                class="work-choose-btn"
                :class="{
                  active:
                    categoryOption ===
                    `${database.data.work.category.video_art}`,
                }"
                @click="
                  categoryOption = `${database.data.work.category.video_art}`
                "
              >
                <p class="description-text text-justify font-bold-italic">
                  {{ database.data.work.category.video_art }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import database from "../data/db.json";
const categoryOption = ref(`${database.data.work.category.front_end}`);
const workData = ref([]);
onMounted(() => {
  workData.value = database.data.work.categoryItem;
});
</script>
