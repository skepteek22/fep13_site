const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  });



document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("dark-bg");
            header.classList.remove("transparent-bg");
        } else {
            header.classList.remove("dark-bg");
            header.classList.add("transparent-bg");
        }
    });
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.el');
for (let elm of elements) {
  observer.observe(elm);
}

window.onload = function() {
  window.scrollTo(0, 0);
  
}



