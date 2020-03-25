<template>
  <div class="socials section">
    <h3>Follow us</h3>
    <div class="socials-list">
      <a href="https://twitter.com/einfachIOTA" target="_blank">
        <img src="~/assets/icons/twitter_large.svg" alt class="social" />
      </a>
      <a href="https://discord.gg/WdfXseU" target="_blank">
        <img src="~/assets/icons/discord_large.svg" alt class="social" />
      </a>
      <a
        href="https://www.youtube.com/channel/UClEhfr5oh-bbH42XoXO4Pqw"
        target="_blank"
      >
        <img src="~/assets/icons/youtube_large.svg" alt class="social" />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.socials.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background-color: var(--light);
  @media only screen and (max-width: 520px) {
    padding: 50px 0;
  }
  h3 {
    color: var(--dark);
    font-family: 'Open Sans';
    font-weight: 900;
    font-size: 42px;
    margin-bottom: 20px;
    text-transform: uppercase;
    @media only screen and (max-width: 520px) {
      font-size: 32px;
    }
  }
  p {
    color: var(--dark);
  }
  .socials-list {
    display: flex;
    justify-content: center;
    .social {
      margin: 0 25px;
      @media only screen and (max-width: 520px) {
        margin: 0 20px;
        width: 100px;
      }
      @media only screen and (max-width: 450px) {
        margin: 0 15px;
        width: 80px;
      }
      @media only screen and (max-width: 350px) {
        margin: 0 10px;
        width: 60px;
      }
    }
  }
}
</style>
