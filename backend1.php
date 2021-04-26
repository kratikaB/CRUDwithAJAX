<?php

$conn =  mysqli_connect('localhost','root','1234','CRUD');

// extract the data
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$address = $_POST['address'];
//read data
if(isset($_POST['readrecords'])){
	$data = '<table class ="table table-bordered table-striped">
		<tr>
			<th>No.</th>
			<th>First name</th>
			<th>Last name</th>
			<th>Email</th>
			<th>Contact </th>
			<th>Address</th>
			<th>EDIT</th>
			<th>DELETE</th>
		</tr>';
	$displayquery = "SELECT * FROM crudtable";
	$result =  mysqli_query($conn, $displayquery);

	if(mysqli_num_rows($result)>0){
		// $number = 1;
		while ($row = mysqli_fetch_array($result)) {
			$data .='<tr>
				<td>' .$row['id']. '</td>
				<td>' .$row['fname']. '</td>
				<td>' .$row['lname']. '</td>
				<td>' .$row['email']. '</td>
				<td>' .$row['contact'].'</td>
				<td>' .$row['address']. '</td>
				<td>
					<button onclick="GetuserDeatils('.$row['id'].')" class="btn btn-warning">EDIT</button>
				</td>
				<td>
					<button onclick="deleteuser('.$row['id'].')" class="btn btn-danger">DELETE</button>
				</td>
			</tr>';
			// $number++;

		}
	}
	$data .='</table>';
	echo $data;
}
//insert data
if($_POST['type']==1){
	$len = 8;
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%^&*()";
    $password = substr( str_shuffle( $chars ), 0, $len );
    $enc_pass = md5($password);

	if(isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['email']) && isset($_POST['contact']) && isset($_POST['address']))
	{
		$query = "INSERT INTO crudtable (fname, lname, email, contact, address, password) VALUES ( '$fname', '$lname', '$email', '$contact', '$address', '$enc_pass')";
		$check_insrt = mysqli_query($conn, $query);
		ini_set("SMTP", "smtp.server.com");
		$to = $email;
		$subject = 'Credentials';
		$message = sprintf('Hi Your email is %s<br> Your password is %s',$email,$password); 
		$from = 'kratikabhagat823@gmail.com';
		 
		 var_dump($to);
		// Sending email
		if(mail($to, $subject, $message)){
		    echo 'Your mail has been sent successfully.';
		} else{
		    echo 'Unable to send email. Please try again.';
		}
	}
}
//delete the record
if(isset($_POST['deleteid'])){
	$id = $_POST['deleteid'];
	$deletequery = "DELETE FROM crudtable where id =$id";
	mysqli_query($conn, $deletequery);
}

//update the record
if(isset($_POST['id']) && isset($_POST['id'])!= "")
{
	$id=$_POST['id'];
	$query = "SELECT * FROM crudtable  WHERE id =$id";
		if (!$result = mysqli_query($conn , $query)){
			exit(mysqli_error());
		}

		$response = array();

		if(mysqli_num_rows($result) > 0) {
			while ($row = mysqli_fetch_assoc($result)) {

				$response = $row;
				
			}
		}else{
			 $response['status'] = 200;
			 $response['message'] = "Data not found!";
			}
			 echo json_encode($response);
			}
else
{
	$response['status'] = 200;
	$response['message'] = "invalid request";
}
//update table
if(isset($_POST['hidden_user_id'])){

	$hidden_user_id = $_POST['hidden_user_id'];
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$email = $_POST['email'];
	$contact = $_POST['contact'];
	$address = $_POST['address'];

	$query = "UPDATE crudtable SET fname='$fname', lname='$lname', email='$email' , contact='$contact' , address='$address'  WHERE id='$hidden_user_id' ";
	
	mysqli_query($conn, $query);
}

?>