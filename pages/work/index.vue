<template>
  <section class="section section-work item-list">
    <div class="section-work-option">
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
              changeWorkOption(`${props.database.data.work.category.frontEnd}`)
            "
          >
            <p class="description-text text-justify font-bold-italic">
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
              changeWorkOption(`${props.database.data.work.category.videoArt}`)
            "
          >
            <p class="description-text text-justify font-bold-italic">
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
            <p class="description-text text-justify font-bold-italic">
              {{ props.database.data.work.category.miscellaneous }}
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-9 offset-lg-3">
            <ul class="work-option-list-wrapper version-work-list">
              <li
                class="work-option-item"
                v-for="item in workDataFrontEnd.slice().reverse()"
                :key="item.id"
                v-if="
                  categoryOption ===
                  `${props.database.data.work.category.frontEnd}`
                "
              >
                <NuxtLink :to="{ path: '/work/' + item.id }">
                  <div class="row align-items-center">
                    <div
                      class="col-12"
                      :class="{ 'col-sm-8 col-lg-6': item.images.length > 0 }"
                    >
                      <h1 class="description-text font-italic work-title">
                        {{ item.name }}
                      </h1>
                    </div>
                    <div
                      class="col-12 col-sm-4 col-lg-6"
                      v-if="item.images.length > 0"
                    >
                      <div class="work-item-swiper-wrapper">
                        <img
                          class="work-item-swiper"
                          :title="item.name"
                          :alt="item.name"
                          :src="item.images[0].image"
                        />
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </li>
              <li
                class="work-option-item"
                v-for="item in workDataVideoArt.slice().reverse()"
                :key="item.id"
                v-if="
                  categoryOption ===
                  `${props.database.data.work.category.videoArt}`
                "
              >
                <NuxtLink :to="{ path: '/work/' + item.id }">
                  <div class="row align-items-center">
                    <div class="col-12 col-lg-6">
                      <h1 class="description-text font-italic work-title">
                        {{ item.name }}
                      </h1>
                    </div>
                    <div class="col-12 col-lg-6" v-if="item.images.length > 0">
                      <div class="work-item-swiper-wrapper">
                        <img
                          class="work-item-swiper"
                          :title="item.name"
                          :alt="item.name"
                          :src="item.images[0].image"
                        />
                      </div>
                    </div>
                  </div>
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

const changeWorkOption = (elm) => {
  let workElmSection = document.querySelector(".section-work");
  workElmSection.scrollIntoView({ behavior: "smooth", top: 0 });
  categoryOption.value = elm;
};

const effectSkewList = () => {
  const workElmItem = document.querySelectorAll(
    ".work-option-list-wrapper.version-work-list .work-option-item"
  );
  const skewX = Math.floor(Math.random() * 70) - 70;
  const skewY = Math.floor(Math.random() * 70) - 70;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  let placeholder = null;

  if (workElmItem) {
    workElmItem.forEach((elm) => {
      const positionElm = elm.getBoundingClientRect();
      elm.addEventListener("mouseenter", () => {
        elm.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
        if (!placeholder) {
          placeholder = document.createElement("div");
          placeholder.style.width = `${elm.offsetWidth}px`;
          placeholder.style.height = `${elm.offsetHeight}px`;
          placeholder.style.visibility = "hidden";
          elm.parentNode.insertBefore(placeholder, elm);
        }
        elm.style.top = `${positionElm.top + scrollTop}px`;
        elm.style.left = `${positionElm.left + scrollLeft}px`;
      });
      elm.addEventListener("mouseleave", () => {
        elm.style.transform = "skew(0deg, 0deg)";
        if (placeholder) {
          placeholder.parentNode.removeChild(placeholder);
          placeholder = null;
        }
      });
    });
  }
};

onMounted(() => {
  workDataFrontEnd.value = props.database.data.work.categoryItem.filter(
    (item) => item.category === "front-end development"
  );
  workDataVideoArt.value = props.database.data.work.categoryItem.filter(
    (item) => item.category === "video art"
  );
});

onUpdated(() => {
  effectSkewList();
});
</script>
