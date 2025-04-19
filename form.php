

<?php

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['number']) && isset($_POST['message'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];
   
    ?>
 <br/>


    <?php
    
    echo 'Thank you ' . $name . ',
     <br/>
     <br/>
     we have received your message.';
} else {
    echo 'An error occurred. 
     <br/>
     <br/>
    We did not receive your message.';
}

?>
