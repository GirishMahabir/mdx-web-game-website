<?php

# Class with functions to generate common footer.
class CommonFooter
{
    # Function to generate the footer and closes the body and html tag.
    public function footer($index_page = False)
    {
        if ($index_page) {
            echo "
                <!-- Footer of the page  -->
                <footer>
                    <div class='footer'>
                        <a class='footer-button-down' href='google.com'><img src='assets/down-arrow.png' alt='Hide/Show footer'
                                style='width:100px;height:100px;transform: rotate(180deg)'>
                        </a>
                    </div>
                </footer>
            </body>
            </html>
            ";
        } else {
            echo "
                <!-- Footer of the page  -->
                <footer>
                    <div class='footer'>
                        <a class='footer-button-down' href='google.com'><img src='../assets/down-arrow.png' alt='Hide/Show footer'
                                style='width:100px;height:100px;transform: rotate(180deg)'>
                        </a>
                    </div>
                </footer>
            </body>
            </html>
            ";
        }
    }
}

?>