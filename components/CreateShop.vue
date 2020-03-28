<template>
  <div v-loading="loading" class="shop-details-form-container">
    <el-alert v-if="published" title="Shop is not published yet!" type="warning">
      <p>You can add your shop details and publish it!</p>
    </el-alert>

    <el-form ref="form" :model="form" class="form-container">
      <p>You can add your shop details and publish it to the tangle!</p>

      <div class="shop-details-form-main-container">
        <el-row>
          <el-col :span="24">
            <el-form-item label="Name:">
              <el-input
                v-model="form.name"
                :rows="1"
                type="text"
                class="shop-name"
                autosize
                placeholder="Your shop name"
              />
            </el-form-item>

            <el-form-item label="Location">
                <LocationChooseMap @update="updateIac"/>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <el-button @click="onCancel" type="warning">Cancel</el-button>
      <el-button style="margin-left: 10px;" type="success" @click="onSubmit">Create</el-button>
    </el-form>
  </div>
</template>

<script>
import { createShop } from './shop/index'
import LocationChooseMap from "./shop/LocationChooseMap";
export default {
  name: "CreateShop",
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
        name: ""
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
      // save it to mam!
        console.log("onSubmit", this.form)
        console.log("this.iac)",this.form.iac)
        this.loading = true;
          if(this.iac) {
              this.form.iac = this.iac
        }


// DEV 
        this.loading = false;        
        return 

// DEV END

        let shop = await createShop(this.form);

        console.log("shop", shop)
        // save new shop secrets in database
        const parsed = JSON.stringify(shop);
        //localStorage.setItem("shop", parsed);
        this.loading = false;        
    },
    onCancel() {
      this.$router.push("/");
    },
    updateIac(newIac) {
      this.form.iac = newIac
    }
  }
};
</script>