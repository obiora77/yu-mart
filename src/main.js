import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification';
import { Icon } from "@iconify/vue";
import App from './App.vue'
import router from './router'

import 'vue-toast-notification/dist/theme-bootstrap.css';
import './assets/styles/main.css'

createApp(App)
   .use(createPinia())
   .use(ToastPlugin)
   .component("Icon", Icon)
   .use(router).mount('#app')
