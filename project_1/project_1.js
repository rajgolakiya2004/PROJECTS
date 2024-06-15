/* Smooth Scrolling : 
                    1. Attach loco Scroll Css code
                    2. Attach locomotive Scroll min js cdn
                    3. Some code from loco Github for js      */


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var timeout; // global
function circleband(){
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprevious = 0;
    var yprevious = 0;

    window.addEventListener('mousemove' , function(dets){
        this.clearTimeout(timeout);
        var xdiff = dets.clientX - xprevious;
        var ydiff = dets.clientY - yprevious;

        xprevious = dets.clientX;
        yprevious = dets.clientY;

        xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(.8, 1.2, ydiff);

        cursorMouseFollow(xscale,yscale);

        timeout = setTimeout(function(){
            document.querySelector('#cursor-circle').style.transform = `translate(${details.clientX}px,${details.clientY}px) scale(1,1)`;

        },100)

    });
}
circleband();

function cursorMouseFollow(xscale,yscale){
    window.addEventListener('mousemove', function(details){
          document.querySelector('#cursor-circle').style.transform = `translate(${details.clientX}px,${details.clientY}px) scale(${xscale},${yscale})`;
    });
}


function landingPageAnim(){
    var tl = gsap.timeline();

    tl.from('nav',{
        opacity:0,
        duration:1.5,
        delay:0.2
    
    })
    tl.to('.boundingelem',{
        y:0,
        duration:1.5,
        delay:-1,
        stagger:0.2
    })
    tl.from('.landing-page-footer',{
        opacity:0,
        delay:-.7,
        duration:2.2
    })

}
landingPageAnim();

// scecond

document.querySelectorAll('.elem').forEach(function(elem){

    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener('mouseleave', function(dts){
        gsap.to(elem.querySelector('img'),{
               opacity:0,
               ease: Power3,
           })
    });

    elem.addEventListener('mousemove', function(dts){
       
        var diff = dts.clientY - elem.getBoundingClientRect().top

        diffrot = dts.clientX - rotate;
        rotate = dts.clientX;
        
        gsap.to(elem.querySelector('img'),{
               opacity:1,
               top: diff,
               ease: Power3,
               left: dts.clientX,
               rotate: gsap.utils.clamp(-20 , 20 , diffrot)
           })
    });
});

