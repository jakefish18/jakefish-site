<script setup>
import MyImage from '@/assets/MyPhoto.png';
</script>

<template>
  <div class="about-block">
    <div class="text-block">
      <span class="my-name">Garifullin Insaf</span>
      <span class="short-description">Hi! I’m <span style="color: #FEDD2C">18 y.o.</span> backend developer from <span
          style="color: #FEDD2C">Innopolis, Russia</span>.</span>
    </div>
    <div class="image-block">
      <img :src="MyImage" alt="It's me)" />
    </div>
  </div>
</template>

<style scoped>
.about-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  gap: 30px;
}

.text-block {
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.my-name {
  align-content: start;
  font-size: 60px;
  font-weight: bold;
  height: 70%;
}

.short-description {
  font-weight: normal;
  font-size: 40px;
  height: 100%;
}
</style>