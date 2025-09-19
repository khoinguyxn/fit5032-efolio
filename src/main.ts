import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { initializeFirebaseApp } from './lib/firebase'

const app = createApp(App)

app.use(router)

initializeFirebaseApp()

app.mount('#app')
