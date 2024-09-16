<template>
  <section class="section section-work item-id">
    <div class="section-work-option">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="work-option-list-wrapper flex-wrap d-flex">
              <li class="work-option-item">
                <h1 class="d-inline description-text work-title font-italic">
                  {{ item.name }}
                </h1>
                <h1 class="d-inline description-title big font-italic">
                  {{ item.name }}
                </h1>
              </li>
            </ul>
          </div>
          <div class="col-12">
            <div class="work-item-info-wrapper">
              <h2 class="description-text medium text-justify">
                {{ item.description01 }}
              </h2>
            </div>
          </div>
          <div class="col-12">
            <div class="work-item-info-wrapper">
              <NuxtLink
                :to="item.link"
                :title="item.link"
                class="d-inline description-text text-justify font-bold link"
                target="”_blank”"
                v-if="item.link"
              >
                {{ item.linkDescription }}
              </NuxtLink>
              <NuxtLink
                :to="item.link02"
                :title="item.link02"
                class="d-inline description-text text-justify font-bold link"
                target="”_blank”"
                v-if="item.link02"
              >
                {{ item.linkDescription02 }}
              </NuxtLink>
              <p class="description-text font-italic text-justify">
                {{ item.description02 }}
              </p>
              <p
                class="description-text font-italic text-justify"
                v-if="item.description03"
              >
                {{ item.description03 }}
              </p>
            </div>
          </div>
          <div class="col-12">
            <div>
              <div
                class="work-item-swiper-wrapper"
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
                      class="work-item-swiper"
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

onMounted(() => {
  const swiperElement = document.querySelector(".work-item-swiper-wrapper");
  const prevArrow = document.querySelector(".arrow-gallery-prev");
  const nextArrow = document.querySelector(".arrow-gallery-next");

  const handleMouseMove = (event) => {
    const swiperRect = swiperElement.getBoundingClientRect();
    const mouseX = event.clientX - swiperRect.left;
    const mouseY = event.clientY - swiperRect.top;
    const swiperWidth = swiperRect.width;
    if (mouseX <= swiperWidth / 2) {
      prevArrow.style.transform = `translate(${mouseX - 10}px, ${
        mouseY - 20
      }px)`;
      prevArrow.style.opacity = 1;
      nextArrow.style.opacity = 0;
    }

    if (mouseX > swiperWidth / 2) {
      const relativeX = mouseX - swiperWidth / 2;

      nextArrow.style.transform = `translate(${
        relativeX + swiperWidth / 2 - 15
      }px, ${mouseY - 15}px)`;
      prevArrow.style.opacity = 0;
      nextArrow.style.opacity = 1;
    }
  };
  if (swiperElement) {
    swiperElement.addEventListener("mousemove", handleMouseMove);
  }

  onBeforeUnmount(() => {
    if (swiperElement) {
      swiperElement.removeEventListener("mousemove", handleMouseMove);
    }
  });
});
</script>
