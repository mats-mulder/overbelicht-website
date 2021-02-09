<template>
    <div class="container-fluid p-0 project" style="margin-top: 45vh; margin-bottom: 45vh">

      <div class="project-image-holder">
        <img class="project-image" :src="project.image">
      </div>


      <div class="col-12 offset-md-1 col-md-8 col-lg-7 col-xl-4 project-text-holder">
        <h4><span v-for="(label, index) in project.services" :class="'service-'+label.toLowerCase()">{{ label }}<span v-if="index < project.services.length-1"> + </span></span></h4>
        <h1>{{ project.title }}</h1>
        <div class="mobile-project-image-holder">
          <img class="mobile-project-image" :src="project.image">
        </div>
        <p class="mt-4 mid-p">{{ project.introduction }}</p>
        <NuxtLink :to="project.path"><button class="btn-round mt-3">→</button></NuxtLink>
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
    font-size: 9vh!important;
    line-height: 90%;
  }

  p{
    color: white;
  }

  h4{
    color: white;
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

  @media only screen and (max-width: 576px) {

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
