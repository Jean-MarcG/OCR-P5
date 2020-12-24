<template>
  <footer class="footer">
          <p>{{ footerText }}</p>
  </footer>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      footerText: 'JMG 2020 - Générateur de citations Vue.js -'
    }
  }
}
</script>

<style scoped>
</style>