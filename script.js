
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function locomotiveAnimations(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimations()



function videoconAnimation(){
   
var videocon =  document.querySelector("#video-container")
var playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity: 1,
        scale: 1,
    })
})

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity: 0,
        scale: 0,
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x -50,
        top:dets.y -50,
    })
})
}
videoconAnimation()


function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:90,
        opacity:0,
        delay:0.8,
       duration:0.8,
       stagger:0.3
    })

    gsap.from("#page1 #video-container",{
       scale:0.9,
        opacity:0,
        delay:1.5,
       duration:0.5,
      
    })
}
loadingAnimation()


function cursorPage1(){
    var cursor = document.querySelector("#cursor")
var con = document.querySelector("#crsr-con")

con.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        left:dets.x -50,
        top:dets.y -50,
        opacity:1,
    })
    
})

con.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
        left:dets.x -50,
        top:dets.y -50,
        opacity:0,
        
    })
    
})
}

// cursorPage1()

gsap.from("#heading4 i",{
    scale:0,
    opecity:0,
})

gsap.to("#heading4 i",{
    y:40,
    duration:0.7,
    repeat:-1,
    yoyo:true
})

gsap.from("#vot h1",{
    scale:0,
    opecity:0,
})

gsap.to("#vot h1",{
    y:40,
    duration:0.7,
    repeat:-1,
    yoyo:true
})

gsap.from("#btn button",{
    scale:0,
    opecity:0,
})

gsap.to("#btn button",{
    y:40,
    duration:0.7,
    repeat:-1,
    yoyo:true
})


gsap.from("#above-btn h1",{
    scale:0,
    opecity:0,
})

gsap.to("#above-btn h1",{
    y:40,
    duration:0.7,
    repeat:-1,
    yoyo:true
})


