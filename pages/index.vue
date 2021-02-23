<template>
  <div>

    <Logo></Logo>

    <nuxt-link id="about-link" to="/about">about</nuxt-link>

    <!-- INTRODUCTION -->
    <div class="container-fluid" style="padding-top: 35vh" id="introduction">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-8 offset-lg-3 col-xl-6 offset-xl-5">
          <h1>{{ content.introduction.title }}</h1>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-md-8 col-lg-6 offset-lg-3 col-xl-5 offset-xl-5">
          <p class="large-p">{{ content.introduction.introduction }}</p>
        </div>
      </div>
      <img class="img-fluid pre-load-image" :src="content.introduction.image" id="intro-strokes">
    </div>


    <!-- VISIE -->
    <div class="container-fluid" style="padding-top: 60vh" id="visie">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-1 offset-xl-1">
          <h1>{{ content.visie.title }}</h1>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-md-7 col-xl-6 offset-md-1 offset-xl-1">
          <p class="mid-p">{{ content.visie.introduction }}</p>
        </div>
      </div>
      <div class="row" style="margin-top: 4vh">
        <div class="col-12 col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-xl-1">
          <div class="row" >
            <div class="col-12 mt-2" style="display: flex" v-for="item in content.visie.subtext">
              <div style="flex: 8%">
                <div class="round-icon"></div>
              </div>
              <div style="flex: 92%">
                <h4 class="mt-2">{{ item.title + ': ' }}<span style="font-weight: 500">{{ item.slogan }}</span></h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-10 offset-sm-1 col-md-5 col-lg-4 offset-md-1">
          <div id="animation"></div>
        </div>
      </div>
    </div>


    <!-- PROJECTS -->
    <section id="projects">
      <Project v-if="project.active === true" v-for="project in projects" :project="project"></Project>
    </section>


    <!-- CONTACT -->
    <Contact :content="content.contact"></Contact>


  </div>
</template>

<script>


import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Logo from "@/components/Logo";
export default {
  components: {Logo, Contact, Project},
  head() {
    return {
      title: "Home - Overbelicht"
    }
  },
  mounted() {
    initLottie()
    window.addEventListener("resize", function (){
      if(checkViewport() === false){
        toggleAnimation(['project'],'disable')
      }
      else{
        toggleAnimation(['project'],'enable')
      }
    });
  },
  async asyncData ({ $content }) {
    const projects = await $content('projects').sortBy('index').fetch()
    const content = await $content('home').fetch()
    return {
      projects, content
    }
  },
  transition: {
    appear: true,
    leave(el, done){
      const transition_timeline = gsap.timeline({
        onComplete: function (){
          killAnimation(['project', 'background'])
          done()
        }
      })
      transition_timeline.set('#page-transition',{left: '100%'})
      transition_timeline.to('#page-transition',{left: 0, duration: 0.5},0)
    },
    enter(el, done){
      initHomeAnimations()
      document.getElementsByTagName("BODY")[0].style.backgroundColor = 'white'
      waitForLoad(done, '100%')
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

  h2{
    color: var(--dark-purple);
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
    width: 4vh;
    height: 4vh;
    margin-top: 0.5vh;
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
    font-weight: bold;
    color: var(--dark-purple);
    font-size: 2.4vh;
    z-index: 501;
  }

  a{
    color: var(--dark-purple);
  }

  a:hover{
    color: var(--dark-purple);
  }

  #animation{
    margin-top: -10%;
    max-width: 600px;

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
