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
