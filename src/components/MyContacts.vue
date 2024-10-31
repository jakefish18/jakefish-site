<script setup>

import ContactLink from "@/components/ContactLink.vue";
</script>

<template>
  <div class="container">
    <div class="title">
      {{ $t('my_contacts_h1') }}
    </div>
    <div class="contacts-list">
      <ContactLink app_link="https://github.com/jakefish18" svg_url="http://147.45.185.145/images/Github.svg" />
      <ContactLink app_link="https://t.me/JakeFish" svg_url="http://147.45.185.145/images/Telegram.svg" />
      <ContactLink app_link="mailto:jakefish.work@gmail.com" svg_url="http://147.45.185.145/images/Email.svg" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contacts-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 40px;
  font-weight: bold;
  height: 70%;
}
</style>
