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
    <!--
        v-for="index in 5"
        :key="index"
        -->
    <section class="flex mt-32 p-8 rounded-xl">
      <!--<Tab
        icon="Academic"
        title="Optimisez votre veille concurrentielle"
        subtitle="Comment savoir tout ce que font les concurrents ?"
        :text="[
          `Retail Shake est un outil de veille à 360° : veille tarifaire, comparaison des produits, benchmark prix, pige promo, surveillance des stocks géolocalisée, veille stratégique par secteurs d’activité… tout ce dont vous avez besoin, chaque jour, pour optimiser vos stocks, votre plan merchandising et votre stratégie marketing. Vous transmettez ainsi « l’âme de vos produits » et vous optimisez votre image de marque ou encore « brand equity« . `,
          `Il vous permet de suivre les marques et les enseignes qui vous intéressent. `,
          `Vous suivez les prix, les avis clients, le merchandising, la géolocalisation de vos produits et les stocks de votre enseigne/marque ou ceux de vos concurrents. Cela vous permettra de savoir quels produits seront vendus par vos concurrents et de connaître leurs politiques promotionnelles. Cette veille concurrentielle intégrale est automatisée. Vous prenez connaissance en ligne, quand vous le souhaitez. Elle est actualisée au quotidien. `,
        ]"
        image="https://www.retailshake.com/wp-content/uploads/2020/10/Capture-4.jpg"
      />-->
      <div>
        <Tabs>
          <Tab title="Tab 1" ref="detailsTab"> H1 </Tab>
          <Tab title="Tab 2" ref="detailsTab"> H2</Tab>
          <Tab title="Tab 3" ref="detailsTab"> H3</Tab>
        </Tabs>
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

export default {
  name: "App",
  components: {
    HelloWorld,
    Nav,
    Button,
    Player,
    Tab,
    Tabs,
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>