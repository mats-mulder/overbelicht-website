<template>
  <div>

    <Logo></Logo>

    <div class="container-fluid" style="padding-top: 35vh" id="introduction">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-5">
          <h1>Wij leggen de basis voor jouw digitale toekomst</h1>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-5 p-0" style="overflow: hidden">
          <img src="/assets/light_purple_strokes.png">
        </div>
        <div class="col-5">
          <p class="large-p">Online is de nieuwe standaard. Maar hoe gaat jouw bedrijf mee in deze verandering? Met behulp van een slimme strategie, goed design en een sterke implementatie legt Overbelicht de basis voor jouw digitale toekomst.</p>
        </div>
      </div>
    </div>



    <div class="container-fluid" style="padding-top: 80vh" id="visie">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2">
          <h1>Denken, ontwerpen, bouwen</h1>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-md-6 offset-md-2">
          <p class="mid-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
        </div>
      </div>
      <div class="row" style="margin-top: 7vh">
        <div class="col-12 col-md-4 offset-md-2">
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

        <div class="col-12 col-md-6">
          <div id="animation"></div>
        </div>
      </div>
    </div>


    <section id="projects">
      <Project></Project>
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
  transition: {
    leave(el, done){
      let project = document.getElementById('project-2')
      let text_holder = project.getElementsByClassName('project-text-holder')[0]
      let image_holder = project.getElementsByClassName('project-image-holder')[0]
      const transition_timeline = gsap.timeline({
        onComplete: function (){
          done()
        }
      })
      transition_timeline.to('#spotlight',{opacity: 0, marginLeft: '10%', duration: 1},0)
      transition_timeline.to(text_holder,{opacity: '0', duration: 0.5},0)
      transition_timeline.to(image_holder,{left: '120%', opacity:0, duration: 1},0)
    },
    enter(el, done) {
      let full_image = el.getElementsByClassName('full-image')[0]
      full_image.style.marginLeft = '-10%'
      const transition_timeline = gsap.timeline({
        onComplete: function (){
          done()
        }
      })
      transition_timeline.to(full_image, {marginLeft: '0', opacity: 1, duration: 0.5});
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

  #projects{
    margin-top: 75vh;
    margin-bottom: 100vh;
  }

  .project h4{
    font-size: 2rem;
  }

  .project h1{
    font-size: 6rem;
    color: var(--yellow);
    line-height: 90%;
  }

  .project p{
    font-size: 1.1rem;
    color: white;
  }

  .btn-round{
    background-color: transparent;
    border: 3px solid var(--yellow);
    border-radius: 100vh;
    color: white;
    height: 75px;
    width: 75px;
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

  #project-image-1{
    opacity: 0;
    mix-blend-mode: screen;
  }

  #project-image-2{
    opacity: 0;
  }


  #spotlight-holder{
    position: fixed;
    height: 100vh;
    width: 40%;
    right: 0;
    overflow: hidden;
    z-index: 300;
    top:0;
    mix-blend-mode: soft-light;
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
    width: 50px;
    height: 50px;
    background-color: var(--yellow);
    border-radius: 100px;
  }

  #animation{
    margin: 100px;
    margin-top: -3vh;
  }


</style>
