<template>
    <div class="container-fluid p-0" id="project-2">

      <div class="project-image-holder">
        <img class="project-image" src="/images/eb_1.jpg">
      </div>


      <div class="col-12 offset-md-1 col-md-8 col-lg-7 col-xl-4 project-text-holder">
        <h4><span style="color: var(--green)">Branding</span> + <span style="color: var(--red)">Website</span> + <span style="color: var(--light-purple)">Fotografie</span></h4>
        <h1>The Energy Boutique</h1>
        <p class="mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
        <NuxtLink to="/cases"><button class="btn-round mt-3">→</button></NuxtLink>
      </div>
    </div>
</template>

<script>
export default {
  name: "Project",
  mounted() {
    document.addEventListener('DOMContentLoaded', (event) => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#project-2',
          start: 'top 10%',
          markers: true,
          pin: true,
          scrub: 1,
        }
      });
      t1.to(".project-image-holder", {width: '52%', opacity: 1, duration: 2},0)
      t1.to(".project-image", {marginLeft: '-50%', duration: 5},0)
      t1.to(".project-image-holder", {x: '-50px', opacity: 0, duration: 2},4)
    })
  },
}
</script>

<style scoped>
  h1{
    color: var(--yellow);
    font-size: 10vh;
    line-height: 90%;
  }

  p{
    color: white;
  }

  .project-image-holder{
    position: absolute;
    height: 80vh;
    width: 50%;
    right: 0;
    background-color: red;
    border-radius: 20px 0 0 20px;
    overflow: hidden;
    opacity: 0;
  }

  .project-text-holder{
    padding-top: 20vh;
  }

  .project-image{
    width: 100vw;
    object-fit: cover;
  }


  @media only screen and (max-width: 576px) {

  }

  @media only screen and (max-width: 767px) {

  }

  @media only screen and (max-width: 921px) {

  }

  @media only screen and (max-width: 1199px) {
    .project-image-holder{
      width: 100%;
      border-radius: 0px;
    }

  }

</style>
