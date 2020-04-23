<template>
  <div id="map-wrap">
    <client-only>
      <l-map
        :zoom="zoom"
        :center="center"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
        class="map"
        scrollWheelZoom="false" 
      >
        <!-- <div class="search-wrapper">
          <div class="icon-wrapper">
            <img src="@/assets/icons/search.svg" alt="" class="icon" />
          </div>
          <input type="text" placeholder="Find your marketplace" />
        </div> -->
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker
          v-for="(shop, index) in shops"
          :key="'shop-' + index"
          :icon="iconShop"
          :lat-lng="[shop.lat, shop.lon]"
        >
          <l-popup>
            <MarkerPopup :entry="shop.tags" />
          </l-popup>
        </l-marker>
        <l-marker
          v-for="(pharmacy, index) in pharmacies"
          :key="'pharmacy-' + index"
          :icon="iconPharmacy"
          :lat-lng="[pharmacy.lat, pharmacy.lon]"
        >
          <l-popup>
            <MarkerPopup :entry="pharmacy.tags" />
          </l-popup>
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
import MarkerPopup from './MarkerPopup'

// const iotaAreaCodes = require("@iota/area-codes");
export default {
  components: { MarkerPopup },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 15,
      center: [52.529797, 13.413094],
      bounds: null,
      shops: [],
      pharmacies: []
    };
  },
  computed: {
    iconTarget() {
      if (process.browser) {
        require("vue2-leaflet");
        return L.icon({
          iconUrl: require("@/assets/icons/crosshair.svg"),
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });
      }
    },
    iconShop() {
      if (process.browser) {
        require("vue2-leaflet");
        return L.icon({
          iconUrl: require("@/assets/icons/shop.svg"),
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });
      }
    },
    iconPharmacy() {
      if (process.browser) {
        require("vue2-leaflet");
        return L.icon({
          iconUrl: require("@/assets/icons/pharmacy.svg"),
          iconSize: [20, 20],
          iconAnchor: [20, 20]
        });
      }
    }
  },
  async created() {
    try {
      const overpass_url = "https://lz4.overpass-api.de/api/interpreter";
      let overpass_query = `
        [out:json];
        area[name="Berlin"];
        (node["amenity"="marketplace"](area);
          way["amenity"="marketplace"](area);
          rel["amenity"="marketplace"](area);
        );
        out center;
      `;
      let res = await this.$axios.get(
        `${overpass_url}?data=${overpass_query}`
      );     
      console.log("marketplace res", res)

      if (res.data.elements) {
        this.shops = res.data.elements;
      }
      overpass_query = `
        [out:json];
        area[name="Berlin"];
        (node["amenity"="pharmacy"](area);
          way["amenity"="pharmacy"](area);
          rel["amenity"="pharmacy"](area);
        );
        out center;
      `
      res = await this.$axios.get( `${overpass_url}?data=${overpass_query}`)
      console.log("pharmacies res", res)
      if(res.data.elements) {
        this.pharmacies = res.data.elements
        console.log("pharmacies", this.pharmacies)
      }
      // 17420 pharmacies
      // Example:
      //  {
      //   type: 'node',
      //   id: 32508627,
      //   lat: 50.0012021,
      //   lon: 9.0676958,
      //   tags: {
      //     'addr:city': 'Kleinostheim',
      //     'addr:housenumber': '60',
      //     'addr:postcode': '63801',
      //     'addr:street': 'Goethestraße',
      //     amenity: 'pharmacy',
      //     'contact:phone': '+49 6027 6622',
      //     dispensing: 'yes',
      //     name: 'Laurentiusapotheke',
      //     opening_hours: 'Mo-Fr 08:30-12:30,14:30-18:30; We,Sa 08:30-12:30',
      //     operator: 'Thomas Bsonek',
      //     website: 'http://www.laurentius-apotheke.net/',
      //     wheelchair: 'yes'
      //   }
      // },
      // https://wiki.openstreetmap.org/wiki/DE:Key:shop
    } catch (error) {}
  },
  mounted() {
    // do we support geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    } else {
      // // get position from browser
      // navigator.geolocation.getCurrentPosition(
      //   pos => {
      //     this.center = L.latLng(pos.coords.latitude, pos.coords.longitude);
      //     this.gettingLocation = true;
      //   },
      //   err => {
      //     this.gettingLocation = false;
      //     this.errorStr = err.message;
      //   }
      // );
    }
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>

<style lang="scss">
#map-wrap {
  height: calc(100vh - 100px);
  max-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 50px;
  background-color: var(--dark);
}
.map {
  position: relative;
  z-index: 1000;
  overflow: hidden;
  height: 100%;
  width: auto !important;
  margin: 0 50px;
  margin-top: -150px;
  border-radius: 10px;
  @media only screen and (max-width: 500px) {
    margin: 0 20px;
    margin-top: -70px;
  }
}
.search-wrapper {
  position: absolute;
  left: 50px;
  top: 10px;
  height: 50px;
  z-index: 1000;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  display: flex;
  border-radius: var(--radius);
  overflow: hidden;
  .icon-wrapper {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    padding-left: 62px;
    padding-right: 12px;
    font-size: 14px;
    min-width: 260px;
  }
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
  float: none !important;
}
</style>