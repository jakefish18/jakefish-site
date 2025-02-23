<script setup>
import MenuSvg from "@/assets/Menu.svg"
</script>

<template>
  <header>
    <nav>
      <div class="empty-div" v-if="!isMobile"></div>
      <div class="header-buttons" v-if="!isMobile">
        <a href="#about">
          <div class="nav-element">{{ $t('header_about') }}</div>
        </a>
        <a href="#tech-stack">
          <div class="nav-element">{{ $t('header_techstack') }}</div>
        </a>
        <a href="#projects">
          <div class="nav-element">{{ $t('header_projects') }}</div>
        </a>
        <a href="#achievements">
          <div class="nav-element">{{ $t('header_achievements') }}</div>
        </a>
      </div>
      <div class="menu-button" v-if="isMobile" @click="openSidebar">
        <img class="menu-image" :src="MenuSvg" />
      </div>
      <div class="toggle-button">
        <ToggleButton />
      </div>
      <div class="empty-div" v-if="isMobile"></div>
      <SideBar class="sidebar-in" :class="{ 'sidebar-open': sidebarOpen, 'sidebar-closed': !sidebarOpen }"
        :sidebarOpen="sidebarOpen" @close="closeSidebar" />
    </nav>
  </header>
</template>

<script>
import ToggleButton from "./ToggleButton.vue"
import SideBar from "./SideBar.vue";

export default {
  data() {
    return {
      sidebarOpen: false,
      isMobile: window.innerWidth <= 768,
      isClosing: false,
      isOpening: false
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768
    },
    openSidebar() {
      this.isOpening = true;
      this.sidebarOpen = true;
      setTimeout(() => {
        this.isOpening = false;
      }, 200);
    },
    closeSidebar() {
      this.isClosing = true;
      setTimeout(() => {
        this.isClosing = false;
        this.sidebarOpen = false;
      }, 200);
    }
  },
  components: {
    ToggleButton,
    SideBar,
  }
};
</script>

<style scoped>
header {
  background-color: #3B444B;
  color: white;
  height: 80px;
}

a {
  text-decoration: none;
  color: inherit;
}

.nav-element {
  font-size: 1rem;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-element:hover {
  background-color: #1C2121;
}

.nav-element:active {
  color: #FEDD2C;
  background-color: #1b2a34;
}

nav {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
}

.header-buttons {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.toggle-button {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 100%;
  margin: 0;
}

.menu-image {
  width: 40px;
  height: 40px;
}

.empty-div {
  width: 70px;
}

.sidebar-in {
  transition: transform 0.2s ease;
}

.sidebar-open {
  transform: translateX(0);
}

.sidebar-closed {
  transform: translateX(-100%);
}

@media (max-width: 768px) {
  nav {
    justify-content: space-between;
  }
}
</style>
