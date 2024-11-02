<script setup>

import AchievementBlock from "@/components/AchievementBlock.vue"
</script>

<template>
  <div class="title">
    {{ $t('header_achievements') }}
  </div>
  <div class="achievements-list">
    <AchievementBlock :title="$t('big_challenges_prize_winner')" year="2022.03" />
    <AchievementBlock :title="$t('dano_participant')" year="2022.12" />
    <AchievementBlock :title="$t('vsosh_prize_winner')" year="2023.01" />
    <AchievementBlock :title="$t('belchonok_prize_winner')" year="2023.02" />
    <AchievementBlock :title="$t('step_into_the_future_winner')" year="2024.01" />
    <AchievementBlock :title="$t('vsosh_prize_winner')" year="2024.01" />
    <AchievementBlock :title="$t('belchonok_prize_winner')" year="2024.02" />
    <AchievementBlock :title="$t('cybersecurity_olympiad_prize_winner')" year="2024.03" />
    <AchievementBlock :title="$t('prod_prize_winner')" year="2024.04" />
  </div>
</template>

<style scoped>
.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

@media (max-width: 768px) {
  .achievements-list {
    gap: 20px;
  }

  .title {
    font-size: 30px;
  }
}
</style>