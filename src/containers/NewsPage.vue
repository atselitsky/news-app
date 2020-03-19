<template>
  <div class="fill-height d-flex flex-column align-center " >
    <news-feed></news-feed>
  </div>
</template>

<script>
// @ is an alias to /src

import NewsFeed from "@/containers/NewsFeed.vue";

export default {
  name: "NewsPage",
  components: {
    NewsFeed
  },
};
</script>
<style lang="css">
</style>