import { createApp } from 'vue'
import App from './App.vue'

//* Styles
import './assets/styles/tailwind.css'
import './assets/styles/global.scss'
import './assets/styles/nav.scss'
import './assets/styles/tabs.scss'

//* Custom lib
//? Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faQuoteLeft, faGrinBeam, faFrown, faRss, faComment, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


//? Sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//! Using Font Awesome
library.add(faLink, faQuoteLeft, faGrinBeam, faFrown, faFacebookF, faTwitter, faInstagram, faRss, faComment, faSearch, faTimes);

createApp(App)
    .use(VueSweetalert2)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
