function openMenu(){
  document.getElementById("sideMenu").classList.add("active");
  document.getElementById("overlay").classList.add("show");
}

function closeMenu(){
  document.getElementById("sideMenu").classList.remove("active");
  document.getElementById("overlay").classList.add("show")
}

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView:1
    },

    768: {
      slidesPerView:2
    },

    1024: {
      slidesPerView:3
    }
  }
});

const navBar = document.querySelector(".navBar")

window.addEventListener("scroll",()=>{
    const pageSroll = window.scrollY
    const navbarHeight = navBar.getBoundingClientRect().height

    if(pageSroll > navbarHeight){
        navBar.classList.add("stickyNavBar")
    }else{
        navBar.classList.remove("stickyNavBar")
    }
})
