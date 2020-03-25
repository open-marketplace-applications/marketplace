export const state = () => ({
    lat: 46.711456, 
    lng: 10.951586
  })
  
  export const mutations = {
    setLat (state, lat) {
      state.lat = lat
    },
    setLng (state, lng) {
        state.lng = lng
      }
  }