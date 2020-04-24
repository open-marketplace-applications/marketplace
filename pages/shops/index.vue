<template>
  <div id="shops">
    <Navigation />
    <div class="content">
      <shop-storefront />
      <div class="contain">
        <shop-sidebar :pricerange.sync="highprice" />
        <transition-group name="items" tag="section" class="products">
          <shop-item v-for="(item, index) in products" :key="index" :item="item" :index="index" />
        </transition-group>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import ShopSidebar from "@/components/shop/ShopSidebar.vue";
import ShopStorefront from "@/components/shop/ShopStorefront.vue";
import ShopItem from "@/components/shop/ShopItem.vue";
import Footer from "@/components/Footer";

export default {
  name: "shops",
  components: { Navigation, ShopSidebar, ShopStorefront, ShopItem, Footer },
  data() {
    return {
      highprice: 300
    };
  },
  computed: {
    products() {
      return this.$store.state.products.filter(el =>
        this.$store.state.sale
          ? el.price < this.highprice && el.sale
          : el.price < this.highprice
      );
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("getProducts");
  },
  created() {
    console.log("shops page created");
  }
};
</script>

<style lang="scss">
#shops {
  .content {
    height: 100%;
    max-width: 800px;
    margin: 20px auto;
  }
}
aside {
  float: left;
  width: 19.1489%;
}

.products {
  width: 70%;
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
}
</style>
