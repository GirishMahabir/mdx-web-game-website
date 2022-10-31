<?php

include 'common/head.php'; # Include the common php head file.
include 'common/header.php'; # Include the common php header file.
include 'common/footer.php'; # Include the common php footer file.

# Create a new instance of the CommonHead class.
$head = new CommonHead();
# Call the html_declaration function.
$head->html_declaration();
# Call the html_head function.
$head->html_head('Tetris - Login', true);

# Create a new instance of the CommonHeader class.
$header = new CommonHeader();
# Call the nav_bar function.
# We want the full navigation bar, so we only need to pass on the 1st parameter.
$header->nav_bar(false, '');

# Body content goes here.
echo "
    <!-- Body of the page  -->
    <div class='context-body'>

        <div class='tetris-logo-main'>
            <img src='../assets/tetris_logo.png' alt='tetris_tetris-logo'>
        </div>

        <div class='login-form'>
            <!-- 4 Text fields, 2 column, pill buttons -->
            <form>
                <div>
                    <label class='form-font tab-40 ' for='user_id'>Username/Email</label>
                    <label class='form-font tab-130' for='password'>Password</label><br>
                    <input class='form-input' type='text' id='user_id' name='user_id' placeholder='Username/Email'>
                    <input class='form-input' type='password' id='password' name='password' placeholder='Password'>
                </div>
                <br>
                <div class='login-btn'>
                    <button class='form-font register-button' type='submit' class='btn'>Login</button>
                </div>
                <br>
                <div class='register-text'>
                    <a class='form-font rm-url create-account' href='register.php'>No Account, Create
                        Account?</a>
                </div>
            </form>
        </div>
    </div>
";

# Create a new instance of the CommonFooter class.
$footer = new CommonFooter();
# Call the footer function.
$footer->footer();
