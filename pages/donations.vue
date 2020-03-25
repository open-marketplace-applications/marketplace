<template>
  <div class="donations">
    <Navigation />
    <div class="content">
      <div class="container">
        <h1 class="heading"><i18n path="donations.title"></i18n></h1>
        <div class="divider"></div>
        <h2><i18n path="donations.subtitle"></i18n></h2>
        <p><i18n path="donations.description"></i18n></p>
        <br />
        <no-ssr>
          <iota-payment class="iota-pay"><i18n path="donations.button_text"></i18n></iota-payment>
        </no-ssr>
        <p><i18n path="donations.disclaimer"></i18n></p>
        <br />
        <br />
        <h2>Leaderboard</h2>
        <DonationLeaderboard />
      </div>
    </div>
  </div>
</template>

<script>
import DonationLeaderboard from "../components/DonationLeaderboard";
import Navigation from '~/components/Navigation.vue'

export default {
  components: { Navigation, DonationLeaderboard },
  data() {
    return {
      navOpen: false
    }
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: var(--primary);
}
.donations {
  margin-top: 150px;
}
.iota-pay {
  margin-top: 20px;
  button {
    font-family: "Open Sans" !important;
    font-weight: bold !important;
    text-transform: uppercase !important;
    letter-spacing: 0.1em !important;
    border-radius: 10px !important ;
    padding: 15px 30px !important;
    transition: all 200ms ease-in-out !important;
    border: none !important;
    background-color: var(--primary) !important;
    color: var(--secondary) !important;
    &:hover {
      color: var(--white) !important;
      background-color: var(--primary-darken) !important;
      cursor: pointer;
    }
  }
}
</style>