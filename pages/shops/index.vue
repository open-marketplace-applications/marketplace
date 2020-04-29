<template>
  <div id="shops">
    <Navigation />
    <div class="content">
       <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Info" name="first">
          <h1>Information</h1>
        </el-tab-pane>
        <el-tab-pane label="Calender" name="second">
          <h1>Calendar</h1>
        </el-tab-pane>
        <el-tab-pane label="Shop" name="third">
          <div class="contain">
            <shop-storefront /> 
            <shop-sidebar :pricerange.sync="highprice" />
            <transition-group name="items" tag="section" class="products">
              <shop-item v-for="(item, index) in products" :key="index" :item="item" :index="index" />
            </transition-group>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Contact" name="fourth">
          <h1>Contact</h1>
        </el-tab-pane>
      </el-tabs>
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
      highprice: 300,
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  computed: {
    products() {
      if (this.$store.state.products) {
        return this.$store.state.products.filter(el =>
          this.$store.state.sale
            ? el.price < this.highprice && el.sale
            : el.price < this.highprice
        );
      } else {
        return []
      }
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
    min-height: 100vh;
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
