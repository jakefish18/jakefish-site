<template>
    <button @click="toggleLanguage" class="language-toggle">
        <span :class="{ active: currentLocale === 'en' }">ENG</span> /
        <span :class="{ active: currentLocale === 'ru' }">РУС</span>
    </button>
</template>

<script>
export default {
    computed: {
        currentLocale() {
            return this.$i18n.locale;
        }
    },
    methods: {
        toggleLanguage() {
            this.$i18n.locale = this.currentLocale === 'en' ? 'ru' : 'en';
        }
    }
};
</script>

<style scoped>
.language-toggle {
    font-size: 1rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0.5em;
    color: #232B2B;
    display: flex;
    align-items: center;
}

.language-toggle span {
    transition: color 0.3s ease;
}

.language-toggle .active {
    color: #FEDD2C;
    font-weight: bold;
}
</style>