<template>
  <nav
    class="
      fixed
      top-0
      left-0
      bg-white
      min-w-full
      flex flex-nowrap
      p-4
      justify-center
      z-50
      dark:bg-dark-gray
      dark:text-gray
    "
  >
    <div class="container flex flex-row justify-between">
      <!-- Logo -->
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="../assets/img/logo.png" alt="Retail Shake" width="125" />
      </div>
      <!-- End Logo -->

      <!-- Responsive Hamburger Menu -->
      <div class="block lg:hidden">
        <button
          class="
            flex
            items-center
            px-3
            py-2
            border
            rounded
            text-teal-200
            border-teal-400
            hover:text-white
            hover:border-white
          "
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <!-- End responsive Hamburger Menu -->

      <div class="hidden lg:flex lg:flex-row lg:items-center">
        <div
          class="
            text-md
            px-5
            font-header font-medium
            lg:flex lg:flex-row
            lg:items-center
            lg:justify-center
          "
        >
          <a
            href="#"
            v-for="(item, index) in items"
            :key="`item-${index}`"
            class="
              selectable
              block
              mt-4
              lg:inline-block
              lg:mt-0
              text-teal-200
              hover:text-black
              dark:hover:text-white
              mr-6
            "
            :class="{ active: index == 0 }"
          >
            {{ item }}
          </a>

          <a
            href="#responsive-header"
            class="
              overflow-hidden
              relative
              demo-button
              block
              mt-4
              ml-2
              mr-6
              border
              rounded-full
              border-gray-dark
              py-1
              px-6
              duration-500
              lg:inline-block
              lg:mt-0
              hover:border-black
            "
          >
            Démo

            <span></span><span></span><span></span><span></span>
          </a>

          <!-- Juste pour faire beau -->
          <img
            src="../assets/img/english.png"
            alt="English flag"
            width="18"
            class="block lg:inline-block cursor-pointer"
          />

          <!-- Search icon -->
          <div class="block ml-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    items: Array,
  },
};
</script>