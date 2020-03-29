<template>
  <div id="shop">
    <Navigation />
    <div class="content">
      <h1>Create your shop</h1>
      <CreateShop />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import CreateShop from "../components/CreateShop.vue";
import Footer from "../components/Footer";

export default {
  components: { Navigation, CreateShop, Footer }
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
