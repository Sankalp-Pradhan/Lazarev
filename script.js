

var nav = document.querySelector("nav")
//nav mouse enter animation

nav.addEventListener("mouseenter", function(){
    let tl= gsap.timeline()

    tl.to("#nav-bottom",{
        height:"28vh"
    })
    tl.to(".nav_part2 h5",{
        display : "block"
    })
    tl.from(".nav_part2 h5 span",{
        y:25,
        // duration:0.3,
        stagger:{
                amount :0.6
        }
    })
    
})  
//nav mouse leave animation
nav.addEventListener("mouseleave", function(){
    let tl= gsap.timeline()

    tl.to(".nav_part2 h5 span",{
        y:0,
        // duration:0.3,
        stagger:{
                amount :0.2
        }
    })
        tl.to(".nav_part2 h5",{
            display:"none",
            duration: 0.2
        })
        tl.to("#nav-bottom",{
            height:0,
            duration :0.3
        })
   
    
})  

function navAni() {
    
}