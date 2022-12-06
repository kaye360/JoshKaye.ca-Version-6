<?php

header("Content-Type: application/json; charset=UTF-8");

$post_data =  json_decode( file_get_contents("php://input"), true );

// var_dump( $post_data );

$error = ['type' => 'error'];

if($_SERVER['REQUEST_METHOD'] != 'POST') {

  echo json_encode( $error, JSON_PRETTY_PRINT );

} else {

  $to = 'jkaye@shaw.ca';
  $subject = 'joshkaye.ca inquiry';
  $from = $post_data['email'];
  $name = $post_data['name'];
  $phone = $post_data['phone'];
  $message = $post_data['message'];

  $success = ['type' => 'success', 'name' => $name ];

  $headers = array(
    'From' => $from, 
    'Reply-To' => $from
  );
  
  $message = <<<EOT
  To: $to
  From: $from
  Name: $name
  Subject: $subject
  Phone Number: $phone

  ---

  Message: 

  $message
  EOT;
  
  
  if(   mail($to, $subject, $message, $headers)  ) {

    echo json_encode( $success, JSON_PRETTY_PRINT );
    
  } else {
    
    echo json_encode( $error, JSON_PRETTY_PRINT );

  }
  

}





?>
