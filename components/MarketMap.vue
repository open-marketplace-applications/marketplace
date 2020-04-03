<template>
 <div id="map-wrap">
        <client-only>
          <l-map
            class="map"
            :zoom="zoom"
            :center="center"
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
            @update:bounds="boundsUpdated"
          >
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :icon="iconTarget" :lat-lng="center">
              <l-popup>
              
              </l-popup>
            </l-marker>

            <l-marker v-for="(shop, index) in shops" :key="index" :icon="iconShop" :lat-lng="shop.location">
              <l-popup>
                <h3>{{ shop.name }}</h3>
                <p>{{ shop.description }}</p>
                <nuxt-link :to="{ path: 'shops', query: { root: shop.root }}">Visit the shop</nuxt-link>

              </l-popup>
            </l-marker>
            

          </l-map>
        </client-only>
      </div> 
</template>

<script>
const iotaAreaCodes = require('@iota/area-codes');

export default {
  components: {},
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 13,
      center: [process.env.cityLatitude, process.env.cityLongitude],
      bounds: null,
      shops: []
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
      this.$store.commit('location/setLat', center.lat)
      this.$store.commit('location/setLng', center.lng)
      console.log('this.$store.location.lat', this.$store.state.location.lat)
      console.log('this.$store.location.lat', center)
      
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  },

  async created() {
    try {
       const { data } = await this.$axios.get(process.env.cityUrl + '/shops')
        console.log("data", data)
        this.shops = data
        this.shops.forEach(shop => {
          const codeArea = iotaAreaCodes.decode(shop.iac);
          shop.location = [codeArea.latitude, codeArea.longitude]
        });
        console.log("data", this.shops)
    } catch (error) {
      console.log("error fetching marketmap data", error)
    }
       

  },
  computed: {
    iconTarget() {
        
    if (process.browser) {
      require('vue2-leaflet');
      console.log("th", this)
      console.log("th", L)
      return L.icon({
        iconUrl: require('@/assets/icons/target-marker.svg'),
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      })
        }
    },
    iconShop() {
        
    if (process.browser) {
      require('vue2-leaflet');
      console.log("th", this)
      console.log("th", L)
      return L.icon({
        iconUrl: require('@/assets/icons/shop_smal.svg'),
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      })
        }
    }
  }
};
</script>

<style>
#map-wrap {
  height: 50vh;
  margin-top: 15px;
}
.map {
  height: 100%;
  width: 100%;
}
.spots {
  padding-top: 80px;
  padding-bottom: 20px;
  float: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  width: 80%;
  display: block !important;
  margin-right: auto !important;
  margin-left: auto !important;
  float: none !important; /* Added */
}
</style>