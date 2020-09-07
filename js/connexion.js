// La récuperation du formulaire
let form = document.getElementById("loginFormData");

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

  //   recuoeraton de la balise small
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
form.inputPassword.addEventListener("change", function () {
  validPassword(this);
});

const validPassword = function (inputPassword) {
  //   recuperation de la balise small
  let small = inputPassword.nextElementSibling;
  let msg; // le message a afficher
  let valid = false;

  // password > 3 caracteres
  if (inputPassword.value.length < 3) {
    msg = "Le mot de passe doit contenir au moins 3 caracteres";
  }
  //   password au moins 1 majuscule
  else if (!/[A-Z]/.test(inputPassword.value)) {
    msg = "Le mot de passe doit contenir au moins 1 majuscule";
  }
  //   password au moins 1 minuscule
  else if (!/[a-z]/.test(inputPassword.value)) {
    msg = "Le mot de passe doit contenir au moins 1 minuscule";
  }
  //   password au moins 1 chiffre
  else if (!/[0-9]/.test(inputPassword.value)) {
    msg = "Le mot de passe doit contenir au moins 1 chiffre";
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
