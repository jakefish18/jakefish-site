<template>
  <div class="achievement-block">
    <div class="achievement-year">{{ year }}</div>
    <div class="achievement-title">{{ title }}</div>
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
  justify-content: center;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  border-radius: 30px;
  color: white;
  font-family: 'Arial', sans-serif;
}

.achievement-year {
  background-color: #d16d5e;
  color: white;
  border-radius: 30px 0 0 30px;
  font-size: 1.5rem;
  height: 50px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.achievement-title {
  background-color: #1C2121;
  color: white;
  width: 100%;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0 30px 30px 0;
  width: 900px;
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .achievement-title {
    font-size: 16px;
    height: 40px;
  }

  .achievement-year {
    font-size: 16px;
    height: 40px;
  }

  .achievement-block {
    border-radius: 15px;
  }
}
</style>
