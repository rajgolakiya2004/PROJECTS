const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".alink", {
    stagger: .1,
    opacity: 0,
    y:10,
    duration:2

})


