<template>
  <div>

    <div class="full-image-holder">
      <div class="back-btn-container">
        <nuxt-link class="back-link" to="/">← Back</nuxt-link>
      </div>
      <img class="full-image pre-load-image" :src="project.image">
    </div>

    <div class="container project-introduction">
      <div class="row">
        <div class="col-12 col-md-11 col-lg-10 col-xl-9">
          <h4><span v-for="(label, index) in project.services" :class="'service-'+label.toLowerCase()">{{ label }}<span v-if="index < project.services.length-1"> + </span></span></h4>
          <h1>{{ project.title }}</h1>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-md-10 col-lg-9 col-xl-8">
          <p class="mid-p">{{ project.introduction }}</p>
          <div class="row mb-3" v-for="(item, index) in project.info" :class="{'mt-5': index === 0}">

            <div class="col-12 col-md-3" >
              <h5 style="margin-bottom: 0; line-height: unset">{{ item.title }}</h5>
            </div>
            <div class="col-12 col-md-9" v-html="item.content">

            </div>

          </div>
        </div>
      </div>
    </div>

    <div v-for="section in project.content">

      <!-- FULL IMAGE-->
      <div class="container-fluid p-0" v-if="section.template === 'project-full-image'">
        <div v-if="section['width_or_height'] === true" class="project-full-image-holder">
          <img class="img-fluid project-full-image" :src="section.image">
        </div>
        <img v-if="section['width_or_height'] === false" class="img-fluid project-full-image-width" :src="section.image">
      </div>

      <!-- IMAGE RIGHT -->
      <div class="container-fluid" v-if="section.template === 'project-image-right'" :style="{backgroundColor: section.colors.background}">
        <div class="row">
          <div class="col-12 col-md-10 offset-md-1 col-lg-4 col-xl-4 offset-xl-2">
            <h3 :style="{color: section.colors.title}">{{ section.title }}</h3>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 col-md-10 offset-md-1 col-lg-4 col-xl-4 offset-xl-2">
            <div class="text-color-container" v-html="section.description" :style="{color: section.colors.text}"></div>
          </div>
          <div v-if="section.image_to_border === true" class="col-12 col-md-10 col-lg-6 offset-md-1 col-xl-5 p-0 mt-5 mt-lg-0">
            <img class="img-fluid" :src="section.image">
          </div>
          <div v-if="section.image_to_border === false" class="col-12 col-md-10 col-lg-5 offset-md-1 col-xl-4 mt-5 mt-lg-0">
            <img class="img-fluid" :src="section.image">
          </div>
        </div>
      </div>

      <!--High Image-->

      <div class="container-fluid high-image-container" style="padding-top: 0" v-if="section.template === 'project-high-image'">
        <div class="row high-image-background"  :style="{backgroundColor: section.colors.background}">
          <div class="col-12 col-md-10 offset-md-1 col-lg-3 offset-xl-2">
            <h3 :style="{color: section.colors.title}">{{ section.title }}</h3>
            <div :style="{color: section.colors.text}" class="mt-5 text-color-container" v-html="section.description"></div>
          </div>
        </div>

        <div class="row" style="padding-top: 15vh">
          <div class="col-12 col-md-10 offset-md-1 col-lg-3 offset-xl-2">
            <h3 :style="{color: section.colors.title}">{{ section.title }}</h3>
            <div :style="{color: section.colors.text}" class="mt-5 text-color-container" v-html="section.description"></div>
          </div>
          <div class="col-12 col-md-10 offset-md-1 col-lg-6 col-xl-5 mt-5 mt-lg-0">
            <img class="img-fluid high-image" :src="section.image">
          </div>
        </div>
      </div>

      <!-- QUOTE -->
      <div v-if="section.template === 'project-quote'" :style="{backgroundColor: section.colors.background}">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-10 col-lg-9 col-xl-8">
              <h5 :style="{color: section.colors.author}">{{ section.author }}</h5>
              <h3 class="mt-4" :style="{color: section.colors.quote}">{{ section.quote }}</h3>
            </div>
          </div>
        </div>
      </div>


      <!-- IMAGE BELOW-->
      <div v-if="section.template === 'project-image-below'" :style="{backgroundColor: section.colors.background}">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-5 col-xl-4" v-if="section.left_or_right === false">
              <h3 :style="{color: section.colors.title}">{{ section.title }}</h3>
              <div :style="{color: section.colors.text}" class="mt-5 text-color-container" v-html="section.description"></div>
            </div>
            <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 offset-sm-4 offset-md-6 offset-lg-7 offset-xl-8 text-left text-sm-right" v-if="section.left_or_right === true">
              <h3 :style="{color: section.colors.title}">{{ section.title }}</h3>
              <div :style="{color: section.colors.text}" class="mt-5 text-color-container" v-html="section.description"></div>
            </div>
          </div>
          <img v-if="section['image_full_width'] === false" class="img-fluid mt-5" :src="section.image">
        </div>
        <img style="width: 100%" v-if="section['image_full_width'] === true" class="img-fluid" :src="section.image">
      </div>

      <!-- WEBSITE LINK -->
      <div v-if="section.template === 'project-website-link'" :style="{backgroundColor: section.colors.background}">
        <div class="container">
          <div class="row">
            <div class="col-12" >
              <h3 :style="{color: section.colors.text}" style="float: left">{{ section.title }}</h3>
              <div style="float: left">
                <div style="float: left" :style="{backgroundColor: section.colors.dot}" class="small-round"></div>
                <h3 style="float: left" ><a :style="{color: section.colors.text}" target="_blank" :href="'http://'+section.link">{{ section.link }}</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.project.title + " - Overbelicht"
    }
  },
  mounted() {
    /*
    highHeight(true)
    window.addEventListener("resize", function (){
      highHeight(false)
    });

     */
    document.getElementsByClassName('text-color-container').forEach(function (el){
      el.getElementsByTagName('p').forEach(function (text){
        text.style.color = el.style.color
      })
    })
  },
  async asyncData ({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
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
      document.getElementsByTagName("BODY")[0].style.backgroundColor = 'white'
      waitForLoad(done, '-100%')
    }
  }
}
</script>

<style scoped>

h1{
  color: var(--dark-purple);
}

h5{
  color: var(--dark-purple);

}

p{
  color: var(--dark-purple);
}

.back-btn-container{
  background-color: white;
}

.back-link{
  color: var(--dark-purple);
  font-weight: bold;
}

.full-image-holder{
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background-color: var(--dark-purple);
}

.full-image{
  min-width: 100%;
  height: 100vh;
  object-fit: cover;
}

.container{
  padding-top: 15vh;
  padding-bottom: 15vh;
}


.container-fluid{
  padding-top: 15vh;
  padding-bottom: 15vh;
}

.project-full-image-holder{
  height: 100vh;
  overflow: hidden;
}

.project-full-image{
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-full-image-width{
  width: 100%;
}

.high-image-background{
  position: absolute;
  padding-top: 15vh;
  padding-bottom: 15vh;
  width: 100%;
}

.small-round{
  height: 3vh;
  width: 3vh;
  border-radius: 6vh;
  background-color: var(--yellow);
  margin-left: 1vh;
  margin-right: 1vh;
  margin-top: 0.5vh;
}



.high-image{

}

@media only screen and (max-width: 576px) {

}

@media only screen and (max-width: 767px) {

}

@media only screen and (max-width: 991px) {
  .high-image{
    position: relative;
  }
  .high-image-container{
    margin-bottom: 0!important;
  }
}

@media only screen and (max-width: 1199px) {

}

</style>
