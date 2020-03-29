<template>
  <div class="order-options">
      <nuxt-link class="order-options--link btn btn--primary" to="/shopping-list">Zum einfachen Einkaufszettel</nuxt-link>
      <nuxt-link class="order-options--link btn btn--primary" to="/search">Nach Laden suchen</nuxt-link>
      <nuxt-link class="order-options--link btn btn--primary" to="/shops">Alle Läden erkunden</nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.order-options {
    width: 100%;
    text-align: center;
    &--link {
        width: 300px;
        margin: 20px auto;
        color: var(--black);
    }
}
</style>