<template>
  <section class="section section-skills" id="section-skills">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="skills-ascii-wrapper d-flex justify-content-end"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <pre>

              :'######::'##:::'##:'####:'##:::::::'##::::::::'######::
              '##... ##: ##::'##::. ##:: ##::::::: ##:::::::'##... ##:
              ##:::..:: ##:'##:::: ##:: ##::::::: ##::::::: ##:::..::
              . ######:: #####::::: ##:: ##::::::: ##:::::::. ######::
              :..... ##: ##. ##:::: ##:: ##::::::: ##::::::::..... ##:
              '##::: ##: ##:. ##::: ##:: ##::::::: ##:::::::'##::: ##:
              . ######:: ##::. ##:'####: ########: ########:. ######::
              :......:::..::::..::....::........::........:::......:::

        </pre
            >
          </div>
        </div>
        <div class="col-7 offset-lg-4 col-lg-2 order-lg-3">
          <div class="skills-popup-text">
            <p class="description-text lowercase font-black text-justify">
              {{ database.data.skills.text }}
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-5 order-lg-2">
          <ul class="skills-full-list">
            <li
              class="skills-full-list-item"
              v-for="item in skillOption"
              :key="item.id"
            >
              <p
                class="description-text option d-inline big font-italic uppercase"
                @click="showElm(item.category)"
              >
                {{ item.skill }}
              </p>
              <div
                class="skills-info-box-wrapper"
                :class="{ 'is-open': open && info === item.category }"
              >
                <div class="skills-info-box">
                  <p
                    class="close d-inline description-text font-bold-italic lowercase big"
                    @click="open = false"
                  >
                    {{ database.data.skills.close }}
                  </p>
                  <p class="info-title description-title capitalize bigger">
                    {{ item.skill }}
                  </p>
                  <p class="info-description description-text text-justify">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
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
  const elmList = document.querySelector(".skills-full-list");
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
