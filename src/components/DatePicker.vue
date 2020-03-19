<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="dateFormatted"
        :label="label"
        prepend-icon="mdi-calendar"
        readonly
        v-on="on"
        clearable
      ></v-text-field>
    </template>
    <v-date-picker v-model="localDate" no-title @input="menu = false"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "DatePicker",
  props: ["label", "date"],
  data() {
    return {
      menu: false
    };
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
  },
  computed: {
    localDate: {
      get: function() {
        return this.date;
      },
      set: function(newVal) {
          this.$emit("update-date",newVal);
      }
    },
    dateFormatted: {
      get:function(){
        return this.formatDate(this.localDate);
      },
      set:function(newVal){
         this.$emit("update-date",newVal);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>