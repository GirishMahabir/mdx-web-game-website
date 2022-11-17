<?php

# Class with functions to create proper HTML Head and Meta parts.
class CommonHead
{
    # Function that declares the Doctype and html language.
    public function html_declaration()
    {
        echo "
        <!DOCTYPE html>
        <html lang='en'>
        ";
    }

    # Function that creates the head part of the HTML.
    # Params:
    #   $title [string]: Title of the page.
    #   $icon_required [boolean]: If true, the google icon list will be included.
    public function html_head($title, $icon_required)
    {
        echo "
        <head>
            <meta charset='UTF-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <meta name='viewport' content='width=device-width, initial-scale-1.0'>
            <!-- Google Fonts. -->
            <link href='https://fonts.googleapis.com/css?family=Lato:100italic' rel='stylesheet' type='text/css'>
            <link href='https://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
        ";
        if ($icon_required) { # Check if the icon list is required.
            echo "
                <!-- Google Icon Link -->
                <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
            ";
        }
        # Adds our custom CSS and closes the head tag. 
        echo "

            <!-- Custom CSS -->
            <link rel='stylesheet' href='../css/style.css'>

             <!-- Website Title -->
            <title>$title</title>

        </head>
        ";
    }
}
