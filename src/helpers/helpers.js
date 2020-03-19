const helpers = {
  countOfPages: function(state) {
    return Math.ceil(state.news.totalResults / state.pageSize);
  },
  isDark: function() {
    return localStorage.getItem("dark") == "true"
  } 
};
export default helpers;
