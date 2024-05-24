gsap.to("#About-us,.logoo,.dodge,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#About-us",
    scrolleer: "body",
    markers: true,
  },
});
