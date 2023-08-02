import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw
} from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: LoginPage
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
