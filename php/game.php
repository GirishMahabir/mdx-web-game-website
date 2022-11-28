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
$header->nav_bar(false, 'CAN YOU BEAT TETRIS? ');

# Body content goes here.
echo "
    <!-- Body of the page  -->
    <div class='context-body-game'>
        <div class='context-body-game-col'>
            <div class='form-font user-indicator-game' id='user-indicator'> Hello, Guest! </div>
            <div class='game-reset-start-btn'>
                <button class='form-font game-btn-style' id='reset-button' type='button' class='btn'>RESET</button>
            </div>
            <br>
            <div class='game-reset-start-btn'>
                <button class='form-font game-btn-style' id='start-button' type='button' class='btn'>START</button>
            </div>
        </div>

        <div class='context-body-game-col'>

            <canvas id='game-area' width=700 height=855></canvas>

        </div>

        <div class='context-body-game-col'>
            <div class='form-font game-btn-text-style'>SCORE</div>
            <dir class='game-btn-style-01' id='score'>XXXX</dir><br>
            <div class='form-font game-btn-text-style'>LEVEL</div>
            <dir class='game-btn-style-01' id='level'>XXXX</dir><br>
            <div class='form-font game-btn-text-style'>LINES</div>
            <dir class='game-btn-style-01' id='lines'>XXXX</dir><br>
        </div>
    </div>

<!-- JS Scripts -->
<script src='../js/game/constants.js'></script>
<script src='../js/game/single_shape.js'></script>
<script src='../js/game/model.js'></script>
<script src='../js/game/tetris.js'></script>
";
# Create a new instance of the CommonFooter class.
$footer = new CommonFooter();
# Call the footer function.
$footer->footer();
