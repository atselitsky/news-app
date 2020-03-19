<template>
  <v-navigation-drawer app v-model="drawer" :permanent="DesktopBreakpoint">
    <v-list-item></v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      items: [
        { title: "Новости", icon: "mdi-newspaper", to: "/" },
        { title: "Настройки", icon: "mdi-cog-outline", to: "/settings" },
        { title: "О нас", icon: "mdi-information-outline", to: "/about" },
        { title: "Помощь", icon: "mdi-help-circle-outline", to: "/help" }
      ]
    };
  },
  computed: {
    DesktopBreakpoint: function() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    drawer: {
      get: function() {
        return this.$store.state.sidebar.sidebarOpened;
      },
      set(newState) {
        if (newState != this.$store.state.sidebar.sidebarOpened) {
          this.$store.commit("toggleSidebar");
        }
      }
    }
  }
};
</script>

<style lang="css" scoped>
</style>