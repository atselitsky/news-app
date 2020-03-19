<template>
  <v-app-bar app color="blue accent-3 " dense >
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="toggleSidebar" />
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  methods: {
    toggleSidebar: function() {
      this.$store.commit("toggleSidebar");
    }
  }
};
</script>

<style lang="css" scoped>
</style>