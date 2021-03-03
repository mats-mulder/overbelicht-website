<template>
    <div class="container-fluid p-0 project" style="margin-top: 45vh; margin-bottom: 45vh">

      <div class="project-image-holder">
        <img class="project-image" :src="project.image">
      </div>


      <div class="col-12 offset-md-1 col-md-8 col-lg-7 col-xl-4 project-text-holder">
        <h4><span v-for="(label, index) in project.services" :class="'service-'+label.toLowerCase()">{{ label }}<span v-if="index < project.services.length-1"> + </span></span></h4>
        <h1 class="mt-3">{{ project.title }}</h1>
        <div class="mobile-project-image-holder">
          <img class="mobile-project-image mt-4" :src="project.image">
        </div>
        <p class="mt-4 mid-p">{{ project.introduction }}</p>
        <NuxtLink :to="project.path"><button class="btn-round mt-3" onmouseleave="arrowEffectOut(this)" onmouseenter="arrowEffectIn(this)"><img class="img-fluid btn-arrow" src="/assets/arrow_right.png"><img class="img-fluid btn-arrow btn-purple" src="/assets/arrow_right_purple.png"></button></NuxtLink>
      </div>
    </div>
</template>

<script>
export default {
  name: "Project",
  mounted() {

  },
  props:{
    project: Object
  }
}
</script>

<style scoped>
  h1{
    color: var(--yellow);
    line-height: 95%;
  }

  p{
    color: white;
  }

  h4{
    color: white;
  }

  .btn-purple{
    opacity: 0;
  }

  .project-image-holder{
    position: absolute;
    height: 80vh;
    width: 50%;
    right: 0;
    border-radius: 20px 0 0 20px;
    overflow: hidden;
    opacity: 0;
  }

  .project-text-holder{
    padding-top: 10%;
  }

  .project-image{
    width: 100vw;
    object-fit: cover;
    background-color: black;
    opacity: 0.85;
  }

  .mobile-project-image-holder{
    display: none;
    width: 100%;
    height: 30vh;
    overflow-x: hidden;
  }

  .mobile-project-image{
    width: 100%;
    min-height: 30vh;
    object-fit: cover;
  }

  button:focus{
    outline: 0px!important;
  }

  .btn-arrow{
    width: 30px;
    margin-left: -15px;
    margin-top: -6px;
    position: absolute;
  }

  @media only screen and (max-width: 576px) {
    .btn-round{
      background-color: var(--yellow);
      color: var(--dark-purple);
    }
    .btn-purple{
      opacity: 1;
    }
  }

  @media only screen and (max-width: 767px) {
    .project-image-holder{
      display: none;
    }
    .mobile-project-image-holder{
      display: initial;
    }
  }

  @media only screen and (max-width: 991px) {

  }

  @media only screen and (max-width: 1199px) {

  }

</style>
