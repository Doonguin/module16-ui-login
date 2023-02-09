const email = document.getElementsByTagName('input')[0];
const pass = document.getElementsByTagName('input')[1];
const login_button = document.getElementsByTagName('input')[2];

// function for checking if the fields are filled in
const filled = (mail, password) => {
    if (mail.value == "" || mail.value.indexOf("@") < 0 || mail.value.indexOf(".") < 0) {
        password.removeAttribute('style');
        return mail;
    }

    if (password.value == "") {
        mail.removeAttribute('style');
        return password;
    }

    mail.removeAttribute('style');
    password.removeAttribute('style');

    return true;
}

// Use the function
login_button.addEventListener('click', () => {
    const filledIn = filled(email, pass);
    let el;

    if (filledIn != true) {
        filledIn.style.border = "2px solid red";

        if (filledIn.type == "email") {
            el = "email";
        } else {
            el = "password";
        }

        filledIn.placeholder = `Please fill in an ${el}!`;
    }
});