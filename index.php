<?php

include 'php/common/head.php'; # Include the common php head file.
include 'php/common/header.php'; # Include the common php header file.
include 'php/common/footer.php'; # Include the common php footer file.

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
$header->nav_bar(true, "HOME");

# Body content goes here.
echo "
    <!-- Body of the page  -->
    <div class='context-body'>
        <div class='tetris-logo-main'>
            <img src='../assets/tetris_logo.png' alt='tetris_tetris-logo'>
        </div>

        <div class='main-welcome-text'>
            <div class='main-page-body-font'>WELCOME TO THE TETRIS</div>
            <br>
            <div class='main-page-body-font'>WORLD</div>
            <br> <br> <br>
            <button class='main-page-play-button'>
                <a class='main-page-play-button rm-url' href='php/game.php'>PLAY</a>
            </button>
            <br>
        </div>
    </div>
";

# Create a new instance of the CommonFooter class.
$footer = new CommonFooter();
# Call the footer function.
$footer->footer();
