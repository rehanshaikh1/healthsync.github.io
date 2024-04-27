// Adjust scrolling position for section links
document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    let offsetTop = target.offsetTop;

    if (window.innerWidth >= 768) {
      offsetTop -= navbarHeight;
    }

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrolled = window.scrollY > 50; // Change the value as needed
  const navbarHeight = navbar.offsetHeight;
  const screenWidth = window.innerWidth; // Get the width of the window

  if(scrolled && screenWidth >= 768) { // Only add 'fixed-top' class if width >= 768px
    navbar.classList.add('fixed-top');
    document.body.style.transition = 'padding-top 0.3s ease-in-out'; // Add transition effect
    document.body.style.paddingTop = navbarHeight + 'px';
  } else {
    navbar.classList.remove('fixed-top');
    document.body.style.transition = 'none'; // Remove transition effect
    document.body.style.paddingTop = 0;
  }
});

const showOnPx = 500;
const backToTopButton = document.querySelector(".back-to-top");
const contentContainer = document.querySelector(".content-container"); // Select the container of your content

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("d-none");
  } else {
    backToTopButton.classList.add("d-none");
  }
});

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop);
      // Initialize Owl Carousel
      $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            600: {
              items: 3,
              nav: false
            },
            1000: {
              items: 4,
              nav: true,
              loop: false
            }
          }
        });
      });
