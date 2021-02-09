<template>
  <div>
    <div id="page-transition">

    </div>

    <div id="spotlight-holder">
      <div id="spotlight"></div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

body{
  overflow-x: hidden;
}

  @font-face {
    font-family: Gilroy;
    font-weight: bold;
    src: url(/fonts/Gilroy-Bold.otf);
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
    font-size: 6.5vh;
  }

  .mid-p{
    font-size: 2.3vh;
    font-weight: bolder;
  }

  .large-p{
    font-size: 2.5vh;
    font-weight: bolder;
  }

  p{
    font-size: 2vh;
    font-family: avenir;
  }

  h2{
    font-family: Gilroy;
    font-weight: bold;
    color: white;
    font-size: 2.5rem;
  }

  h3{
    font-family: Gilroy;
    font-weight: bold;
    font-size: 3vh;
  }

  h4{
    font-family: Gilroy;
    font-weight: bold;
    color: white;
    font-size: 1.5rem;
  }

  h5{
    font-family: Gilroy;
    font-weight: bold;
    font-size: 2vh;
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

  #page-transition{
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: var(--yellow);
    z-index: 600;
    left: 100%;
  }

  .back-link{
    position: fixed;
    margin: 15px;
    font-size: 3vh;
    color: var(--yellow);
    font-family: Gilroy;
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
  height: 7vh;
}

</style>
