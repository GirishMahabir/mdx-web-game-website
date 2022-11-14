/*
    Form Validation Script
        - Keeps track of the invalidity messages for each form field.
        - Perform validity checks and inform front-end.
*/

function Validation(input) {
    // Array of invalid messages for each field.
    this.errors = [];
}

Validation.prototype = {
    addErrors() {
        // Add invalid messages to the array.
        this.errors.push(error);
    },
    getErrors() {
        // Return the invalid messages array.
        return this.errors.join('.\n');
    },
    getElement(forLabelName, line) {
        // Return the element associated with the field.
        return document.querySelector(
            `label[for=${forLabelName}] li:nth-child(${line})`
        );
    },
    setValidity(element, validity) {
        // Set the field's validity based on boolean parameter.
        if (validity) {
            this.getElement().classList.remove('invalid');
            this.getElement().classList.add('valid');
        } else {
            this.getElement().classList.remove('valid');
            this.getElement().classList.add('invalid');
        }
    },
    checkValidity(input) {
        // Check Email Field.
        emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.type === 'email') {
            if (!emailRegex.test(input.value)) {
                this.addErrors('Email syntax not valid.');
                let element = this.getElement('email', 1);
                this.setValidity(element, false);
            } else {
                // Remove invalid class.
                let element = this.getElement('email', 1);
                this.setValidity(element, true);
            }
        }
    }
};


// Perform validation on the form once typing is being done on a field.
// Get email input from field.
let emailField = document.getElementById('email');
// Create a new Validation object for the email field.
emailField.Validation = new Validation();
// Adding Event Listener to the email field.
emailField.addEventListener('keyup', function () {
    emailField.Validation.checkValidity(this);
});