<template>
  <footer class="mt-6 pb-16 bg-blue-darker text-white">
    <div class="container mx-auto mt-12">
      <div class="flex flex-row">
        <div class="flex relative w-2/3 mt-16 mb-6">
          <div
            class="
              absolute
              -top-12
              left-0
              bg-blue-dark
              p-24
              text-center
              h-64
              w-64
              rounded-full
            "
          ></div>
          <div
            class="
              relative
              top-0
              left-28
              bg-orange-dark bg-opacity-80
              p-24
              text-center
              h-96
              w-96
              rounded-full
            "
          >
            <h1 class="text-2xl">S'inscrire à la newsletter</h1>

            <input
              type="text"
              class="
                p-3
                mt-5
                rounded-md
                text-gray-dark
                focus:outline-none
                focus:ring-2 focus:ring-blue-dark
                focus:border-transparent
              "
              placeholder="salimalexo@gmail.com"
            />
            <button
              type="submit"
              class="
                relative
                p-3
                w-36
                z-50
                bg-blue-darker
                mt-5
                rounded-xl
                duration-300
                hover:bg-blue-dark
              "
            >
              S'inscrire
            </button>
          </div>
          <div
            class="
              absolute
              top-64
              left-80
              bg-yellow-dark bg-opacity-80
              p-24
              text-center
              h-32
              w-32
              rounded-full
            "
          ></div>
        </div>
        <div class="flex flex-col w-1/3 mt-6">
          <img
            src="../assets/img/retailshake_icon.png"
            alt="Retail Shake"
            width="100"
            class="ml-1"
          />
          <h1 class="text-xl">Retail shake</h1>
          <p class="text-gray-light mt-2">71 quai de l'Ouest, 59000 Lille</p>

          <!-- Menu -->
          <ul class="footer-menu mt-2 -ml-4">
            <a href="#"
              ><li
                class="
                  my-2
                  p-4
                  rounded-xl
                  w-48
                  duration-300
                  hover:bg-orange-dark
                  hover:text-white
                "
              >
                Presse
              </li></a
            >
            <a href="#"
              ><li
                class="
                  my-2
                  p-4
                  rounded-xl
                  w-48
                  duration-300
                  hover:bg-orange-dark
                  hover:text-white
                "
              >
                Application mobile
              </li></a
            >
          </ul>
          <!-- END:: Menu -->

          <!-- Social medias -->
          <div class="flex-row space-x-12 text-2xl mt-6">
            <a
              href="#"
              class="
                bg-blue-dark
                text-blue-darker
                rounded-full
                px-4
                py-2
                duration-300
                hover:bg-orange-dark
                hover:text-white
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a
              href="#"
              class="
                bg-blue-dark
                text-blue-darker
                rounded-full
                px-4
                py-2
                duration-300
                hover:bg-orange-dark
                hover:text-white
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a
              href="#"
              class="
                bg-blue-dark
                text-blue-darker
                rounded-full
                px-4
                py-2
                duration-300
                hover:bg-orange-dark
                hover:text-white
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a
              href="#"
              class="
                bg-blue-dark
                text-blue-darker
                rounded-full
                px-4
                py-2
                duration-300
                hover:bg-orange-dark
                hover:text-white
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fa', 'rss']" />
            </a>
          </div>
          <!-- END:: Social Medias -->

          <div class="space-x-2 mt-8">
            <a href="#" class="hover:text-orange-light">CGU</a>
            <a href="#" class="hover:text-orange-light"
              >Protection des données</a
            >
            <a href="#" class="hover:text-orange-light"
              >Utilisation des cookies</a
            >
          </div>

          <p class="text-gray-light mt-6">© 2021, tous droits réservés</p>
          <p class="text-gray-light mt-6 text-sm">
            Fait avec ❤️
            <span class="font-black text-purple"
              >「Alex Salim」 ( salimalexo@gmail.com )</span
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
</style>