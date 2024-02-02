// ============================== videoAnimation ============================

function videoAnimation() {
  videocon = document.querySelector(".video-con");
  playbtn = document.getElementById("play");

  videocon.addEventListener("mouseenter", function () {
    // playbtn.style.opacity = 1
    // playbtn.style.scale = 1
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    // playbtn.style.opacity = 0
    // playbtn.style.scale = 0
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });

  // ================= Move on Mouse Move ================
  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 55,
      top: dets.y - 55,
    });
  });
}
videoAnimation();


// ============================== loadingMainScreen ============================
function loadingMainScreen() {
  gsap.from(".main-h1-1", {
    x: -100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
    scale: 50,
  });
  gsap.from(".main-h1-2", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
    scale: 0,
  });
  gsap.from(".video-con", {
    y: 100,
    opacity: 0,
    delay: 0.6,
    duration: 0.9,
    stagger: 0.3,
    scale: 0,
  });
}
loadingMainScreen();


// ============================== page 2 img ============================

gsap.from(".page2-elm img", {
  y: 100,
  opacity: 0,
  delay: 0.6,
  duration: 0.9,
  stagger: 0.3,
  scale: 0,
  scrollTrigger:{
      trigger:"img",
      scroll:"body",
      // markers:true,
      start:"top 100%",
      end:"top 35%",
      scrub:1,
  }
});



//========================== move ball page2 ==================================

document.addEventListener("mousemove", function(dets){
    gsap.to(".cursor",{
        left:dets.x-30,
        top:dets.y-30

    })
})

//========================== move ball, it just work on one pic ==================================
// document.querySelectorAll('.img-cursor').addEventListener("mouseenter", function(){
//     gsap.to(".cursor",{
//         scale:1

//     })
// })
// document.querySelectorAll('.img-cursor').addEventListener("mouseleave", function(){
//     gsap.to(".cursor",{
//         scale:0

//     })
// })


//========================== move ball for all pic ==================================
document.querySelectorAll(".img-cursor").forEach(function(elm){
    elm.addEventListener("mouseenter", function(){
        gsap.to(".cursor",{
            scale:1
        })

    })
    elm.addEventListener("mouseleave", function(){
        gsap.to(".cursor",{
            scale:0
        })

    })
    
})
