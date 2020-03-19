import sortItems from "@/enums/sortItems.js";
const mutations = {
  setQuery(state, newQuery) {
    state.query = newQuery;
  },
  setSortBy(state, newType) {
    state.sortBy = newType;
  },
  setStartDate(state, newDate) {
    state.startDate = newDate;
  },
  setEndDate(state, newDate) {
    state.endDate = newDate;
  },
  clearFilter(state) {
    (state.startDate = null),
      (state.endDate = null),
      (state.query = null),
      (state.sortBy = sortItems[0]);
  }
};
export default mutations;
