<template>
  <div id="logo-holder">
    <nuxt-link to="/">
      <img src="/assets/logo_no_yellow.png" id="logo">
      <img src="/assets/wit_logo.png" id="logo_white">
    </nuxt-link>
  </div>
</template>

<script>
export default {
name: "Logo"
}
</script>

<style scoped>

#logo-holder{
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 500;
  background-color: white;
}

#logo{
  height: 6vh;
  opacity: 1;
  z-index: 200;
  margin: 2vh;
  position: absolute;
}

#logo_white{
  height: 6vh;
  opacity: 0;
  z-index: 200;
  margin: 2vh;
  position: absolute;
}

@media only screen and (max-width: 576px) {

}

@media only screen and (max-width: 767px) {
  #logo-holder{
    height: 9vh;
  }
}

@media only screen and (max-width: 991px) {

}

@media only screen and (max-width: 1199px) {

}


</style>
