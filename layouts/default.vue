<template>
  <div>
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
    font-size: 2.2vh;
    font-weight: bolder;
  }

  .large-p{
    font-size: 2.6vh;
  }

  p{
    font-size: 2.2vh;
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
