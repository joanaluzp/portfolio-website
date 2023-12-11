<template>
  <section class="section aside section-about" id="section-about">
    <div class="container">
      <div class="row">
        <div class="col-12 col-xxl-6">
          <div class="about-ascii-wrapper">
            <pre>
                                                                          
        **             ***** **         * ***         ***** *    **     ****           * 
     *****          ******  ***       *  ****      ******  *  *****    *  *************  
    *  ***         **   *  * **      *  *  ***    **   *  *     ***** *     *********    
       ***        *    *  *  **     *  **   ***  *    *  **     * **  *     *  *         
      *  **           *  *   *     *  ***    ***     *  ***     *      **  *  **         
      *  **          ** **  *     **   **     **    **   **     *         *  ***         
     *    **         ** ** *      **   **     **    **   **     *        **   **         
     *    **         ** ***       **   **     **    **   **     *        **   **         
    *      **        ** ** ***    **   **     **    **   **     *        **   **         
    *********        ** **   ***  **   **     **    **   **     *        **   **         
   *        **       *  **     **  **  **     **     **  **     *         **  **         
   *        **          *      **   ** *      *       ** *      *          ** *      *   
  *****      **     ****     ***     ***     *         ***      *           ***     *    
 *   ****    ** *  *  ********        *******           ********             *******     
*     **      **  *     ****            ***               ****                 ***       
*                 *                                                                      
 **                **                                                                    
            </pre>
          </div>
          <div class="about-text-wrapper">
            <p class="description-text text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              aliquam voluptatibus recusandae veniam accusantium soluta
              explicabo iste quam exercitationem vero, quae nihil! Earum
              nesciunt repellendus laborum at! Ipsum, culpa recusandae. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Odio nobis
              quis vitae dolorem autem sapiente, officia cum consequuntur
              commodi quibusdam voluptatum eius, exercitationem, voluptate alias
              recusandae tenetur minus maxime obcaecati.
            </p>
          </div>
        </div>
        <div class="col-12 col-xxl-4 offset-xxl-1">
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
            class="skills-dropdown-list-wrapper"
            :class="{ 'is-open': openSkills }"
          >
            <ul class="skills-dropdown-list">
              <li class="skills-dropdown-list-item description">
                <p
                  class="description-text lowercase small text-center"
                >
                💻 {{ database.data.about.skills.text_informative }} ⚙️
                </p>
              </li>
              <li
                class="skills-dropdown-list-item option"
                v-for="item in skillOption"
                :key="item.id"
              >
                <p
                  class="description-text d-inline big font-italic uppercase"
                  @click="showElm(item.category)"
                >
                  {{ item.skill }}
                </p>
                <div
                  class="skills-info-box-wrapper"
                  :class="{
                    'is-open': openSkillsInfo && info === item.category,
                  }"
                >
                  <div class="skills-info-box">
                    <p
                      class="close d-inline description-text font-bold-italic lowercase big"
                      @click="openSkillsInfo = false"
                    >
                      <span>👋</span>
                      {{ database.data.about.skills.close }}
                      <span>👋</span>
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
