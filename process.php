<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "uowyuchen@gmail.com";
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Form Submission", $subject . '-' . $message . ' - ' . $phone, "From:" . $email);
    
  }