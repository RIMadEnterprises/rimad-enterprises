// Reveal and scroll behavior
function reveal(){document.querySelectorAll('.fade').forEach(function(el){var r=el.getBoundingClientRect();if(r.top < window.innerHeight - 80) el.classList.add('visible');});}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Smooth explore button scroll
var explore = document.getElementById('exploreBtn');
if(explore){ explore.addEventListener('click', function(e){ e.preventDefault(); document.querySelector('#about').scrollIntoView({behavior:'smooth'}); }); }

// Contact form ajax feedback (Formspree)
var contactForm = document.getElementById('contactForm');
if(contactForm){ contactForm.addEventListener('submit', function(e){ e.preventDefault(); var status = document.getElementById('formStatus'); fetch(contactForm.action, {method:'POST', body: new FormData(contactForm), headers:{'Accept':'application/json'}}).then(function(res){ if(res.ok){ status.textContent='✅ Message sent — thank you!'; contactForm.reset(); } else { status.textContent='❌ Submission failed.'; } }).catch(function(){ status.textContent='❌ Network error.'; }); }); }