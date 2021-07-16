<template>
  <div>
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },
  mounted() {
    this.tabs = this.$children;
    console.log(this.tabs, "tabs");
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      console.log("CLICKED");
      this.selectedIndex = i;

      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
        console.log(tab);
      });
    },
  },
};
</script>

<style>
</style>