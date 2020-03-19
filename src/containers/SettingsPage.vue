<template>
  <div class="fill-height pa-5">
    <h1 class="headline">Настройки приложения</h1>
    <v-switch v-model="isDark" hide-details label="Тёмная тема"></v-switch>
  </div>
</template>

<script>
import helpers from "@/helpers/helpers.js"
export default {
  name: "SettingsPage",
  computed: {
    isDark: {
      get: function() {
        return helpers.isDark()
      },
      set: function(newVal) {
        this.$vuetify.theme.dark = newVal;
        localStorage.setItem("dark", newVal);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>