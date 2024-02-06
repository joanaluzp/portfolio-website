<template>
  <section class="section aside section-work" id="section-work">
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
    <div
      class="section-work-option"
      v-if="categoryOption === `${database.data.work.category.front_end}`"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-xxxl-2">
            <ul class="work-option-list-wrapper flex-wrap d-flex">
              <li
                class="work-option-item"
                v-for="item in categoryFrontEnd.slice().reverse()"
                :key="item.id"
              >
                <h1
                  class="d-inline description-text"
                  @click="categoryFrontEndSelected = item.name"
                  :class="{
                    active: categoryFrontEndSelected === item.name,
                  }"
                >
                  {{ item.name }}
                </h1>
              </li>
            </ul>
          </div>
          <div
            class="col-12 col-xxxl-8"
            v-if="categoryFrontEndSelected === '★this website★'"
          >
            <div
              class="work-item-info-wrapper"
              v-for="item in categoryFrontEnd.slice().reverse()"
              :key="item.id"
            >
              <h2
                class="description-text text-justify small"
                v-if="categoryFrontEndSelected === item.name"
              >
                {{ item.description01 }}
              </h2>
              <p
                class="description-text text-justify small font-bold"
                v-if="categoryFrontEndSelected === item.name"
              >
                {{ item.description02 }}
              </p>
            </div>
          </div>
          <div class="col-12 col-xxxl-3" v-else>
            <div
              class="work-item-info-wrapper"
              v-for="item in categoryFrontEnd.slice().reverse()"
              :key="item.id"
            >
              <h2
                class="description-text text-justify small"
                v-if="categoryFrontEndSelected === item.name"
              >
                {{ item.description01 }}
              </h2>
              <NuxtLink
                :to="item.link"
                :title="item.link"
                class="description-text big text-justify font-bold link"
                target="”_blank”"
                v-if="categoryFrontEndSelected === item.name && item.link"
              >
                {{ item.link_description }}
              </NuxtLink>
              <p
                class="description-text text-justify small font-bold"
                v-if="categoryFrontEndSelected === item.name"
              >
                {{ item.description02 }}
              </p>
            </div>
          </div>
          <div class="col-12 col-xxxl-7">
            <div
              v-for="item in categoryFrontEnd.slice().reverse()"
              :key="item.id"
            >
              <div
                class="work-item-swiper-wrapper video"
                data-aos="fade-in"
                data-aos-duration="1500"
                v-if="
                  categoryFrontEndSelected === item.name &&
                  item.images.length > 0
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
      v-if="categoryOption === `${database.data.work.category.video_art}`"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-xxxl-2">
            <ul class="work-option-list-wrapper flex-wrap d-flex">
              <li
                class="work-option-item"
                v-for="item in categoryVideoArt.slice().reverse()"
                :key="item.id"
              >
                <h1
                  class="d-inline description-text"
                  @click="categoryVideoArtSelected = item.name"
                  :class="{
                    active: categoryVideoArtSelected === item.name,
                  }"
                >
                  {{ item.name }}
                </h1>
              </li>
            </ul>
          </div>
          <div class="col-12 col-xxxl-3">
            <div
              class="work-item-info-wrapper"
              v-for="item in categoryVideoArt.slice().reverse()"
              :key="item.id"
            >
              <h2
                class="description-text text-justify small"
                v-if="categoryVideoArtSelected === item.name"
              >
                {{ item.description01 }}
              </h2>
              <NuxtLink
                :to="item.link"
                :title="item.link"
                class="description-text big text-justify font-bold link"
                target="”_blank”"
                v-if="categoryVideoArtSelected === item.name && item.link"
              >
                {{ item.link_description }}
              </NuxtLink>
              <p
                class="description-text text-justify small font-bold"
                v-if="categoryVideoArtSelected === item.name"
              >
                {{ item.description02 }}
              </p>
            </div>
          </div>
          <div class="col-12 col-xxxl-7">
            <div
              v-for="item in categoryVideoArt.slice().reverse()"
              :key="item.id"
            >
              <div
                class="work-item-swiper-wrapper photo"
                data-aos="fade-in"
                data-aos-duration="1500"
                v-if="
                  categoryVideoArtSelected === item.name &&
                  item.images.length > 0
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
const categoryFrontEnd = ref([]);
const categoryFrontEndSelected = ref("kunst 3");
const categoryVideoArt = ref([]);
const categoryVideoArtSelected = ref("Negative Index");

onMounted(() => {
  categoryFrontEnd.value = database.data.work.categoryItem.front_end;
  categoryVideoArt.value = database.data.work.categoryItem.video_art;
});
</script>
