<template>
  <nav
    class="
      flex flex-nowrap
      justify-center
      fixed
      top-0
      left-0
      p-4
      text-sm
      bg-white
      min-w-full
      z-50
      dark:bg-dark-gray
      dark:text-gray
      xl:text-md
    "
  >
    <div class="container flex flex-row items-center justify-between">
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
            px-3
            py-2
            border
            rounded
            dark:hover:text-white
            dark:hover:border-white
            mr-8
          "
          @click="burgerMenu"
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

      <!-- MOBILE MENU -->
      <div
        id="responsive-menu"
        class="hidden absolute top-24 left-16 w-64 lg:hidden"
      >
        <div
          class="
            menu
            absolute
            left-8
            bg-white
            w-64
            z-50
            border-t-4 border-blue-darker
            text-md
            font-header font-medium
            px-5
            shadow-xl
            dark:bg-dark-gray
          "
        >
          <a
            href="#"
            v-for="(item, index) in items"
            :key="`item-${index}`"
            class="
              selectable
              block
              mt-8
              pb-2
              dark:border-b dark:border-dark-gray
              hover:text-black
              dark:hover:text-white
            "
            :class="{ active: index == 0 }"
          >
            {{ item }}
          </a>

          <a
            href="#responsive-header"
            class="
              demo-button
              overflow-hidden
              relative
              text-center
              demo-button
              block
              mt-4
              ml-2
              mr-6
              border
              rounded-full
              border-gray-dark
              py-3
              px-6
              dark:border-blue-dark
              duration-500
              hover:border-black
            "
          >
            Démo

            <span></span><span></span><span></span><span></span>
          </a>

          <div class="flex flex-row my-5 items-center justify-center">
            <!-- Juste pour faire beau -->
            <img
              src="../assets/img/english.png"
              alt="English flag"
              width="18"
              class="block w-6 lg:inline-block cursor-pointer"
            />
          </div>
        </div>
      </div>
      <!-- END:: Mobile Menu -->

      <!-- DESKTOP MENU -->
      <div class="hidden lg:flex lg:flex-row lg:items-center">
        <div
          class="
            border-t-4 border-blue-darker
            text-md
            font-header font-medium
            px-5
            shadow-xl
            lg:border-0
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
              mt-8
              pb-2
              border-b border-dark-lightgray
              hover:text-black
              dark:hover:text-white
              lg:pb-0
              lg:border-0
              lg:mr-6
              lg:inline-block
              lg:mt-0
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
              text-center
              demo-button
              block
              mt-4
              ml-2
              mr-6
              border
              rounded-full
              border-gray-dark
              py-3
              px-6
              dark:border-blue-dark
              duration-500
              hover:border-black
              lg:py-1
              lg:inline-block
              lg:mt-0
            "
          >
            Démo

            <span></span><span></span><span></span><span></span>
          </a>

          <div
            class="flex flex-row items-center justify-center lg:block lg:my-0"
          >
            <!-- Juste pour faire beau -->
            <img
              src="../assets/img/english.png"
              alt="English flag"
              width="18"
              class="block w-6 lg:inline-block cursor-pointer"
            />

            <!-- Search icon -->
            <div class="hidden ml-4 cursor-pointer lg:inline-block">
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
      <!-- END:: DESKTOP Menu -->
    </div>
  </nav>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Nav",
  props: {
    items: Array,
  },
  data() {
    return {
      display: false,
    };
  },
  methods: {
    burgerMenu() {
      this.display = !this.display;
      let selectableTimeline = gsap.timeline();

      if (this.display) {
        gsap.set("#responsive-menu .demo-button", {
          opacity: 1,
        });
        gsap.set("#responsive-menu img", {
          opacity: 1,
        });
        document.querySelector("#responsive-menu").classList.add("block");
        document.querySelector("#responsive-menu").classList.remove("hidden");
        gsap.fromTo(
          "#responsive-menu .menu",
          {
            height: 0,
          },
          {
            height: "auto",
            duration: 1,
          }
        );

        selectableTimeline.fromTo(
          "#responsive-menu .selectable",
          {
            x: 500,
          },
          {
            x: 0,
            stagger: 0.1,
            duration: 0.5,
          }
        );
      } else {
        gsap.to("#responsive-menu .menu", {
          height: 0,
          duration: 1,
        });
        gsap.to("#responsive-menu .demo-button", {
          opacity: 0,
          duration: 0.3,
        });
        gsap.to("#responsive-menu img", {
          opacity: 0,
          duration: 0.3,
        });

        selectableTimeline
          .fromTo(
            "#responsive-menu .selectable",
            {
              x: 0,
            },
            {
              x: 500,
              stagger: 0.1,
              duration: 0.5,
            }
          )
          .then(() => {
            document
              .querySelector("#responsive-menu")
              .classList.remove("block");
            document.querySelector("#responsive-menu").classList.add("hidden");
          });
      }
    },
  },
};
</script>