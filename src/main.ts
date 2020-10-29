import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import App from './App.vue'
import './assets/tailwind.postcss'

const app = createApp(App)

app.use(store, key)
app.use(router)
app.mount('#app')
