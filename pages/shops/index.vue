<template>
  <div id="shops">
    <Navigation />
    <div  class="content">
      <div v-if="shop">
        <h5>{{shop.name}}</h5>
        <h1>{{shop.name}}</h1>
        <p>{{shop.description}}</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer";
const { getShopInfo } = require("@/utils/shop");

export default {
  name: "shops",
  components: { Navigation, Footer },
  data() {
    return {
      shop: null
    };
  },
  created() {
    if (this.$route.query.root) {
      getShopInfo(this.$route.query.root)
        .then(shop => {
          this.shop = shop
          console.log("shop", shop);
        })
        .catch(err => {
          console.log("err", err);
        });
    }
  }
};
</script>

<style lang="scss">
#shops {
  .content {
    max-width: 800px;
    margin: 20px auto;
  }
}
</style>
