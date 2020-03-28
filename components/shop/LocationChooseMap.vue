<template>
  <div class="location-choose-map">
    <client-only placeholder="Loading...">
      <l-map
        v-if="showMap"
        style="height: 400px; width: 400px"
        :zoom="zoom"
        :center="center"
        @update:center="centerUpdated"
        >
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="center"></l-marker>
        </l-map>
    </client-only>
  </div>
</template>

<script>
const iotaAreaCodes = require("@iota/area-codes");
export default {
  name: "LocationChooseMap",
  components: { },
  props: {
      iac: {
          type: String,
          require: true
      }
  },
  data() {
    return {
      showMap: true,
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 13,
      center: { lat: 52.529562, lng: 13.413047 },
      bounds: null,
      showMap: true,
      new_iac: this.iac || "NPHTQORL9XK"
    };
  },
  mounted() {
    if(!this.iac) {
        this.$emit('update', this.new_iac)
    }
  },
  methods: {
    centerUpdated(center) {
      this.center = center;
      this.new_iac = iotaAreaCodes.encode(
        this.center.lat,
        this.center.lng,
        iotaAreaCodes.CodePrecision.EXTRA
      );
      this.$emit('update', this.new_iac)
    }
  }
};
</script>