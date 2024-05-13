import { createApp } from "vue";

import { createPinia } from 'pinia';

import App from "./App.vue";
import { Router } from "./router";
import { i18n } from './locales'
import '@/styles/index.css'

const app = createApp(App)

app.use(i18n)

const pinia = createPinia()

app.use(Router)

app.use(pinia)

app.mount('#app')