<script setup>

import AchievementBlock from "@/components/AchievementBlock.vue";
</script>

<template>
  <div class="title">
    Achievements
  </div>
  <div class="achievements-list">
    <AchievementBlock title="Призёр регионального этапа конкурса &quot;Большие вызовы&quot;" year="2022.03"/>
    <AchievementBlock title="Участник заключительного этапа DANO" year="2022.12"/>
    <AchievementBlock title="Призёр регионального этапа ВсОШ по информатике" year="2023.01"/>
    <AchievementBlock title="Призёр олимпиады Бельчонок по информатике" year="2023.02"/>
    <AchievementBlock title="Победитель олимпиады Шаг в Будущее по программированию" year="2024.01"/>
    <AchievementBlock title="Призёр регионального этапа ВсОШ по информатике" year="2024.01"/>
    <AchievementBlock title="Призёр олимпиады Бельчонок по информатике" year="2024.02"/>
    <AchievementBlock title="Призёр олимпиады им. И. Я. Верченко по комьютерной безопасноти" year="2024.03"/>
    <AchievementBlock title="Призёр олимпиады PROD по промышленной разработке" year="2024.03"/>
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