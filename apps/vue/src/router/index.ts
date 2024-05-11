import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './module';

const Router = createRouter({
    history: createWebHistory(''),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
})

export { Router }