function initGsap(){

  const timeline_project_color = gsap.timeline({
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 90%',
      end: 'top 50%',
      scrub: true,
    }
  })
  timeline_project_color.to('body', {backgroundColor: '#160046'},0)
  timeline_project_color.to('#logo', {opacity: 0},0)
  timeline_project_color.to('#logo_white', {opacity: 1},0)


}
