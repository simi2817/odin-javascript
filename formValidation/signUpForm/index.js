
let errorStatus = false;

const signUpFormBox = document.getElementById('signUpFormBox');
const generateForm = () => {
    signUpFormBox.style.display = 'block';
}

const closeForm = () => {
    signUpFormBox.style.display = 'none';
}

const email = document.getElementById('email');
const emailError = email.nextElementSibling;
email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
      } else {
        if (email.validity.valueMissing) {
            emailError.textContent = "You need to enter an email address.";
          } else if (email.validity.typeMismatch) {
            emailError.textContent = "Entered value needs to be an email address.";
          } else if (email.validity.tooShort) {
            emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
          }
          emailError.className = "error active";
      }
});

const password = document.getElementById('password');
const passwordError = password.nextElementSibling;
password.addEventListener('input', () => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "error";
      } else {
        if (password.validity.valueMissing)
            passwordError.textContent = "You need to enter a password.";
        else if (password.validity.patternMismatch) {
            passwordError.textContent = "Password should be min 8 character length and must contain capital, alphabets, number and wild characters.";
        }
          passwordError.className = "error active";
      }
});

const confirmPassword = document.getElementById
('retype-password');
const confirmPasswordError = confirmPassword.nextElementSibling;
confirmPassword.addEventListener('input', () => {
    if (confirmPassword.validity.valid) {
        confirmPasswordError.textContent = "";
        confirmPasswordError.className = "error";
      } else {
        if (confirmPassword.validity.valueMissing)
            confirmPasswordError.textContent = "Enter password again to confirm.";
        confirmPasswordError.className = "error active";
      }
});

const validatePassword = () => {
    if(password.value !== confirmPassword.value)
        confirmPasswordError.textContent = "Passwords do not match!";
}

const submitForm = document.getElementById('signupbtn');
submitForm.addEventListener('submit', (e) => {

    if(!email.validity.valid || !password.validity.valid || !confirmPassword.validity.valid) {
        e.preventDefault();
        errorStatus = true;
    }
    else
        errorStatus = false;
});

const showHighFive = () => {
    console.log('entered');
    if(!errorStatus) {
        signUpFormBox.style.display = 'none';
        const div = document.createElement('div');
        div.classList.add('high-five');
        const highFive = document.createElement('img');
        highFive.src = './images/high-five.gif';
        highFive.height = '500';
        div.appendChild(highFive);
        const text = document.createElement('p');
        text.textContent = "Congrats! Sign Up Complete!"
        div.appendChild(text);
        document.body.appendChild(div);
    }
}