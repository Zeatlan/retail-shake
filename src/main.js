import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css'
import './assets/styles/global.css'
import './assets/styles/global.scss'
import './assets/styles/nav.scss'
import './assets/styles/tabs.scss'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faQuoteLeft, faGrinBeam, faFrown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLink, faQuoteLeft, faGrinBeam, faFrown);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
