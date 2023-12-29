<template>
  <section class="section aside section-contact" id="section-contact">
    <div class="container">
      <div class="row">
        <div class="col-12 col-xxl-6">
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
        <div class="col-12 col-xxl-2 d-flex justify-content-end">
          <div
            class="contact-cv-wrapper d-inline-flex"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <NuxtLink :to="database.data.contact.cv.link" target="”_blank”">
              <p class="description-text d-inline text-center lowercase">
                {{ database.data.contact.cv.text }}
              </p>
              <p class="description-text link d-inline">
                {{ database.data.contact.cv.link_text }}
              </p></NuxtLink
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
