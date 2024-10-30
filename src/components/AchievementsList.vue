<script setup>

import AchievementBlock from "@/components/AchievementBlock.vue"
</script>

<template>
  <div class="title">
    Achievements
  </div>
  <div class="achievements-list">
    <AchievementBlock title="Prize-winner of the regional stage of the &quot;Grand Challenges&quot; competition"
      year="2022.03" />
    <AchievementBlock title="Participant in the final stage of &quot;DANO&quot;" year="2022.12" />
    <AchievementBlock title="Prize-winner of the regional stage of the All-Russian Informatics School Olympiad"
      year="2023.01" />
    <AchievementBlock title="Prize-winner of the &quot;Belchonok&quot; olympiad in informatics" year="2023.02" />
    <AchievementBlock title="Winner of the Step into the Future olympiad in programming" year="2024.01" />
    <AchievementBlock title="Prize-winner of the regional stage of the All-Russian Informatics School Olympiad"
      year="2024.01" />
    <AchievementBlock title="Prize-winner of the &quot;Belchonok&quot; olympiad in informatics" year="2024.02" />
    <AchievementBlock title="Prize-winner of the I. Y. Verchenko olympiad in cybersecurity" year="2024.03" />
    <AchievementBlock title="Prize-winner of the PROD olympiad in industrial development" year="2024.04" />
  </div>
</template>

<style scoped>
.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
}

.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  color: #ffffff;
  font-size: 40px;
  font-weight: bold;
  height: 70%;
}
</style>