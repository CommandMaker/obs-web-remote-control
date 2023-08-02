import '@/scss/app.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import { i18n } from '@/tools/i18n.ts';
import { router } from '@/tools/router.ts';

const app = createApp({});

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

app.use(pinia).use(i18n).use(router);

app.mount('#app');
