<template>
  <a
    :href="$t('advertisement.shop_url') + refLink"
    target="_blank"
    class="el-button"
  >
    <img src="~/assets/icons/onsale.svg" />
    {{ $t('advertisement.button') }}
  </a>
</template>

<script>
export default {
  data() {
    return {
      refLink: `?refLink=${process.env.refAddress}`
    }
  }
}
</script>

<style lang="scss">
@keyframes shake-animation {
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(5px, 0);
  }
  3.57143% {
    transform: translate(0, 0);
  }
  5.35714% {
    transform: translate(5px, 0);
  }
  7.14286% {
    transform: translate(0, 0);
  }
  8.92857% {
    transform: translate(5px, 0);
  }
  10.71429% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
