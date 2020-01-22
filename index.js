let form = document.querySelector("form");
let emailInput = document.querySelector(".email-input");
let errorMessage = document.querySelector(".error-message");

let validEmail = email => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return false;
  }
};

let handleSubmit = event => {
  event.preventDefault();
  if (validEmail(emailInput.value)) {
    // Add hidden class to error message
    //Remove border-danger from emailInput if it exists
    if (emailInput.classList.contains("error-border")) {
      emailInput.classList.remove("error-border");
    }
  } else {
    // Remove hidden class from error message if it exists
    // Add border-danger to emailInput
    if (!emailInput.classList.contains("error-border")) {
      emailInput.classList.add("error-border");
    }
  }
};

form.onsubmit = handleSubmit;
