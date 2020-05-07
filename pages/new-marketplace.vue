<template>
  <div id="shop">
    <Navigation />
    <div class="content">
      <h1>Create your marketplace</h1>
      <CreateMarketplace />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import CreateMarketplace from "../components/CreateMarketplace.vue";
import Footer from "../components/Footer";

export default {
  components: { Navigation, CreateMarketplace, Footer }
};
</script>

<style lang="scss">
#shop {
  .content {
    max-width: 1200px;
    margin: 20px auto;
  }
}
</style>
