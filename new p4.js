var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  // console.log(dets.y)
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 100 + "px";
  blur.style.top = dets.y - 100 + "px";
});
gsap.to("#nav", {
  backgroundColor: "rgba(0,0,0,0.8)",
  height: "110px",
  //   width: "100%",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -90%",
    scrub: "2",
  },
});
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2;
    crsr.style.border = "0.5px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid aqua";
    crsr.style.backgroundColor = "aqua";
  });
});
gsap.from("#About-us,#about-us-in,.logoo,.jojo", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#About-us",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 55%",
    scrub: 4,
  },
});
gsap.from(".card", {
  y: 50,
  opacity: 0,
  duration: 1,
  scale: 0.3,
  // stagger: 0.8,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 68%",
    end: "top 55%",
    scrub: 1,
  },
});
gsap.from("#arro2", {
  y: -70,
  x: -70,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#arro2",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 3,
  },
});
gsap.from(".detail", {
  z: 90,
  opacity: 0,
  duration: 1,
  scale: 0.3,
  scrollTrigger: {
    trigger: "#arro2",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 3,
  },
});
gsap.from("#arro1", {
  y: 70,
  x: 70,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#arro2",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 3,
  },
});
gasp.from("#page4 h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 3,
  },
});
