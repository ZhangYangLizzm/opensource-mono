import { createApp } from "vue";

import { createPinia } from 'pinia';

import App from "./App.vue";


import { Router } from "./router";

import '@/styles/index.css'

const app = createApp(App)

const pinia = createPinia()

app.use(Router)

app.use(pinia)

app.mount('#app')