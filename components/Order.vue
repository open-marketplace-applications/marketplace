<template>
  <div id="shop">
    <Navigation />
    <div class="content">
      <h1>Einfach online bestellen und abholen</h1>
      <br />
      <br />
      <el-steps :active="active" finish-status="success">
        <el-step title="Einkaufszettel"></el-step>
        <el-step title="Kontakt"></el-step>
        <el-step title="Abschicken"></el-step>
      </el-steps>
      <br />

      <el-form :model="order_form" ref="ruleForm" label-width="120px" label-position="left">
        <div v-if="active == 0">
          <p>Gibt hier einfach ein, was du haben möchtest. Der Shop besitzer muss allerdings erst die Bestellung bestätigen.</p>

          <el-input
            type="textarea"
            :rows="20"
            placeholder="Zum Beispiel: 1 Dunkles Brot, 2 Brötchen, 1 Päckchen Käse"
            v-model="order_text"
          ></el-input>
          <br />
          <br />
          <br />
          <el-button @click="next" type="primary">Weiter</el-button>
          <br />
          <br />
          <br />
        </div>
        <div v-if="active == 1">
          <br />
          <h3>Sag uns wer du bist und wie wir dich erreichen können.</h3>
          <br />
          <el-form-item label="Vorname" prop="first_name">
            <el-input type="text" placeholder="Dein Vorname" v-model="order_form.first_name"></el-input>
          </el-form-item>
          <el-form-item label="Nachname" prop="last_name">
            <el-input type="text" placeholder="Dein Nachname" v-model="order_form.last_name"></el-input>
          </el-form-item>
          <el-form-item label="Telefonnummer" prop="phone">
            <el-input type="text" placeholder="Deine Telefonnummer" v-model="order_form.phone"></el-input>
          </el-form-item>
          <el-form-item label="Firmenname" prop="firm_name">
            <el-input type="text" placeholder="Dein Firmenname" v-model="order_form.firm_name"></el-input>
          </el-form-item>
          <br />

          <h3>Sonstiges</h3>
          <br />
          <el-form-item label="Anmerkungen" prop="general">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="Bitte Brot schneiden."
              v-model="order_form.general"
            ></el-input>
          </el-form-item>
          <el-button @click="next" type="primary">Weiter</el-button>
          <br />
          <br />
        </div>
        <div v-if="active == 2">
          <h3>Order</h3>
          <pre>{{order_text}}</pre>
          <h3>Order inforamtion</h3>
          <pre>{{order_form}}</pre>
          <el-button @click="send" type="primary">Verbindlich Anfragen</el-button>
          <br />
          <br />
        </div>
        <div v-if="active == 3">
          <h3>Hat geklappt!</h3>
          <p>Vielen Danke für deine Anfrage! Ein Helfer wird nun informiert um ihre Bestellung aufzunehmen und wird dich informieren.</p>
          <nuxt-link to="/">Zurück zur Startseite</nuxt-link> oder
          <nuxt-link to="/orders">Disover Orders</nuxt-link>
          <br />
          <br />
        </div>
      </el-form>
    </div>

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
      order_text: "",
      active: 0,
      order_form: {
        public_data: {}
      }
    };
  },
  methods: {
    send() {
      console.log('send: ', order_form)
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>

<style lang="scss">
#shop {
  .content {
    max-width: 800px;
    margin: 20px auto;
  }
}
</style>
