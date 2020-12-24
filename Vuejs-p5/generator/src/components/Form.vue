<template>
  <section class="vue-background">
    <div class="container flex">
      <form
          name="form"
          @submit="submit"
        >
        <div class="card">
          <h2 class="uppercase">Type de citations :</h2>
                <div class="flex">
                  <label for="type1">
                    <input type="radio" name="categorie" value="generator1" id="type1" checked>
                    <span>Citations de philosophie</span>
                  </label>
                  <label for="type2">
                    <input type="radio" name="categorie" value="generator2" id="type2" checked>
                    <span>Citations classique</span>
                  </label>
                </div>
          <h2 class="uppercase">Nombre de citations :</h2>
            <div class="flex">
              <label for="1">
                <input type="radio" name="nbCitations" value="1" id="1" checked>
                <span>1</span>
              </label>
              <label for="2">
                <input type="radio" name="nbCitations" value="2" id="2" checked>
                <span>2</span>
              </label>
              <label for="3">
                <input type="radio" name="nbCitations" value="3" id="3" checked>
                <span>3</span>
              </label>
              <label for="4">
                <input type="radio" name="nbCitations" value="4" id="4" checked>
                <span>4</span>
              </label>
              <label for="5">
                <input type="radio" name="nbCitations" value="5" id="5" checked>
                <span>5</span>
              </label>
            </div>
          </div>
          <div class="buttonBox buttonBox__vue">
            <button id="generate">
              Générer
            </button>
        </div>
          <!-- <button id="generate">Générer</button> -->
      </form>
    </div>  
  </section>
</template>

<script>
    export default {
        name: "Form",
        props : {
            generateCitations: Function
        },
        methods: {
            submit(e){
                e.preventDefault();
                const category = e.target.categorie.value;
                const nbCitations = e.target.nbCitations.value;
                this.generateCitations(nbCitations, category);
            },
        }
    };
</script>

<style scoped lang="scss">
@import "../../../../scss/style.scss";

</style>
