<template>
  <div>

    <div class="full-image-holder">
      <img class="full-image" src="/images/eb_1.jpg">
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-8" style="padding-top: 20vh; padding-bottom: 20vh">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-10 offset-md-1">
                <h4><span style="color: var(--green)">Branding</span> + <span style="color: var(--red)">Website</span> + <span style="color: var(--light-purple)">Fotografie</span></h4>
                <h1>Hoe verander je oude gewoontes?</h1>
              </div>
            </div>
              <div class="row mt-3">
                <div class="col-12 col-md-6 offset-md-1">
                  <p class="mid-p">
                    The Energy Boutique is een high-end personal training studio. Met movement, nutrition and relief als 3 pijlers in haar werkwijze, helpt Helen met het creëren van gezonde, duurzame gewoontes.
                  </p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                </div>

            </div>


          </div>
        </div>
        <div class="col-4" style="background-color: var(--dark-purple)">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style>

h1{
  color: var(--dark-purple);
}

p{
  color: var(--dark-purple);
}

.full-image-holder{
  width: 100%;
  height: 100vh;
  background-color: var(--dark-purple);
}

#logo{
  opacity: 0;
}

#logo_white{
  opacity: 0;
}

.full-image{
  min-width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0;
}

</style>
