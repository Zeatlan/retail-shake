<template>
  <!-- PRELOADER -->
  <transition v-if="loading" name="slide-fade" mode="in-out">
    <div class="preloader-wrapper">
      <span class="preloader"><span class="preloader-inner"></span></span>
    </div>
  </transition>

  <!-- Navigation -->
  <Nav
    :items="[
      'Accueil',
      'L\'équipe',
      'Enseignes indexées',
      'Marques indexées',
      'Secteurs',
      'Tarifs',
      'Blog',
    ]"
  />
  <!-- END:: Navigation -->

  <!-- Choosing mode -->
  <div
    class="
      fixed
      flex
      justify-end
      items-center
      space-x-2
      opacity-70
      z-50
      hover:opacity-100
      bottom-16
      left-6
      md:bottom-6
      md:left-6
    "
  >
    <div class="relative">
      <input
        type="checkbox"
        id="toggle"
        class="toggle--checkbox"
        v-model="darkMode"
      />
      <label for="toggle" class="toggle--label">
        <span class="toggle--label-background"></span>
      </label>
    </div>
  </div>
  <!-- END:: Choosing mode -->

  <!-- Chatbox -->
  <div
    class="
      fixed
      rounded-full
      w-16
      h-16
      bg-red
      text-white text-3xl text-center
      cursor-pointer
      duration-300
      hover:bg-red-dark
      z-50
      bottom-16
      right-8
      md:bottom-6
      md:right-6
    "
    @click="showAlert"
  >
    <font-awesome-icon class="my-4" :icon="['fas', 'comment']" />
  </div>
  <!-- END:: Chatbox -->

  <main class="min-h-screen mx-auto bg-gray dark:bg-dark-gray dark:text-gray">
    <!-- Welcome -->
    <section
      class="
        flex flex-col
        justify-end
        container
        mx-auto
        min-h-screen
        overflow-x-hidden
        space-y-24
        pt-28
        2xl:pt-0
      "
    >
      <div class="flex flex-col md:flex-row">
        <div class="flex-col p-2 2xl:mr-12">
          <h1
            class="
              mx-auto
              mt-12
              font-black
              dark:text-blue-dark
              text-center
              md:text-left
              text-xl
              md:text-3xl
              2xl:text-4xl
            "
          >
            La nouvelle veille concurrentielle, intégrale, automatique,
            quotidienne.
          </h1>
          <div
            class="
              mt-4
              bg-blue-darker
              w-48
              h-1.5
              dark:bg-blue-light
              mx-auto
              md:mx-0
            "
          ></div>

          <p class="mt-6 2xl:mt-12">
            Retail Shake est un outil de veille à 360° : veille tarifaire,
            comparaison des produits, benchmark prix, pige promo, surveillance
            des stocks géolocalisée, veille stratégique par secteurs d’activité…
          </p>
          <p class="mt-2">
            Il vous permet de suivre les marques et les enseignes qui vous
            intéressent.
          </p>

          <Button
            class="mt-16 text-center md:text-left"
            message="Demandez une démo"
            :color="darkMode ? '#202738' : '#d9efec'"
            type="bubble"
            :darkMode="darkMode"
          />
        </div>

        <div class="mt-24">
          <Player src="/src/assets/retail_shake_demo.mp4" :autoplay="true" />
        </div>
      </div>

      <div class="flex flex-col">
        <h2 class="text-2xl text-center font-bold dark:text-orange-light">
          Ils nous font confiance !
        </h2>

        <!-- Trusted companies -->
        <div class="flex flex-row">
          <swiper
            :slidesPerView="nbElementsSwiper"
            :pagination="true"
            :autoplay="true"
            class="partnerSlide"
          >
            <swiper-slide
              v-for="(companieLogo, index) in trustedCompanies"
              :key="index"
            >
              <Card :logo="companieLogo" />
            </swiper-slide>
          </swiper>
        </div>
        <!-- END:: Trusted compagnies -->
      </div>
    </section>
    <!-- END:: Welcome -->

    <!-- Explanation -->
    <section class="flex bg-white mt-32 py-8 dark:bg-dark-darkgray">
      <div class="py-10 container mx-auto">
        <tabs v-model="active">
          <tab title="Optimisez">
            <!-- Optimisez votre veille concurrentielle -->
            <Frame
              img="https://www.retailshake.com/wp-content/uploads/2020/10/Capture-4.jpg"
              :txtOnTheRight="true"
              color="blue"
              title="Votre veille concurrentielle"
              subtitle="Comment savoir tout ce que font les concurrents ?"
            >
              <p class="my-4">
                Retail Shake est un outil de
                <span class="text-blue-dark font-bold"
                  >veille à 360° : veille tarifaire, comparaison des produits,
                  benchmark prix, pige promo, surveillance des stocks
                  géolocalisée, veille stratégique par secteurs
                  d’activité…</span
                >
                tout ce dont vous avez besoin, chaque jour, pour optimiser vos
                stocks, votre plan merchandising et votre stratégie marketing.
              </p>

              <p class="my-4">
                Vous transmettez ainsi « l’âme de vos produits » et vous
                optimisez votre
                <span class="text-blue-dark font-bold">image de marque</span>
                ou encore
                <span class="text-blue-dark font-bold">« brand equity »</span>.
              </p>

              <p>
                Il vous permet de suivre les marques et les enseignes qui vous
                intéressent. Vous suivez les
                <span class="text-blue-dark font-bold">prix</span>, les
                <span class="text-blue-dark font-bold">avis clients</span>, le
                <span class="text-blue-dark font-bold">merchandising</span>, la
                <span class="text-blue-dark font-bold">géolocalisation</span>
                de vos produits et les stocks de votre enseigne/marque ou ceux
                de vos concurrents. Cela vous permettra de savoir quels produits
                seront vendus par vos concurrents et de connaître leurs
                <span class="text-blue-dark font-bold"
                  >politiques promotionnelles.</span
                >
                Cette veille concurrentielle intégrale est automatisée. Vous
                prenez connaissance en ligne, quand vous le souhaitez. Elle est
                actualisée au quotidien.
              </p>
            </Frame>
            <!-- END:: Optimisez votre veille concurrentielle -->

            <!-- Optimisez votre veille tarifaire -->
            <Frame
              img="https://www.retailshake.com/wp-content/uploads/2020/10/Capture-7.jpg"
              :txtOnTheRight="false"
              color="blue"
              title="Votre veille tarifaire"
              subtitle="Comment se positionner sur le bon prix ?"
            >
              <p class="my-4">
                Dans un univers concurrentiel mouvant et complexe, auquel
                s’ajoute l’agitation e-commerce, Retail Shake propose une
                <span class="text-blue-dark font-bold"
                  >veille tarifaire intelligente</span
                >. En effet, notre outil est capable de collecter
                <span class="text-blue-dark font-bold">quotidiennement</span>
                les pages produits de vos clients ainsi que de vos concurrents
                actuels et futurs. Doté d’une intelligence artificielle, l’outil
                de veille exploite les informations commerciales et établit une
                correspondance entre ces produits afin de vous faciliter
                l’analyse concurrentielle.
              </p>

              <p class="my-4">
                Vous êtes
                <span class="text-blue-dark font-bold"
                  >informés et alertés automatiquement au quotidien</span
                >
                sur les enseignes et les marques concurrentes, le nombre de
                références communes avec ces dernières, ainsi que
                <span class="text-blue-dark font-bold">leurs indices prix</span
                >. Vous ne vous laissez pas surprendre par la concurrence et
                vous prenez les bonnes décisions.
              </p>

              <p>
                Vous avez ainsi l’opportunité de surveiller la distribution non
                autorisée de vos produits, encore appelé le «
                <span class="text-blue-dark font-bold">marché gris</span> » ou
                encore «
                <span class="text-blue-dark font-bold">parallel trade</span>« .
              </p>
            </Frame>
            <!-- END:: Optimisez votre veille tarifaire  -->
          </tab>
          <tab title="Améliorez">
            <!-- Améliorez votre merchandising -->
            <Frame
              img="https://www.retailshake.com/wp-content/uploads/2020/04/Ajaccio-merchandising-en-magasin.jpg"
              :txtOnTheRight="true"
              color="yellow"
              title="Améliorez votre merchandising"
              subtitle="Comment booster son CA ?"
            >
              <p class="my-4">
                Chez Retail Shake, on est convaincu que les points de vente ont
                encore un très bel avenir devant eux. Ils restent stratégiques
                dans le
                <span class="text-yellow-dark font-bold">parcours client</span>.
                La relation humaine, le conseil, l’écoute client, la mise en
                place des produits dans les rayons sont au coeur de la
                <span class="text-yellow-dark font-bold">relation client</span>
                et font la différence avec les pure players. Chaque jour, de
                nouvelles idées et de nouvelles pratiques sont testées en
                magasin. Le secteur est très dynamique et la concurrence féroce.
              </p>

              <p class="my-4">
                Nous vous proposons une nouvelle façon de surveiller les
                <span class="text-yellow-dark font-bold"
                  >bonnes et mauvaises pratiques</span
                >
                de vos collaborateurs, comme celles de vos concurrents. Vous
                disposez d’un
                <span class="text-yellow-dark font-bold"
                  >benchmark très complet.</span
                >
              </p>

              <p>
                <span class="text-yellow-dark font-bold"
                  >Retail Shake vous permet de partager vos best practices
                  merchandising auprès de votre communauté (autres magasins,
                  centrales, fournisseurs…).</span
                >
              </p>
            </Frame>
            <!-- END:: Améliorez votre merchandising -->
          </tab>
          <tab title="Surveillez">
            <!-- Surveillez vos stocks -->

            <Frame
              img="https://www.retailshake.com/wp-content/uploads/2020/06/Stock.jpg"
              :txtOnTheRight="true"
              color="orange"
              title="Vos stocks"
              subtitle="Comment être alertés sur ses stocks ?"
            >
              <p class="my-4">
                Il est nécessaire de prévoir une quantité suffisante de
                <span class="text-orange-dark font-bold"
                  >produits en stock</span
                >
                afin de toujours répondre aux demandes des consommateurs. Il
                faut donc prévoir vos stocks et vérifier le niveau de votre
                inventaire afin d’avoir une quantité suffisante de produits.
              </p>

              <p class="my-4">
                Pour mieux
                <span class="text-orange-dark font-bold"
                  >suivre vos références</span
                >
                stockés, Retail Shake
                <span class="text-orange-dark font-bold">géolocalise</span>
                vos stocks. Ainsi, vous pouvez voir sur la carte dynamique, la
                quantité de produits présente dans chaque magasin. De plus, vous
                êtes
                <span class="text-orange-dark font-bold"
                  >alertés au quotidien</span
                >
                sur la
                <span class="text-orange-dark font-bold">valeur</span> et la
                <span class="text-orange-dark font-bold">quantité</span> de vos
                stocks ainsi que sur les ruptures et sur les surstocks.
              </p>

              <p>
                Mieux informés, vous pouvez affiner la surveillance des stocks
                et gagner en agilité.
              </p>
            </Frame>
            <!-- END:: Surveillez vos stocks -->

            <!-- Surveillez vos avis clients -->

            <Frame
              img="https://www.retailshake.com/wp-content/uploads/2020/10/Capture-6.jpg"
              :txtOnTheRight="false"
              color="orange"
              title="Vos avis clients"
              subtitle="Comment mieux écouter ses clients ?"
            >
              <p class="my-4">
                Les consommateurs sont très sensibles aux
                <span class="text-orange-dark font-bold">avis clients</span>
                sur les produits : près de 9 consommateurs sur 10 consultent les
                avis d’un produit avant de l’acheter. Ils sont eux aussi en
                veille pour acheter mieux et aujourd’hui l’achat en magasin se
                fait mobile à la main. La qualité d’une réputation est un nouvel
                enjeu retail, pour le produit comme pour l’enseigne.
              </p>

              <p>
                Retail Shake rassemble pour vous les avis clients. Grâce à cette
                veille de verbatim, vous pouvez
                <span class="text-orange-dark font-bold"
                  >surveiller les avis sur vos produits, sur vos magasins, sur
                  votre enseigne</span
                >
                et les
                <span class="text-orange-dark font-bold"
                  >comparer à ceux de vos concurrents.</span
                >
              </p>
            </Frame>
            <!-- END:: Optimisez votre veille tarifaire  -->
          </tab>
        </tabs>
      </div>
    </section>
    <!-- END:: Explanation -->

    <!-- Stats -->
    <section class="numbers p-8 bg-blue-darker text-white">
      <div class="flex flex-col container mx-auto">
        <h1 class="mx-auto font-extrabold text-3xl md:text-6xl">
          Retail Shake en chiffres
        </h1>

        <!-- Numbers -->
        <div
          class="
            flex
            w-full
            justify-around
            mt-16
            text-center
            flex-col
            md:flex-row
          "
        >
          <div>
            <h2 class="text-7xl font-bold number">12000</h2>
            <p class="text-2xl text-blue-light">Marques indexées</p>
          </div>
          <div class="mt-16 mb-6 md:mt-0 md:mb-0">
            <h2 class="text-7xl font-bold number">125</h2>
            <p class="text-2xl text-blue-light">Enseignes indexées</p>
          </div>
        </div>
        <!-- END:: Numbers -->
        <div class="mt-16 mx-auto">
          <Button
            message="Demandez une démo"
            :color="darkMode ? '#232323' : '#fff'"
            type="bubble"
            :darkMode="darkMode"
          />
        </div>
      </div>
    </section>
    <!-- END:: Stats -->

    <!-- Customers reviews -->
    <section class="pt-16 p-8 bg-white min-h-screen dark:bg-dark-darkgray">
      <div class="flex flex-col container mx-auto">
        <h1
          class="
            mx-auto
            text-6xl
            font-extrabold
            dark:text-blue-dark
            text-center
            md:text-left
          "
        >
          Ce que nos clients racontent
        </h1>
        <p class="text-gray-dark mx-auto my-16 text-xl text-center">
          Découvrez les divers avis sur notre application
        </p>
        <div class="flex flex-row justify-between mt-8">
          <!-- SWIPER -->
          <swiper :slidesPerView="nbElementsSwiper - 1" :pagination="true">
            <swiper-slide>
              <Review
                name="C.J"
                job="Directrice marketing d'une marque de luminaire"
                avatar="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              >
                Très utile. Cela m'a permis de mettre en place un plan d'actions
                sur certaines centrales.
              </Review>
            </swiper-slide>
            <swiper-slide>
              <Review
                name="Harry Vinz"
                job="Directeur"
                avatar="https://images.unsplash.com/photo-1518799175676-a0fed7996acb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              >
                Retail Shake a su répondre à mes attentes en terme de veille
                concurrentielle.
              </Review>
            </swiper-slide>
            <swiper-slide>
              <Review
                name="Christelle Carman"
                job="Directrice marketing d'une marque de luminaire"
                avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                :favorable="false"
              >
                Retail Shake n'a pas su répondre à mes attentes en terme de
                veille concurrentielle.
              </Review>
            </swiper-slide>
            <swiper-slide>
              <Review
                name="Phil Doe"
                job="Directeur marketing d'une marque de luminaire"
                avatar="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                :favorable="false"
              >
                Je trouve qu'il y a trop de directeurs/directrices dans ces
                avis. . .
              </Review>
            </swiper-slide>
          </swiper>
          <!-- END SWIPER -->
        </div>
      </div>
    </section>
    <!-- END:: Customers reviews -->

    <!-- Partnership -->
    <section class="mt-16 bg-gray dark:bg-dark-gray">
      <div class="flex flex-col container mx-auto">
        <h1 class="mx-auto text-6xl font-extrabold dark:text-blue-dark">
          Ils nous soutiennent !
        </h1>

        <!-- Soutiens -->
        <div class="flex flex-col justify-between">
          <div class="flex flex-row space-x-12">
            <swiper
              :slidesPerView="nbElementsSwiper"
              :pagination="true"
              class="partnerSlide"
            >
              <swiper-slide>
                <Card
                  link="https://www.hodefi.fr/"
                  logo="https://www.retailshake.com/wp-content/uploads/2020/02/logo-hod%C3%A9fi.png"
                />
              </swiper-slide>

              <swiper-slide>
                <Card
                  link="https://www.bpifrance.fr/"
                  logo="https://www.retailshake.com/wp-content/uploads/2020/01/BPI_France_RVB_fd_blanc.png"
                />
              </swiper-slide>

              <swiper-slide>
                <Card
                  link="https://finovamgestion.fr/"
                  logo="https://www.retailshake.com/wp-content/uploads/2020/11/logo-finovam.png"
                />
              </swiper-slide>

              <swiper-slide>
                <Card
                  link="https://www.groupeird.fr/"
                  logo="https://www.retailshake.com/wp-content/uploads/2020/11/logo-groupe-ird.jpg"
                />
              </swiper-slide>

              <swiper-slide>
                <Card
                  link="https://www.euratechnologies.com/hotel-dentreprises/"
                  logo="https://www.retailshake.com/wp-content/uploads/2020/02/incubateur-accelerateur-startup-lille-euratechnologies.jpg"
                />
              </swiper-slide>

              <swiper-slide>
                <Card
                  link="https://www.picom.fr/"
                  logo="https://www.retailshake.com/wp-content/uploads/2020/01/LOGO-PICOM-5CM-300DPI.jpg"
                />
              </swiper-slide>

              <swiper-slide>
                <Card
                  link="https://www.capdigital.com/"
                  logo="https://www.retailshake.com/wp-content/uploads/2020/11/logo_Cap_Digital.png"
                />
              </swiper-slide>

              <swiper-slide>
                <Card
                  link="https://uniondesmarques.fr/"
                  logo="https://www.retailshake.com/wp-content/uploads/2020/09/telechargement.png"
                />
              </swiper-slide>

              <swiper-slide>
                <Card
                  link="https://www.developpement-regional.total.fr/"
                  logo="https://www.retailshake.com/wp-content/uploads/2021/04/total-developpement-regional.jpg"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- END:: Soutiens -->

        <!-- Partner -->
        <h2 class="text-2xl text-gray-dark uppercase mx-auto mt-12">
          Nos partenaires
        </h2>
        <div class="flex flex-col items-center md:flex-row md:space-x-12">
          <Card
            link="https://www.qualimetrie.com/"
            logo="https://www.retailshake.com/wp-content/uploads/2021/04/Qualimetrie.png"
          />
          <Card
            link="https://www.adix.fr/"
            logo="https://www.retailshake.com/wp-content/uploads/2021/05/logo-adix.png"
          />
          <Card
            link="https://www.drive.win/"
            logo="https://www.retailshake.com/wp-content/uploads/2021/05/logo_drivewin_RVB.jpg"
          />
        </div>
        <!-- END:: Partner -->
      </div>
    </section>
    <!-- END:: Partnership -->

    <Footer />
  </main>
</template>

<script>
import Nav from "./components/Nav.vue";
import Button from "./components/Button.vue";
import Player from "./components/Player.vue";
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";
import Frame from "./components/Frame.vue";
import Review from "./components/Review.vue";
import Card from "./components/Card.vue";
import Footer from "./components/Footer.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ref } from "vue";

SwiperCore.use([Pagination]);

export default {
  name: "App",
  data() {
    return {
      loading: false,
      darkMode: false,
      trustedCompanies: [
        "https://www.retailshake.com/wp-content/uploads/2020/11/logo_calipage.png",
        "https://www.retailshake.com/wp-content/uploads/2020/04/logo_mecatechnic.png",
        "https://www.retailshake.com/wp-content/uploads/2020/10/logo_weldom.png",
        "https://www.retailshake.com/wp-content/uploads/2021/04/logo_picwictoys.png",
        "https://www.retailshake.com/wp-content/uploads/2021/02/logo_leroymerlin.png",
        "https://www.retailshake.com/wp-content/uploads/2020/03/logo_corep.png",
        "https://www.retailshake.com/wp-content/uploads/2020/03/logo_mathias.png",
        "https://www.retailshake.com/wp-content/uploads/2021/04/logo_ar-shelving.png",
        "https://www.retailshake.com/wp-content/uploads/2021/04/sampa.png",
        "https://www.retailshake.com/wp-content/uploads/2021/04/logo_brilliant.png",
      ],
      nbElementsSwiper: 4,
    };
  },
  components: {
    Nav,
    Button,
    Player,
    Tabs,
    Tab,
    Frame,
    Review,
    Card,
    Footer,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const active = ref(0);

    return { active };
  },
  mounted() {
    // Set Dark/Light mode
    let t = true;
    if (localStorage.getItem("darkmode")) {
      if (localStorage.getItem("darkmode") === "true") t = true;
      else t = false;

      this.darkMode = t;
    }

    // Set number elements to display on Swiper
    if (window.screen.availWidth < 700) {
      this.nbElementsSwiper = 2;
    }

    // Numbers animation
    const items = document.querySelectorAll(".number");

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(items, {
      scrollTrigger: {
        trigger: "section.numbers",
        toggleActions: "play none none none",
      },
      textContent: 0,
      duration: 2,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: {
        each: 1.0,
        onUpdate: function () {
          this.targets()[0].innerHTML = Math.ceil(
            this.targets()[0].textContent
          );
        },
      },
    });
  },
  watch: {
    darkMode(newMode) {
      localStorage.setItem("darkmode", newMode);
      document.querySelector("html").classList.toggle("dark");
      console.log("SWAP DARKMODE");
    },
  },
  methods: {
    showAlert() {
      this.$swal(
        "Félicitations, votre souris fonctionne bel et bien !",
        "Merci de prendre le temps de visiter cette petite refonte, néanmoins je n'avais pas pour projet de refaire une chatbox ! :)",
        "success"
      );
    },
  },
};
</script>

<style>
.swiper-wrapper {
  display: flex;
  flex-direction: row;
  cursor: pointer;
}

.partnerSlide {
  min-height: 200px;
}
.swiper-slide-prev {
  transition: 0.3s;
  opacity: 0.5;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>