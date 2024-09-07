<template>
  <section class="section section-contact">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="contact-text-wrapper">
            <p class="description-title big font-italic big lowercase">
              {{ props.database.data.contact.text }} (っ ͡ ͡º - ͡ ͡º ς)
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
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-lg-6 d-flex align-items-center contact-link-list"
        >
          <NuxtLink
            :to="props.database.data.contact.cv.link"
            :title="props.database.data.contact.cv.description"
            target="”_blank”"
          >
            <div class="contact-link-item d-inline-flex">
              <p class="description-text big font-italic link d-inline">
                {{ props.database.data.contact.cv.linkText }}
              </p>
            </div></NuxtLink
          >
          <NuxtLink
            :to="props.database.data.contact.github.link"
            :title="props.database.data.contact.github.description"
            target="”_blank”"
          >
            <div class="contact-link-item d-inline-flex">
              <p class="description-text big font-italic link d-inline">
                {{ props.database.data.contact.github.linkText }}
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
