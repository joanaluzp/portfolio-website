<template>
  <section class="section section-work">
    <div
      class="section-work-option"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="work-option-list-wrapper flex-wrap d-flex">
              <li
                class="work-option-item"
              >
                <h1 class="d-inline description-text work-title">
                  {{ item.name }}
                </h1>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <div
              class="work-item-info-wrapper"
            >
              <h2 class="description-text text-justify small">
                {{ item.description01 }}
              </h2>
              <NuxtLink
                :to="item.link"
                :title="item.link"
                class="description-text big text-justify font-bold link"
                target="”_blank”"
                v-if="item.link"
              >
                {{ item.link_description }}
              </NuxtLink>
              <p class="description-text text-justify small font-bold">
                {{ item.description02 }}
              </p>
            </div>
          </div>
          <div class="col-12">
            <div
            >
              <div
                class="work-item-swiper-wrapper video"
                data-aos="fade-in"
                data-aos-duration="1500"
                v-if="item.images.length > 0"
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
                    <video class="work-item-swiper video" loop muted autoplay>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="section-work-option"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="work-option-list-wrapper flex-wrap d-flex">
              <li
                class="work-option-item"
              >
                <h1 class="d-inline description-text work-title">
                  {{ item.name }}
                </h1>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <div
              class="work-item-info-wrapper"
            >
              <h2 class="description-text text-justify small">
                {{ item.description01 }}
              </h2>
              <NuxtLink
                :to="item.link"
                :title="item.link"
                class="description-text big text-justify font-bold link"
                target="”_blank”"
                v-if="item.link"
              >
                {{ item.link_description }}
              </NuxtLink>
              <p class="description-text text-justify small font-bold">
                {{ item.description02 }}
              </p>
            </div>
          </div>
          <div class="col-12">
            <div
            >
              <div
                class="work-item-swiper-wrapper photo"
                data-aos="fade-in"
                data-aos-duration="1500"
                v-if="item.images.length > 0"
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
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import database from "../data/db.json";
import { ref } from "vue";
const route = useRoute();
const id = parseInt(route.params.id);
const item = ref(database.data.work.categoryItem.find((item) => item.id === id));
</script>
