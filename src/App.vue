<template>
  <v-app>
    <Sidebar />
    <Header/>
    <v-content >
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",

  components: {
    Sidebar,
    Header
  }
};
</script>
<style lang="css">
@import 'assets/rewritedStyles.css';
body {
  hyphens: auto;
}

</style>

