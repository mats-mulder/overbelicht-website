<template>
  <div>

    <Logo></Logo>

    <nuxt-link id="about-link" to="/about">about</nuxt-link>

    <div class="container-fluid" style="padding-top: 35vh" id="introduction">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-8 offset-lg-3 col-xl-6 offset-xl-5">
          <h1>Wij leggen de basis voor jouw digitale toekomst</h1>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-md-8 col-lg-6 offset-lg-3 col-xl-5 offset-xl-5">
          <p class="large-p">Online is de nieuwe standaard. Maar hoe gaat jouw bedrijf mee in deze verandering? Met behulp van een slimme strategie, goed design en een sterke implementatie legt Overbelicht de basis voor jouw digitale toekomst.</p>
        </div>
      </div>
      <img class="img-fluid" src="/assets/light_purple_strokes.png" id="intro-strokes">
    </div>



    <div class="container-fluid" style="padding-top: 60vh" id="visie">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-1 offset-xl-2">
          <h1>Denken, ontwerpen, bouwen</h1>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-md-7 col-xl-5 offset-md-1 offset-xl-2">
          <p class="mid-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
        </div>
      </div>
      <div class="row" style="margin-top: 7vh">
        <div class="col-12 col-md-5 col-lg-5 col-xl-4 offset-md-1 offset-xl-2">
          <div class="row" >
            <div class="col-12" style="display: flex">
              <div style="flex: 15%">
                <div class="round-icon"></div>
              </div>
              <div style="flex: 85%">
                <h3 class="mt-2">Denken</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              </div>
            </div>

          <div class="col-12 mt-2" style="display: flex">
            <div style="flex: 15%">
              <div class="round-icon"></div>
            </div>
            <div style="flex: 85%">
              <h3 class="mt-2">Ontwerpen</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
          </div>

          <div class="col-12 mt-2" style="display: flex">
            <div style="flex: 15%">
              <div class="round-icon"></div>
            </div>
            <div style="flex: 85%">
              <h3 class="mt-2">Bouwen</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
          </div>
        </div>
        </div>

        <div class="col-12 col-sm-10 offset-sm-1 col-md-5 col-lg-4 offset-md-1">
          <div id="animation"></div>
        </div>
      </div>
    </div>


    <section id="projects">
      <Project v-for="project in projects" :project="project"></Project>
    </section>

    <Contact></Contact>

  </div>
</template>

<script>


import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Logo from "@/components/Logo";
export default {
  components: {Logo, Contact, Project},
  mounted() {
    document.addEventListener('DOMContentLoaded', (event) => {
        initGsap()
        initLottie()
      }
    )
  },
  async asyncData ({ $content }) {
    const projects = await $content('projects').sortBy('index').fetch()

    return {
      projects
    }
  },
  transition: {
    leave(el, done){
      const transition_timeline = gsap.timeline({
        onComplete: function (){
          done()
        }
      })
      transition_timeline.set('#page-transition',{left: '100%'})
      transition_timeline.to('#page-transition',{left: 0, duration: 0.5},0)
    },
    enter(el, done){
      const transition_timeline = gsap.timeline({
        onComplete: function (){
          initGsap()
          initLottie()
          done()
        }
      })
      transition_timeline.to('#page-transition',{left: '100%', duration: 0.5},0)
    }
  }
}
</script>

<style>

  h1{
    color: var(--dark-purple);
  }

  p{
    color: var(--dark-purple);
  }

  body{
    background-color: white;
  }

  h4{
    color: var(--dark-purple);
  }

  h3{
    color: var(--dark-purple);
  }

  #introduction-section{
    height: 100vh;
  }

  #slogan-section{
    padding-top: 30vh;
    padding-bottom: 30vh;
  }

  .btn-round{
    background-color: transparent;
    border: 3px solid var(--yellow);
    border-radius: 100vh;
    color: white;
    height: 7vh;
    width: 7vh;
    font-size: 1.5rem;
    transition: 200ms;
  }

  .btn-round:hover{
    transform: scale(0.95);
    background-color: var(--yellow);
    color: var(--dark-purple);
  }

  .project-holder{
    position: absolute;
    width: 50%;
    left: 50%;
    height: 100vh;
    margin-top: -25vh;
    overflow: hidden;

  }

  .project-image-container{
    height: 80vh;
    width: 150%;
    margin-top:5vh;
    background-size: cover;
    overflow: hidden;
    position: relative;
    z-index: 200;
    background-image: url("/images/eb_1.jpg");
    border-radius: 20px 0 0 20px;
  }

  .project-image{
    position: absolute;
    height: 100%;
  }


  #spotlight-holder{
    position: fixed;
    height: 100vh;
    width: 40%;
    right: 0;
    overflow: hidden;
    z-index: 300;
    top:0;
    mix-blend-mode: overlay;
  }

  #spotlight {
    position: absolute;
    top: -10%;
    height: 120vh;
    margin-left: 10%;
    width: 120vh;
    background-color: var(--light-purple);
    border-radius: 180vh;
    opacity: 0;
  }

  .round-icon{
    width: 5vh;
    height: 5vh;
    background-color: var(--yellow);
    border-radius: 100px;
  }


  #intro-strokes{
    position: absolute;
    left: 0;
    margin-top: -15vh;
    width: 40%;
  }

  #about-link{
    position: fixed;
    top: 0;
    right: 0;
    margin: 2vh;
    font-family: Gilroy;
    color: var(--dark-purple);
    font-size: 2.4vh;
    z-index: 501;
  }


  @media only screen and (max-width: 576px) {

  }

  @media only screen and (max-width: 767px) {
    #animation{
      margin-top: 1.5rem;
    }
  }

  @media only screen and (max-width: 991px) {
    #intro-strokes{
      position: relative;
      margin-top: 0;
      width: 100% !important;
    }
  }

  @media only screen and (max-width: 1199px) {
    #intro-strokes{
     width: 25%;
    }
  }

</style>
