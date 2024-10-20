<template>
  <div class="tech-card">
    <img :src="imagePath" alt="Tech Logo" class="tech-image" />
    <div class="tech-info">
      <h2 class="tech-title">{{ title }}</h2>
      <p class="tech-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechCard",
  props: {
    imagePath: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.tech-card {
  display: flex;
  align-items: center;
  //background-color: #2c2f31; /* Dark background like in the image */
  padding: 20px;
  border-radius: 10px;
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
}

.tech-image {
  width: 80px;
  height: 80px;
  margin-right: 20px;
}

.tech-info {
  display: flex;
  flex-direction: column;
}

.tech-title {
  font-size: 1.5rem;
  margin: 0;
}

.tech-description {
  font-size: 1rem;
  color: #b1b1b1;
}
</style>
