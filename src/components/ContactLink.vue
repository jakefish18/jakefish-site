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
  width: 60px;
  height: 60px;
}

.contact-icon:hover {
  opacity: 0.8;
}

.contact-icon:active {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .contact-icon {
    width: 50px;
    height: 50px;
  }
}
</style>
