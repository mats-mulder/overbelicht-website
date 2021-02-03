


document.addEventListener('DOMContentLoaded', (event) => {
  const el = document.querySelector("body");
  let spot = document.getElementById('spotlight');

  el.addEventListener("mousemove", (e) => {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
      pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    setTimeout(function(){
      spot.style.marginLeft = ((pageX/window.innerWidth)*50).toString() + 'px'
      spot.style.marginTop = ((pageY/window.innerHeight)*50).toString() + 'px'
      }, 100);


  });

})

