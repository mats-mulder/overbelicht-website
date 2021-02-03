function initGsap(){



  const timeline_project_color = gsap.timeline({
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 90%',
      end: 'top 50%',
      scrub: 0.5,
    }
  })
  timeline_project_color.to('body', {backgroundColor: '#160046'},0)
  timeline_project_color.to('#logo', {opacity: 0},0)
  timeline_project_color.to('#logo_white', {opacity: 1},0)

  const timeline_contact_color = gsap.timeline({
    scrollTrigger: {
      trigger: '#contact-section',
      start: 'top bottom',
      end: 'top 50%',
      scrub: true,
    }
  })
  timeline_contact_color.to('body',{backgroundColor: '#C5BCFF'})

}
