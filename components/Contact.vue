<template>
  <section class="section section-contact" id="section-contact">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <div class="contact-text-wrapper">
            <p class="description-title font-italic big lowercase">
              {{ props.database.data.contact.text }}
            </p>
            <NuxtLink
              :title="props.database.data.contact.email"
              to="mailto:joanaluzp@gmail.com"
              class="contact-email-link"
              ><h1 class="description-text big">
                {{ props.database.data.contact.email }}
              </h1></NuxtLink
            >
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex align-items-center justify-content-end">
          <NuxtLink
            :to="props.database.data.contact.cv.link"
            class="contact-cv-link-wrapper"
            :title="props.database.data.contact.cv.description"
            target="”_blank”"
          >
            <div
              class="contact-cv-wrapper d-inline-flex"
            >
              <p class="description-text d-inline text-center lowercase">
                {{ props.database.data.contact.cv.text }}
              </p>
              <p class="description-text link d-inline">
                {{ props.database.data.contact.cv.linkText }}
              </p>
            </div></NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  database: {
    type: Object,
    required: true,
  },
});
</script>
