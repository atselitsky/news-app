<template>
  <div class="feed pt-5 fill-height d-flex flex-column align-center">
    <filters />
    <template v-if="isLoading">
      <skeleton-news :width="responsive" v-for="el in pageSize" :key="el" ></skeleton-news>
    </template>
    <news-card v-else :key="post.source.url" v-for="post in news" :post="post" :width="responsive" />
    <v-pagination
      class="pagination"
      v-model="pagePagination"
      :length="countOfPages"
      total-visible="8"
    ></v-pagination>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard";
import Filters from "@/containers/Filters.vue";
import SkeletonNews from '@/components/SkeletonNews.vue'
import { mapState } from "vuex";
export default {
  name: "NewsFeed",
  components: {
    NewsCard,
    Filters,
    SkeletonNews
  },
  data() {
    return {
      desktop: `30vw`,
      mobile: `70vw`
    };
  },
  computed: {
    responsive: function() {
      if (this.$vuetify.breakpoint.mdAndDown) {
        return this.mobile;
      }
      return this.desktop;
    },
    pagePagination: {
      get: function() {
        return this.$store.state.news.page;
        
      },
      set: function(newPage) {
        this.$store.dispatch("LOAD_NEWS", {
          pageNumber: newPage,
          query: this.$store.state.filters.query,
          sortBy: this.$store.state.filters.sortBy.state,
          from: this.$store.state.filters.startDate,
          to: this.$store.state.filters.endDate
        });
      }
    },
    ...mapState({
      news: state => state.news.news.articles,
      countOfPages: state => state.news.countOfPages,
      pageSize: state => state.news.pageSize,
      isLoading: state => state.news.loadingStatus
    })
  },
  mounted() {
    this.$store.commit("clearFilter");
    this.$store.dispatch("LOAD_NEWS", {
      pageNumber: 1
    });
  }
};
</script>

<style lang="css" scoped>
.feed {
  max-width: 70vw;
}
</style>