<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" v-if="link">
    <div
      class="
        card-link
        bg-gray
        border border-gray-dark
        shadow-md
        my-6
        rounded-3xl
        duration-300
        hover:bg-white
        hover:border hover:border-gray-light
        hover:-translate-y-2
        hover:shadow-xl
        dark:bg-dark-gray
        w-48
        h-32
        md:w-56
      "
      :style="bg"
    ></div>
  </a>

  <div
    class="
      card
      border border-gray-light
      bg-white
      shadow-md
      my-6
      rounded-3xl
      align-middle
      dark:bg-dark-lightgray
      w-48
      h-32
      md:w-56
    "
    :style="bg"
    v-if="!link"
  ></div>
</template>

<script>
export default {
  name: "Card",
  props: {
    link: {
      type: String,
      required: false,
    },
    logo: {
      type: String,
      required: true,
    },
  },
  computed: {
    bg() {
      return {
        "--img-card": "url('" + this.logo + "')",
      };
    },
  },
};
</script>

<style>
</style>