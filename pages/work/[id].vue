<template>
  <section class="section section-work item-id">
    <div class="section-work-option">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="work-option-list-wrapper flex-wrap d-flex">
              <li class="work-option-item">
                <h1 class="d-inline description-text work-title font-bold">
                  {{ item.name }}
                </h1>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <div class="work-item-info-wrapper">
              <h2 class="description-text text-justify">
                {{ item.description01 }}
              </h2>
              <NuxtLink
                :to="item.link"
                :title="item.link"
                class="description-text big text-justify font-bold link"
                target="”_blank”"
                v-if="item.link"
              >
                {{ item.linkDescription }}
              </NuxtLink>
              <p class="description-text text-justify font-bold">
                {{ item.description02 }}
              </p>
            </div>
          </div>
          <div class="col-12">
            <div>
              <div
                class="work-item-swiper-wrapper video"
                v-if="
                  item.images.length > 0 &&
                  item.category === 'front-end development'
                "
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
                    <video
                      class="work-item-swiper video"
                      autoplay
                      loop
                      muted
                      webkit-playsinline
                      playsinline
                    >
                      <source :src="image.image" type="video/mp4" />
                    </video>
                  </SwiperSlide>
                </Swiper>
                <div class="slider-arrows-wrapper d-none d-lg-flex">
                  <button type="button" class="arrow-prev arrow-gallery-prev">
                    <i class="fa-solid fa-3x fa-chevron-left"></i>
                  </button>
                  <button type="button" class="arrow-next arrow-gallery-next">
                    <i class="fa-solid fa-3x fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div
                class="work-item-swiper-wrapper photo"
                v-if="item.images.length > 0 && item.category === 'video art'"
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
                    <img
                      class="work-item-swiper photo"
                      :title="item.name"
                      :alt="item.name"
                      :src="image.image"
                    />
                  </SwiperSlide>
                </Swiper>
                <div class="slider-arrows-wrapper d-none d-lg-flex">
                  <button type="button" class="arrow-prev arrow-gallery-prev">
                    <i class="fa-solid fa-3x fa-chevron-left"></i>
                  </button>
                  <button type="button" class="arrow-next arrow-gallery-next">
                    <i class="fa-solid fa-3x fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <NuxtLink
              to="javascript:history.back()"
              class="work-go-back"
              :title="props.database.data.work.goBack"
            >
              <div class="d-inline-flex">
                <p class="description-title big font-bold d-inline lowercase">
                  {{ props.database.data.work.goBack }}
                </p>
              </div></NuxtLink
            >
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
import { ref } from "vue";
const route = useRoute();
const id = parseInt(route.params.id);
const item = ref(
  props.database.data.work.categoryItem.find((item) => item.id === id)
);
</script>
