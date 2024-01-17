<template>
  <section class="section section-welcome" id="section-welcome">
    <div class="welcome-text-wrapper" :class="{ 'is-open': open }">
      <h3 class="welcome-text-box description-text">
        {{ database.data.welcome.text }}
      </h3>
      <p
        class="welcome-text-btn description-text text-right font-italic big"
        :class="{ 'font-bold': open }"
        @click="open = !open"
      >
        {{ database.data.welcome.btn }} 👈
      </p>
    </div>
    <pre>
                   ,----------------,           ,---------,
           ,-----------------------,          ,"        ,"|
         ,"                      ,"|        ,"        ,"  |
        +-----------------------+  |      ,"        ,"    |
        |  .-----------------.  |  |     +---------+      |
        |  |                 |  |  |     | -==----'|      |
        |  |                 |  |  |     |         |      |
        |  |                 |  |  |/----|`---=    |      |
        |  |  C:\>_ root@    |  |  |   ,/|==== ooo |      ;
        |  |                 |  |  |  // |(((( [33]|    ,"
        |  `-----------------'  |," .;'| |((((     |  ,"
        +-----------------------+  ;;  | |         |,"     
          /_)______________(_/  //'   | +---------+
    ___________________________/___  `,
    /  oooooooooooooooo  .o.  oooo /,   \,"-----------
  / ==ooooooooooooooo==.o.  ooo= //   ,`\--{)B     ,"
  /_==__==========__==_ooo__ooo=_/'   /___________,"
  `-----------------------------'
    </pre>
  </section>
</template>
<script setup>
import database from "../data/db.json";
const open = ref(false);

const clickOutside = (event) => {
  const box = document.querySelector(".welcome-text-wrapper");
  if (box) {
    if (!box.contains(event.target)) {
      open.value = false;
    }
  }
};

onMounted(() => {
  window.addEventListener("click", clickOutside);
});
</script>
