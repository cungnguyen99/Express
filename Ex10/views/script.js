document.addEventListener('DOMContentLoaded', function () {
    var nut = document.querySelectorAll('.chuyensilde ul li');
    var slides=document.querySelectorAll('.cacslide ul.wrapper_li>li');
    var tg=setInterval(function(){
        autosilde();
    },5000);
    for (let index = 0; index < nut.length; index++) {
        nut[index].addEventListener('click', function (){
            for (let index = 0; index < nut.length; index++) {
                nut[index].classList.remove('kichhoat');
            }
            this.classList.add('kichhoat');
            var nutkichhoat=nut[index];
            var vtrinut=0;
            for (vtrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vtrinut++) {}
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                slides[vtrinut].classList.add('active');
                
            }
        })
    }

    function autosilde(){
            var vtrislide=0;
            var slidehientai=document.querySelector('.cacslide ul.wrapper_li>li.active');
            for (vtrislide = 0; slidehientai = slidehientai.previousElementSibling; vtrislide++) {}
            if(vtrislide < slides.length-1){
            for (let i = 0; i < slides.length; i++) {
               slides[i].classList.remove('active');
               nut[i].classList.remove('kichhoat');
            }
            slides[vtrislide].nextElementSibling.classList.add('active');
            nut[vtrislide].nextElementSibling.classList.add('kichhoat');
        }else{
            vtrislide=0
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                nut[i].classList.remove('kichhoat');
             }
             slides[vtrislide].classList.add('active');
             nut[vtrislide].classList.add('kichhoat');
        }
    }

    var menu=document.querySelector('nav');
    var burger=document.querySelector('.burger')
    var list_item=document.querySelector('.nav__list');
    let count=1;
    burger.addEventListener('click',function(){
      count++;
      if(count%2==0){
        menu.classList.add('nav__background');
        list_item.classList.remove('nav__list--hidden')
        list_item.classList.add('nav__list--active ')
      }if(count%2!=0){
        menu.classList.remove('nav__background');
        list_item.classList.add('nav__list--hidden')
        list_item.classList.remove('nav__list--active ')
      }
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText : ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"]
    }) 
}, false)




