<template>
  <a :href="sourceLink" target="_blank" class="clickable-card">
    <div class="project-card">
      <img :src="image" alt="Project Logo" class="project-image" />
      <div class="project-info">
        <div class="project-info-text">
          <div class="project-header">
            <h2 class="project-title">{{ title }}</h2>
          </div>
          <span class="project-year">{{ year }}</span>
          <p class="project-description">{{ description }}</p>
        </div>
        <div class="project-info-button">
          <a :href="sourceLink" target="_blank" class="source-link">
            <img src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png" alt="GitHub"
              class="github-icon" />
            {{ $t('code_button_text') }}
          </a>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sourceLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.clickable-card {
  text-decoration: none;
}

.project-card {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  color: white;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  background-color: #3B444B;
}

.project-image {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 6px;
}

.project-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-title {
  font-size: 1.5rem;
  margin: 0;
}

.project-year {
  font-size: 1rem;
  color: #b1b1b1;
}

.project-description {
  margin: 10px 0;
  color: #b1b1b1;
}

.source-link {
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  text-decoration: none;
  font-size: 1rem;
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.source-link:active {
  background-color: #b1b0b0;
  transform: scale(0.98);
  /* Shrinks slightly when clicked */
}

.source-link.mousedown {
  background-color: rgba(44, 47, 49, 0.9);
  /* Darkens background when clicked */
}

.github-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
