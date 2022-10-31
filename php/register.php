<?php

include 'common/head.php'; # Include the common php head file.
include 'common/header.php'; # Include the common php header file.
include 'common/footer.php'; # Include the common php footer file.

# Create a new instance of the CommonHead class.
$head = new CommonHead();
# Call the html_declaration function.
$head->html_declaration();
# Call the html_head function.
$head->html_head('Tetris - Home', true);

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
                    <label class='form-font tab-130' for='phone_number'>Phone Number</label><br>
                    <input class='form-input' type='text' id='user_id' name='user_id' placeholder='Username/Email'>
                    <input class='form-input' type='phone_number' id='phone_number' name='phone_number'
                        placeholder='Phone Number'>
                </div>
                <br> <br> <br>
                <div>
                    <label class='form-font tab-80' for='password'>Password</label>
                    <label class='form-font tab-180' for='address'>Address</label><br>
                    <input class='form-input' type='password' id='password' name='password' placeholder='Password'>
                    <input class='form-input' type='text' id='address' name='address' placeholder='Address'>
                </div>
                <br> <br>
                <div class='register-btn'>
                    <button class='form-font register-button' type='submit' class='btn'>Register</button>
                </div>

            </form>
        </div>
    </div>
";

# Create a new instance of the CommonFooter class.
$footer = new CommonFooter();
# Call the footer function.
$footer->footer();

?>