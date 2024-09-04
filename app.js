// mobile responsive navbar 
let menubtn= document.querySelector('.menu');
let sidebar = document.querySelector('.side-list');
let closebtn = document.querySelector(".side-close");

menubtn.addEventListener("click",()=>{
    
    gsap.to(" .side-list",{
        height: "45vh",
         duration: 1
       })
       gsap.to(".side-close",{
        rotate:360,
        duration:1
       })
    
});

closebtn.addEventListener("click",()=>{
    gsap.to(".side-list",{
     height: 0,
      duration: 1
    })
    gsap.to(".side-close",{
        rotate:-360,
        duration:1
       })
 
 });


// cursor animation 

function cursorAnimation(){
    let homeDiv =document.querySelector('.home-container');
let cursor = document.querySelector('.cursor');

homeDiv.addEventListener('mousemove', function(dets){
    //pure Jvascript ...>

    // cursor.style.left = dets.x+"px";
    // cursor.style.top = dets.y+"px";

//-->> Using gsap library
gsap.to(cursor,{
    x:dets.x,
    y:dets.y
})
})

homeDiv.addEventListener('mouseenter', function(){
     gsap.to(cursor,{
        scale:1,
        opacity:1
     })
})

homeDiv.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale: 0,
        opacity: 0
    })
})

}
cursorAnimation();

//project div Animation
document.querySelectorAll('.element').forEach(function(elem){
    elem.addEventListener('mousemove',function(dets){
let diff= dets.clientY - elem.getBoundingClientRect().top;

     gsap.to(elem.querySelector('img'),{
       
        opacity: 1,
        top: dets.clienty,
        left: dets.clientX
     });

    });



    elem.addEventListener('mouseleave',function(dets){
        let diff= dets.clientY - elem.getBoundingClientRect().top;
        
             gsap.to(elem.querySelector('img'),{
               
                opacity: 0,
                
             });
        
            });



});

gsap.matchMedia().add("(min-width: 769px)", () => {
    // Apply GSAP animations only if the screen width is greater than 768px
    gsap.from("#About .gettoknow",{
        opacity: 0,
        duration:2.5,
        x:500,
        scrollTrigger:{
            trigger:"#About p",
            scroller: "body",
            start:"top 80%",
            end:"top 40%",
            scrub:2
        }
    })
    
    gsap.from("#About h4",{
        opacity: 0,
        duration:2,
        x:-500,
        scrollTrigger:{
            trigger:"#About h4",
            scroller: "body",
            start:"top 85%",
            end:"top 40%",
            scrub:2
        }
    })
    
    
    gsap.from("#About .details .photo",{
        scale:0,
        opacity:0,
        scrollTrigger:{
            trigger:"#About",
            scroller:"body",
            start:"top 65%",
            end : "10%",
            scrub:2
        }
    })
  });



//Get in TOuch Butooon Animatioon
let text =document.querySelector(".para");
gsap.matchMedia().add("(min-width:768px)",()=>{
    text.addEventListener("mouseover",function(){
        gsap.to(".para span",{
            scale : 1.1
    
        })
        gsap.to(".para span",{
            y:-40
        })
    })
    
    text.addEventListener("mouseleave",function(){
        gsap.to(".para span",{
            scale : 1
            
        })
        gsap.to(".para span",{
            y:0
        })
    })
})

