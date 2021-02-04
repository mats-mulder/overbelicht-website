function initGsap(){

    document.getElementsByClassName('project').forEach(function (project){
      let imageHolder = project.getElementsByClassName('project-image-holder')[0]
      let image = project.getElementsByClassName('project-image')[0]
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: 'top 10%',
          pin: true,
          scrub: true,
        }
      });
      t1.to(imageHolder, {width: '52%', opacity: 1, duration: 1},0)
      t1.to("#spotlight", {opacity: 0.2, marginLeft: 0, duration: 1},0)
      t1.to(image, {marginLeft: '-50%', duration: 5},0)
      t1.to(imageHolder, {x: '-50px', opacity: 0, duration: 2},4)
      t1.to("#spotlight", {opacity: 0, marginLeft: '10%', duration: 1},4)
    })

    const timeline_project_color = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
      }
    })
    timeline_project_color.to('body', {backgroundColor: '#160046'},0)
    timeline_project_color.to('#about-link', {color: 'white'},0)
    timeline_project_color.to('#logo-holder', {backgroundColor: '#160046'},0)
    timeline_project_color.to('#logo', {opacity: 0},0)
    timeline_project_color.to('#logo_white', {opacity: 1},0)

    const timeline_contact_color = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-section',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
      }
    })
    timeline_contact_color.to('body',{backgroundColor: '#C5BCFF'})
    timeline_contact_color.to('#logo-holder', {backgroundColor: '#C5BCFF'},0)
}
