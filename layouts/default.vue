<template>
  <div class="maintenance" v-if="maintenance">
    <p class="description-text text-center big">website under maintenance :(</p>
  </div>
  <div class="app-content" v-else>
    <Navbar :database="database" />
    <main class="main">
      <svg xmlns="" style="display: none">
        <defs>
          <filter
            id="svgFilter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feDisplacementMap
              in="SourceGraphic"
              in2="blur"
              scale="150"
              xChannelSelector="R"
              yChannelSelector="B"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="displacementMap1"
            />
          </filter>
        </defs>
      </svg>
      <NuxtPage :database="database" />
      <BackgroundImg :database="database" />
    </main>
    <LazyFooter :database="database" />
  </div>
</template>
<script setup>
import database from "../data/db.json";
const maintenance = ref(true);
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
