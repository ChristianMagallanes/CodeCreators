function servicios() {
  let seccion = document.getElementById("servicios");
  seccion.scrollIntoView({ behavior: "smooth" });
}
function about() {
  let seccion = document.getElementById("sobremi");
  seccion.scrollIntoView({ behavior: "smooth" });
}
const verPlanesBtn = document.getElementById("ver-planes-btn");

verPlanesBtn.addEventListener("click", function(){
  window.location.href = './pages/planes.html';
});




var bg = document.querySelector('.item-bg');
var planes = document.querySelectorAll('.planes');

function cLog(content) {
    console.log(content);
}

if (window.innerWidth > 800) {
    planes.forEach(function (plane) {
        plane.addEventListener('mouseover', function () {
            var x = plane.getBoundingClientRect().left;
            var y = plane.getBoundingClientRect().top;
            var width = plane.getBoundingClientRect().width;
            var height = plane.getBoundingClientRect().height;

            document.querySelectorAll('.planes').forEach(function (otherPlane) {
                otherPlane.classList.remove('active');
            });

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
            bg.classList.add('active');
            plane.classList.add('active');
        });

        plane.addEventListener('mouseleave', function () {
            bg.classList.remove('active');
            plane.classList.remove('active');
        });
    });
}

var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');
            var sliderItem = activeItem.querySelector('.planes');

            document.querySelectorAll('.planes').forEach(function (plane) {
                plane.classList.remove('active');
            });

            sliderItem.classList.add('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
            bg.classList.add('active');
        }
    }
});

swiper.on('touchEnd', function () {
    document.querySelectorAll('.planes').forEach(function (plane) {
        plane.classList.remove('active');
    });

    var activeSlide = document.querySelector('.swiper-slide-active');
    var activeSliderItem = activeSlide.querySelector('.planes');

    activeSliderItem.classList.add('active');
});

swiper.on('slideChange', function () {
    document.querySelectorAll('.planes').forEach(function (plane) {
        plane.classList.remove('active');
    });
});

swiper.on('slideChangeTransitionEnd', function () {
    document.querySelectorAll('.planes').forEach(function (plane) {
        plane.classList.remove('active');
    });

    var activeSlide = document.querySelector('.swiper-slide-active');
    var activeSliderItem = activeSlide.querySelector('.planes');

    activeSliderItem.classList.add('active');
});


