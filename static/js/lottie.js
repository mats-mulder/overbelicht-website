function initLottie(){
  ScrollLottie({
    target: '#animation',
    path: '/assets/homepagedatav3.json',
    duration: 10,
    speed: 'medium'
  })
}

const ScrollLottie = (obj) => {

  let anim = lottie.loadAnimation({
    container: document.querySelector(obj.target),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: obj.path
  });

  let timeObj = {currentFrame: 0}
  let endString = (obj.speed === "slow") ? "+=2000" : (obj.speed === "medium") ? "+=1000" : (obj.speed === undefined) ? "+=1250" : "+=500";
  ScrollTrigger.create({
    id: 'lottie',
    trigger: obj.target,
    scrub: true,
    start: "top 65%",
    end: "bottom 15%",
    onUpdate: self => {
      if(obj.duration) {
        gsap.to(timeObj, {
          duration: obj.duration,
          currentFrame:(Math.floor(self.progress *  (anim.totalFrames - 1))),
          onUpdate: () => {
            anim.goToAndStop(timeObj.currentFrame, true)
          },
          ease: 'expo'
        })
      } else {
        anim.goToAndStop(self.progress *  (anim.totalFrames - 1), true)
      }
    }
  });

}
