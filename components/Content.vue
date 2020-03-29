<template>
  <div class="content-wrapper">
    <div v-for="(item, index) in items" :key="index" class="content">
      <div class="container">
        <div v-bind:class="{ inverted: item.layout_inverted }" class="row">
          <div class="col center-center">
            <img :src="require(`../assets/icons/${item.icon}`)" alt class="iso-icon" />
          </div>
          <div class="col">
            <h2>{{ item.heading }}</h2>
            <p>{{ item.description }}</p>
            <div class="list">
              <div
                v-for="(listItem, i) in item.list"
                :key="i"
                class="list__item"
              >
                <img src="~/assets/icons/caret.svg" alt />
                <span>{{ listItem }}</span>
              </div>
            </div>
            <div
              v-bind:class="{ 'link-disabled': item.link.disabled }"
              class="link btn btn--primary"
            >
              <a :href="item.link.url" target="_blank">{{ item.link.text }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          layout_inverted: false,
          heading: 'News',
          description:
            '',
          icon: 'blog.svg',
          list: [
            'Stay up to date.',
            'Whats new in the city',
            'Shops can request news to the marketplace.'
          ],
          link: {
            text: 'Read more news',
            url: ''
          }
        },
        {
          layout_inverted: true,
          heading: 'Marketplace',
          description:
            '',
          icon: 'learn.svg',
          list: [

            'All shops in your city.',
            'Shopping in your local is easy with the marketplace.',
            'Instant delivery wihtin the local community.'
          ],
          link: {
            text: 'Discover the Marketplace',
            url: ''
          }
        },
        {
          layout_inverted: false,
          heading: 'Shop',
          description:
            '',
          icon: 'shop.svg',
          list: [
            'Get Donations from all over the world.',
            'Sell your products online for free.',
            'Discover the Shop and become a part of the Marketplace.'
          ],
          link: {
            text: 'Discover Shop',
            url: '/shop'
          }
        },
        {
          layout_inverted: true,
          heading: 'Local Chat',
          description:
            '',
          icon: 'community.svg',
          list: [
            'Online Chat for your Local Community.',
            'Or chat with your friends and family.',
            'Text, video or Group chat supported.'
          ],
          link: {
            text: 'Discover Community',
            url: 'https://community.einfachiota.de'
          }
        },
        {
          layout_inverted: false,
          heading: 'Donations',
          description:
            '',
          icon: 'verein.svg',
          list: [
            'Donate to your local community shops.',
            'A donation will be distributed to all shops',
            'Donators apear in the donator list'
          ],
          link: {
            text: 'Donate to Südtirol',
            url: ''
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.content {
  padding: 150px 0;
  @media only screen and (max-width: 1240px) {
    padding: 130px 50px;
  }
  @media only screen and (max-width: 900px) {
    padding: 100px 30px;
  }
  @media only screen and (max-width: 500px) {
    padding: 80px 20px;
  }
}
.container {
  width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 1240px) {
    width: 100%;
  }
}
.row {
  display: flex;
  margin: 0 -25px;
  &.inverted {
    flex-direction: row-reverse;
  }
  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
}
.col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 0 25px;
  &.center-center {
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    p,
    span {
      font-size: 14px;
    }
    .iso-icon {
      max-width: 80%;
      margin-bottom: 30px;
    }
  }
}

h2 {
  font-size: 64px;
  color: var(--dark);
  text-transform: uppercase;
  @media only screen and (max-width: 500px) {
    font-size: 42px;
  }
  @media only screen and (max-width: 330px) {
    font-size: 32px;
  }
}

.list {
  margin-bottom: 50px;
  &__item {
    display: flex;
    align-items: center;
    margin: 8px 0;
    img {
      margin-top: 1px;
      height: 16px;
      width: 20px;
      border-radius: 10px;
      margin-right: 8px;
    }
  }
}

.link {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 40px;
  padding: 0 30px;
  border-radius: 50px;
  font-weight: 900;
  font-size: 14px;
  background-color: var(--primary);
  a {
    color: var(--secondary);
    text-decoration: none;
  }
  &-disabled {
    color: currentColor;
    cursor: not-allowed;
    opacity: 0.5;
    text-decoration: none;
    a {
      cursor: not-allowed;
    }
  }

  @media only screen and (max-width: 1240px) {
    .content {
      .container {
        width: 100%;
        margin: 0 20px;
      }
    }
  }
}
</style>
