<template>
  <el-table
    v-loading="loading"
    :data="sortedPayments"
    style="width: 100%"
    :default-sort="{prop: 'score', order: 'ascending'}"
  >
    <el-table-column label="Date" align="left">
      <template slot-scope="scope">{{ scope.row.txInfo.timestamp | moment('DD.MM.YYYY HH:mm') }}</template>
    </el-table-column>
    <el-table-column prop="txInfo.value" label="IOTA" align="left"></el-table-column>
    <el-table-column label="Message" align="left">
      <template slot-scope="scope">{{scope.row.txInfo.message}}</template>
    </el-table-column>
    <el-table-column label="Link" align="right">
      <template slot-scope="scope"><a :href="'https://thetangle.org/transaction/' + scope.row.txInfo.hash" target="_blank">Show</a></template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Donations",
  data() {
    return {
      loading: false,
      url: process.env.cityUrl + "/payments",
      payments: [],
      intervalid1: null
    };
  },
  methods: {
    async fetchData() {
      let self = this;
      console.log("url", this.url)
      let response = await this.$axios.get(this.url)
      console.log("luch", response)
      if(response.data) {
        this.payments = response.data
      }
      this.loading = false;
   
    },
    tableRowClassName({ row }) {
      if (row.available) {
        return "success-row";
      } else {
        return "danger-row";
      }
    }
  },
  computed: {
    sortedPayments() {
      var filter = {
        payed: true
      };
       let array = this.payments.filter(function(item) {
        for (var key in filter) {
          if (item[key] === undefined || item[key] != filter[key])
            return false;
        }
        return true;
      });
      return array.reverse();
    }
  },
  created() {
    this.loading = true;
    this.fetchData();
  }
};
</script>

<style>
.el-table {
  text-align: center;
}
.el-table td, .el-table th.is-leaf {
  cursor: pointer;
  background-color: var(--white);
}
.el-table .el-table__row {
  cursor: pointer;
  background-color: var(--white);
}
.el-tag.el-tag--danger {
  background: #d05656;
  color: rgb(225, 231, 239);
}
.el-tag.el-tag--success {
  background: #3cc13c;
  color: rgb(225, 231, 239);
}
</style>