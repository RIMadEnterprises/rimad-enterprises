
// Minimal JS for form submission and small interactions
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.textContent = 'Sending…';
    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
      .then(res => {
        if (res.ok) {
          status.textContent = 'Message sent — thank you!';
          form.reset();
        } else {
          status.textContent = 'Submission failed.';
        }
      }).catch(()=> status.textContent = 'Network error.');
  });
}
