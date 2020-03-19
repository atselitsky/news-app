<template >
  <div>
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          class="pa-8 my-5 transition-swing"
          :href="post.url"
          target="_blank"
          :class="`elevation-${hover ? 24 : 6}`"
          :width="width"
        >
          <v-img aspect-ratio="2.2" :src="post.urlToImage" alt="LOADING ERROR"></v-img>
          <v-card-title class="title text-left subtitle-1">{{post.title}}</v-card-title>
          <v-card-subtitle>{{dateFormatted}}</v-card-subtitle>
          <v-card-text class="text--primary">{{post.description }}</v-card-text>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["post", "width"],
  methods: {
    formatDate(date) {
      if (!date) return null;
      let d = new Date(date);
      return d.toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  },
  computed: {
    dateFormatted() {
      return this.formatDate(this.post.publishedAt);
    }
  }
};
</script>

<style lang="css" scoped>
.title {
  word-break: normal; /*Overwrite Vuetify: word-break:break-all */
  hyphens: auto;
}
</style>