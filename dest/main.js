console.log("Hello CFD");
//Scroll Background for Header
let header = document.querySelector("header");
let slider = document.querySelector(".background-main");

function changeBackground() {
  let scrollY = window.pageYOffset;
  if (scrollY > slider.clientHeight - header.clientHeight) {
    header.classList.add("backgroundHeader");
  } else {
    header.classList.remove("backgroundHeader");
  }
}
document.addEventListener("scroll", function () {
  changeBackground();
  toTop();
});
//show video
function showVideo() {
  let video = document.querySelector(".video-background");
  let imgBackground = document.querySelector(".img-backgound");
  setTimeout(function () {
    imgBackground.style.display = "none";
    video.style.display = "block";
  }, 1500);
}
showVideo();

//backtotop
function toTop() {
  let toTop = document.querySelector(".toTop");
  let getHeightScoll = window.innerHeight;
  let scrollY = window.pageYOffset;
  if (scrollY > getHeightScoll) {
    toTop.classList.add("showButtonToTop");
  } else {
    toTop.classList.remove("showButtonToTop");
  }
  toTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

$(document).ready(function () {
  //==============slider==================
  let $sliderBanner = $(".slider__img");
  $sliderBanner.flickity({
    cellAlign: "left",
    contain: true,
    imagesLoaded: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    lazyLoad: true,
    on: {
      ready: function () {},
      change: function (index) {
        let paragraph = $(".slider__paragraph-text");
        console.log("index", paragraph);
        paragraph.eq(index).addClass("active");
        paragraph.eq(index).siblings().removeClass("active");
      },
    },
  });

  $(".slider__control .prev").on("click", function () {
    $sliderBanner.flickity("previous");
  });
  $(".slider__control .next").on("click", function () {
    $sliderBanner.flickity("next");
  });
  //===========members=================
  let $carousel = $(".slider-members");
  $carousel.flickity({
    cellAlign: "left",
    contain: true,
    imagesLoaded: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    lazyLoad: 2,
    on: {
      ready: function () {},
      change: function (index) {},
    },
  });

  $(".members__control .prev").on("click", function () {
    $carousel.flickity("previous");
  });
  $(".members__control .next").on("click", function () {
    $carousel.flickity("next");
  });

  function scrollToElement() {
    let portfolio = $(".members");
    let about = $(".about");
    let articles = $(".project");
    let contact = $(".contact");
    let listMenu = $("header .container-fluid .menu li a");
    listMenu.each(function (index) {
      $(this).click(function () {
        if ($(this).text() === "portfolio") {
          console.log($(this).text());
          $([document.documentElement, document.body]).animate(
            { scrollTop: portfolio.offset().top - 200 },
            "2000"
          );
        }
        if ($(this).text() === "about") {
          console.log($(this).text());
          $([document.documentElement, document.body]).animate(
            { scrollTop: about.offset().top - 200 },
            "2000"
          );
        }
        if ($(this).text() === "articles") {
          console.log($(this).text());
          $([document.documentElement, document.body]).animate(
            { scrollTop: articles.offset().top - 120 },
            "2000"
          );
        }
        if ($(this).text() === "contact") {
          console.log($(this).text());
          $([document.documentElement, document.body]).animate(
            { scrollTop: contact.offset().top - 200 },
            "2000"
          );
        }
      });
    });
  }
  scrollToElement();
});
//Show menu
function showNavMenu() {
  console.log("Hello CFD");
  let nav = document.querySelector("body");
  nav.classList.toggle("menu-two");
}
//AOS lib
AOS.init();
