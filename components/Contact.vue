<template>
  <section id="contact-section" style="min-height: 100vh">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ content.title }}</h1>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-md-6">
          <p class="mid-p">{{ content.introduction }}</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-6 col-md-3" v-for="item in content.content">
          <h5>{{ item.title }}</h5>
          <div v-html="item.content"></div>
        </div>
      </div>

    </div>
    <div class="container-fluid p-0" id="contact-logo-holder">
      <img class="img-fluid" :src="content.image" id="contact-logo">
    </div>

  </section>
</template>

<script>
export default {
  name: "Contact",
  props: {
    content: Object
  }
}
</script>

<style scoped>

h1{
  color: var(--dark-purple);
}

h5{
  color: white;
}


#contact-logo-holder{
  width: 100%;
  height: 400px;
  margin-top: -100px;
}

#contact-logo{
  position: absolute;
  right: 0;
  height: 400px;
  object-fit: cover;
}

.container{
  padding-top: 20vh;
}

@media only screen and (max-width: 576px) {
  #contact-logo-holder{
    margin-top: 0px;
  }
}

</style>
