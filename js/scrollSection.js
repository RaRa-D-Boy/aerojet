gsap.registerPlugin(ScrollTrigger);


const setScroller = document.querySelector('.scroller')
console.log("hi here")

let smoothScrollBar = Scrollbar.init(setScroller, {
  damping: 0.1,
  delegateTo: document,
});

ScrollTrigger.scrollerProxy(setScroller, {
  scrollTop(value) {
    if (arguments.length) {
      smoothScrollBar.scrollTop = value;
    }
    return smoothScrollBar.scrollTop;
  }
});

smoothScrollBar.addListener(ScrollTrigger.update);





gsap.set(".panel-image", { zIndex: (i, target, targets) => targets.length - i });
gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

var images = gsap.utils.toArray('.panel-image:not(.purple)');
var texts = gsap.utils.toArray('.panel-text');





// Pinning ScrollTrigger

ScrollTrigger.create({

    trigger: "section.main",
    scroller: ".scroller",
    markers: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + ((images.length + 1) * window.innerHeight),
    invalidateOnRefresh: true

});





// Tweening ScrollTrigger's with wrapper as trigger

images.forEach((image, i) => {
  
  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: ".trigger-wrap",
      scroller: ".scroller",
      start: () => "top top-=" + (window.innerHeight*(i + 0.5)),
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true    
    }
    
  })
  
  tl.fromTo(image, { height: () => "100%" }, { height: () => "0%" });  
  
});



texts.forEach((text, i) => {
  
  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: ".trigger-wrap",
      scroller: ".scroller",
      start: () => "top top-=" + (window.innerHeight * (i - 0.5)),
      end: () => "+=" + (window.innerHeight * 2),
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true    
    }
    
  })
  
  tl
    .to('body', { duration: 1 })
    .fromTo(text, { opacity: 0, y: () => window.innerHeight }, { duration: 0.25, opacity: 1, y: () => (window.innerHeight/2 - text.offsetHeight/2) }, 0.0)  
    .fromTo(text, { opacity: 1, y: () => (window.innerHeight/2 - text.offsetHeight/2) }, { duration: 0.25, opacity: 0, y: () => -text.offsetHeight , immediateRender: false }, 0.75)
  ;
  
})










// Only necessary to correct marker position - not needed in production

if (document.querySelector('.gsap-marker-scroller-start')) {    
  const markers = gsap.utils.toArray('[class *= "gsap-marker"]'); 
  smoothScrollBar.addListener(({ offset }) => {  
    gsap.set(markers, { marginTop: -offset.y })
  });
}