<?php

include 'head.php'; # Include the common php head file.
include 'header.php'; # Include the common php header file.
include 'footer.php'; # Include the common php footer file.

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
$header->nav_bar(false, "ABOUT");

# Body content goes here.
echo "
    <!-- Body of the page  -->

    <div class='context-body-about'>
        <div class='tetris-body'>
            <img class='tetris-body' src='../assets/tetris_logo.png' alt='tetris_logo'>
        </div>
        <!-- text-box here -->
        <div class='text-box'>
            <p class='text-box form-font'>

                Tetris is played on a rectangular game board called a 'playfield',
                and the objective is to manipulate the falling tetrominoes (the
                game's pieces, which are made up of four square blocks each) to
                create horizontal lines without empty spaces. The player can move
                each tetromino left or right, rotate it 90 degrees clockwise, or
                make it fall faster. When a horizontal line of ten blocks is formed,
                it disappears, and any blocks above the deleted line fall to fill
                the space. The player can also speed up the descent of the
                tetrominoes by clearing several lines at once. The game ends when
                the stack of tetrominoes reaches the top of the playfield and no
                new tetrominoes are able to enter. The player can increase the
                speed of the game by increasing the level, which makes the tetrominoes
                fall faster and increases the number of lines needed to clear before
                the level increases. The player can also score points by clearing
                multiple lines at once or by clearing a tetromino immediately after
                it spawns. The game's scoring system is based on the number of lines
                cleared at once, the level, and the player's current score. The
                player can also clear lines by using special pieces called 'tetris'
                pieces, which are made up of four blocks arranged in the shape of a
                T. The game's name comes from the Greek numerical prefix tetra-
                (meaning 'four') and tennis, Pajitnov's favorite sport.
            </p>
        </div>
    </div>
";

# Create a new instance of the CommonFooter class.
$footer = new CommonFooter();
# Call the footer function.
$footer->footer();
