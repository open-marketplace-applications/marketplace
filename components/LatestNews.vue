<template>
  <div v-if="posts" class="latest-news">
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
      posts: null
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
    position: absolute;
    bottom: 30%;
    left: 0;
    color: var(--white);
    text-align: left;
    padding: 25px 50px;
    padding-top: 75px;
    width: 100%;
    height: auto;
    border-radius: 0 20px 20px 0;
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    z-index: 3;
    margin-top: 50px;
    width: 100%;
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