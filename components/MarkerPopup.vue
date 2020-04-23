<template>
  <div>
      <h3>
          {{ entry.name }}
      </h3>
      <p v-if="entry.pening_hours">pening_hours: {{ entry.pening_hours }}</p>
      <p v-if="entry.phone">phone: {{ entry.phone }}</p>
      <p v-if="entry.website">website: <a :href="entry.website" target="_blank">{{ entry.website }}</a></p>
  </div>
</template>

<script>
export default {
  props: ['entry'],
}
</script>