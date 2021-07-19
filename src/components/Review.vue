<template>
  <div
    class="
      review
      relative
      w-80
      h-84
      min-h-[24rem]
      rounded-xl
      shadow-xl
      bg-blue-light
      px-6
      py-16
      my-16
      dark:bg-blue-darker
    "
  >
    <div
      class="
        pp
        absolute
        -top-12
        left-12
        rounded-full
        w-24
        h-24
        border-8 border-blue-light
        dark:border-blue-darker
      "
      :style="getAvatar"
    ></div>

    <!-- Header -->
    <div class="flex flex-row h-28">
      <!-- :INFOS -->
      <div class="flex flex-col w-48">
        <h2 class="font-extrabold text-xl text-blue-dark dark:text-blue-light">
          {{ name }}
        </h2>
        <span class="text-gray-dark text-sm mt-5">{{ job }}</span>
      </div>
      <!-- END INFOS -->

      <!-- URL -->
      <div class="flex flex-col ml-auto text-center">
        <div
          class="
            bg-blue-darker
            mb-6
            p-1
            w-16
            text-xl text-center
            rounded-full
            text-white
            cursor-pointer
            duration-300
            hover:bg-blue-dark
            dark:bg-blue-light
            dark:text-blue-darker
            dark:hover:bg-blue-dark
            dark:hover:text-blue-light
          "
        >
          <font-awesome-icon :icon="['fas', 'link']" />
        </div>

        <!-- Notation -->
        <!-- Good -->
        <font-awesome-icon
          v-if="favorable"
          class="text-2xl text-green mx-auto"
          :icon="['fas', 'grin-beam']"
        />

        <!-- Bad -->
        <font-awesome-icon
          v-if="!favorable"
          class="text-2xl text-red mx-auto"
          :icon="['fas', 'frown']"
        />
      </div>
      <!-- END URL-->
    </div>
    <!-- End Header -->

    <div class="relative">
      <font-awesome-icon
        class="absolute -top-3 text-gray-dark"
        :icon="['fas', 'quote-left']"
      />
      <hr class="ml-5 mt-6 text-gray-dark" />
    </div>

    <p class="mt-6"><slot /></p>
  </div>
</template>

<script>
export default {
  name: "Review",
  props: {
    name: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
      default:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    favorable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    getAvatar() {
      return {
        "--img-people": "url('" + this.avatar + "')",
      };
    },
  },
};
</script>

<style>
hr {
  border: 1px dotted gray;
}
</style>