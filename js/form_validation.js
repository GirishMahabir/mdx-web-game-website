function validate(field, regex) {
    /*
        Function to test and validate the input fields.
        @param field: The input field to be tested (element).
        @param regex: The regular expression to be used for testing.
    */
    if (regex.test(field.value)) {
        console.log(regex.test(field.value));
        field.style.border = '1px solid green'
    } else {
        field.style.border = '1px solid red'
    }
};

// Array of all the elements that need to be checked + regex for each
let elements = {
    email: {
        check: true,
        regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    },
    password: {
        check: true,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/
    },
    phone: {
        check: true,
        regex: /^\d{1}-\d{3}-\d{4}$/
    },
};

// for loop to check each element with the regex
for (let key in elements) {
    console.log(key);
    // check if element exists on page first:
    if (document.getElementById(key)) {
        if (elements[key].check) {
            // Get the element and add an event listener to it while passing the regex
            // and the element to the validate function.
            document.getElementById(key).addEventListener('keyup', function () {
                validate(document.getElementById(key), elements[key].regex);
            });
        }
    } else {
        continue;
    }
}