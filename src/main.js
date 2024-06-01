import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiYoutube , BiFacebook, BiInstagram, BiSearch, GiDeer, BiCaretDownFill, GiBoatFishing, BiTreeFill, GiWinchesterRifle, GiGearHammer, FaBriefcaseMedical} from "oh-vue-icons/icons";

import App from './App.vue'
import router from './router'

const app = createApp(App)

addIcons(BiYoutube , BiFacebook, BiInstagram, BiSearch, GiDeer, BiCaretDownFill, GiBoatFishing, BiTreeFill, GiWinchesterRifle, GiGearHammer, FaBriefcaseMedical);
app.component("v-icon", OhVueIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
