<?php

$conn =  mysqli_connect('localhost','root','1234','CRUD');

extract($_POST);

if(isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['email']) && isset($_POST['contact']) && isset($_POST['address']))
{
	$query = " INSERT INTO `crudtable`(`fname`, `lname`, `email`, `contact`, `address`) VALUES ( '$fname', '$lname', '$email', '$contact', '$address')";
	mysqli_query($conn, $query);
}

?>