<template>
  <section class="section section-work" id="section-work">
    <div
      class="section-work-option"
      v-if="categoryOption === `${database.data.work.category.front_end}`"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-2">
            <ul class="work-option-list-wrapper flex-wrap d-flex">
              <li
                class="work-option-item"
                v-for="item in categoryFrontEnd"
                :key="item.id"
              >
                <p
                  class="d-inline description-text"
                  @click="categoryFrontEndSelected = item.name"
                  :class="{
                    'font-bold': categoryFrontEndSelected === item.name,
                  }"
                >
                  {{ item.name }}
                </p>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-2">
            <div
              class="work-item-info-wrapper"
              v-for="item in categoryFrontEnd"
              :key="item.id"
            >
              <p
                class="description-text"
                v-if="categoryFrontEndSelected === item.name"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
          <div class="col-12 col-md-8">
            <div v-for="item in categoryFrontEnd" :key="item.id">
              <div
                class="work-item-swiper-wrapper"
                v-if="categoryFrontEndSelected === item.name"
              >
                <Swiper
                  :modules="[SwiperAutoplay, SwiperNavigation]"
                  :slides-per-view="1"
                  :pagination="{ clickable: true }"
                  :speed="1000"
                  :loop="true"
                  :autoplay="{
                    delay: 5000,
                  }"
                  :navigation="{
                    nextEl: '.arrow-gallery-next',
                    prevEl: '.arrow-gallery-prev',
                  }"
                >
                  <SwiperSlide v-for="image in item.images" :key="image.id">
                    <img class="work-item-swiper" :src="image.image" />
                  </SwiperSlide>
                </Swiper>
                <div class="slider-arrows-wrapper d-none d-lg-block">
                  <button type="button" class="arrow-prev arrow-gallery-prev">
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                  <button type="button" class="arrow-next arrow-gallery-next">
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="work-choose-btn-options d-flex flex-wrap align-items-center"
          >
            <p
              class="work-choose-btn description-text font-bold-italic"
              @click="
                categoryOption = `${database.data.work.category.front_end}`
              "
              :class="{
                active:
                  categoryOption === `${database.data.work.category.front_end}`,
              }"
            >
              {{ database.data.work.category.front_end }}
            </p>
            <p
              class="work-choose-btn description-text font-bold-italic"
              @click="
                categoryOption = `${database.data.work.category.video_art}`
              "
              :class="{
                active:
                  categoryOption === `${database.data.work.category.video_art}`,
              }"
            >
              {{ database.data.work.category.video_art }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import database from "../data/db.json";
const categoryOption = ref(`${database.data.work.category.front_end}`);
const categoryFrontEnd = ref([]);
const categoryFrontEndSelected = ref("kunst 3");
const categoryVideoArt = ref([]);
const categoryVideoArtSelected = ref([]);

onMounted(() => {
  categoryFrontEnd.value = database.data.work.categoryItem.front_end;
  categoryVideoArt.value = database.data.work.categoryItem.video_art;
});
</script>
