<template>
  <div>

    <div class="back-btn-container">
      <nuxt-link class="back-link" to="/">← Back</nuxt-link>
    </div>

    <section style="background-color: var(--light-purple)">
      <div class="container">

        <div class="row">
          <div class="col-12">
            <h3>{{ content.introduction['over_ons'].subtitle }}</h3>
            <h1>{{ content.introduction['over_ons'].title }}</h1>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12 col-md-9 col-lg-8 col-xl-7">
            <p class="mid-p">{{ content.introduction['over_ons'].content }}</p>
          </div>
        </div>

        <div class="row" style="padding-top: 10vh; padding-bottom: 10vh">
          <div class="col-12">
            <img class="img-fluid pre-load-image" :src="content.introduction.image">
          </div>
        </div>

        <div class="row">
          <div class="col-12 text-left text-md-right">
            <h3>{{ content.introduction.visie.subtitle }}</h3>
            <h1>{{ content.introduction.visie.title }}</h1>
          </div>
        </div>


        <div class="row justify-content-end mt-4">
          <div class="col-12 9 col-lg-8 col-xl-7 text-left text-md-right">
            <p class="mid-p">{{ content.introduction.visie.content }}</p>
          </div>
        </div>

      </div>

    </section>


    <section style="background-color: var(--dark-purple)" id="section-2">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>{{ content.services.subtitle }}</h3>
            <h1>{{ content.services.title }}</h1>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 col-md-7 col-lg-6 col-xl-6">
            <p class="mid-p">{{ content.services.content }}</p>
          </div>
          <div class="col-12 col-md-5 col-lg-5 col-xl-4 offset-lg-1 offset-xl-2">
            <img class="img-fluid" :src="content.services.image">
          </div>
        </div>
      </div>
    </section>

    <Contact :content="content.contact"></Contact>


  </div>
</template>

<script>
import Contact from "@/components/Contact";
export default {
  head() {
    return {
      title: "About - Overbelicht"
    }
  },
  components: {Contact},
  async asyncData ({ $content }) {
    const content = await $content('about').fetch()
    return {
      content
    }
  },
  transition: {
    appear: true,
    leave(el, done){
      const transition_timeline = gsap.timeline({
        onComplete: function (){
          done()
        }
      })
      transition_timeline.set('#page-transition',{left: '-100%'})
      transition_timeline.to('#page-transition',{left: 0, duration: 0.5},0)
    },
    enter(el, done){
      waitForLoad(done, '-100%')
    }
  },
}
</script>

<style scoped>

  body{
    background-color: white;
  }

  #section-2 h3{
    color: var(--light-purple);
  }

  #section-2 h1{
    color: var(--yellow);
  }

  #section-2 p{
    color: white;
  }

  .absolute-image{
    position: absolute;
  }

  #watwedoen_image{
    width: 30%;
    right: 10%;
    margin-top: -5%;
    max-width: 500px;
  }

  #us-image{
    width: 50%;
    right: 0;
    margin-top: -5%;
  }

  #vision-image{
    width: 25%;
    left: 10%;
    margin-top: -7%;
    max-width: 500px;
  }

  h3{
    color: var(--yellow);
  }

  h1{
    color: var(--dark-purple);
  }

  .container{
    padding-top: 20vh;
    padding-bottom: 20vh;
  }

  #contact-section{
    background-color: var(--light-purple);
  }

  #contact-logo-holder{
    background-color: var(--light-purple);
  }


  @media only screen and (max-width: 576px) {
    .absolute-image{
      width: 100% !important;
    }
  }

  @media only screen and (max-width: 767px) {
    .absolute-image{
      position: relative;
      margin-top: 0!important;
      right: 0!important;
      left: 0!important;
      width: 80% !important;
    }
    .back-btn-container{
      background-color: var(--green);
    }
  }

  @media only screen and (max-width: 991px) {
    #us-image{
      margin-top: -15%;
    }

    #vision-image{
      margin-top: -10%;
    }

    #watwedoen_image{
      margin-top: -15%;
    }

  }

  @media only screen and (max-width: 1199px) {

  }


</style>
