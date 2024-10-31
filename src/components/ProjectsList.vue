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
    {{ $t('header_projects') }}
  </div>
  <div class="project-cards">
    <ProjectCard title="GoodTube" source-link="https://github.com/jakefish18/good_youtube"
      :description="$t('goodtube_description')" :image="GoodTubeLogo" year="2021" />
    <ProjectCard title="HowManyDaysTillBot" source-link="https://github.com/jakefish18/how-many-days-till-bot"
      :description="$t('how_many_days_till_bot_description')" :image="HowManyDaysTillBotLogo" year="2022" />
    <ProjectCard title="Avito Offers Notifier" source-link="https://github.com/jakefish18/AvitoOffersNotifier"
      :description="$t('avito_offers_notifier_description')" :image="AvitoParserBotLogo" year="2022" />
    <ProjectCard title="UesugiToolBot" source-link="https://github.com/jakefish18/UesugiToolBot"
      :description="$t('uesugi_tool_bot_description')" :image="UesugiToolBotLogo" year="2023" />
    <ProjectCard title="Eljur parser" source-link="https://github.com/jakefish18/eljur-parser"
      :description="$t('eljur_parser_description')" :image="EljurLogo" year="2023" />
    <ProjectCard :title="$t('personal_website_project_name')" source-link="https://github.com/jakefish18/jakefish-site"
      :description="$t('personal_website_description')" :image="MyLogo" year="2024" />
    <ProjectCard title="StackSMM" source-link="https://github.com/Central-University-IT-prod/PROD-Slonyary"
      :description="$t('stack_smm_description')" :image="StackSMMLogo" year="2024" />
    <ProjectCard title="WaniKani parser" source-link="https://github.com/jakefish18/wanikani-parser"
      :description="$t('wanikani_parser_description')" :image="WaniKaniLogo" year="2024" />
  </div>
  <div class="ps"> {{ $t('ps_after_projects') }} </div>
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
