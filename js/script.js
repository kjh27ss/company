$(function(){
  const header = document.querySelector(".header");
  const dep2List = document.querySelectorAll(".dep2");
  const hmenu = document.querySelector(".mo_btn");
  const topBtn = document.querySelector(".top_btn");
  const langBtn = document.querySelector(".lang_w");
  const langItem = document.querySelector(".lang_w .list");

  header.addEventListener("mouseenter", function(){
    header.classList.add("a");

    dep2List.forEach(dep2 => {
      dep2.style.height = dep2.scrollHeight + "px";
    });
  });
  header.addEventListener("mouseleave", function(){
    header.classList.remove("a");

    dep2List.forEach(dep2 => {
      dep2.style.height = "0";
    });
  });

  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langBtn.classList.toggle("open");
  });

  document.addEventListener("click", () => {
    langBtn.classList.remove("open");
  });

  window.addEventListener("scroll", function () {
    if(window.scrollY > 50){
      header.classList.add("active");
    }else{
      header.classList.remove("active");
    }
  });

  // top_btn
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          topBtn.style.display = 'block';
      } else {
          topBtn.style.display = 'none';
      }
  });
  topBtn.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  });

  // main_slide
    var mainSw = new Swiper(".main_slider .main_mask", {
      speed:1000,
      rewind:true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".main_slider .main_pagi",
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                  '<span class="mid_bar"> / </span>' +
                  '<span class="' + totalClass + '"></span>';
        }
      },
      navigation: {
        nextEl: ".main_slider .next",
        prevEl: ".main_slider .prev",
      },
    });


  const mainConsultSwiper = new Swiper('.main_consult_slide .main_consult_mask', {
      a11y: false,
      slidesPerView: 4,
      spaceBetween: 40,
      speed: 1000,
      loop: false,
      rewind: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.main_consult_slide .progress_bar',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.main_consult_slide .arrow_btn.next',
        prevEl: '.main_consult_slide .arrow_btn.prev',
      },
      breakpoints: {
        1620: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        720: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        }
      },
    });

    // curser
    $('.index_wrap .more_cursor_wrap').mouseenter(function(){
      const $this = $(this);
      const cursorEl = $this.find('.more_cursor');

      cursorEl.addClass('act');
    });
    $('.index_wrap .more_cursor_wrap').mousemove(function(e){
      const $this = $(this);
      const cursorEl = $this.find('.more_cursor');
      const topPos = e.pageY - $this.offset().top;
      const leftPos = e.pageX - $this.offset().left;

      cursorEl.css({top: `${topPos}px`, left: `${leftPos}px`});
    });
    $('.index_wrap .more_cursor_wrap').mouseleave(function(){
      const $this = $(this);
      const cursorEl = $this.find('.more_cursor');

      cursorEl.removeClass('act');
    });

  // map
  var container = document.getElementById('map');

  var options = {
      center: new kakao.maps.LatLng(37.5665, 126.9780),
      level: 3
  };

  var map = new kakao.maps.Map(container, options);

  var markerPosition = new kakao.maps.LatLng(37.5665, 126.9780);

  var marker = new kakao.maps.Marker({
      position: markerPosition
  });

  marker.setMap(map);
})