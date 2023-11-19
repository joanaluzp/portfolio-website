<template>
  <section class="section section-skills" id="section-skills">
    <div class="skills-wraper">
      <div
        class="skills-text"
        :class="{ 'd-none': open }"
      >
        <p class="description-text lowercase font-black text-justify">
          {{ database.data.skills.text }}
        </p>
      </div>
      <ul class="skills-list">
        <li class="skills-item" v-for="item in skillOption" :key="item.id">
          <p
            class="description-text d-inline big font-italic uppercase"
            @click="showElm(item.category)"
          >
            {{ item.skill }}
          </p>
          <p class="description-text big d-inline font-italic uppercase"> ªªª </p>
          <div
            class="skills-info-box-wrapper"
            :class="{ 'is-open': open && info === item.category }"
          >
            <p class="skills-info-box description-text text-justify">
              {{ item.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import database from "../data/db.json";
const skillOption = ref([]);
const open = ref(false);
const info = ref("");

const showElm = (elmId) => {
  open.value = true;
  info.value = elmId;
};

const clickOutside = (event) => {
  const elmList = document.querySelector(".skills-list");
  if (elmList) {
    if (!elmList.contains(event.target)) {
      open.value = false;
    }
  }
};

onMounted(() => {
  window.addEventListener("click", clickOutside);
  skillOption.value = database.data.skills.option;
});
</script>
