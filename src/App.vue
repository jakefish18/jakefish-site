<template>
  <HeaderBar class="app-header" />
  <div class="content">
    <section id="about">
      <AboutBlock />
    </section>
    <DividingLine />
    <section id="tech-stack">
      <TechStack />
    </section>
    <DividingLine />
    <section id="projects">
      <ProjectsList />
    </section>
    <DividingLine />
    <section id="achievements">
      <AchievmentsList />
    </section>
    <DividingLine />
    <MyContacts />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import AboutBlock from "@/components/AboutBlock.vue";
import DividingLine from "@/components/DividingLine.vue";
import TechStack from "@/components/TechStack.vue";
import ProjectsList from "@/components/ProjectsList.vue";
import AchievmentsList from "@/components/AchievementsList.vue";
import MyContacts from "@/components/MyContacts.vue";

export default {
  name: 'App',
  components: {
    MyContacts,
    AchievmentsList,
    ProjectsList,
    DividingLine,
    AboutBlock,
    HeaderBar,
    TechStack
  }
}
</script>

<style>
#app {
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #232B2B;
}

section {
  padding-top: 100px;
  /* Offset equal to the height of your sticky header */
  margin-top: -100px;
  /* Pull the section up to compensate */
}

.app-header {
  position: sticky;
  top: 0;
  /* Stick to the top */
  z-index: 1000;
  /* Ensure it's above other elements */
}

.content {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-height: 100vh;
  margin-right: 20%;
  margin-left: 20%;
}

@media (max-width: 768px) {
  .content {
    margin-left: 3%;
    margin-right: 3%;
  }
}
</style>
