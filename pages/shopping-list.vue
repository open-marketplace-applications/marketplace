<template>
  <div id="shop">
    <Navigation />
    <div class="content">
      <h1>Einfach online einkaufen</h1>
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
          <p>Gibt hier einfach ein, was du haben möchtest. Die Helfer in deiner Stadt werden sich darum kümmern.</p>

          <el-input
            type="textarea"
            :rows="20"
            placeholder="Zum Beispiel: 1 Dunkles Brot, 2 Tomaten, 1 Päckchen Käse"
            v-model="order_text"
          ></el-input>
          <br />
          <br />
          <el-form-item label="description" prop="description">
            <el-input type="text" placeholder v-model="order_form.public_data.description"></el-input>
          </el-form-item>

          <el-form-item label="eastimated_route_length" prop="eastimated_route_length">
            <el-input
              type="text"
              placeholder
              v-model="order_form.public_data.eastimated_route_length"
            ></el-input>
          </el-form-item>

          <el-form-item label="eastimated_time" prop="eastimated_time">
            <el-input type="text" placeholder v-model="order_form.public_data.eastimated_time"></el-input>
          </el-form-item>

          <el-form-item label="eastimated_price" prop="eastimated_price">
            <el-input type="text" placeholder v-model="order_form.public_data.eastimated_price"></el-input>
          </el-form-item>

          <el-form-item label="reward" prop="reward">
            <el-input type="text" placeholder v-model="order_form.public_data.reward"></el-input>
          </el-form-item>

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

          <h3>Wohin soll Deine Bestellung geliefert werden?</h3>
          <br />
          <el-form-item label="Straße" prop="street">
            <el-input type="text" placeholder="Deine Straße" v-model="order_form.street"></el-input>
          </el-form-item>
          <el-form-item label="Hausnummer" prop="street_number">
            <el-input type="text" placeholder="Deine Hausnummer" v-model="order_form.street_number"></el-input>
          </el-form-item>
          <el-form-item label="Postleitzahl" prop="zip_code">
            <el-input type="text" placeholder="Deine Postleitzahl" v-model="order_form.zip_code"></el-input>
          </el-form-item>
          <el-form-item label="Stadt" prop="city">
            <el-input type="text" placeholder="Deine Stadt" v-model="order_form.city"></el-input>
          </el-form-item>
          <br />

          <h3>Sonstiges</h3>
          <br />
          <el-form-item label="Anmerkungen für die Helfer" prop="general">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="Bitte klingeln"
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
          <el-button @click="send" type="primary">Verbindlich Bestellen</el-button>
          <br />
          <br />
        </div>
        <div v-if="active == 3">
          <h3>Danke!</h3>
          <p>Vielen Danke für deine Bestelung! Ein Helfer wird bald mit dem Einkauf da sein!</p>
          <p>Bitte bleibe solange am Telefon erreichbar.</p>
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
