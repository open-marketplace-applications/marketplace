<template>
  <el-badge
    :value="correct_tag.name"
    :type="correct_tag.type"
    class="tag"
  ></el-badge>
</template>

<script>
export default {
  props: ['tags'],
  computed: {
    correct_tag() {
      if (!this.tags) return { name: 'neu', type: 'danger' }
      if (this.tags[0].name === 'News') {
        if (!this.tags[1]) return ''
        if (this.tags[1].name === 'IF') {
          return { name: 'von der IOTA Foundation', type: 'primary' }
        } else if (this.tags[1].name === 'Ecosystem') {
          return { name: 'aus dem IOTA Ökosystem', type: 'success' }
        } else if (this.tags[1].name === 'einfachIOTA') {
          return { name: 'von einfachIOTA', type: 'default' }
        }
      }
      return ''
    }
  }
}
</script>

<style>
.tag .el-badge__content--primary {
  background-color: #22b1ab;
}
.tag .el-badge__content--success {
  background-color: #06e89d;
}
.tag .el-badge__content--default {
  background-color: var(--primary);
}
</style>