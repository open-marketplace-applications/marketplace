<template>
  <div v-loading="loading" class="marketplace-details-form-container">
    <el-alert v-if="published" title="marketplace is not published yet!" type="warning">
      <p>You can add your marketplace details and publish it!</p>
    </el-alert>

    <el-form ref="form" :model="form" class="form-container">
      <p>You can add your marketplace details and publish it to the tangle!</p>

      <div class="marketplace-details-form-main-container">
        <el-row>
          <el-col :span="24">
            <br />
            <br />

            <el-form-item label="City Name:">
              <el-input
                v-model="form.name"
                :rows="1"
                type="text"
                class="marketplace-name-input"
                autosize
                placeholder="Your city name"
              />
            </el-form-item>

            <el-form-item label="Description:">
              <el-input
                v-model="form.description"
                rows="5"
                type="textarea"
                class="marketplace-description-input"
                autosize
                placeholder="Your city description"
              />
            </el-form-item>

             <el-form-item label="Hero Image:">
              <el-input
                v-model="form.hero_img_url"
                type="text"
                class="marketplace-hero_img_url-input"
                placeholder="Your city hero image url.."
              />
            </el-form-item>

            <el-form-item label="Location">
              <LocationChooseMap @update="updateIac" />
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <el-button @click="onCancel" type="warning">Cancel</el-button>
      <el-button style="margin-left: 10px;" type="primary" @click="onSubmit">Create</el-button>
    </el-form>
   <p>CITY_TITLE={{ form.name }}</p>
   <p>CITY_DESCRIPTION={{ form.description }}</p>
   <p>CITY_HERO_IMGAE_URL={{ form.hero_img_url }}</p>
   <p>CITY_LATITUDE={{ form.latitude }}</p>
   <p>CITY_LONGITUDE={{ form.longitude }}</p>
   <p>HOST={{ form.node_env }}</p>
   <p>NODE_ENV={{ form.host }}</p>
  </div>
</template>

<script>
const iotaAreaCodes = require("@iota/area-codes");

import LocationChooseMap from "./shop/LocationChooseMap";
export default {
  name: "CreateMarketplace",
  components: { LocationChooseMap },
  props: {
    published: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      shop: {},
      form: {
        name: "",
        description: "",
        latitude: "",
        longitude: "",
        hero_img_url: "",
        node_env: "production",
        host: "0.0.0.0",
      }
    };
  },
  created() {
    // fetch shop from database
    // let shop_string = localStorage.getItem("shop") || "{}";
    // this.shop = JSON.parse({shop_string});
  },
  methods: {
    onSubmit: async function() {
      // save it to tangle!
      console.log("onSubmit", this.form);
      console.log("this.iac)", this.form.iac);
    },
    onCancel() {
      this.$router.push("/");
    },
    updateIac(newIac) {
      this.form.iac = newIac;
      const codeArea = iotaAreaCodes.decode(newIac);
      this.form.latitude = codeArea.latitude
      this.form.longitude = codeArea.longitude
    }
  }
};
</script>

<style lang="scss">
.marketplace-details-form-container {
  max-width: 480px;
}
</style>