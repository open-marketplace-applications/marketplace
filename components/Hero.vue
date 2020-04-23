<template>
  <div class="hero">
    <img class="bg-image" :src="heroImageUrl">
    <div class="layer"></div>
    <div class="hello">
      <h2 class="welcome">{{ $t('welcome') }}</h2>
      <h1 class="title">{{ title }}</h1>
    </div>

    <LatestNews />
    
    <img src="~/assets/icons/rounded-edge.svg" class="rounded-edge" />
  </div>
</template>

<script>
import LatestNews from './LatestNews.vue'

export default {
  components: { LatestNews },
  data() {
    return {
      title: process.env.cityTitle,
      heroImageUrl: process.env.cityHeroImageUrl || require('~/assets/hero.png')
    }
  }
}
</script>

<style lang="scss">
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  .rounded-edge {
    position: absolute;
    bottom: -2px;
    right: -3px;
  }
  .hello {
    position: absolute;
    bottom: 70%;
    left: 0;
    color: var(--white);
    text-align: left;
    padding: 25px 50px;
    padding-top: 75px;
    max-width: 50%;
    height: auto;
    border-radius: 0 20px 20px 0;
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    z-index: 3;
    h1 {
      color: var(--dark);
      font-family: 'Open Sans';
      font-weight: 900;
      font-size: 64px;
    }
    h2 {
      color: var(--dark);
      font-family: 'Open Sans';
      font-weight: 300;
      font-size: 32px;
      padding-bottom: 0;
    }
    @media only screen and (max-width: 720px) {
      max-width: 80%;
    }
    @media only screen and (max-width: 600px) {
      padding: 15px 50px;
      padding-top: 45px;
      .title {
        font-size: 32px;
      }
      .animated-heading {
        top: 90%;
        left: 52%;
      }
      ul li {
        font-size: 18px;
      }
    }
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 100%;
    filter: blur(5px);
    @media only screen and (min-width: 2200px) {
      height: auto;
      width: 100%;
    }
  }
  .layer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.75;
    background: rgb(115, 252, 255);
    background: radial-gradient(
      circle,
      rgba(115, 252, 255, 0.9) 0%,
      rgba(115, 252, 255, 0.6) 100%
    );
  }
}
.hero {
  text-align: center;
  .sub-heading {
    margin-top: 0px;
    font-size: 2.5em;
  }
}

</style>
