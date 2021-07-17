import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css'
import './assets/styles/global.css'
import './assets/styles/global.scss'
import './assets/styles/nav.scss'
import './assets/styles/tabs.scss'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faQuoteLeft, faGrinBeam, faFrown, faRss } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLink, faQuoteLeft, faGrinBeam, faFrown, faFacebookF, faTwitter, faInstagram, faRss);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
