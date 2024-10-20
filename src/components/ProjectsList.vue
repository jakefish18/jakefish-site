<script setup>

import ProjectCard from "@/components/ProjectCard.vue";
</script>

<template>
  <div class="title">
    Projects
  </div>
  <div class="project-cards">
    <ProjectCard title="UesugiToolBot" source-link="https://github.com/jakefish18/UesugiToolBot" description="Telegram bot for learning using flashcards" image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png" year="2020"/>
    <ProjectCard title="UesugiToolBot" source-link="https://github.com/jakefish18/UesugiToolBot" description="Telegram bot for learning using flashcards" image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png" year="2020"/>
    <ProjectCard title="UesugiToolBot" source-link="https://github.com/jakefish18/UesugiToolBot" description="Telegram bot for learning using flashcards" image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png" year="2020"/>
    <ProjectCard title="UesugiToolBot" source-link="https://github.com/jakefish18/UesugiToolBot" description="Telegram bot for learning using flashcards" image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png" year="2020"/>
  </div>
</template>

<style scoped>
.project-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 10px;
}

.title {
  align-self: center;
  color: #ffffff;
  font-size: 40px;
  font-weight: bold;
  height: 70%;
}
</style>