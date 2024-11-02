<template>
  <header>
    <nav>
      <div class="empty-div"></div>
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
      <div class="toggle-button">
        <ToggleButton />
      </div>
    </nav>
  </header>
</template>

<script>
import ToggleButton from './ToggleButton.vue';

export default {
  data() {
    return {
      sidebarOpen: false,
      isMobile: window.innerWidth <= 768,
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
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    closeSidebar() {
      this.sidebarOpen = false
    }
  },
  components: {
    ToggleButton,
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
</style>
