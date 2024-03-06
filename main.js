let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let form = document.getElementById("contactForm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let address = document.getElementById("address");
let country = document.getElementById("country");
let message = document.getElementById("message");
let contactSelectBoxes = document.getElementsByName("receive");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

form.addEventListener("submit", handleForm);
function handleForm(event) {
  let contactDetails = {};
  event.preventDefault();
  document.getElementById("successMessage").style.display = "block";

  contactDetails["first name"] = firstName.value;
  contactDetails["last name"] = lastName.value;
  contactDetails["email"] = email.value;
  contactDetails["address"] = address.value;
  contactDetails["country"] = country.value;
  if (message.value) {
    contactDetails["message"] = message.value;
  }

  let receiveForm = [];
  for (let i = 0; i < contactSelectBoxes.length; i++) {
    if (contactSelectBoxes[i].checked === true) {
      receiveForm.push(contactSelectBoxes[i].value);
    }
  }
  contactDetails["receive form"] = receiveForm;
  console.log(contactDetails);
  setTimeout(function () {
    document.getElementById("successMessage").style.display = "none";
  }, 3000);
  clearForm();
}

const clearForm = () => {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  address.value = "";
  country.value = "";
  message.value = "";
  for (let i = 0; i < contactSelectBoxes.length; i++) {
    if (contactSelectBoxes[i].checked === true) {
      contactSelectBoxes[i].checked = false;
    }
  }
};
