<template>
  <section id="contact-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Samenwerken?</h1>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-md-6">
          <p>Heb je een goed idee of een ingewikkeld digitaal vraagstuk? We gaan graag het gesprek met je aan. Daag ons uit! (Tekst Hoppinger)</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-6 col-md-3">
          <h5>Ons kantoor</h5>
          <p> Zoutziederstraat 20 <br>
            3026 EL<br>
            Rotterdam
          </p>
        </div>
        <div class="col-6 col-md-3">
          <h5>Contact</h5>
          <p> info@overbelicht.com<br>
            0611817099<br>
            Linkedin
          </p>
        </div>
      </div>

    </div>
    <div class="container-fluid p-0" id="contact-logo-holder">
      <img class="img-fluid" src="/assets/contact_logo.png" id="contact-logo">
    </div>

  </section>
</template>

<script>
export default {
name: "Contact",
  mounted() {
    const timeline_contact_color = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
    timeline_contact_color.to('body',{backgroundColor: '#C5BCFF'})
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
