import { createApp } from 'vue'
import App from './App.vue'

//* Styles
import './assets/styles/tailwind.css'
import './assets/styles/global.scss'
import './assets/styles/nav.scss'
import './assets/styles/tabs.scss'
console.log("✔️ CSS importés")


//* Custom lib
//? Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faQuoteLeft, faGrinBeam, faFrown, faRss, faComment, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


//? Sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
console.log("✔️ Sweetalert2 importé")

//! Using Font Awesome
library.add(faLink, faQuoteLeft, faGrinBeam, faFrown, faFacebookF, faTwitter, faInstagram, faRss, faComment, faSearch, faTimes);
console.log("✔️ FontAwesome importé")

console.log("%c 📢 Application prête", 'font-size: 16px')

console.log("%c 🟪🟪🟪", 'font-size: 16px')
console.log("%c 🟦🟦", 'font-size: 16px')
console.log("%c 🟩 ", 'font-size: 16px')

console.group("Retail Shake")
console.log('%c Réalisé par Alex Salim ', 'color: white; background: #2748A1; font-size: 20px')
console.log('%c Mail: salimalexo@gmail.com ', 'font-size: 15px')
console.log('%c Portfolio: https://faelivrin.fr/portfolio ', 'font-size: 15px')
console.groupEnd()

console.log("")
console.log("")

console.group("Pour les curieux")
console.log('%c Technologies utilisées ', 'color: white; background: #2748A1; font-size: 20px')

console.log('%c VueJS 3 ', 'color: #34495E; font-weight: 700; background: #41B883; font-size: 15px')
console.log('%c TailwindCSS ', 'color: #000; font-weight: 700; background: #07b6d5; font-size: 15px')

console.log('%c SCSS ', 'color: #000; font-weight: 700; background: #cd669b; font-size: 15px')
console.log('%c De la passion ♥️ ', 'font-size: 12px')
console.log('%c Et un clavier + une souris ', 'font-size: 10px')
console.groupEnd()

console.log('%c Merci de votre visite !', 'color: white; background: #B44C4C; font-size: 14px')

console.log("%c 🟩 ", 'font-size: 16px')
console.log("%c 🟦🟦", 'font-size: 16px')
console.log("%c 🟪🟪🟪", 'font-size: 16px')

createApp(App)
    .use(VueSweetalert2)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
