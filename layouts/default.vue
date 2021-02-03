<template>
  <div>
    <div id="logo-holder">
      <img src="/assets/kleur_logo.png" id="logo">
      <img src="/assets/wit_logo.png" id="logo_white">
    </div>
    <Nuxt />
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

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

  #logo-holder{
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 25px;
    margin-left: 20px;
  }

  h1{
    font-family: Gilroy;
    font-weight: bold;
    font-size: 6.5vh;
  }

  .mid-p{
    font-size: 2.2vh;
    font-weight: bolder;
  }

  .large-p{
    font-size: 2.6vh;
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

  #logo{
    width: 120px;
    position: absolute;
    opacity: 1;
    z-index: 200;
  }

  #logo_white{
    width: 120px;
    position: absolute;
    opacity: 0;
    z-index: 200;
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

</style>
