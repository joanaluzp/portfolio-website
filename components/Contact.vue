<template>
  <section class="section aside section-contact" id="section-contact">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-xl-4">
          <div class="contact-text-wrapper">
            <p class="description-title font-italic big lowercase">
              {{ database.data.contact.text }}
            </p>
            <NuxtLink
              to="mailto:joanaluzp@gmail.com"
              class="contact-email-link"
              ><p class="description-text big">
                {{ database.data.contact.email }}
              </p></NuxtLink
            >
          </div>
        </div>
        <div class="col-12 col-xl-6 d-flex justify-content-end">
          <NuxtLink
            :to="database.data.contact.cv.link"
            class="contact-cv-link-wrapper"
            target="”_blank”"
          >
            <div
              class="contact-cv-wrapper d-inline-flex"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p class="description-text d-inline text-center lowercase">
                {{ database.data.contact.cv.text }}
              </p>
              <p class="description-text link d-inline">
                {{ database.data.contact.cv.link_text }}
              </p>
            </div></NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import database from "../data/db.json";
</script>
