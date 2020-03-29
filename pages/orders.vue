<template>
  <div id="orders">
    <Navigation />
    <div class="content">
      <h1>Orders</h1>
      <el-table :data="orders" style="width: 100%">
        <el-table-column type="index" label="ID" width="50"></el-table-column>
        <el-table-column prop="description" label="Description" width="180"></el-table-column>
        <el-table-column prop="eastimated_route_length" label="Route" width="180"></el-table-column>
        <el-table-column prop="eastimated_time" label="Time"></el-table-column>
        <el-table-column prop="eastimated_price" label="Price"></el-table-column>
        <el-table-column prop="reward" label="Reward"></el-table-column>
        <el-table-column label="Action">
          <template slot-scope="scope">
            <el-button @click="accept(scope.row)" type="primary">Accept</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br />
      <br />

    </div>


    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer";

export default {
  components: { Navigation, Footer },
  data() {
    return {
      orders: [],
      loading: true
    };
  },
  async created() {
    const { data } = await this.$axios.get(process.env.cityUrl + "/orders");
    this.orders = data;
    console.log("data", data);
    this.loading = false;
  },
  methods: {
    accept(order) {
      console.log("order", order);
      this.$confirm(
        "Willst du den Auftrag wirklich annehmen?",
        "Verbindliche Lieferung",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "Challenge accepted"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Challenge canceled"
          });
        });
    }
  }
};
</script>

<style lang="scss">
#orders {
  .content {
    max-width: 1200px;
    margin: 20px auto;
  }
}
</style>
