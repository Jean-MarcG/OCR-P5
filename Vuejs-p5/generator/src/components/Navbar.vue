<template>
  <navbar>
    <div class="navbar navbar--vue">
        <div class="container container__mobile">
          <div class="navbar__inner flex">
            <h1 class="vue-color"> {{ title }}</h1>
            <nav>
                <ul>
                    <li class="navbar__link--vanilla"><a href="http://ocr-p5-vanillajs.folio-jmg.fr/">VanillaJS</a></li>
                    <li class="navbar__link--react"><a href="http://ocr-p5-react.folio-jmg.fr/">React</a></li>
                </ul>
            </nav>
          </div>
        </div>
    </div>
  </navbar>
</template>

<script>
export default {
name: "navbar.vue",
  data () {
  return {
    title: 'Générateur de citations'
  }
  }
}
</script>

<style scoped>

</style>