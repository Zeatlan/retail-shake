<template>
  <div
    class="tab flex flex-col md:flex-row"
    :class="!txtOnTheRight ? 'mt-12' : ''"
  >
    <img :src="img" alt="Capture" class="w-96" v-if="txtOnTheRight" />

    <div
      :class="txtOnTheRight ? 'mt-8 md:mt-0 md:ml-8' : 'mb-8 md:mb-8 md:mr-8'"
    >
      <h1
        class="text-2xl font-extrabold mb-1 text-center md:text-left"
        :class="'text-' + color + '-dark'"
      >
        {{ title }}
      </h1>
      <h2 class="text-md mb-2 text-center md:text-left">{{ subtitle }}</h2>
      <div
        class="w-48 h-1 mx-auto md:mx-0"
        :class="'bg-' + color + '-dark'"
      ></div>
      <div class="text-justify">
        <slot />
      </div>
    </div>

    <img :src="img" alt="Capture" class="w-96" v-if="!txtOnTheRight" />
  </div>
</template>

<script>
export default {
  name: "Frame",
  props: {
    img: String,
    txtOnTheRight: Boolean,
    color: String,
    title: String,
    subtitle: String,
  },
};
</script>

<style>
</style>