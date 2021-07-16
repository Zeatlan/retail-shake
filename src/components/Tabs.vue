<template>
  <ul class="flex space-x-16 w-1/2 mx-auto">
    <li
      v-for="(tab, i) of tabs"
      :key="i"
      :class="[active === i ? colors[i] : '', className[i]]"
      class="
        flex
        items-center
        px-6
        py-3
        rounded-tl-md rounded-tr-md
        cursor-pointer
        hover:text-gray-800
        text-3xl
        font-header font-extrabold
        select-none
        duration-300
      "
      @click="selectTab(i)"
    >
      {{ tab.props.title }}
    </li>
  </ul>
  <div class="bg-gray-300 -m-1 h-1"></div>
  <div class="mt-6 px-6">
    <slot />
  </div>
</template>


<script>
import { provide, computed, ref } from "vue";
import gsap from "gsap";

export default {
  name: "Tabs",
  data: () => {
    return {
      colors: [
        "bg-blue-light text-black",
        "bg-yellow-light text-black",
        "bg-orange-light text-white",
      ],
      className: ["tab-1", "tab-2", "tab-3"],
      activeTab: "0",
    };
  },
  props: {
    modelValue: {
      type: [String, Number],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const active = computed(() => props.modelValue);
    const tabs = ref([]);

    function selectTab(tab) {
      //* Animation
      if (this.activeTab !== tab) {
        gsap.from(".tab", {
          opacity: 0,
          duration: 0.5,
        });
      }
      this.activeTab = tab;
      emit("update:modelValue", tab);
    }

    provide("tabsState", {
      active,
      tabs,
    });

    return {
      tabs,
      active,
      selectTab,
    };
  },
};
</script>

<style>
li.tab:hover {
  background-color: var(--color-hover);
}
</style>