<script setup>

import ContactLink from "@/components/ContactLink.vue"

import EmailSvg from "@/assets/Email.svg"
import GithubSvg from "@/assets/Github.svg"
import TelegramSvg from "@/assets/Telegram.svg"
import CodeforcesSvg from "@/assets/Codeforces.svg"
</script>

<template>
  <div class="container">
    <div class="title">
      {{ $t('my_contacts_h1') }}
    </div>
    <div class="contacts-list">
      <ContactLink app_link="https://github.com/jakefish18" :svg_url="GithubSvg" />
      <ContactLink app_link="https://t.me/JakeFish" :svg_url="TelegramSvg" />
      <ContactLink app_link="mailto:jakefish.work@gmail.com" :svg_url="EmailSvg" />
      <ContactLink app_link="https://codeforces.com/profile/jakefiish" :svg_url="CodeforcesSvg" />
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

@media (max-width: 768px) {
  .title {
    font-size: 30px;
  }
}
</style>
