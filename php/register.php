<?php

include 'common/head.php'; # Include the common php head file.
include 'common/header.php'; # Include the common php header file.
include 'common/footer.php'; # Include the common php footer file.

# Create a new instance of the CommonHead class.
$head = new CommonHead();
# Call the html_declaration function.
$head->html_declaration();
# Call the html_head function.
$head->html_head('Tetris - Register', true);

# Create a new instance of the CommonHeader class.
$header = new CommonHeader();
# Call the nav_bar function.
# We want the full navigation bar, so we only need to pass on the 1st parameter.
$header->nav_bar(false, 'REGISTER');

# Body content goes here.
echo "

    <!-- Body of the page  -->
    <div class='context-body'>

        <div class='tetris-logo-main'>
            <img src='../assets/tetris_logo.png' alt='tetris_tetris-logo'>
        </div>

        <div class='login-form'>
            <!-- 4 Text fields, 2 column, pill buttons -->
            <form >
                <div>

                    <label class='form-font right-tab' for='username'>USERNAME: </label> <br>
                    <input class='form-input tab-130' type='text' id='username' name='username' placeholder='USERNAME' required>

                    <ul class='input-requirements form-font-requirements'>

                    </ul>
                    
                    <label class='form-font right-tab' for='email'>EMAIL ADDRESS: </label>
                    <input class='form-input' type='email_address' id='email' name='email' placeholder='Email Address'>

                    <ul class='input-requirements form-font-requirements'>
                        <li>Must be a valid email address.</li>
                        <li>example@example.com</li>
                    </ul>

                    <label class='form-font right-tab' for='phone_number'>PHONE NUMBER: </label>
                    <input class='form-input' type='phone_number' id='phone' name='phone_number' placeholder='Phone Number' required>

                    <ul class='input-requirements form-font-requirements'>
                        <li>Must be a valid phone number.</li>
                        <li>5-555-5555</li>

                    </ul>

                    <label class='form-font' for='password'>PASSWORD: </label> <br>
                    <input class='form-input' type='password' id='password' name='password' placeholder='Password' required>
                    <ul class='input-requirements form-font-requirements'>
                        <li class='password-requirements-item'>Must be at least 8 characters long</li>
                        <li class='password-requirements-item'>Must contain at least 1 uppercase letter</li>
                        <li class='password-requirements-item'>Must contain at least 1 lowercase letter</li>
                        <li class='password-requirements-item'>Must contain at least 1 number</li>
                        <li class='password-requirements-item'>Must contain at least 1 special character</li>
                    </ul>
                </div>
                <div class='register-btn'>
                    <button class='form-font register-button' id='registerButton' type='button' class='btn'>Register</button>
                </div>
            </form>
        </div>
    </div>
    
<!-- JS Scripts -->
<script src='../../js/form_validation.js'></script>

";

# Create a new instance of the CommonFooter class.
$footer = new CommonFooter();
# Call the footer function.
$footer->footer();
