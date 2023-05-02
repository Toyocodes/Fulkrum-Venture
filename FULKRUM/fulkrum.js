
// for menu button
var menubar = document.getElementById('menubar');
var navbar = document.getElementById('navbar');
var faTimes = document.getElementById('fa-times') 
    menubar.addEventListener ('click', function(){
           
        navbar.classList.toggle('mobile-menu');
        
    })
function closeMenu(){
    navbar.classList.remove('mobile-menu');
}
// for fixed navbar
window.onscroll = () =>{

    menubar.classList.remove('fa-times');
    navbar.classList.remove('mobile-menu');
  
    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('mobile-menu');
    }else{
      document.querySelector('#scroll-top').classList.remove('mobile-menu');
    }
  
    // for arrow
//     if(scrollHeight > 500){
//         navlinks.classList.add('mobile-menu');
//     }
//     else{
//         navlinks.classList.remove('mobile-menu');
//     }
  }

// for slider
var slideImg = document.getElementById('slideImg');
var images = new Array(
            'people-talkie.jpg',
            'talkie-favicon.png',
            'yellow-talkie.png'
        )
var len= images.length;
var i = 0;

function slider(){
    if (i>len-1){
    i=0
    }
    slideImg.src = images[i];
    i++

    setTimeout('slider()', 2000);
    }

    // slider testimonial
    // $(document).ready(function(){
    //     $('.all-testimonials').slick({
    //         slidesToShow: 6,
    //         slidesToScroll:1,
    //         autoplay: true,
    //         autoplaySpeed: 1500,
    //         arrows: false,
    //         dots:false,
    //         pauseOnHover:false,
    //         responsive: [{
    //             breakpoint: 768,
    //             setting:{
    //                 slidesToShow: 4
    //             }
    //         },{
    //             breakpoint: 520,
    //             setting:{
    //                 slideToShow: 3
    //             }
    //         }]
    //     })
    // })
    // slider testimonial ends


    var swiper = new Swiper('.review-slider', {
        spaceBetween:10,
        centeredSlides:true,
        autoplay:{
            delay: 1700,
            disableOnInteraction: false,
        },
        loop:true,
        breakpoints:{
            0:{
                slidesPerView:2,
            },
            640:{
                slidesPerView:2,
            },
            768:{
                slidesPerView:2,
            },
            1024:{
                slidesPerView:3,
            },
        }
    })

  
    // for faq
    var faq = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
} 

// var faqs = document.querySelectorAll('.faq-question');

// faqs.forEach(function(faqs){
//     faqs.addEventListener('click',function(){
//         faqs.classList.toggle('.active');

//         var body = this.nextElementSibling;

//         if(body.style.display=== 'block'){
//             body.style.display = 'none';
//         }
//         else{
//             body.style.display = 'block';
//         }
//     })
// })


AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });

//footer

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();