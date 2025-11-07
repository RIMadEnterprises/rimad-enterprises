const form = document.querySelector(".contact-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = document.getElementById("status");
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { Accept: "application/json" },
  });
  if (response.ok) {
    status.innerHTML = "✅ Message sent successfully!";
    form.reset();
  } else {
    status.innerHTML = "❌ Oops! There was an error.";
  }
});
