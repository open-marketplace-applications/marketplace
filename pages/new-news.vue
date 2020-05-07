<template>
  <div id="news">
    <Navigation />
    <div class="content">
      <h1>Create your news</h1>
      <CreateNews />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import CreateNews from "../components/CreateNews.vue";
import Footer from "../components/Footer";

export default {
  components: { Navigation, CreateNews, Footer }
};
</script>

<style lang="scss">
#news {
  .content {
    max-width: 1200px;
    margin: 20px auto;
  }
}
</style>
