let crsr = document.querySelector("#cursor");
let crsrblr = document.querySelector("#cursor-blur");
let images = document.querySelectorAll(".card");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x -crsr.offsetWidth/2+"px";
    crsr.style.top = dets.y -crsr.offsetHeight/2+"px";
    crsrblr.style.left = dets.x-185+"px";
    crsrblr.style.top = dets.y-185+"px";
})


gsap.to(".nav",{
    backgroundColor:"#000",
    height:"120px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:false,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scoller:"body",
        start:"top -50%",
        end:"top -100%",
        scrub:1
    }
})

images.forEach(function (img) {
    img.addEventListener("mousemove", function (e) {
        let rect = img.getBoundingClientRect();

        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let centerX = rect.width / 2;
        let centerY = rect.height / 2;

        let rotateY = ((x - centerX) / centerX) * 10;
        let rotateX = ((centerY - y) / centerY) * 10;

        img.style.transform =
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    img.addEventListener("mouseleave", function () {
        img.style.transform =
            "perspective(800px) rotateX(0deg) rotateY(0deg)";
    });

});