<template>
    <div class="vue-bg">
      <Navbar></Navbar>
        <Form :generate-citations="generateCitations" />
        <Framework></Framework>
      <Footer></Footer>
    </div>
</template>

<script>

    import uniqid from 'uniqid';
    import {getRandomPart} from "./services/utils";
    import Navbar  from "./components/Navbar";
    import Form from "./components/Form";
    import Framework from "./components/Framework";
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        data() {
            return {
                generators: {
                  generator1: {
                      part1: ["La seule façon", "La meilleure des façons", "Le meilleur moyen"],
                      part2: ["pour réussir,", "d'être heureux,", "de vivre,"],
                      part3: ["c'est d'aimer ce que vous faites", "ne dépend que de vous", "c'est de s'obstiner"],
                  },
                  generator2: {
                      part1: ["Au printemps,", "j’aime bien regarder du haut des remparts au lever du soleil..., ", "c'est pas faux !"],
                      part2: ["Dans le Languedoc, ils m'appellent Provençal ", "le vocabulaire et les épinards, ", "y’a une belle vue !"],
                      part3: ["Dans la vie, j'avais deux ennemis : ", "par exemple, Sire, Léodagan et moi on fait semblant de vous prendre en otage \", \"vous pouvez être sûr que le Graal, ", "mais c'est moi qui m'suis gouré en disant mon nom."],
                  }
                },
                citations: []
            }
        },
        components: {
          Navbar,
            Form,
          Framework,
          Footer
        },
        methods: {
            generateCitations(nbCitations, category) {
                this.citations = [];
                for (let i = 0; i < parseInt(nbCitations); i++) {
                    const citation = {
                        id: uniqid(),
                        value: `${getRandomPart(this.generators, category, 'part1')} ${getRandomPart(this.generators, category, 'part2')} ${getRandomPart(this.generators, category, 'part3')}`
                    };
                    this.citations.push(citation);
                    this.showAlert();
                }
            },
          showAlert() {
            // Use sweetalert2
           /* const htmlCitation = `<ul>
                ${this.citations.map((citation) => `<li>${citation.value}</li>`)}
            </ul>`*/
            const htmlCitation2 = '<ul>' +
                this.citations.map((citation) => '<li>' + citation.value + '</li>') +
            '</ul>';
            this.$swal({
              title: '<strong><u>Citations</u></strong>',
              html: htmlCitation2,
              showCloseButton: true,
              showCancelButton: true,
              focusConfirm: false,
              confirmButtonText:
                  '<i class="fa fa-thumbs-up"></i>Rejouer',
              confirmButtonAriaLabel: 'Thumbs up, great!',
              cancelButtonText:
                  '<i class="fa fa-thumbs-down"></i>Terminer',
              cancelButtonAriaLabel: 'Thumbs down'
            });
          }
        },
    };
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Roboto&display=swap&family=Noto+Sans+JP:wght@700&display=swap');
@import "../node_modules/scss/style.scss";
</style>
