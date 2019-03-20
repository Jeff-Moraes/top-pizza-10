
function initScrollSuave () {
  const LinksInternos = document.querySelectorAll('.links a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    // não funciona no safari
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });


    // forma alternativa, não funciona no safari
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: 'smooth',
    // });
  }

  LinksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

function initAnimaScroll() {
  const sectionsScroll = document.querySelectorAll('.js-scroll');
  if (sectionsScroll.length) {
    const halfWindow = window.innerHeight * 0.6;
    function animaScroll() {
      sectionsScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - halfWindow) < 0;
        if(isSectionVisible) {
          section.classList.add('ativo');
        }
      })
    }
    animaScroll()

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimaScroll();