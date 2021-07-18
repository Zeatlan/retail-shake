<template>
  <div class="tab flex flex-row" :class="!txtOnTheRight ? 'mt-12' : ''">
    <img :src="img" alt="Capture" width="600" v-if="txtOnTheRight" />

    <div :class="txtOnTheRight ? 'ml-8' : 'mr-8'">
      <h1
        class="text-2xl font-extrabold mb-1"
        :class="'text-' + color + '-dark'"
      >
        {{ title }}
      </h1>
      <h2 class="text-md mb-2">{{ subtitle }}</h2>
      <div class="w-48 h-1" :class="'bg-' + color + '-dark'"></div>

      <slot />
    </div>

    <img :src="img" alt="Capture" width="600" v-if="!txtOnTheRight" />
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