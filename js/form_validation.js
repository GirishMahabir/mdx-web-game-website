function validate(field, regex) {
    /*
        Function to test and validate the input fields.
        @param field: The input field to be tested (element).
        @param regex: The regular expression to be used for testing.
    */
    if (regex.test(field.value)) {
        field.style.border = '1px solid green'
    } else {
        field.style.border = '1px solid red'
    }
};

function validateForm(elements) {
    /*
        Function to validate the form.
        @param elements: The array of elements to be checked.
    */
    this.elements = elements;

    // for loop to check each element with the regex
    for (let key in elements) {
        // check if element exists on page first:
        if (document.getElementById(key)) {
            if (elements[key].check) {
                // Get the element and add an event listener to it while passing the regex
                // and the element to the validate function.
                document.getElementById(key).addEventListener('keyup', function () {
                    validate(document.getElementById(key), elements[key].regex);
                    // if the regex passes, set the validated property to true
                    if (elements[key].regex.test(document.getElementById(key).value)) {
                        elements[key].validated = true;
                    } else {
                        elements[key].validated = false;
                    }
                });
            }
        } else {
            continue;
        }
    }
};

function registerButton(elements) {
    /*
        Function to check if all the elements are validated.
        If they are, save all user details in an array and save it in local storage.

        @param elements: The array of elements to be checked.
    */

    // Get the register button
    let registerButton = document.getElementById('registerButton');

    // Add an event listener to the button
    registerButton.addEventListener('click', function () {
        // Check if all the elements are validated
        let validated = true;
        for (let key in elements) {
            if (elements[key].validated === false) {
                validated = false;
            }
        }

        // If all the elements are validated, save the user details in local storage
        if (validated) {
            // Get the user details
            let username = document.getElementById('username').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            let phone = document.getElementById('phone').value;

            // Create an object with the user details
            let user = {
                username: username,
                password: password,
                phone_number: phone,
                // score: Math.floor(Math.random() * 100),
                score: 0,
                level: 1,
                lines: 0,
                logged_in: false
            };

            // Check if local storage is supported
            if (typeof (Storage) !== 'undefined') {
                // Check if username key already exists.
                if (localStorage.getItem(username)) {
                    // If it does, alert the user and redirect to login page.
                    alert('Username already exists. Please login.');
                    window.location.href = 'login.php';
                } else {
                    // Save the user details in local storage
                    localStorage.setItem(email, JSON.stringify(user));
                    // Redirect the user to the login page
                    window.location.href = 'login.php';
                }
            } else {
                console.log('Sorry, your browser does not support Web Storage...');
            }

        } else {
            alert('Please fill in all the fields correctly');
        }
    });

}


function loginButton(elements) {
    /*
        Function to check if all the elements that are required are validated.
        If they are, check if the username and password match the details in local storage.
        If they do, redirect the user to the game page.
    
        @param elements: The array of elements to be checked.
    */

    // Set phone - validation to true, since it is not required on the login page.
    elements.phone.validated = true;

    // Get the login button
    let loginButton = document.getElementById('loginButton');

    // Add an event listener to the button
    loginButton.addEventListener('click', function () {
        // Check if all the elements are validated
        let validated = true;
        for (let key in elements) {
            if (elements[key].validated === false) {
                validated = false;
                alert('Please fill in all the fields correctly');
            }
        }

        // If all the elements are validated, 
        // check if the username and password match the details in local storage
        if (validated) {
            // Get the username and password
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;

            // Check if local storage is supported
            if (typeof (Storage) !== 'undefined') {
                // Check if email key exists.
                if (localStorage.getItem(email)) {
                    // If it does, get the user details from local storage
                    let user = JSON.parse(localStorage.getItem(email));

                    // Check if the password matches the password in local storage
                    if (password === user.password) {
                        // Set the logged_in property to true.
                        user.logged_in = true;
                        // Save the user details in local storage
                        localStorage.setItem(email, JSON.stringify(user));
                        // If it does, redirect the user to the game page
                        window.location.href = 'game.php';
                    } else {
                        alert('Incorrect password');
                    }
                }
            } else {
                console.log('Sorry, your browser does not support Web Storage...');
            }
        }
    });
}

// On the 1st load of the page, set all user_logged_in properties to false
function setAllUsersLoggedOut() {
    // Check if local storage is supported
    if (typeof (Storage) !== 'undefined') {
        // Get all the keys in local storage
        let keys = Object.keys(localStorage);
        // Loop through the keys
        for (let i = 0; i < keys.length; i++) {
            // Get the user details
            let user = JSON.parse(localStorage.getItem(keys[i]));
            // Set the logged_in property to false
            user.logged_in = false;
            // Save the user details in local storage
            localStorage.setItem(keys[i], JSON.stringify(user));
        }
    } else {
        console.log('Sorry, your browser does not support Web Storage...');
    }
}

function main() {
    // Array of all the elements that need to be checked + regex for each
    let elements = {
        email: {
            check: true,
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            validated: false
        },
        password: {
            check: true,
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
            validated: false
        },
        phone: {
            check: true,
            regex: /^\d{1}-\d{3}-\d{4}$/,
            validated: false
        },
    };
    validateForm(elements);
    // if user on register page:
    if (document.getElementById('registerButton')) {
        setAllUsersLoggedOut();
        registerButton(elements);
    }
    if (document.getElementById('loginButton')) {
        setAllUsersLoggedOut();
        loginButton(elements);
    }
}

main(); 