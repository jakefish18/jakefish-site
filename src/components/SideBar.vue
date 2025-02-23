<!-- Sidebar.vue -->
<template>
    <div class="sidebar-overlay" :class="{ 'overlay-active': sidebarOpen }" @click.self="closeSidebar">
        <div class="sidebar">
            <button @click="closeSidebar" class="close-button">×</button>
            <nav class="sidebar-nav">
                <a href="#about" @click="closeSidebar">About</a>
                <a href="#tech-stack" @click="closeSidebar">TechStack</a>
                <a href="#projects" @click="closeSidebar">Projects</a>
                <a href="#achievements" @click="closeSidebar">Achievements</a>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar",
    props: {
        sidebarOpen: Boolean
    },
    methods: {
        closeSidebar() {
            this.$emit('close'); // Emit close event to parent
        },
    },
};
</script>

<style scoped>
.overlay-active {
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: auto;
}

.sidebar-toggle-button {
    font-size: 1.5rem;
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1001;
}

.sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent overlay */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 1000;
}

/* Sidebar */
.sidebar {
    width: 100%;
    /* Sidebar width */
    height: 100%;
    background-color: #3B444B;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
}

.sidebar-nav {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.sidebar-nav a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.sidebar-nav a:hover {
    color: #FEDD2C;
}

/* Close Button */
.close-button {
    font-size: 2rem;
    background: none;
    border: none;
    color: white;
    align-self: flex-end;
    cursor: pointer;
    margin-top: 15px;
}
</style>