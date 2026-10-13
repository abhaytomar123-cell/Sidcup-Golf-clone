let crsr = document.querySelector("#cursor");
let crsrblr = document.querySelector("#cursor-blur");
let images = document.querySelectorAll(".card");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const heading = document.querySelectorAll(".left-nav h4");
let isScrolled = false;
const moveTotop = document.getElementById("move-to-top");

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
        scrub:1,

        onEnter:() =>isScrolled = true,
        onLeaveBack:() => isScrolled = false
    }
})

heading.forEach((elem) =>{
    elem.addEventListener("mouseenter",() =>{
        gsap.to(elem,{
            color:isScrolled? "#95C11E":"#000",
            duration:0.2
        })
    })

    elem.addEventListener("mouseleave",() =>{
        gsap.to(elem,{
            color:"#fff",
            duration:0.2
        })
    })
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
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


let currentIndex = 0;

function changeSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
}

setInterval(() => {
    let nextIndex = (currentIndex + 1) % slides.length;
    changeSlide(nextIndex);
}, 3000);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        changeSlide(index);
    });
});

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        markers:false,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"55%",
        scrub:2
    }
})

gsap.from("#colun1",{
    left:"15%",
    top:"20%",
    duration:5,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 65%",
        end:"top 40%",
        scrub:3
    }
})

gsap.from("#colun2",{
    right:"15%",
    bottom:"20%",
    duration:5,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 65%",
        end:"top 40%",
        scrub:3
    }
})

gsap.from(".video-img h4",{
    top:"15%",
    duration:1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 65%",
        end:"top 60%",
        scrub:1
    }
})

moveTotop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})