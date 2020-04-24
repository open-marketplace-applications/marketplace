<template>
  <div class="masthead" :style="`background:${bkcolor}`">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    bkcolor: {
      type: String,
      default: '#3b60ed'
    },
    title: {
      type: String,
      default: 'Shop'
    },
    img: {
      type: String,
      default: 'banner-ppl'
    }
  }
};
</script>

<style scoped>
h1 {
  color: white;
  position: relative;
  z-index: 100;
  font-size: 60px;
  padding: 8px 80px;
}

.bk {
  position: absolute;
  top: 0;
  left: 0;
}

.ppl-banner {
  position: absolute;
  z-index: 10;
  right: 100px;
}

.masthead {
  width: 100%;
  height: 100px;
  color: white;
  position: relative;
  overflow: hidden;
  margin: 10px 0;
}
</style>