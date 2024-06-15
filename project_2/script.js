//search locomotive ScrollTrigger CodePen and copy js code
// select #main

function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

locomotiveScroll()


function cursorEffect(){
    var page1Content = document.querySelector(".page_1_content");
    var tocursor = document.querySelector(".cursor");
    
    page1Content.addEventListener("mousemove" , function(dets){
        gsap.to(tocursor , {
            x:dets.x,
            y:dets.y
        })
        // second method without smoothness
        // cursor.style.left = dets.x + "px";
        // cursor.style.top = dets.y + "px";
    })
    
    page1Content.addEventListener("mouseenter" , function(){
        gsap.to(tocursor , {
            opacity:1,
            scale:1
        })
    })   
    
        page1Content.addEventListener("mouseleave" , function(){
            gsap.to(tocursor , {
              opacity:0,
              scale:0
        })
     })       
}

cursorEffect();

// infinite loop in swiper js code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 


// Loader

var tl = gsap.timeline()

tl.from("#loader h3" , {
    x:50,
    opacity:0,
    duration:1,
    stagger:0.1
} )
tl.to("#loader h3" , {
    opacity:0,
    x:-20,
    stagger:0.1
})

tl.to("#loader" , {
    opacity:0,
    duration:1
})

tl.to("#loader" , {
    display:"none"
})

tl.from(".page_1_content h1 span" , {
    y:10,
    opacity:0,
    stagger:0.1,
})





