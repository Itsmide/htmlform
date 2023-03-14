
  const button = document.querySelector(".mybtn");

  const phone = document.querySelector("#phone");

  var pass_1 = document.querySelector("#pass1");

  var pass_2 = document.querySelector("#pass2");

  let form = document.querySelector("#formy");


  pass_1.addEventListener("input", () => {
    if (pass_1.validity.tooLong || pass_1.validity.tooShort || pass_1.validity.valueMissing) {
      pass_1.setCustomValidity("Password must be at least 8 or more characters.");
      pass_1.reportValidity();
    }
    else {
      pass_1.setCustomValidity("");
    }
  });

  pass_2.addEventListener("input", () => {
    if (pass_2.validity.tooLong || pass_2.validity.tooShort || pass_2.validity.valueMissing) {
      pass_2.setCustomValidity("Confirm Password must be at least 8 or more characters.");
      pass_2.reportValidity();
    }
    else {
      pass_2.setCustomValidity("");
    }
  });


  button.addEventListener('click', function(event) {
    event.preventDefault();

    var phoneNum = document.querySelector("#phone").value;

    let logo = document.querySelector("#logo");

    let check = [];
    let check_2 = [];

    let airtel = ["0701", "0708", "0802", "0808", "0812", "0901", "0902", "0904", "0907"];
    let mtn = ["0703", "0704", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906", "0913"];
    let glo = ["0705", "0805", "0807", "0811", "0815", "0905", "0915"];
    let etisalat = ["0809", "0817", "0818", "0909", "0908"];

    const first_iv = String(phoneNum).slice(0, 4);
    const first_v = String(phoneNum).slice(0, 5);

    check.push(first_iv);
    check_2.push(first_v);

    if (check[0] == "" || check_2[0] == "") {
      alert("No phone number entered");
    }
    else if (mtn.indexOf(check[0]) !== -1 || airtel.indexOf(check[0]) !== -1 || glo.indexOf(check[0]) !== -1 ||
      etisalat.indexOf(check[0]) !== -1 || check_2[0] == "07025" || check_2[0] == "07026") {

      var pass1 = document.querySelector("#pass1").value;

      var pass2 = document.querySelector("#pass2").value;

      const p1 = String(pass1);
      const p2 = String(pass2);

      let password1 = [];
      let password2 = [];

      password1.push(p1);
      password2.push(p2);

      if (password1[0] == password2[0]) {
        if (password1[0] == "" || password2[0] == "") {
          alert("Please enter Password!")
        }
        else if (password1[0].length < 8 || password2[0].length < 8) {
          alert("Password is too Short!");
        }
        else {
          const firstNameField = document.getElementById("firstname");
          const lastNameField = document.getElementById("lastname");
          const userNameField = document.getElementById("username");
          const stateField = document.getElementById("state");
          const countryField = document.getElementById("country");
          const genderField = document.getElementById("gender");
          const emailField = document.getElementById("email");

          if (firstNameField.value == false) {
            alert("Please fill the firstname field")
          }
          else if (lastNameField.value == false) {
            alert("Please fill the lastname field")
          }
          else if (userNameField.value == false) {
            alert("Please fill the username field")
          }
          else if (stateField.value == false) {
            alert("Please fill the state field")
          }
          else if (countryField.value == false) {
            alert("Please fill the country field")
          }
          else if (genderField.value == false) {
            alert("Please fill the gender field")
          }
          else if (emailField.value == false) {
            alert("Please fill the email field")
          }
          else {
            alert("You submitted the form!");
            form.reset();
            logo.src = './images/question.jpg';
          }
        }
      }
      else {
        alert("Password and Confirm Password are not the same.");
      }
    }
    else {
      alert("Phone number doesn't match a valid sim service provider");
    }
  });


  phone.oninput = function() {

    var phoneNum = document.querySelector("#phone").value;

    let logo = document.querySelector("#logo");

    let check = [];
    let check_2 = [];

    let airtel = ["0701", "0708", "0802", "0808", "0812", "0901", "0902", "0904", "0907"];
    let mtn = ["0703", "0704", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906", "0913"];
    let glo = ["0705", "0805", "0807", "0811", "0815", "0905", "0915"];
    let etisalat = ["0809", "0817", "0818", "0909", "0908"];

    const first_iv = String(phoneNum).slice(0, 4);
    const first_v = String(phoneNum).slice(0, 5);

    check.push(first_iv);
    check_2.push(first_v);

    if (check_2[0] == "07025" || check_2[0] == "07026") {
      console.log("MTN");
      logo.src = './images/mtn.png';
    }
    else if (airtel.indexOf(check[0]) !== -1) {
      console.log("Airtel");
      logo.src = './images/Airtel.png';
    }
    else if (mtn.indexOf(check[0]) !== -1) {
      console.log("MTN");
      logo.src = './images/mtn.png';
    }
    else if (glo.indexOf(check[0]) !== -1) {
      console.log("GLO");
      logo.src = './images/glo.png';
    }
    else if (etisalat.indexOf(check[0]) !== -1) {
      console.log("ETISALAT");
      logo.src = './images/etisalat.png';
    }
    else {
      logo.src = './images/question.jpg';
    }
  };
