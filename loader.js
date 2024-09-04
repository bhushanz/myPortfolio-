function revelToSpan(){
    document.querySelectorAll('.reveal')
.forEach(function(elem){
    //create two span tags
 var parent = document.createElement("span");
 var child = document.createElement("span");

//parents and child set their respective classes 
parent.classList.add('parent');
child.classList.add('child');
//span parents gets the child and childs gets element details
child.innerHTML = elem.innerHTML;
parent.appendChild(child);

//elem replaces its value with parents span
elem.innerHTML ="";
elem.appendChild(parent);

});

}
revelToSpan();


var tl = gsap.timeline();
tl
.from(".child span",{
    x:100,
    delay:1,
    stagger:.1,
    duration:1,
    ease: Power3.easeInOut
})

.to(".parent .child",{
    y:"-100%",
    duration:1,
    delay:1,
    ease : Circ.easeInOut
})
.to("#loader",{
    height:0,
    duration:1,
    ease : Circ.easeInOut
})
tl.from(".navbar .logo h2",{
    y:-20,
    opacity:0,
    duration:0.4,
    delay:0.3
})
tl.from(".navbar .nav-list ul li",{
    y:-20,
    opacity:0,
    duration:0.5,
    stagger:0.3
})
tl.from(".home-container .home-text",{
    x:-200,
    opacity:0,
    duration:0.5
})

//second div cursor
function cursorAnimation2(){
    let about =document.querySelector('#About');
let cursor = document.querySelector('.dot');

about.addEventListener('mousemove', function(dets){
    //pure Jvascript ...>

    // cursor.style.left = dets.x+"px";
    // cursor.style.top = dets.y+"px";

//-->> Using gsap library
gsap.to(cursor,{
    x:dets.x,
    y:dets.y
})
})

about.addEventListener('mouseenter', function(){
     gsap.to(cursor,{
        scale:1,
        opacity:1
     });
});

about.addEventListener('mouseleave', function(){
    gsap.to(cursor,{
       scale:0,
       opacity:0
    })
})
}
cursorAnimation2();