<template>
  <section class="section section-welcome" id="section-welcome">
    <div class="welcome-text-wrapper">
      <div class="welcome-text-box" :class="{ 'is-open': open }">
        <p class="description-text text-justify">
          {{ database.data.welcome.text }}
        </p>
      </div>
      <div
        class="welcome-text-btn"
        data-aos="flip-up"
        data-aos-duration="1000"
        @click="open = !open"
      >
        <p
          class="description-text font-italic big"
          :class="{ 'font-bold': open }"
        >
          {{ database.data.welcome.btn }} 👈
        </p>
      </div>
    </div>
    <div
      class="welcome-ascii-wrapper"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <pre>

        _                          
              | |                         
 __      _____| | ___ ___  _ __ ___   ___ 
 \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \
  \ V  V /  __/ | (_| (_) | | | | | |  __/
 | \_/\_/ \___|_|\___\___/|_| |_| |_|\___|
 | |_ ___    _ __ ___  _   _              
 | __/ _ \  | '_ ` _ \| | | |             
 | || (_) | | | | | | | |_| |             
  \__\___/  |_| |_| |_|\__, |             
                        __/ |             
               _       |___/              
              | |       (_) |             
 __      _____| |__  ___ _| |_ ___        
 \ \ /\ / / _ \ '_ \/ __| | __/ _ \       
  \ V  V /  __/ |_) \__ \ | ||  __/       
   \_/\_/ \___|_.__/|___/_|\__\___|       
                                          
                                          
</pre
      >
    </div>
    <div class="welcome-video-wrapper">
      <video autoplay muted playsinline loop>
        <source :src="database.data.welcome.video" type="video/mp4" />
      </video>
    </div>
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

const hoverEffect = () => {
  let el = document.querySelector(".welcome-ascii-wrapper");
  const height = el.clientHeight;
  const width = el.clientWidth;
  if (el) {
    el.addEventListener("mousemove", handleMove);
    function handleMove(e) {
      const xVal = e.layerX;
      const yVal = e.layerY;
      const yRotation = 20 * ((xVal - width / 2) / width);
      const xRotation = -20 * ((yVal - height / 2) / height);
      const string =
        "perspective(500px) scale(1.1) rotateX(" +
        xRotation +
        "deg) rotateY(" +
        yRotation +
        "deg)";
      el.style.transform = string;
    }
    el.addEventListener("mouseout", function () {
      el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });
    el.addEventListener("mousedown", function () {
      el.style.transform =
        "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
    });
    el.addEventListener("mouseup", function () {
      el.style.transform =
        "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
    });
  }
};

onMounted(() => {
  hoverEffect();
  window.addEventListener("click", clickOutside);
});
</script>
