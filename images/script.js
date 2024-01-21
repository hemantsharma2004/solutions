



function video_animation()
{
var videocon=document.querySelector("#video-container");
var playbtn=document.querySelector("#play");

videocon.addEventListener("mouseenter",function(){
       gsap.to(playbtn,{
           opacity:1,
            scale:1,
       })
})

 videocon.addEventListener("mouseleave",function(){
     gsap.to(playbtn,{
         opacity:0,
          scale:0,
         
     })
 })

 videocon.addEventListener("mousemove",function(dets){
      gsap.to(playbtn,{
        left:dets.x,
        top:dets.y
      })
 })
}