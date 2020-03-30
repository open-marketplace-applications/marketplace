<template>
  <div class="latest-news">
    <h2>Latest news</h2>
    <div class="news-cards">
        <NewsCard :post="post" v-for="post in posts" v-bind:key="post.id" />
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard.vue";
export default {
  name: "LatestNews",
  components: {
    NewsCard
  },
  data() {
    return {
      posts: []
    };
  },
  async created() {
    try {
      const { data } = await this.$axios.get(
        process.env.cityUrl + "/news/latest"
      );
      console.log("data", data);
      this.posts = data;
    } catch (error) {
      console.log("error fetching news data", error);
    }
  }
};
</script>

<style lang="scss" scoped>
.latest-news {
    margin-top: 50px;
    h2 {
        width: 100%;
    }
  .news-cards {
    display: flex;
    flex-wrap: nowrap;
  }
  @media only screen and (max-width: 920px) {
    .news-cards {
      flex-wrap: wrap;
    }
  }
}
</style>