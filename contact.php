<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="stylesheet" type="text/css" href="StyleContact.css">
    <link rel="stylesheet" type="text/css" href="base.css" />
    <link rel="stylesheet" type="text/css" href="header.css" />
    <link rel="stylesheet" type="text/css" href="footer.css" />
    <title>Contact us</title>
</head>
<body>
 <special-header></special-header>

    <section class="content" id="content">
    <h1 class="heading"><span> Contact Us </span></h1>
        <div class="row">
            <form action= "form.php" method="post">
                <input type="text" name="name" placeholder="Name" class="box">
                <input type="email" name="email" placeholder="Email" class="box">
                <input type="number" name="number" placeholder="Number" class="box">           
                <textarea name="message" class="box" placeholder="Message" cols="50" rows="10" ></textarea>
                <input type="submit" value="Send Message" class="btn">
            </form>
        </div>
    </section>
    <special-footer></special-footer>
    <script src="./headerFooterManager.js"></script>
</body>
</html>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];

   
}
?>
     
