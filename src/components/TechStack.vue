<script setup>

import TechCard from "@/components/TechCard.vue";
</script>

<template>
  <div class="title">
    Tech Stack
  </div>
  <div class="tech-stack-cards">
    <TechCard title="Python" description="Used in most of the projects" image-path="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png"/>
    <TechCard title="Python" description="Used in most of the projects" image-path="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png"/>
    <TechCard title="Python" description="Used in most of the projects" image-path="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png"/>
    <TechCard title="Python" description="Used in most of the projects" image-path="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png"/>
  </div>
</template>

<style scoped>
.tech-stack-cards {
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