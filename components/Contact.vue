<template>
  <section class="section section-contact" id="section-contact">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="contact-text-wrapper">
            <p class="description-title font-italic big lowercase">
              {{ database.data.contact.text }}
            </p>
            <a href="mailto: joanaluzp@gmail.com"
              ><p class="description-text big">
                {{ database.data.contact.email }}
              </p></a
            >
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="contact-ascii-wrapper"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <pre>

                                                       
                                                       
        ____                        ,--,    
                 ,'  , `.             ,--,   ,--.'|    
              ,-+-,.' _ |           ,--.'|   |  | :    
           ,-+-. ;   , ||           |  |,    :  : '    
   ,---.  ,--.'|'   |  || ,--.--.   `--'_    |  ' |    
  /     \|   |  ,', |  |,/       \  ,' ,'|   '  | |    
 /    /  |   | /  | |--'.--.  .-. | '  | |   |  | :    
.    ' / |   : |  | ,    \__\/: . . |  | :   '  : |__  
'   ;   /|   : |  |/     ," .--.; | '  : |__ |  | '.'| 
'   |  / |   | |`-'     /  /  ,.  | |  | '.'|;  :    ; 
|   :    |   ;/        ;  :   .'   \;  :    ;|  ,   /  
 \   \  /'---'         |  ,     .-./|  ,   /  ---`-'   
  `----'                `--`---'     ---`-'            
                                                       
                                  
</pre
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import database from "../data/db.json";
</script>
