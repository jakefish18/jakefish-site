<template>
  <div class="achievement-block">
    <span class="achievement-year">{{ year }}</span>
    <span class="achievement-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "AchievementBlock",
  props: {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.achievement-block {
  display: flex;
  align-items: center;
  background-color: #2c2f31;
  border-radius: 30px;
  padding: 10px 20px;
  color: white;
  font-family: 'Arial', sans-serif;
}

.achievement-year {
  background-color: #d16d5e;
  color: white;
  //border-radius: 30px 0 0 30px;
  padding: 30px;
  height: 100%;
  font-size: 1rem;
}

.achievement-title {
  margin-left: 20px;
  font-size: 1rem;
  color: white;
}
</style>
