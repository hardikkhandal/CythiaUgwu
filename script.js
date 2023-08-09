const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y: '-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5,
        
    })
    .to(".boundingelem",{
        y: '0',
        
        ease:Expo.easeInOut,
        duration:1.5,
        stagger:.2,
        delay:-1 
    })
    .from(".footer",{
        y: -10,
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1   
    })
}

function mouseskew(){
    //define deffult scale value 
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mouseover",function(data){
        var xdiff = data.clientX - xprev;
        var ydiff = data.clientY - yprev;
        xprev = data.clientX;
        yprev = data.clientY;

        gsap.utils.clamp(.8,1.2,xdiff);
        gsap.utils.clamp(.8,1.2,ydiff);

        circleMouseFollower(xscale,yscale);

    })
}
function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(data){

        document.querySelector("#minicircle").style.transform = `translate(${data.clientX}px, ${data.clientY}px) scale(${xscale},${yscale})`;
    })
}

mouseskew();  
circleMouseFollower();
firstPageAnim();



document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
  var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });
      elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
      });
});