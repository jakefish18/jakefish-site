<script setup>
import ProjectCard from "@/components/ProjectCard.vue"

import UesugiToolBotLogo from "@/assets/UesugiToolBotLogo.png"
import GoodTubeLogo from "@/assets/GoodTubeLogo.png"
import StackSMMLogo from "@/assets/StackSMMLogo.png"
import AvitoParserBotLogo from "@/assets/AvitoParserBotLogo.png"
import WaniKaniLogo from "@/assets/WaniKaniLogo.png"
import HowManyDaysTillBotLogo from "@/assets/HowManyDaysTillBotLogo.jpg"
import EljurLogo from "@/assets/EljurLogo.png"
import MyLogo from "@/assets/MyLogo.jpg"
</script>

<template>
  <div class="title">
    Projects
  </div>
  <div class="project-cards">
    <ProjectCard title="GoodTube" source-link="https://github.com/jakefish18/good_youtube"
      description="An app to filter trash content from YouTube" :image="GoodTubeLogo" year="2021" />
    <ProjectCard title="How Many Days Till Bot" source-link="https://github.com/jakefish18/how-many-days-till-bot"
      description="A Telegram bot for a countdown before some event" :image="HowManyDaysTillBotLogo" year="2022" />
    <ProjectCard title="Avito Offers Notifier" source-link="https://github.com/jakefish18/AvitoOffersNotifier"
      description="A Telegram bot for monitoring new offers from avito.ru" :image="AvitoParserBotLogo" year="2022" />
    <ProjectCard title="UesugiToolBot" source-link="https://github.com/jakefish18/UesugiToolBot"
      description="A Telegram bot for learning using flashcards" :image="UesugiToolBotLogo" year="2023" />
    <ProjectCard title="Eljur parser" source-link="https://github.com/jakefish18/eljur-parser"
      description="A parser to get the student grades from eljur.ru" :image="EljurLogo" year="2023" />
    <ProjectCard title="This site" source-link="https://github.com/jakefish18/jakefish-site"
      description="A personal website written in Vue.js" :image="MyLogo" year="2024" />
    <ProjectCard title="StackSMM" source-link="https://github.com/Central-University-IT-prod/PROD-Slonyary"
      description="A website to facilitate the work of SMM managers. Project was made by Slonyars team for the PROD olympiad"
      :image="StackSMMLogo" year="2024" />
    <ProjectCard title="WaniKani parser" source-link="https://github.com/jakefish18/wanikani-parser"
      description="An asynchronous parser for wanikani.com to create anki cards with kanji, radicals, and vocabulary"
      :image="WaniKaniLogo" year="2024" />
  </div>
  <div class="ps">
    There are other projects, but they are not open-sourced, too small, or I don't want to write README.md for them...
  </div>
</template>

<style scoped>
.project-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

.ps {
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
  align-self: center;
}
</style>