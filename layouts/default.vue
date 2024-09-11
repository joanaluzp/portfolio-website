<template>
  <div class="maintenance" v-if="maintenance">
    <p class="description-text text-center big">website under maintenance :(</p>
  </div>
  <div class="app-content" v-else>
    <Navbar :database="database" />
    <main class="main">
      <svg xmlns="" style="display: none">
        <defs>
          <filter id="svgFilter">
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="150"
              xChannelSelector="R"
              yChannelSelector="R"
            />

          </filter>
        </defs>
      </svg>
<!--       <BackgroundImg :database="database" />
 -->      <NuxtPage :database="database" />
    </main>
    <LazyFooter :database="database" />
  </div>
</template>
<script setup>
import database from "../data/db.json";
const maintenance = ref(false);
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
