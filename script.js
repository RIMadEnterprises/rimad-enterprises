document.addEventListener("scroll", function() {
  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
