<template>
  <video v-if="width == null" autoplay loop muted>
    <source :src="this.src" :type="getType" />
  </video>
  <video v-else :width="width" :height="height" autoplay loop muted>
    <source :src="this.src" :type="getType" />
  </video>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      type: "",
    };
  },
  props: {
    src: String,
    autoplay: Boolean,
    width: Number,
    height: Number,
  },
  computed: {
    getType() {
      this.type = this.src.split(".");
      return "video/" + this.type[1];
    },
  },
};
</script>

<style>
</style>