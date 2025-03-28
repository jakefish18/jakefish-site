import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import ru from './locales/ru.json';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en', 
  messages: {
    en,
    ru,
  },
  warnHtmlMessage: false,
  globalInjection: true,
});

// Create and mount the app
const app = createApp(App);
app.use(i18n);
app.mount('#app');