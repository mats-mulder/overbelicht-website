function highHeight(pageLoading){
  document.getElementsByClassName('high-image-container').forEach(function (el){
    let image = el.getElementsByTagName('img')[0]
    if(pageLoading === true){
      image.onload = function (){
        let imageHeight = image.offsetHeight
        let clientHeight = document.documentElement.clientHeight * 0.3
        el.style.marginBottom = (imageHeight - clientHeight).toString() + 'px'
      }
    }
    else{
      let imageHeight = image.offsetHeight
      let clientHeight = document.documentElement.clientHeight * 0.3
      el.style.marginBottom = (imageHeight - clientHeight).toString() + 'px'
    }

  })
}


function waitForLoad(done, direction){
  let images = document.getElementsByClassName('pre-load-image')
  let count = 0
  images.forEach(function (image) {
    if(image.complete){
      if (count === images.length-1) {
        const transition_timeline = gsap.timeline({
          onComplete: function (){
            done()
          }
        })
        transition_timeline.to('#page-transition',{left: direction, duration: 0.5},0)
      } else {
        count++
      }
    }
    else{
      image.onload = function () {
        if (count === images.length-1) {
          const transition_timeline = gsap.timeline({
            onComplete: function (){
              done()
            }
          })
          transition_timeline.to('#page-transition',{left: direction, duration: 0.5},0)
        } else {
          count++
        }
      }
    }
  })
}


function arrowEffectIn(el){
  el.getElementsByTagName('img')[0].style.opacity = 0;
  el.getElementsByTagName('img')[1].style.opacity = 1;
}

function arrowEffectOut(el){
  el.getElementsByTagName('img')[1].style.opacity = 0;
  el.getElementsByTagName('img')[0].style.opacity = 1;
}
