<template>
  <section class="section section-welcome" id="section-welcome">
    <div class="welcome-text-wrapper">
      <div class="welcome-text-box" :class="{ 'is-open': open }">
        <p class="description-text text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit
          autem cum adipisci, aliquid tenetur expedita quam sunt, totam
          dignissimos provident illo aut obcaecati quod at sit laboriosam. Cum,
          dolores.
        </p>
      </div>
      <div class="welcome-text-btn" @click="open = !open">
        <p
          class="description-text font-italic big"
          :class="{ 'font-bold': open }"
        >
          click me 👈
        </p>
      </div>
    </div>
    <div class="welcome-ascii-wrapper">
      <pre>
               _                        
              | |                         
 __      _____| | ___ ___  _ __ ___   ___ 
 \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \
  \ V  V /  __/ | (_| (_) | | | | | |  __/
   \_/\_/ \___|_|\___\___/|_| |_| |_|\___|
      </pre>
    </div>
    <div class="welcome-video-wrapper">
      <video autoplay muted playsinline loop>
        <source src="../assets/images/myweb_min.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script setup>
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
