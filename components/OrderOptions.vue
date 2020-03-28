<template>
  <div class="order-options">
      <nuxt-link class="order-options--link" to="/shopping-list">Zum einfachen Einkaufszettel</nuxt-link>
      <nuxt-link class="order-options--link" to="/search">Nach Laden suchen</nuxt-link>
      <nuxt-link class="order-options--link" to="/shops">Alle Läden erkunden</nuxt-link>
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
        width: 30%;
        margin: 20px;
        color: var(--black);
    }
}
</style>