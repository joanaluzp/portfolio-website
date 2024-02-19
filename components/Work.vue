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
      <ul class="work-option-list-wrapper version-work-background">
        <li
          class="work-option-item"
          :id="item.slug"
          v-for="item in workData"
          :key="item.id"
          :style="{
            left: item.randomLeft + 'px',
            top: item.randomTop + 'px',
          }"
        >
          <NuxtLink :to="{ path: '/work/' + item.id }">
            <h1
              class="description-text work-title"
              :class="item.images.length > 0 ? '' : 'no-img'"
            >
              {{ item.name }}
            </h1>
            <div
              class="work-item-swiper-wrapper video"
              data-aos="fade-in"
              data-aos-duration="1500"
              v-if="
                item.images.length > 0 &&
                item.category === 'front-end development'
              "
            >
              <video class="work-item-swiper video" loop muted autoplay>
                <source :src="item.images[0].image" type="video/mp4" />
              </video>
            </div>
            <div
              class="work-item-swiper-wrapper photo"
              data-aos="fade-in"
              data-aos-duration="1500"
              v-if="item.images.length > 0 && item.category === 'video art'"
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
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import database from "../data/db.json";

const workData = ref([]);

function randomWorkArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getRandomPosition() {
  const maxViewportWidth = window.innerWidth;
  const maxViewportHeight = window.innerHeight;
  const randomLeftValue = Math.random() * (900 - -700) + -700;
  const randomTopValue = Math.random();
  return { left: randomLeftValue, top: randomTopValue };
}

onMounted(() => {
  workData.value = database.data.work.categoryItem;
  if (workData.value) {
    randomWorkArray(workData.value);
    workData.value.forEach((item) => {
      const randomPosition = getRandomPosition();
      item.randomLeft = randomPosition.left;
      item.randomTop = randomPosition.top;
    });
  }
});
</script>
