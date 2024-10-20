<template>
  <HeaderBar class="app-header"/>
  <div class="content">
    <AboutBlock/>
    <DividingLine/>
    <TechStack/>
    <DividingLine/>
    <ProjectsList/>
    <DividingLine/>
    <AchievmentsList/>
    <DividingLine/>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import AboutBlock from "@/components/AboutBlock.vue";
import DividingLine from "@/components/DividingLine.vue";
import TechStack from "@/components/TechStack.vue";
import ProjectsList from "@/components/ProjectsList.vue";
import AchievmentsList from "@/components/AchievementsList.vue";

export default {
  name: 'App',
  components: {
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

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  background-color: #232B2B;
}

.app-header {
  position: sticky;
  top: 0; /* Stick to the top */
  z-index: 1000; /* Ensure it's above other elements */
}

.content {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  margin-right: 20%;
  margin-left: 20%;
}
</style>
