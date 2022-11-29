<?php

# Class with functions to generate common footer.
class CommonFooter
{
    # Function to generate the footer and closes the body and html tag.
    public function footer($index_page = False)
    {
        echo "
            </body>
            </html>
            ";
    }
}
