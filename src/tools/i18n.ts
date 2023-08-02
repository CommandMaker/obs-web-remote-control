import { createI18n } from 'vue-i18n';
import Fr from './locales/fr.json';
import En from './locales/en.json';

export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('locale') ?? 'fr',
    fallbackLocale: 'en',
    messages: {
        fr: Fr,
        en: En
    }
});
