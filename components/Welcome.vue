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
    <pre>


                                                                                                 
      ..                                                                                            
  888>         u.                  u.    u.                                                      
  "8P    ...ue888b        u      x@88k u@88c.       u                                            
   .     888R Y888r    us888u.  ^"8888""8888"    us888u.                                         
 u888u.  888R I888> .@88 "8888"   8888  888R  .@88 "8888"                                        
`'888E   888R I888> 9888  9888    8888  888R  9888  9888                                         
  888E   888R I888> 9888  9888    8888  888R  9888  9888                                         
  888E  u8888cJ888  9888  9888    8888  888R  9888  9888                                         
  888E   "*888*P"   9888  9888   "*88*" 8888" 9888  9888                                         
  888E     'Y"      "888*""888"    ""   'Y"   "888*""888"                                        
  888E               ^Y"   ^Y'                 ^Y"   ^Y'                                         
  888E                                                                                           
  888P                                                                                           
.J88" "                                                                                          
                 .                                                      s                     .. 
                @88>                                                   :8               x .d88"  
 .d``           %8P      ..    .     :                  u.    u.      .88                5888R   
 @8Ne.   .u      .     .888: x888  x888.       .u     x@88k u@88c.   :888ooo      .u     '888R   
 %8888:u@88N   .@88u  ~`8888~'888X`?888f`   ud8888.  ^"8888""8888" -*8888888   ud8888.    888R   
  `888I  888. ''888E`   X888  888X '888>  :888'8888.   8888  888R    8888    :888'8888.   888R   
   888I  888I   888E    X888  888X '888>  d888 '88%"   8888  888R    8888    d888 '88%"   888R   
   888I  888I   888E    X888  888X '888>  8888.+"      8888  888R    8888    8888.+"      888R   
 uW888L  888'   888E    X888  888X '888>  8888L        8888  888R   .8888Lu= 8888L        888R   
'*88888Nu88P    888&   "*88%""*88" '888!` '8888c. .+  "*88*" 8888"  ^%888*   '8888c. .+  .888B . 
~ '88888F`      R888"    `~    "    `"`    "88888%      ""   'Y"      'Y"     "88888%    ^*888%  
   888 ^         ""                          "YP'                               "YP'       "%    
   *8E                                                                                           
   '8>                                                                                           
    "                                                                                            

    </pre>
    <div
      class="welcome-video-primary-wrapper"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <video autoplay muted playsinline loop>
        <source :src="database.data.welcome.video_primary" type="video/mp4" />
      </video>
    </div>
    <div class="welcome-video-secondary-wrapper">
      <video autoplay muted playsinline loop>
        <source :src="database.data.welcome.video_secondary" type="video/mp4" />
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
  let el = document.querySelector(".welcome-video-primary-wrapper video");
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
        "perspective(500px) scale(1.9) rotateX(" +
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
        "perspective(500px) scale(1.9) rotateX(0) rotateY(0)";
    });
  }
};

onMounted(() => {
  hoverEffect();
  window.addEventListener("click", clickOutside);
});
</script>
