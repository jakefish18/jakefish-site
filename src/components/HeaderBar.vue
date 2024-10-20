<template>
  <header>
    <nav>
      <ul>
        <li><a>About</a></li>
        <li><a>TechStack</a></li>
        <li><a>Projects</a></li>
        <li><a>Achievements</a></li>
        <li><a>Contacts</a></li>
      </ul>
    </nav>
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
  padding: 1em;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 5em;
}

nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
