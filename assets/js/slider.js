"use strict";
const carousel = document.querySelector("#phonecarousel");
const title = document.querySelector("#hcarousel");
const caption = document.querySelector("#pcarousel");

const data = new Map([
  [
    0,
    {
      title: "Discover",
      caption:
        "Using Myne you’ll get to see chefs cooking live, bartenders shaking up their last creations and users like you sharing their live experiences from the best spots in town. ",
    },
  ],
  [
    1,
    {
      title: "Share",
      caption:
        "Create a room, select a few venues that you love, invite your best buddies to the group, everyone gets to vote for the venue they fancy! Get ready the event is about to start!",
    },
  ],

  [
    2,
    {
      title: "Influence",
      caption:
        "Whether it is the coffee down your place, the bar pouring 4£ beers next to your office or the fancy restaurant where you took your last date, influence others by sharing your best experiences.",
    },
  ],
]);

function carouselCaption(event) {
  const nextSlide = event.to;
  const titleValue = data.get(nextSlide).title;
  const captionValue = data.get(nextSlide).caption;

  title.textContent = titleValue;
  caption.textContent = captionValue;
}

carousel.addEventListener("slide.bs.carousel", carouselCaption);

// animation

// Wrap every letter in a span
const textWrappers = document.querySelectorAll(".text-wrapper");
const words = document.querySelectorAll(".letters");

words.forEach(function (e) {
  e.innerHTML = e.innerHTML.replace(/([^\x00-\x80]|\w)/g, (match, group) =>
    group == undefined ? match : `<span class="letter">${match}</span>`
  );
});

const hloaded = document.querySelector("#guy");
const wait = "-=500";
const emo = anime.timeline({
  duration: 600,
  loop: false,
  autoplay: false,
});

emo
  .add({
    targets: "#guy",
    opacity: [0, 1],
  })
  .add({
    targets: ".emo",
    opacity: [0, 1],
    bottom: "56%",
    left: "75%",
  })
  .add({
    targets: "#emo1",
    bottom: "86%",
    easing: "linear",
    left: "91%",
    rotate: 36,
  })
  .add(
    {
      targets: "#emo2",
      bottom: "77%",
      easing: "linear",
      left: "66%",
      rotate: -10,
    },
    wait
  )
  .add(
    {
      targets: "#emo3",
      bottom: "68%",
      easing: "linear",
      left: "84%",
      rotate: 39,
      scale: 1.2,
    },
    wait
  )
  .add(
    {
      targets: "#emo4",
      bottom: "85%",
      easing: "linear",
      left: "68%",
      rotate: -25,
    },
    wait
  )
  .add(
    {
      targets: "#emo5",
      bottom: "64.2%",
      easing: "linear",
      left: "73%",
      scale: 2.5,
      rotate: -22,
    },
    wait
  )
  .add(
    {
      targets: "#emo6",
      bottom: "76%",
      easing: "linear",
      left: "95%",
      rotate: 29,
      scale: 2.6,
    },
    wait
  )
  .add(
    {
      targets: "#emo7",
      bottom: "85%",
      easing: "linear",
      left: "79%",
      scale: 2.5,
    },
    wait
  )
  .add(
    {
      targets: "#emo9",
      bottom: "75%",
      easing: "linear",
      left: "77%",
      rotate: -15,
    },
    wait
  )
  .add(
    {
      targets: "#emo8",
      bottom: "83%",
      easing: "linear",
      left: "58%",
      scale: 1.5,
    },
    wait
  )
  .add(
    {
      targets: "#emo10",
      bottom: "77%",
      easing: "linear",
      left: "87%",
      rotate: 25,
    },
    wait
  );

const tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 700,
  loop: false,
  autoplay: false,
});

tl.add({
  targets: ".ml11.discover .letter",
  opacity: [0, 1],
  delay: (el, i) => 34 * (i + 1),
})
  .add(
    {
      targets: ".ml11.share .letter",
      opacity: [0, 1],
      delay: (el, i) => 34 * (i + 1),
    },
    "-=500"
  )
  .add(
    {
      targets: ".ml11.influence .letter",
      opacity: [0, 1],
      delay: (el, i) => 34 * (i + 1),
    },
    "-=500"
  );

function start() {
  tl.play();
  emo.play();
  console.log("started");
}

hloaded.complete ? start() : hloaded.addEventListener("load", start);
document.querySelector(".words-wrapper").onclick = tl.restart;
document.querySelector(".rs").onclick = emo.restart;

//  circle trail naimation
anime({
  targets: "#circletrail",
  duration: 2500,
  direction: "alternate",
  scale: 0.95,
  easing: "easeInOutQuad",
  loop: true,
});
anime({
  targets: "#imgtrail",
  duration: 2500,
  direction: "alternate",
  scale: 1.05,
  easing: "easeInOutQuad",
  loop: true,
});

// 1 2 3 animation
const usnum = anime({
  targets: ".usnum",
  duration: 1400,
  direction: "linear",
  loop: false,
  opacity: [0, 1],
  translateY: ["-300%", "0%"],
  delay: anime.stagger(200),
  autoplay: false,
});
document.querySelector(".usnum").onclick = usnum.restart;

const waypoint = new Waypoint({
  element: document.getElementById("aboutus"),
  handler: function () {
    usnum.play(), this.destroy();
  },
});
