import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiYoutube , BiFacebook, BiInstagram, BiSearch, GiDeer, BiCaretDownFill, GiBoatFishing, BiTreeFill, GiWinchesterRifle, GiGearHammer, FaBriefcaseMedical, FcReading} from "oh-vue-icons/icons";
import piniaPluginPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'

const pinia = createPinia()

const app = createApp(App)

addIcons(BiYoutube , BiFacebook, BiInstagram, BiSearch, GiDeer, BiCaretDownFill, GiBoatFishing, BiTreeFill, GiWinchesterRifle, GiGearHammer, FaBriefcaseMedical, FcReading);
app.component("v-icon", OhVueIcon);

pinia.use(piniaPluginPersist)

app.use(pinia)
app.use(router)

app.mount('#app')
