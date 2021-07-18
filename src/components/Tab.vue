<template>
  <div v-show="isActive">
    <div
      class="
        flex flex-col
        text-justify
        justify-between
        mt-12
        p-4
        rounded-xl
        dark:bg-dark-gray
      "
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { computed, inject, watchEffect, getCurrentInstance } from "vue";
import Button from "../components/Button.vue";

export default {
  name: "Tab",
  components: {
    Button,
  },
  props: {
    title: String,
  },
  setup(props) {
    const instance = getCurrentInstance();
    const { tabs, active } = inject("tabsState");

    const index = computed(() =>
      tabs.value.findIndex((target) => target.uid === instance.uid)
    );
    const isActive = computed(() => index.value === active.value);

    watchEffect(() => {
      if (index.value === -1) {
        tabs.value.push(instance);
      }
    });

    return {
      isActive,
    };
  },
};
</script>

<style>
</style>