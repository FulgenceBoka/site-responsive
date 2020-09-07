// La récuperation du formulaire
let form = document.getElementById("contactFormData");

// ***********************   FIRST NAME  **********************************

// Ecouter la modification de first name
form.inputName.addEventListener("change", function () {
  validName(this);
});

const validName = function (inputName) {
  //   recuperaton de la balise small
  let small = inputName.nextElementSibling;

  // on test la regExp
  if (/[a-zA-Z0-9]/.test(inputName.value)) {
    small.textContent = "nom valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.textContent = "nom invalide";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

// ***********************   EMAIL  **********************************

// Ecouter la modification de l'email
form.inputEmail.addEventListener("change", function () {
  validEmail(this);
});

const validEmail = function (inputEmail) {
  //   creation du l'expression reguliere pour l'emal
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  //   recuperaton de la balise small
  let small = inputEmail.nextElementSibling;

  // on test la regExp
  if (emailRegExp.test(inputEmail.value)) {
    small.textContent = "Adresse validée";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.textContent = "Adresse non validée";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

// ***********************   PASSWORD  **********************************

// Ecouter la modification du password
form.textarea.addEventListener("change", function () {
  validTextarea(this);
});

const validTextarea = function (textarea) {
  //   recuperation de la balise small
  let small = textarea.nextElementSibling;
  let msg; // le message a afficher
  let valid = false;

  // password > 3 caracteres
  if (textarea.value.length < 3) {
    msg = "Le message doit contenir au moins 3 caracteres";
  } else {
    //   password  est valide
    valid = true;
    msg = "Le mot de passe est valide";
  }

  //   affichage du message
  if (valid) {
    //   password valide
    small.textContent = msg;
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    //   password non valide
    small.textContent = msg;
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

// ********************     BUTTON      **********************

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validEmail(form.inputEmail) && validPassword(inputPassword)) {
    form.submit();
  }
});
