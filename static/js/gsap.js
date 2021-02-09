
function killAnimation(type){
  ScrollTrigger.getAll().forEach(function (trigger){
    let id = trigger.vars.id
    if(id !== undefined){
      if(type.includes(id.split('-')[0])){
        trigger.kill()
      }
    }
  })
}

function toggleAnimation(type, toggle){
  ScrollTrigger.getAll().forEach(function (trigger){
    let id = trigger.vars.id
    if(id !== undefined){
      if(type.includes(id.split('-')[0])){
        if(toggle === 'enable'){
          trigger.enable()
        }
        else if(toggle === 'disable'){
          trigger.disable()
        }
      }
    }
  })
}

// Init gsap animations
function initHomeAnimations(){
  // Init gsap for each project on home page
  let projectCount = 0
  document.getElementsByClassName('project').forEach(function (project){
    let imageHolder = project.getElementsByClassName('project-image-holder')[0]
    let image = project.getElementsByClassName('project-image')[0]
    let t1 = gsap.timeline()
    t1.to(imageHolder, {width: '52%', opacity: 1, duration: 1},0)
    t1.to("#spotlight", {opacity: 0.2, marginLeft: 0, duration: 1},0)
    t1.to(image, {marginLeft: '-50%', duration: 5},0)
    t1.to(imageHolder, {x: '-50px', opacity: 0, duration: 2},4)
    t1.to("#spotlight", {opacity: 0, marginLeft: '10%', duration: 1},4)
    ScrollTrigger.create({
      id: 'project-'+projectCount,
      trigger: project,
      start: 'top 10%',
      pin: true,
      scrub: 1,
      animation: t1
    })
    projectCount++
  })

  let t2 = gsap.timeline({
    scrollTrigger: {
      id: 'background-projects',
      trigger: '#projects',
      start: 'top 60%',
      end: 'top 30%',
      scrub: true,
    }
  })
  t2.to('body', {backgroundColor: '#160046'},0)
  t2.to('#about-link', {color: 'white'},0)
  t2.to('#logo-holder', {backgroundColor: '#160046'},0)
  t2.to('#logo', {opacity: 0},0)
  t2.to('#logo_white', {opacity: 1},0)

  let t3 = gsap.timeline({
    scrollTrigger: {
      id: 'background-contact',
      trigger: '#contact-section',
      start: 'top 60%',
      end: 'top 30%',
      scrub: true,
    }
  })
  t3.to('body',{backgroundColor: '#C5BCFF'})
  t3.to('#logo-holder', {backgroundColor: '#C5BCFF'},0)


  //Init Lottie animation
  initLottie()
}



function checkViewport(){
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  return vw >= 992;
}



