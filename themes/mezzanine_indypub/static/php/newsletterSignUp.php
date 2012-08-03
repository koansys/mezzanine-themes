<?php
	//declare our variables
	$emailAddress = $_GET['emailAddress'];

	//set a title for the message
	$subject = "New Newsletter Subscription";
	$message = "New Email Subscriber: $emailAddress";
	$headers = "From: webmaster@indypub.com\r\n" .  "X-Mailer: php";
	
	//put your email address here
	mail("mckenzie@koansys.com", $subject, $message, $headers);

?>
