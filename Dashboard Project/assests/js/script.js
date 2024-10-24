// swiper slider initializer 

    var swiper = new Swiper(".card_slider", {
        //   slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1620: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 4,
            },
            480: {
                slidesPerView: 1,
                slidesPerView: 1,
            },
        },
    });


  
    
    
    
   		
