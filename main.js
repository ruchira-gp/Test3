
gsap.registerPlugin("ScrollTrigger");
const tls= gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        trigger: ".first-page",
        start: "top 50%",
        end: "bottom 20%",
        // start:"bottom 80%",
        // end:"bottom 10%",
        toggleActions:"restart none reverse none",


    }
})
const tl = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        trigger: ".first-page",
        start: "bottom 100%",
        end: "bottom top",
        // start:"bottom 80%",
        // end:"bottom 10%",
        pin: "body",
        pinSpacing: true,

    }
});
const tl2 = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        trigger: ".first-page",
        start: "bottom 100%",
        end: "bottom top",
        // start:"bottom 80%",
        // end:"bottom 10%",
        pin: "body",
        pinSpacing: true,

    }
});
tl.fromTo(".ll1", {x:0 ,opacity: 1}, {y:100,opacity: 0, duration: 1,})
.fromTo(".ll2", {x:0 ,opacity: 0}, {y:0,opacity: 1, duration: 1,})
.fromTo(".ll2", {x:0 ,opacity: 1}, {y:100,opacity: 0, duration: 1,});
tl2.fromTo(".rr1", {x:0 ,opacity: 1}, {y:-100,opacity: 0, duration: 1,})
.fromTo(".rr2", {x:0 ,opacity: 0}, {y:0,opacity: 1, duration: 1,})
.fromTo(".rr2", {x:0 ,opacity: 1}, {y:-100,opacity: 0, duration: 1,});
tls.to(".smiley",{rotation:180});


//Wont work 


// tl2
// .to('.ll1', { y:100 ,opacity: 1, duration: 0.5 })
// .to('.ll1', { opacity: 0, duration: 0.5 },
//     0.5)
//  .to('.ll2', { y:100 ,opacity: 1, duration: 0.5 })
//  .to('.ll2', { opacity: 0, duration: 0.5 });
// tl
// .to('.rr2', { y:-100 ,opacity: 1, duration: 0.5 })
// .to('.rr2', { opacity: 0, duration: 0.5 },
//     0.5)
//  .to('.rr1', { y:-100,opacity: 1, duration: 0.5 })
//  .to('.rr1', { opacity: 0, duration: 0.5 });


// tl.to(".features-r", { scrollTrigger:{
//     toggleClass:".disappear"

// },y: -100, duration: 2 })
//     .to(".features-r", { x: 100, duration: 2 })
//     .to(".features-r", { y: 100, duration: 2 })
//     .to(".features-r", { x: -100, duration: 2 });
// gsap.to(".features-r", {

// });

// tl
// .to('.rr2', { opacity: 1, duration: 0.5 })
// .to('.rr2', { opacity: 0, duration: 0.5 },
//     0.5)
//  .to('.rr1', { opacity: 1, duration: 0.5 })
//  .to('.rr1', { opacity: 0, duration: 0.5 });

