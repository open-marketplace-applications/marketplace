<template>
  <div id="shop">
    <Navigation />
    <h1>Einfach online einkaufen</h1>
    <p>Gibt hier einfach ein, was du haben möchtest. Die Helfer in deiner Stadt werden sich darum kümmern.</p>
    <el-input
        type="textarea"
        :rows="20"
        placeholder="Zum Beispiel: 1 Dunkles Brot, 2 Tomaten, 1 Päckchen Käse"
        v-model="order_text">
    </el-input>
    <el-button @click="send" type="primary">Abschicken</el-button>
    <br />
    <br />
    <br />
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import CreateShop from "../components/CreateShop.vue";
import Footer from "../components/Footer";

export default {
  components: { Navigation, CreateShop, Footer },
  data() {
      return {
          order_text: ''
      }
  }, 
  methods: {
      send() {
          alert("Bestellung erfolgreich abgeschickt." + this.order_text)
          this.order_text = ''
      }
  }
};
</script>

<style lang="scss">

#shop {
    margin: 150px 20px;
}
</style>
