<template>
  <div class="kiosk">
    <Hero />
    <LatestNews class="news" />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import LatestNews from '../components/LatestNews'
export default {
  components: { Hero, LatestNews },
  data() {
    return {
      url: `${process.env.shopUrl}/en?refLink=${process.env.refAddress}`
    }
  }
}
</script>

<style lang="scss">
.news {
    position: absolute;
    top: 20%;
    background-color: var(--light_50);
    padding: 60px;
    margin: 0 auto;
    width: 100%;
}
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
</style>