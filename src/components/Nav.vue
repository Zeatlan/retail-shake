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
        <img
          src="https://www.retailshake.com/wp-content/uploads/2020/01/Logo-Retail-Shake_1_172x.png"
          class="logo duration-250 w-32"
          alt="Retail Shake"
        />
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
            left-0
            -top-8
            bg-white
            w-full
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
      <div id="desktop" class="hidden lg:flex lg:flex-row lg:items-center">
        <div
          class="
            hidden
            menu
            border-t-4 border-blue-darker
            text-md
            font-header font-medium
            px-5
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
          </div>
        </div>

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Que recherchez-vous ?"
          class="
            hidden
            w-96
            p-3
            rounded-2xl
            border border-black
            dark:bg-dark-gray
            dark:border-blue-dark
          "
        />
        <!-- Search icon -->
        <div class="hidden ml-4 cursor-pointer lg:inline-block">
          <font-awesome-icon
            @click="search"
            class="hidden search-cancel"
            :icon="['fas', 'times']"
          />
          <font-awesome-icon
            @click="search"
            class="search-icon"
            :icon="['fas', 'search']"
          />
        </div>
      </div>
      <!-- END:: DESKTOP Menu -->
    </div>
  </nav>
</template>

<script>
import gsap from "gsap";
import $ from "jquery";

export default {
  name: "Nav",
  props: {
    items: Array,
  },
  data() {
    return {
      searching: false,
      display: false,
    };
  },
  mounted() {
    $("body").bind("touchmove", function (e) {
      if ($(this).scrollTop() > 100) {
        $("nav .logo").addClass("w-16");
        $("nav .logo").removeClass("w-32");
        $("#responsive-menu .menu").removeClass("top-0");
        $("#responsive-menu .menu").addClass("-top-8");
      } else {
        $("nav .logo").removeClass("w-16");
        $("nav .logo").addClass("w-32");
        $("#responsive-menu .menu").removeClass("-top-8");
        $("#responsive-menu .menu").addClass("top-0");
      }
    });
  },
  methods: {
    search() {
      var searchingTL = gsap.timeline();
      var menuSwap = gsap.timeline();
      this.searching = !this.searching;

      // Hide menu + Show input
      if (this.searching) {
        menuSwap
          .fromTo(
            "nav #desktop .menu",
            { opacity: 1 },
            {
              opacity: 0,
              duration: 0.3,
            }
          )
          .fromTo(
            "nav #desktop input",
            {
              y: -150,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
            }
          );

        document.body
          .querySelector("nav #desktop input")
          .classList.remove("hidden");

        searchingTL
          .fromTo(
            "nav #desktop .search-icon",
            {
              opacity: 1,
            },
            {
              opacity: 0,
              duration: 0.3,
            }
          )
          .then(() => {
            document.body
              .querySelector("nav #desktop .search-icon")
              .classList.add("hidden");

            document.body
              .querySelector("nav #desktop .search-cancel")
              .classList.remove("hidden");
          });
        gsap.to("nav #desktop .search-cancel", {
          opacity: 1,
          duration: 0.3,
        });
      } else {
        // Show menu + Hide input
        menuSwap
          .fromTo(
            "nav #desktop input",
            {
              y: 0,
              opacity: 1,
            },
            {
              y: -150,
              opacity: 0,
              duration: 0.3,
            }
          )
          .fromTo(
            "nav #desktop .menu",
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
            }
          );
        document.body
          .querySelector("nav #desktop input")
          .classList.add("hidden");

        searchingTL
          .fromTo(
            "nav #desktop .search-cancel",
            {
              opacity: 1,
            },
            {
              opacity: 0,
              duration: 0.3,
            }
          )
          .then(() => {
            document.body
              .querySelector("nav #desktop .search-icon")
              .classList.remove("hidden");

            document.body
              .querySelector("nav #desktop .search-cancel")
              .classList.add("hidden");
          });
        gsap.to("nav #desktop .search-icon", {
          opacity: 1,
          duration: 0.3,
        });
      }
    },
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