<template>
  <div :class="{ open: navOpen }" class="nav">
    <div class="nav__primary">
      <div class="logo">
        <nuxt-link to="/">
          <img src="~/assets/logo.svg" alt />
        </nuxt-link>
      </div>
      <div @click="navOpen = !navOpen" class="mobile-btn">
        <div class="mobile-btn__line"></div>
        <div class="mobile-btn__line"></div>
        <div class="mobile-btn__line"></div>
      </div>
      <div class="menu"></div>
    </div>
    <div class="nav__secondary">
      <div class="nav__meta">
        <img src="~/assets/icons/nav-edge.svg" alt class="nav-edge" />
        <div class="menu">
          <div class="menu__item active">
            <a href="/">Home</a>
          </div>
          <div class="menu__item">
            <a href="https://blog.einfachIOTA.de" target="_blank">Blog</a>
          </div>
          <div class="menu__item">
            <a href="https://shop.einfachIOTA.de" target="_blank">Shop</a>
          </div>
          <div class="menu__item">
            <a href="https://community.einfachIOTA.de" target="_blank"
              >Community</a
            >
          </div>
        </div>
        <div class="socials">
          <div class="socials__item">
            <a href="https://twitter.com/einfachIOTA" target="_blank">
              <img src="~/assets/icons/twitter_large.svg" alt />
            </a>
          </div>
          <div class="socials__item">
            <a href="https://discord.gg/WdfXseU" target="_blank">
              <img src="~/assets/icons/discord_large.svg" alt />
            </a>
          </div>
          <div class="socials__item">
            <a
              href="https://www.youtube.com/channel/UClEhfr5oh-bbH42XoXO4Pqw"
              target="_blank"
            >
              <img src="~/assets/icons/youtube_large.svg" alt />
            </a>
          </div>
        </div>
      </div>
      <div class="nav__user">
        <img src="~/assets/icons/nav-edge.svg" alt class="nav-edge" />
        <Advertisement />
      </div>
    </div>
  </div>
</template>

<script>
import Advertisement from './Advertisement'
export default {
  components: { Advertisement },
  data() {
    return {
      navOpen: false
    }
  }
}
</script>

<style lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100px;
  width: 100%;
  z-index: 1000;
  .logo {
    height: 70px;
    min-width: 70px;
    border-radius: 100%;
    padding: 0;
    margin: 15px;
  }
  .menu {
    display: flex;
    align-items: center;
    &__item {
      position: relative;
      display: flex;
      justify-content: center;
      background-color: transparent;
      border-radius: 10px;
      margin: 0 10px;
      padding: 15px 30px;
      transition: all 0.3s ease-in-out;
      .button-clip {
        height: 7px;
        width: 48px;
        position: absolute;
        bottom: -7px;
        transition: all 0.3s ease-in-out;
        &.top {
          bottom: auto;
          top: -7px;
          transform: rotate(180deg);
        }
      }
      a {
        color: black;
        font-size: 16px;
        font-weight: 900;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
      }
      &.active {
        background-color: var(--primary);
        a {
          color: var(--secondary);
        }
        .button-clip {
          bottom: 0;
          &.top {
            top: 0;
          }
        }
      }
      &:hover {
        background-color: var(--primary_light);
        a {
          filter: invert(100%);
          text-decoration: none;
        }
      }
    }
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    &__item {
      height: 30px;
      width: 30px;
      border-radius: 5px;
      background-color: var(--light);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 2.5px;
      a {
        max-height: 20px;
      }
      img {
        height: 20px;
        width: 20px;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.5);
        }
      }
    }
  }
  &__meta {
    position: relative;
    display: flex;
    background-color: transparent;
    height: 40px;
    background-color: var(--white);
    border-radius: 0 0 0 10px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    z-index: 10;
    padding-left: 5px;
    .nav-edge {
      position: absolute;
      top: -1px;
      left: -15px;
      height: 15px;
    }
    .menu__item {
      height: 28px;
      padding: 0 15px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary_0);
      margin: 0 3px;
      a {
        background-color: none;
        color: black;
        font-size: 12px;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  &__user {
    position: relative;
    height: 60px;
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--white);
    padding-left: 10px;
    border-radius: 0 0 0 25px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
    .nav-edge {
      position: absolute;
      top: 0;
      left: -29px;
      height: 30px;
    }
  }
  &__primary {
    display: flex;
    width: auto;
  }
  .mobile-btn {
    display: none;
    cursor: pointer;
  }
  &__secondary {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: auto;
  }
}

@media only screen and (max-width: 720px) {
  .nav {
    &__primary {
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100px;
      .mobile-btn {
        position: relative;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 20px;
        border-radius: 10px;
        background-color: var(--white);
        &__line {
          position: absolute;
          background-color: var(--dark);
          border-radius: 2px;
          height: 3px;
          width: 20px;
          transition: all 0.3s ease-in-out;
          &:nth-child(1) {
            top: 17px;
          }
          &:nth-child(2) {
            top: 24px;
            width: 16px;
          }
          &:nth-child(3) {
            bottom: 16px;
          }
        }
      }
      .menu {
        display: none;
      }
    }
    &__secondary {
      height: calc(100vh - 100px);
      width: 100%;
      display: none;
      .nav-edge {
        display: none;
      }
    }
    &__meta {
      background-color: transparent;
      box-shadow: none;
      flex-direction: column;
      width: 100%;
      height: auto;
      margin-top: 20px;
      display: none;
      .menu {
        flex-direction: column;
        margin: 0 20px;
        &__item {
          width: 100%;
          background: white;
          border-radius: 10px;
          height: 50px;
          margin: 0 0 20px;
          box-sizing: border-box;
          a {
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
          }
        }
      }
    }
    &__user {
      display: none;
    }
    &.open {
      height: 100vh;
      background-color: var(--light);
      .nav__primary {
        .mobile-btn {
          &__line {
            &:nth-child(1) {
              top: 24px;
              transform: rotate(45deg);
            }
            &:nth-child(2) {
              opacity: 0.5;
              width: 3px;
            }
            &:nth-child(3) {
              transform: rotate(-45deg);
              bottom: 23px;
            }
          }
        }
      }
      .nav__meta {
        display: flex;
      }
      .nav__secondary {
        display: flex;
      }
    }
  }
}
</style>
