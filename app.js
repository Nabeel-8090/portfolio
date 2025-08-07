(function () {
  [...document.querySelectorAll(".control")].forEach(button => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    })
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  })
})();


const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbw0u4Pj3cVtewWWH0vFkqVW0HevJZq3wMx3ZSNHLNYSXbLs8KPfCZhP3lDN3GiN4bboGw/exec", {
    method: "POST",
    body: formData,
  })
    .then(response => response.text())
    .then(data => {
      // success popup
      alert("✅ Your message has been sent successfully!");
      form.reset(); // form reset
    })
    .catch(error => {
      console.error("Error!", error.message);
      alert("❌ Something went wrong. Try again.");
    });
});

