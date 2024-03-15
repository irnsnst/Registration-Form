document.addEventListener("DOMContentLoaded", function () {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  const sign_up_form = document.querySelector(".sign-up-form");

  // Function to add sign-up mode
  function addSignUpMode() {
    container.classList.add("sign-up-mode");
  }

  // Function to remove sign-up mode
  function removeSignUpMode() {
    container.classList.remove("sign-up-mode");
  }

  // Event listener for sign-up button
  sign_up_btn.addEventListener("click", () => {
    addSignUpMode();
  });

  // Event listener for sign-in button
  sign_in_btn.addEventListener("click", () => {
    removeSignUpMode();
  });

  // Event listener for sign-up form submission
  sign_up_form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const username = document.querySelector(".sign-up-form input[name='signup-username']").value;
    const email = document.querySelector(".sign-up-form input[name='signup-email']").value;
    const password = document.querySelector(".sign-up-form input[name='signup-password']").value;

    // Store input values in sessionStorage
    sessionStorage.setItem("signup-username", username);
    sessionStorage.setItem("signup-email", email);
    sessionStorage.setItem("signup-password", password);

    // Redirect to registration successful page
    window.location.href = "registration.html";
  });
});
