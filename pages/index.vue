<template>
  <div class="page">
    <Navigation />
    <Hero />
    <h2 class="headline">Der Online Marktplatz</h2>
    <MarketMap />
    <Content />
    <h2 class="headline">Jetzt online bestellen</h2>
    <OrderOptions />
    <br />
    <br />
    <br />
    <Socials />
    <Footer />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import MarketMap from '~/components/MarketMap.vue'
import Content from '~/components/Content.vue'
import Socials from '../components/Socials'
import Navigation from '~/components/Navigation.vue'
import OrderOptions from '~/components/OrderOptions.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { Navigation, Hero, MarketMap, Content, OrderOptions, Socials, Footer },
  data() {
    return {
      url: `${process.env.shopUrl}/en?refLink=${process.env.refAddress}`
    }
  }
}
</script>

<style lang="scss">
.page {
  overflow: hidden;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 30px;
  background-color: var(--light);
  border-radius: 50px;
  font-weight: 900;
  font-size: 14px;
  text-decoration: none;
  transition: var(--transition);
  img {
    margin-right: 8px;
  }
  &:hover {
    cursor: pointer;
  }
  &--primary {
    color: var(--white);
    background-color: var(--primary);
    &:hover {
      background-color: var(--primary_light);
    }
  }
}
.container {
  padding: 0;
}
.logo {
  height: 15vh;
  padding-bottom: 20px;
}
.title {
  display: block;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 1px;
  font-size: 3.5em;
}
.subtitle {
  font-weight: 300;
  color: var(--darker);
  word-spacing: 5px;
  padding-bottom: 15px;
}
.more {
  padding-top: 15px;
  font-size: 1.5em;
}
.headline {
  margin: 30px;
  margin-top: 100px;
  text-align: center;
}
</style>