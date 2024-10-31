<script setup>

import TechCard from "@/components/TechCard.vue"
import CHJLogo from "@/assets/CHJLogo.png"
import GolangLogo from "@/assets/GolangLogo.png"
import AiogramLogo from "@/assets/AiogramLogo.png"
</script>

<template>
  <div class="title">
    {{ $t("header_techstack") }}
  </div>
  <div class="tech-stack-cards">
    <TechCard title="Python" :description="$t('python_as')"
      image-path="https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256" />
    <TechCard title="C++" :description="$t('cpp_as')"
      image-path="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" />
    <TechCard title="Golang" :description="$t('golang_as')" :image-path="GolangLogo" />
    <TechCard title="Vue.js" :description="$t('vuejs_as')"
      image-path="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" />
    <TechCard title="HTML/CSS/JS" :description="$t('html_css_js_as')" :image-path="CHJLogo" />
    <TechCard title="Nginx" :description="$t('nginx_as')" image-path="https://www.svgrepo.com/show/373924/nginx.svg" />
    <TechCard title="Git/GitHub" :description="$t('git_github_as')"
      image-path="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
    <TechCard title="Docker" :description="$t('docker_as')"
      image-path="https://static-00.iconduck.com/assets.00/docker-icon-1024x1024-mv7uzno8.png" />
    <TechCard title="PostgreSQL/SQLite" :description="$t('postgresql_sqlite_as')"
      image-path="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png" />
    <TechCard title="ClickHouse" :description="$t('clickhouse_as')"
      image-path="https://www.cdnlogo.com/logos/c/57/clickhouse.svg" />
    <TechCard title="Redis" :description="$t('redis_as')"
      image-path="https://www.stackery.io/assets/images/posts/redis-cache-cluster-support/featured.svg" />
    <TechCard title="FastAPI" :description="$t('fastapi_as')"
      image-path="https://cdn.worldvectorlogo.com/logos/fastapi.svg" />
    <TechCard title="Aiogram" :description="$t('aiogram_as')" :image-path="AiogramLogo" />
    <TechCard title="Flask" :description="$t('flask_as')"
      image-path="https://static-00.iconduck.com/assets.00/programming-language-flask-icon-2048x1826-wf5k5ugs.png" />
  </div>
</template>

<style scoped>
.tech-stack-cards {
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
</style>