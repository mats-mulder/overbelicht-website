<template>
  <div>
    <div id="page-transition">
        <div id="loading-animation"></div>
    </div>

    <div id="spotlight-holder">
      <div id="spotlight"></div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
  export default {
    mounted() {
      let anii = lottie.loadAnimation({
        container: document.getElementById('loading-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/loadingtest2.json'
      });
    }

  }
</script>

<style>

body{
  overflow-x: hidden;
  max-width: 100vw;
}

  @font-face {
    font-family: Gilroy;
    font-weight: bold;
    src: url(/fonts/Gilroy-Bold.otf);
  }

  @font-face {
    font-family: Gilroy;
    font-weight: normal;
    src: url(/fonts/Gilroy-Regular.otf);
  }

  @font-face {
    font-family: Gilroy;
    font-weight: 500;
    src: url(/fonts/Gilroy-Medium.otf);
  }

  @font-face {
    font-family: avenir;
    src: url(/fonts/Avenir-Light-07.ttf);
  }


  :root{
    --dark-purple: #160046;
    --light-purple: #C5BCFF;
    --green: #15C0C0;
    --yellow: #F6F8BC;
    --red: #FE4A49;
  }



  h1{
    font-family: Gilroy;
    font-weight: bold;
    font-size: 4rem;
  }

  .mid-p{
    font-size: 1.5rem;
    font-weight: bolder;
  }

  .large-p{
    font-size: 1.5rem;
    font-weight: bolder;
  }

  p{
    font-size: 1.3rem;
    font-family: avenir;
  }

  h2{
    font-family: Gilroy;
    font-weight: bold;
    color: white;
    font-size: 2rem;
  }

  h3{
    font-family: Gilroy;
    font-weight: bold;
    font-size: 2rem;
  }

  h4{
    font-family: Gilroy;
    font-weight: bold;
    color: white;
    font-size: 1.6rem;
  }

  h5{
    font-family: Gilroy;
    font-weight: bold;
    font-size: 1.4rem;
  }

  .nav-full-image{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
  }

  .nav-image{
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }

  #loading-animation{
    width: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -10vh 0 0 -25vh;
  }

  #page-transition{
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: var(--yellow);
    z-index: 600;
  }

  .back-link{
    position: fixed;
    margin: 0.5rem;
    font-size: 1.7rem;
    color: var(--yellow);
    font-family: Gilroy;
    font-weight: bold;
  }

  .back-link:hover{
    color: var(--yellow);
  }

.service-huisstijl{
  color: var(--red);
}

.service-website{
  color: var(--green);
}

.service-fotografie{
  color: var(--light-purple);
}

.back-btn-container{
  width: 100%;
  position: fixed;
  z-index: 500;
  height: 3.5rem;
}



@media only screen and (max-width: 576px) {
  h1{
    font-size: 2.6rem;
  }
  .large-p{
    font-size: 1.3rem;
  }
  .mid-p{
    font-size: 1.2rem;
  }
  h3{
    font-size: 1.4rem;
  }

  h4{
    font-size: 1.4rem;
  }
  p{
    font-size: 1rem;
  }
}

@media only screen and (max-width: 767px) {

}

@media only screen and (max-width: 991px) {

}

@media only screen and (max-width: 1199px) {

}

</style>
