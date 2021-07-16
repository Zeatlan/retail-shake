<template>
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

  <main class="min-h-screen container mx-auto">
    <!-- Welcome -->
    <section class="flex flex-row pt-16 justify-between">
      <div class="flex-col mr-12">
        <h1 class="mx-auto mt-12 text-4xl font-black">
          La nouvelle veille concurrentielle, intégrale, automatique,
          quotidienne.
        </h1>
        <div class="mt-4 bg-orange w-48 h-2"></div>

        <p class="mt-12">
          Retail Shake est un outil de veille à 360° : veille tarifaire,
          comparaison des produits, benchmark prix, pige promo, surveillance des
          stocks géolocalisée, veille stratégique par secteurs d’activité…
        </p>
        <p class="mt-2">
          Il vous permet de suivre les marques et les enseignes qui vous
          intéressent.
        </p>

        <Button
          class="mt-16"
          message="Demandez une démo"
          color="#d9efec"
          type="bubble"
        />
      </div>

      <div class="mt-24">
        <Player src="/src/assets/retail_shake_demo.mp4" :autoplay="true" />
      </div>
    </section>
    <!-- END:: Welcome -->

    <!-- Explanation -->
    <section class="flex mt-32 py-8 rounded-xl">
      <div class="py-10 bg-gray">
        <tabs v-model="active">
          <tab title="Optimisez">
            <!-- Optimisez votre veille concurrentielle -->
            <div class="tab flex flex-row">
              <img
                src="https://www.retailshake.com/wp-content/uploads/2020/10/Capture-4.jpg"
                alt="Capture"
                width="600"
              />
              <div class="ml-8">
                <h1 class="text-2xl font-extrabold mb-1 text-blue-dark">
                  Votre veille concurrentielle
                </h1>
                <h2 class="text-md mb-2">
                  Comment savoir tout ce que font les concurrents ?
                </h2>
                <div class="bg-blue-light w-48 h-1.5"></div>

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
                  <span class="text-blue-dark font-bold">« brand equity »</span
                  >.
                </p>

                <p>
                  Il vous permet de suivre les marques et les enseignes qui vous
                  intéressent. Vous suivez les
                  <span class="text-blue-dark font-bold">prix</span>, les
                  <span class="text-blue-dark font-bold">avis clients</span>, le
                  <span class="text-blue-dark font-bold">merchandising</span>,
                  la
                  <span class="text-blue-dark font-bold">géolocalisation</span>
                  de vos produits et les stocks de votre enseigne/marque ou ceux
                  de vos concurrents. Cela vous permettra de savoir quels
                  produits seront vendus par vos concurrents et de connaître
                  leurs
                  <span class="text-blue-dark font-bold"
                    >politiques promotionnelles.</span
                  >
                  Cette veille concurrentielle intégrale est automatisée. Vous
                  prenez connaissance en ligne, quand vous le souhaitez. Elle
                  est actualisée au quotidien.
                </p>
              </div>
            </div>
            <!-- END:: Optimisez votre veille concurrentielle -->

            <!-- Optimisez votre veille tarifaire -->
            <div class="tab flex flex-row mt-24">
              <div class="mr-8">
                <h1 class="text-2xl font-extrabold mb-1 text-blue-dark">
                  Votre veille tarifaire
                </h1>
                <h2 class="text-md mb-2">
                  Comment se positionner sur le bon prix ?
                </h2>
                <div class="bg-blue-light w-48 h-1.5"></div>

                <p class="my-4">
                  Dans un univers concurrentiel mouvant et complexe, auquel
                  s’ajoute l’agitation e-commerce, Retail Shake propose une
                  <span class="text-blue-dark font-bold"
                    >veille tarifaire intelligente</span
                  >. En effet, notre outil est capable de collecter
                  <span class="text-blue-dark font-bold">quotidiennement</span>
                  les pages produits de vos clients ainsi que de vos concurrents
                  actuels et futurs. Doté d’une intelligence artificielle,
                  l’outil de veille exploite les informations commerciales et
                  établit une correspondance entre ces produits afin de vous
                  faciliter l’analyse concurrentielle.
                </p>

                <p class="my-4">
                  Vous êtes
                  <span class="text-blue-dark font-bold"
                    >informés et alertés automatiquement au quotidien</span
                  >
                  sur les enseignes et les marques concurrentes, le nombre de
                  références communes avec ces dernières, ainsi que
                  <span class="text-blue-dark font-bold"
                    >leurs indices prix</span
                  >. Vous ne vous laissez pas surprendre par la concurrence et
                  vous prenez les bonnes décisions.
                </p>

                <p>
                  Vous avez ainsi l’opportunité de surveiller la distribution
                  non autorisée de vos produits, encore appelé le «
                  <span class="text-blue-dark font-bold">marché gris</span> » ou
                  encore «
                  <span class="text-blue-dark font-bold">parallel trade</span>«
                  .
                </p>
              </div>
              <img
                src="https://www.retailshake.com/wp-content/uploads/2020/10/Capture-7.jpg"
                alt="Capture"
                width="600"
              />
            </div>
            <!-- END:: Optimisez votre veille tarifaire  -->
          </tab>
          <tab title="Améliorez">
            <!-- Améliorez votre merchandising -->
            <div class="tab flex flex-row">
              <img
                src="https://www.retailshake.com/wp-content/uploads/2020/04/Ajaccio-merchandising-en-magasin.jpg"
                alt="Capture"
                width="600"
              />
              <div class="ml-8">
                <h1 class="text-2xl font-extrabold mb-1 text-yellow-dark">
                  Améliorez votre merchandising
                </h1>
                <h2 class="text-md mb-2">Comment booster son CA ?</h2>
                <div class="bg-yellow-light w-48 h-1.5"></div>

                <p class="my-4">
                  Chez Retail Shake, on est convaincu que les points de vente
                  ont encore un très bel avenir devant eux. Ils restent
                  stratégiques dans le
                  <span class="text-yellow-dark font-bold">parcours client</span
                  >. La relation humaine, le conseil, l’écoute client, la mise
                  en place des produits dans les rayons sont au coeur de la
                  <span class="text-yellow-dark font-bold"
                    >relation client</span
                  >
                  et font la différence avec les pure players. Chaque jour, de
                  nouvelles idées et de nouvelles pratiques sont testées en
                  magasin. Le secteur est très dynamique et la concurrence
                  féroce.
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
              </div>
            </div>
            <!-- END:: Améliorez votre merchandising -->
          </tab>
          <tab title="Surveillez">
            <!-- Surveillez vos stocks -->
            <div class="tab flex flex-row">
              <img
                src="https://www.retailshake.com/wp-content/uploads/2020/06/Stock.jpg"
                alt="Capture"
                width="600"
              />
              <div class="ml-8">
                <h1 class="text-2xl font-extrabold mb-1 text-orange-dark">
                  Vos stocks
                </h1>
                <h2 class="text-md mb-2">
                  Comment être alertés sur ses stocks ?
                </h2>
                <div class="bg-orange-light w-48 h-1.5"></div>

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
                  quantité de produits présente dans chaque magasin. De plus,
                  vous êtes
                  <span class="text-orange-dark font-bold"
                    >alertés au quotidien</span
                  >
                  sur la
                  <span class="text-orange-dark font-bold">valeur</span> et la
                  <span class="text-orange-dark font-bold">quantité</span> de
                  vos stocks ainsi que sur les ruptures et sur les surstocks.
                </p>

                <p>
                  Mieux informés, vous pouvez affiner la surveillance des stocks
                  et gagner en agilité.
                </p>
              </div>
            </div>
            <!-- END:: Surveillez vos stocks -->

            <!-- Surveillez vos avis clients -->
            <div class="tab flex flex-row mt-24">
              <div class="mr-8">
                <h1 class="text-2xl font-extrabold mb-1 text-orange-dark">
                  Surveillez vos avis clients
                </h1>
                <h2 class="text-md mb-2">
                  Comment mieux écouter ses clients ?
                </h2>
                <div class="bg-orange-light w-48 h-1.5"></div>

                <p class="my-4">
                  Les consommateurs sont très sensibles aux
                  <span class="text-orange-dark font-bold">avis clients</span>
                  sur les produits : près de 9 consommateurs sur 10 consultent
                  les avis d’un produit avant de l’acheter. Ils sont eux aussi
                  en veille pour acheter mieux et aujourd’hui l’achat en magasin
                  se fait mobile à la main. La qualité d’une réputation est un
                  nouvel enjeu retail, pour le produit comme pour l’enseigne.
                </p>

                <p>
                  Retail Shake rassemble pour vous les avis clients. Grâce à
                  cette veille de verbatim, vous pouvez
                  <span class="text-orange-dark font-bold"
                    >surveiller les avis sur vos produits, sur vos magasins, sur
                    votre enseigne</span
                  >
                  et les
                  <span class="text-orange-dark font-bold"
                    >comparer à ceux de vos concurrents.</span
                  >
                </p>
              </div>
              <img
                src="https://www.retailshake.com/wp-content/uploads/2020/10/Capture-6.jpg"
                alt="Capture"
                width="600"
              />
            </div>
            <!-- END:: Optimisez votre veille tarifaire  -->
          </tab>
        </tabs>
      </div>
    </section>
    <!-- END:: Explanation -->
  </main>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Nav from "./components/Nav.vue";
import Button from "./components/Button.vue";
import Player from "./components/Player.vue";
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Nav,
    Button,
    Player,
    Tabs,
    Tab,
  },
  watch: () => {
    console.log("Watch");
  },
  setup() {
    const active = ref(0);

    return { active };
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>