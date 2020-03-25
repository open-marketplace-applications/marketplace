<template>
  <div id="home">
    <Navigation />
    <div class="content-wrapper">
      <div class="content">
        <div class="container">
          <h1 class="heading">{{ $t('imprint.heading') }}</h1>

          <h2 class="subheading">{{ $t('imprint.subheading') }}</h2>
          <p>Sebastian Heußer</p>
          <p>Collingstraße 104</p>
          <p>66424 Homburg</p>

          <h3>{{ $t('imprint.contact') }}</h3>
          <p>E-Mail: support@einfachiota.de</p>
          <h3>{{ $t('imprint.subheading2') }}</h3>

          <p>Sebastian Heußer</p>
          <p>Collingstraße 104</p>
          <p>66424 Homburg</p>

          <h3>{{ $t('imprint.subheading') }}</h3>
          <p>
            {{ $t('imprint.text1') }}
          </p>
          <p>
            {{ $t('imprint.text2') }}
          </p>
          <p>
            {{ $t('imprint.text3') }}
          </p>
          Icons made by
          <a
            href="https://www.flaticon.com/authors/darius-dan"
            title="Darius Dan"
            >Darius Dan</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
          is licensed by
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            >CC 3.0 BY</a
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer'

export default {
  components: { Navigation, Footer }
}
</script>

<style lang="scss">
.btn-group {
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  .btn {
    flex-grow: 1;
    margin: 0 15px;
  }
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
  &--secondary {
    color: var(--dark);
    background-color: var(--light);
    &:hover {
      background-color: var(--light_50);
    }
  }
}

.el-main {
  padding: 0px !important;
}
.subtitle {
  font-weight: 900;
  opacity: 0.5;
}
#home {
  text-align: left;
}
h2 {
  font-weight: 900;
}
p {
  font-size: 16px;
  font-weight: 200;
  line-height: 1.5;
  max-width: 600px;
  margin: 15px auto 30px;
}
.supporter-link {
  background-color: var(--primary);
  text-decoration: none;
  transition: var(--transition);
  margin: 0 5px;
  border-radius: 5px;
  padding: 2px 8px;
  color: var(--white);
  &:hover {
    background-color: var(--primary-darken);
    cursor: pointer;
  }
}
.info-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.column {
  box-sizing: border-box;
  &--footer {
    background-color: var(--dark);
    height: 15vh;
    width: 100%;
    flex-grow: 1;
  }
}
.headline-wrapper {
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

// S C R O L L B A R   S T Y L E S
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: var(--light);
}
::-webkit-scrollbar-thumb {
  background-color: var(--primary_50);
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--primary);
}

@media only screen and (max-width: 1440px) {
  h1 {
    font-size: 32px;
  }
  .magazin-cover {
    .supporters {
      padding: 200px 100px;
    }
    .sales-counter {
      z-index: 10;
    }
  }
}

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
  font-family: 'Open Sans';
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
</style>
