<template>
  <div v-loading="loading" class="news-details-form-container">
    <el-alert v-if="published" title="News is not published yet!" type="warning">
      <p>You can add your news details and publish it!</p>
    </el-alert>

    <el-form ref="form" :model="form" class="form-container">
      <p>You can add your news details and publish it to the tangle!</p>

      <div class="news-details-form-main-container">
        <el-row>
          <el-col :span="24">

            <el-form-item label="Your news:">
              <el-input
                v-model="form.text"
                rows="5"
                type="textarea"
                class="news-description-input"
                autosize
                placeholder="Here happen something!"
              />
            </el-form-item>

          </el-col>
        </el-row>
      </div>
      <el-button @click="onCancel" type="warning">Cancel</el-button>
      <el-button style="margin-left: 10px;" type="primary" @click="onSubmit">Create</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CreateNews",
  components: { },
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
        text: ""
      }
    };
  },
  mounted() {
    console.log("mounted");
    let self = this
    this.$gun.get('news').on(function(data, key) {
      console.log("mounted data", data);
      console.log("mounted key", key);
      if (data.text) {
        self.form.text = data.text
      }
    })
  },
  methods: {
    onSubmit: async function() {
      // save it to gun.js!
      console.log("onSubmit", this.form);
      this.$gun.get('news').put(this.form);
      // save it to tangle!

    },
    onCancel() {
      this.$router.push("/");
    },
    
  }
};
</script>

<style lang="scss">
.news-details-form-container {
  max-width: 480px;
}
</style>