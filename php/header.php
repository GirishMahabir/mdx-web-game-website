<?php

# Class with functions to generate common Header parts.
class CommonHeader
{
    # Declaring Full Navigation Bar.
    private $nav_bar_elements = array(
        'home' => array(
            'link' => 'index.php',
            'text' => 'HOME'
        ),
        'scoreboard' => array(
            'link' => 'scoreboard.php',
            'text' => 'SCOREBOARD'
        ),
        'about' => array(
            'link' => 'about.php',
            'text' => 'ABOUT'
        ),
        'login' => array(
            'link' => 'login.php',
            'text' => 'LOGIN'
        )
    );

    # Function that add the full page container and declaring body.
    private function add_container()
    {
        echo "
        <!-- Main Page Container -->
        <body class='main-container'>
        ";
    }

    # Function that add the page logo.
    private function add_logo()
    {
        echo "
            <!-- Page Logo and Nav Bar  -->
            <header class='header'>
                <div class='tetris-logo'>
                    <div class='tetris-nav-tetris-logo-position'>
                        <img src='../assets/tetris_home_slow.gif' alt='tet'>
                    </div>
                </div>
        ";
    }


    # Function that creates the full navigation bar.
    public function nav_bar($full_nav = false, $page_title = "Tetris")
    {
        # Adding Main Container, required to englobles the whole page.
        $this->add_container();

        # Adding Logo.
        $this->add_logo();

        # Adding Navigation Bar.
        echo "
                <div class='nav-bar'>
        ";

        # Checks if full nav bar need to be displayed, else only display the page
        # title and the navigation bar icon.
        if ($full_nav) {
            # Adding the full navigation bar.
            foreach ($this->nav_bar_elements as $element) {
                # First button use window.location to reload the page.
                # Since this will reload the home page itself.
                if ($element['text'] == 'HOME') {
                    echo "
                        <div class='nav-home'>
                            <a class='rm-url' href='javascript:window.location.reload(true)'>{$element['text']}</a>
                        </div>
                    ";
                } else {
                    echo "
                        <div class='nav-home'>
                            <a class='rm-url' href='php/{$element['link']}'>{$element['text']}</a>
                        </div>
                    ";
                }
            }
        } else {
            # Adding the page title and navigation bar expantion icon
            echo "
                    <h1>
                    $page_title
                    </h1>
                    <div class='nav-bar-icon-02'>
                        <a class='menu-icon-btn' href='../index.php'>
                            <i class='material-icons md-52' color='black'>menu-hamburger</i>
                        </a>
                    </div>
                ";
        }



        echo "
                </div>
            </header>
        ";
    }
}
