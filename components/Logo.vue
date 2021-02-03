<template>
  <div id="logo-holder">
    <img src="/assets/kleur_logo.png" id="logo">
    <img src="/assets/wit_logo.png" id="logo_white">
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
  left: 0;
  top: 0;
  margin-top: 25px;
  margin-left: 20px;
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


</style>
