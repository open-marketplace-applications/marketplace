<template>
  <div id="shop">
    <Navigation />
    <h1>Create your shop</h1>
      <!-- this component will only be rendered on client-side -->
        <CreateShop />
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
    margin: 150px 20px;
}
</style>
