<template>
  <section class="section section-contact">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex flex-column align-items-center justify-content-center">
          <div class="contact-text-wrapper">
            <!--              <div class="d-inline-flex flex-wrap">
              <p class="description-text medium font-italic lowercase">
                {{ props.database.data.contact.text }}
              </p>
              <p class="description-text medium font-italic lowercase">
                (っ ͡ ͡º - ͡ ͡º ς)
              </p>
            </div>  -->
            <NuxtLink
              :title="props.database.data.contact.email"
              to="mailto:joanaluzp@gmail.com"
              class="contact-email-link"
              ><h1 class="description-text big">
                {{ props.database.data.contact.email }}
              </h1></NuxtLink
            >
                        </div>

            <div
              class="d-flex align-items-center justify-content-center contact-link-list"
            >
              <NuxtLink
                :to="props.database.data.contact.cv.link"
                :title="props.database.data.contact.cv.description"
                target="”_blank”"
              >
                <div class="contact-link-item d-inline-flex">
                  <p class="description-text medium font-italic link d-inline">
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
                  <p class="description-text medium font-italic link d-inline">
                    {{ props.database.data.contact.github.linkText }}
                  </p>
                </div></NuxtLink
              >
          </div>
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
