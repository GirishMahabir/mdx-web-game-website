<?php

include 'common/head.php'; # Include the common php head file.
include 'common/header.php'; # Include the common php header file.
include 'common/footer.php'; # Include the common php footer file.

# Create a new instance of the CommonHead class.
$head = new CommonHead();
# Call the html_declaration function.
$head->html_declaration();
# Call the html_head function.
$head->html_head('Tetris - Scoreboard', true);

# Create a new instance of the CommonHeader class.
$header = new CommonHeader();
# Call the nav_bar function.
# We want the full navigation bar, so we only need to pass on the 1st parameter.
$header->nav_bar(false, "SCOREBOARD");

# Body content goes here.
echo "
    <!-- Body of the page  -->
    <div class='context-body-scoreboard'>
        <div class='scoreboard-tetris-logo'>
            <div class='tetris-logo-main'>
                <img src='../assets/tetris_logo.png' alt='tetris_tetris-logo'>
            </div>
        </div>

        <div class='scoreboard-board'>
            <!-- Table with Play icon, name and score. -->
            <table class='scoreboard-table'>
                <tr>
                    <th class='form-font'></th>
                    <th class='form-font'>Name</th>
                    <th class='form-font'>Score</th>
                </tr>
                <tr>
                    <td><i class='material-icons md-36'>play_arrow</i></td>
                    <td class='form-font'>Player 1</td>
                    <td class='form-font'>100</td>
                </tr>
                <tr>
                    <td><i class='material-icons md-36'>play_arrow</i></td>
                    <td class='form-font'>Player 2</td>
                    <td class='form-font'>200</td>
                </tr>
                <tr>
                    <td><i class='material-icons md-36'>play_arrow</i></td>
                    <td class='form-font'>Player 3</td>
                    <td class='form-font'>300</td>
                </tr>
                <tr>
                    <td><i class='material-icons md-36'>play_arrow</i></td>
                    <td class='form-font'>Player 4</td>
                    <td class='form-font'>400</td>
                </tr>
                <tr>
                    <td><i class='material-icons md-36'>play_arrow</i></td>
                    <td class='form-font'>Player 5</td>
                    <td class='form-font'>500</td>
                </tr>
            </table>
        </div>
    </div>
";
# Create a new instance of the CommonFooter class.
$footer = new CommonFooter();
# Call the footer function.
$footer->footer();

?>