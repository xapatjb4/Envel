<?php
$ToEmail = "info@envel.ai";
$EmailSubject = 'User Contact Information';
$mailheader = "From: ".$_POST["email"]."\r\n";
$mailheader .= "Reply-To: ".$_POST["email"]."\r\n";
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
$mailheader .= 'X-Mailer: PHP/' . phpversion();

$MESSAGE_BODY=file_get_contents('contact-form-mail.html',true);
$data=[
	"fname"=>$_POST["first-name"],
	"lname"=>$_POST["last-name"],
	"email"=>$_POST["email"],
];
foreach($data as $key=>$value){
	$MESSAGE_BODY=str_replace('['.$key.']',$value,$MESSAGE_BODY);
}
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure");
die("Success");
?>