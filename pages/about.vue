<template>
  <section class="section section-about">
    <div class="section-about-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="about-text-wrapper">
              <h5 class="description-text medium text-justify">
                {{ props.database.data.about.text }}
              </h5>
            </div>
          </div>
          <div class="col-12 col-lg-4 offset-lg-2">
            <p class="about-playlist-text description-title bigger text-justify">
              <NuxtLink
                :title="props.database.data.about.playlistLink"
                :to="props.database.data.about.playlistLink"
                target="”_blank”"
                class="about-playlist-link"
                >{{ props.database.data.about.playlistText }}</NuxtLink
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-skills-wrapper">
      <div class="container">
        <div class="row">
          <div
            class="col-12 d-flex justify-content-center flex-column align-items-center"
          >
            <div
              class="skills-dropdown-toggle"
              :class="{ 'no-animation': openSkills }"
            >
              <p
                class="description-title d-inline font-italic lowercase big text-center"
              >
                {{ props.database.data.about.skills.text }}
              </p>
              <!--               <p class="description-text d-inline small lowercase text-center">
                {{ props.database.data.about.skills.textToggle }}
              </p> -->
            </div>
            <div
              class="skills-dropdown-wrapper"
              :class="{
                'is-open': openSkills,
              }"
            >
              <div class="skills-dropdown-inner">
                <ul
                  class="skills-dropdown-list"
                  :class="{
                    'is-open': openSkillsInfo,
                  }"
                >
                  <li class="skills-dropdown-list-description">
                    <p
                      class="description-text font-bold-italic lowercase text-center"
                    >
                      {{ props.database.data.about.skills.textInformative }}
                    </p>
                  </li>
                  <li
                    class="skills-dropdown-list-item"
                    v-for="item in skillOption"
                    :key="item.id"
                  >
                    <h6
                      class="description-text option d-inline font-italic uppercase"
                      @click="showElm(item.category)"
                    >
                      {{ item.skill }}
                    </h6>
                    <p class="description-text divider d-inline uppercase">
                      📂
                    </p>
                    <div
                      class="skills-infocard-wrapper"
                      v-if="openSkillsInfo && info === item.category"
                    >
                      <div class="skills-infocard">
                        <div class="container">
                          <div class="row justify-content-center">
                            <div class="col-12">
                              <div class="info-title-wrapper">
                                <p
                                  class="info-title description-title capitalize font-italic bigger"
                                >
                                  {{ item.skill }}
                                </p>
                                <p
                                  class="info-title-overlay description-title font-italic lowercase big"
                                >
                                  {{ item.skill }}
                                </p>
                              </div>
                              <p
                                class="info-description description-text big text-justify"
                              >
                                {{ item.description }}
                              </p>
                              <p
                                class="btn-go-back description-text font-bold lowercase big"
                                @click="openSkillsInfo = false"
                              >
                                {{ props.database.data.about.skills.goBack }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const skillOption = ref([]);
const openSkillsInfo = ref(false);
const openSkills = ref(false);
const info = ref("");
const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});

const showElm = (elmId) => {
  openSkillsInfo.value = true;
  info.value = elmId;
};

const toggleSkillsHandler = () => {
  let skillsToggle = document.querySelector(".skills-dropdown-toggle");
  if (skillsToggle) {
    skillsToggle.addEventListener("click", () => {
      openSkills.value = !openSkills.value;
      setTimeout(() => {
        window.scrollBy(0, window.innerHeight);
      }, 300);
    });
  }
};

onMounted(() => {
  toggleSkillsHandler();
  skillOption.value = props.database.data.about.skills.option;
});
</script>
