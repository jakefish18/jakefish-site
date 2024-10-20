<script setup>

import AchievementBlock from "@/components/AchievementBlock.vue";
</script>

<template>
  <div class="title">
    Achievements
  </div>
  <div class="acvhievments-list">
    <AchievementBlock title="Призёр регионального этапа ВсОШ" year="2023.04"/>
  </div>
</template>

<style scoped>
.acvhievments-list {
  display: flex;
  flex-direction: column;
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