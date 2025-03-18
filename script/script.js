// main banner js
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");

    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".mySwiper .swiper-button-next",
        prevEl: ".mySwiper .swiper-button-prev",
        clickable: true
      },
      pagination: {
        el: ".mySwiper .swiper-pagination",
        type: "fraction",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loopAdditionalSlides: 1,
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
// ------------------------------------------------------------------

// best item js -------------------------------------------
    var swiper = new Swiper('.mySwiper_2', {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.mySwiper_2 .swiper-button-next',
        prevEl: '.mySwiper_2 .swiper-button-prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
      loop: true
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }
    // --------------------------------------------------------

    // 제품 소개란
    // 오른쪽 방향
    var swiper = new Swiper('.swiper-item, .swiper-item-right', {
      slidesPerView: 3,
      direction: getDirection(),
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
      scrollbar: {
        el: ".swiper-item .swiper-scrollbar",
      },
      loop: true
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }
    // 오른쪽 방향

    // 왼쪽 방향
    var swiper = new Swiper('.swiper-item, .swiper-item-left', {
      slidesPerView: 3,
      direction: getDirection(),
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
      scrollbar: {
        el: ".swiper-item .swiper-scrollbar",
      },
      loop: true
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }
    // 왼쪽 방향
    // 제품 소개란


    // 베스트리뷰------------
    var swiper = new Swiper('.swiper-review', {
      slidesPerView: 3,
      spaceBetween: 30,
      direction: getDirection(),
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    } 
    // 베스트리뷰------------ 

    // 오프라인스토어 소개 -----aos 소스 js
   
  // <!-- 오프라인 스토어 소개 ------ aos 소스 js -->

  // <!-- 이벤트 js -->
  
    var swiper = new Swiper('.swiper-event', {
      slidesPerView: 2,
      spaceBetween: 150,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-event .swiper-button-next',
        prevEl: '.swiper-event .swiper-button-prev',
      },
      loop: true,
    });

  // <!-- 이벤트 js -->