<template>
  <section class="section aside section-about" id="section-about">
    <div class="section-about-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-xxl-6">
            <div class="about-text-wrapper">
              <p class="description-title big font-bold-italic">
                {{ database.data.about.intro }}
              </p>
              <p class="description-text small">
                {{ database.data.about.text }}
              </p>
            </div>
          </div>
          <div class="col-12 col-xxl-6">
            <div class="about-pre-wrapper" :class="{ 'is-open': openSkills }">
              <pre>
                   ,----------------,           ,---------,
           ,-----------------------,          ,"        ,"|
         ,"                      ,"|        ,"        ,"  |
        +-----------------------+  |      ,"        ,"    |
        |  .-----------------.  |  |     +---------+      |
        |  |                 |  |  |     | -==----'|      |
        |  |                 |  |  |     |         |      |
        |  |                 |  |  |/----|`---=    |      |
        |  |  C:\>_          |  |  |   ,/|==== ooo |      ;
        |  |                 |  |  |  // |(((( [33]|    ,"
        |  `-----------------'  |," .;'| |((((     |  ,"
        +-----------------------+  ;;  | |         |,"     
          /_)______________(_/  //'   | +---------+
    ___________________________/___  `,
    /  oooooooooooooooo  .o.  oooo /,   \,"-----------
  / ==ooooooooooooooo==.o.  ooo= //   ,`\--{)B     ,"
  /_==__==========__==_ooo__ooo=_/'   /___________,"
  `-----------------------------'
            </pre
              >
            </div>
            <div
              class="skills-dropdown-toggle d-inline-block"
              @click="openSkills = !openSkills"
            >
              <p
                class="description-text d-inline lowercase font-black text-justify"
              >
                {{ database.data.about.skills.text }}
              </p>
              <p
                class="description-text d-inline small font-italic lowercase text-justify"
              >
                {{ database.data.about.skills.text_toggle }}
              </p>
            </div>
            <div
              class="skills-dropdown-wrapper"
              :class="{ 'is-open': openSkills }"
            >
              <div class="skills-dropdown-inner">
                <ul class="skills-dropdown-list">
                  <li class="skills-dropdown-list-description">
                    <p class="description-text lowercase small text-center">
                      {{ database.data.about.skills.text_informative }}
                    </p>
                  </li>
                  <li
                    class="skills-dropdown-list-item"
                    v-for="item in skillOption"
                    :key="item.id"
                  >
                    <p
                      class="description-text option d-inline font-italic uppercase"
                      @click="showElm(item.category)"
                    >
                      {{ item.skill }}
                    </p>
                    <p class="description-text divider d-inline uppercase">
                      ୨୧
                    </p>
                    <div
                      class="skills-infocard-big-wrapper"
                      :class="{
                        'is-open': openSkillsInfo && info === item.category,
                      }"
                    >
                      <div class="skills-infocard-wrapper">
                        <div class="skills-infocard">
                          <p
                            class="close d-inline description-text font-bold-italic lowercase big"
                            @click="openSkillsInfo = false"
                          >
                            {{ database.data.about.skills.close }}
                          </p>
                          <p
                            class="info-title description-title capitalize bigger"
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
import database from "../data/db.json";
const skillOption = ref([]);
const openSkillsInfo = ref(false);
const openSkills = ref(false);
const info = ref("");

const showElm = (elmId) => {
  openSkillsInfo.value = true;
  info.value = elmId;
};

const clickOutside = (event) => {
  const elmList = document.querySelector(".skills-dropdown-list");
  if (elmList) {
    if (!elmList.contains(event.target)) {
      openSkillsInfo.value = false;
    }
  }
};

onMounted(() => {
  window.addEventListener("click", clickOutside);
  skillOption.value = database.data.about.skills.option;
});
</script>
