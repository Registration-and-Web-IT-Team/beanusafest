document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.querySelector('.about');

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      if (isElementInViewport(aboutSection)) {
        aboutSection.classList.add('animate__animated', 'animate__fadeInUp');
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll);
  });
  document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.querySelector('.about');

    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    observer.observe(aboutSection);
  });
