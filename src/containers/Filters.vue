<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>Фильтры</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field v-model="query"  clearable label="Поиск" />
        <v-select
          return-object
          v-model="sortBy"
          :items="sortItems"
          items-text="text"
          items-value="value"
          label="Сортировка"
        />
        <date-picker label="C" :date="startDate" @update-date="updateStartDate" />
        <date-picker label="До" :date="endDate" @update-date="updateEndDate" />
        <v-btn @click="filterNews" small>Применить</v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import DatePicker from "@/components/DatePicker.vue";
import { mapState } from "vuex";

export default {
  name: "Filters",
  components: {
    DatePicker
  },
  methods: {
    filterNews() {
      this.$store.dispatch("LOAD_NEWS", {
        pageNumber: 1,
        query: this.query,
        sortBy: this.sortBy.state,
        from: this.startDate,
        to: this.endDate
      });
    },
    updateStartDate(newDate) {
      return this.$store.commit("setStartDate",newDate);
    },
    updateEndDate(newDate) {
      return this.$store.commit("setEndDate",newDate);
    }
  },
  computed: {
    query: {
      get: function() {
        return this.$store.state.filters.query;
      },
      set: function(newQuery) {
        this.$store.commit("setQuery",newQuery);
      }
    },
    sortBy: {
      get: function() {
        return this.$store.state.filters.sortBy;
      },
      set: function(newType) {
        this.$store.commit("setSortBy",newType);
      }
    },
    ...mapState({
      sortItems: state => state.filters.sortItems,
      startDate: state => state.filters.startDate,
      endDate: state => state.filters.endDate
    })
  }
};
</script>

<style lang="scss" scoped>
</style>