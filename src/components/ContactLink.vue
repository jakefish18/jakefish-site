<script>
export default {
  name: "ContactLink",
  props: {
    svg_url: {
      type: String,
      required: true,
    },
    app_link: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <a :href=app_link>
    <div class="contact-block">
      <img :src="svg_url" class="contact-icon" />
    </div>
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
}

.contact-icon {
  width: 70px;
  height: 70px;
}
</style>
