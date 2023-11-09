import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.provide('base_url', 'http://localhost:8000/api')

app.mount('#app')
