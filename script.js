function locomotiveAnimation(){
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

function loadingAnimation() {
    var tl = gsap.timeline()
tl.from("#page1",{
    opacity: 0,
    duration:0.2,
    delay:0.2
})
tl.from("#page1",{
    transform: "scaleX(0.7) scaleY(0.2) traNslateY(80%)"    ,
    borderRadius:"150px",
    duration:2,
    ease:"expo.out"
})

tl.from("#page1 h1, #page1 p ,#page1 div",{
    opacity:0,
    duration:0.5,
    stagger: 0.2
})

tl.from("nav",{
    opacity:0
})
}
function navAnimation() {


    var nav = document.querySelector("nav")
    //nav mouse enter animation

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "28vh"
        })
        tl.to(".nav_part2 h5", {
            display: "block"
        })
        tl.from(".nav_part2 h5 span", {
            y: 25,
            // duration:0.3,
            stagger: {
                amount: 0.6
            }
        })

    })
    //nav mouse leave animation
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".nav_part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav_part2 h5", {
            display: "none",
            duration: 0.2
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.3
        })


    })
}

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {

                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 150,
            })

        })

    })

}

function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })



 

}

function page6Animation(){
    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
    
}

function page8Animation() {
    gsap.to("#bottom8part2 h4",{
        x:150,
        duration:1,
        stagger :{
            amount:-0.5
        },
        scrollTrigger:{
            trigger:"#bottom8part2",
            scroller:"#main",
            // markers:true,
            start: "top 80%",
            end:  " top 10%"  ,
            scrub : true 
        }
    })
    gsap.to("#btm8-part3 h4",{
        x:150,
        duration:1,
        stagger :{
            amount:-0.5
        },
        scrollTrigger:{
            trigger:"#btm8-part3",
            scroller:"#main",
            // markers:true,
            start: "top 80%",
            end:  " top 10%"  ,
            scrub : true 
        }
    })
    gsap.to("#btm8-part4 h4",{
        x:150,
        duration:1,
        stagger :{
            amount:-0.5
        },
        scrollTrigger:{
            trigger:"#btm8-part4",
            scroller:"#main",
            // markers:true,
            start: "top 80%",
            end:  " top 10%"  ,
            scrub : true 
        }
    })
    gsap.to("#btm8-part5 h4",{
        x:150,
        duration:1,
        stagger :{
            amount:0.1
        },
        scrollTrigger:{
            trigger:"#btm8-part5",
            scroller:"#main",
            // markers:true,
            start: "top 80%",
            end:  " top 10%"  ,
            scrub : true 
        }
    })
}

locomotiveAnimation()
navAnimation()
page2Animation() 
page3VideoAnimation()
page6Animation()
page8Animation()
loadingAnimation()