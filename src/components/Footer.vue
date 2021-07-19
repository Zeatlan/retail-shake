<template>
  <footer class="mt-6 pb-16 bg-blue-darker text-white">
    <div class="container mx-auto mt-12">
      <div class="flex flex-col md:flex-row">
        <div class="flex relative w-2/3 mt-16 mb-6">
          <div
            class="
              absolute
              -top-12
              left-0
              bg-blue-dark
              p-24
              text-center
              rounded-full
              w-32
              h-32
              md:h-64
              md:w-64
            "
          ></div>
          <div
            class="
              relative
              top-0
              bg-orange-dark bg-opacity-80
              text-center
              rounded-full
              h-64
              w-64
              left-16
              p-12
              md:p-24
              md:left-28
              md:h-96
              md:w-96
            "
          >
            <h1 class="text-lg md:text-2xl">S'inscrire à la newsletter</h1>

            <input
              type="text"
              class="
                relative
                p-3
                w-36
                z-40
                rounded-md
                text-gray-dark
                focus:outline-none
                focus:ring-2 focus:ring-blue-dark
                focus:border-transparent
                mt-2
                md:mt-5
                md:w-auto
              "
              placeholder="salimalexo@gmail.com"
            />
            <button
              type="submit"
              class="
                relative
                p-3
                z-40
                bg-blue-darker
                rounded-xl
                duration-300
                hover:bg-blue-dark
                w-24
                mt-2
                md:w-36
                md:mt-5
              "
            >
              S'inscrire
            </button>
          </div>
          <div
            class="
              absolute
              bg-yellow-dark bg-opacity-80
              p-24
              text-center
              rounded-full
              top-32
              left-44
              h-16
              w-16
              md:top-64
              md:left-80
              md:h-32
              md:w-32
            "
          ></div>
        </div>
        <div class="flex flex-col mt-6 text-center md:text-left md:w-96">
          <img
            src="../assets/img/retailshake_icon.png"
            alt="Retail Shake"
            width="100"
            class="mx-auto mt-12 md:ml-1 md:mt-0"
          />
          <h1 class="text-xl">Retail shake</h1>
          <p class="text-gray-light mt-2">71 quai de l'Ouest, 59000 Lille</p>

          <!-- Menu -->
          <ul class="mt-2 -ml-4 flex flex-col items-center lg:items-start">
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
          <div class="flex-row items-center space-x-3 text-2xl mt-6">
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