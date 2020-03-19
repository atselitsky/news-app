import helpers from "@/helpers/helpers.js";
const mutations = {
  saveNews(state, news) {
    state.news = news;
    if (state.news.articles) {
      state.countOfPages = helpers.countOfPages(state);
      state.loadingStatus = false;
    }
  }
};
export default mutations;
