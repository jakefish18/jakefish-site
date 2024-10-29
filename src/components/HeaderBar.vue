<template>
  <header>
    <nav>
      <a href="#about"><div class="nav-element">About</div></a>
      <a href="#tech-stack"><div class="nav-element">TechStack</div></a>
      <a href="#projects"><div class="nav-element">Projects</div></a>
      <a href="#achievements"><div class="nav-element">Achievements</div></a>
    </nav>
<!--    <nav>-->
<!--      <ul>-->
<!--        <li><a>About</a></li>-->
<!--        <li><a>TechStack</a></li>-->
<!--        <li><a>Projects</a></li>-->
<!--        <li><a>Achievements</a></li>-->
<!--        <li><a>Contacts</a></li>-->
<!--      </ul>-->
<!--    </nav>-->
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
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
  //background-color: #2a73b2;
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
}
</style>
