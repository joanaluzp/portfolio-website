<template>
  <section class="section section-about" id="section-about">
    <div class="section-about-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-9 col-xxl-8">
            <div
              class="about-text-background"
              :class="{ animation: !openAbout }"
              @click="openAbout = !openAbout"
            >
              <p
                class="description-title bigger d-inline lowercase text-center"
              >
                {{ props.database.data.about.intro }}
              </p>
            </div>
            <div class="about-text-wrapper">
              <h5 class="description-text text-justify">
                {{ props.database.data.about.text }}
              </h5>
            </div>
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
                class="description-text d-inline lowercase font-black text-center"
              >
                {{ props.database.data.about.skills.text }}
              </p>
              <p class="description-text d-inline small lowercase text-center">
                {{ props.database.data.about.skills.textToggle }}
              </p>
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
                      🔗
                    </p>
                    <div
                      class="skills-infocard-wrapper"
                      :class="{
                        'is-open': openSkillsInfo && info === item.category,
                      }"
                    >
                      <div class="skills-infocard">
                        <div class="container">
                          <div class="row justify-content-center">
                            <div class="col-12 col-lg-8">
                              <p
                                class="btn-close d-inline description-text font-bold lowercase big"
                                @click="openSkillsInfo = false"
                              >
                                {{ props.database.data.about.skills.close }}
                              </p>
                              <p
                                class="info-title description-title capitalize font-italic bigger"
                              >
                                {{ item.skill }}
                              </p>
                              <p
                                class="info-description description-text text-justify"
                              >
                                {{ item.description }}
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
const openAbout = ref(false);
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
      skillsToggle.scrollIntoView({ behavior: "smooth", top: 0 });
    });
  }
};

onMounted(() => {
  toggleSkillsHandler();
  skillOption.value = props.database.data.about.skills.option;
});
</script>
