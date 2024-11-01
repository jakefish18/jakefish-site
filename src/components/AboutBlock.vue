<script setup>
import MyImage from '@/assets/MyPhoto.png';
</script>

<template>
  <div class="about-block">
    <div class="text-block">
      <span class="my-name">{{ $t('person_name') }}</span>
      <span class="short-description">
        <p v-html="$t('person_short_description')"></p>
      </span>
      <!-- <div class="some-facts">
        <span>
          Borned in the lovely middle of nowhere: <span style="color: #F0DF85">Bashkortostan, Dumeevo</span>
        </span>
        <span>
          Languages: <span style="color: #F0DF85">Tatarish, Russian, English</span>
        </span>
      </div> -->
    </div>
    <div class="image-block">
      <img class="my-image" :src="MyImage" alt="It's me)" />
    </div>
  </div>
</template>

<style scoped>
p {
  all: unset;
}

.about-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
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

@media (max-width: 768px) {
  .image-block {
    width: 100px;
    order: 1;
  }

  .text-block {
    order: 2;
  }

  .about-block {
    gap: 10px;
  }

  .my-name {
    font-size: 40px;
  }

  .my-image {
    width: 100px;
    border-radius: 100%;
  }

  .short-description {
    font-size: 25px;
  }
}

/* 
.some-facts {
  display: flex;
  flex-direction: column;
  color: #b1b1b1;
} */
</style>