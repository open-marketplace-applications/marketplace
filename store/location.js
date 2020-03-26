export const state = () => ({
    lat: process.env.cityLatitude, 
    lng: process.env.cityLongitude
  })
  
  export const mutations = {
    setLat (state, lat) {
      state.lat = lat
    },
    setLng (state, lng) {
        state.lng = lng
      }
  }