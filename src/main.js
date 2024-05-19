import './assets/main.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

const options = {
    position: "bottom-right"
};

app.use(Toast, options);

