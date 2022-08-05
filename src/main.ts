import { createApp } from 'vue'
import './style.css'
import "tailwindcss/tailwind.css"


import App from './App.vue'
import router from './router'
// import store from './store'
// .use(store)
createApp(App).use(router).mount('#app')
