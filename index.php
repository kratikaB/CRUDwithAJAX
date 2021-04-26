<!DOCTYPE html>
<html>
<head>
	<title>Crud using ajax</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<h4 class="text-primary text-uppercase text-center">Crud using ajax</h4>

		<div class="d-flex justify-content-end">
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal"> Insert data</button>
		</div>
		<h2 class="text-danger">All records</h2>
		<div id="records_contant">
		</div>
		<!-- The Modal -->
		<div class="modal" id="myModal">
		  <div class="modal-dialog">
		    <div class="modal-content">

		      <!-- Modal Header -->
		      <div class="modal-header">
		        <h4 class="modal-title">Ajax crud opearation</h4>
		        <button type="button" class="close" data-dismiss="modal">&times;</button>
		      </div>

		      <!-- Modal body -->
		      <form id="data_form">
		      <div class="modal-body">
		        <div class="form-group">
		        	<label>First name:</label>
		        	<input type="text" name="fname" id="fname" class="form-control" placeholder="enter your  first name">
		        	<span id="validate_fname" class="text-danger font-weight-bold"></span>
		        </div>

		         <div class="form-group">
		        	<label>Last name:</label>
		        	<input type="text" name="lname" id="lname" class="form-control" placeholder="enter your last name">
		        	<p id="validate_lname" class="text-danger font-weight-bold"></p>
		        </div>

		         <div class="form-group">
		        	<label>Email:</label>
		        	<input type="email" name="email" id="email" class="form-control" placeholder="enter your email">
		        	 <p id="validate_email" class="text-danger font-weight-bold"></p>
		        </div>

		          <div class="form-group">
		        	<label>Contact:</label>
		        	<input type="text" name="contact" id="contact" class="form-control" placeholder="enter your contact">
		        	<p id="validate_contact" class="text-danger font-weight-bold"></p>
		        </div>

		         <div class="form-group">
		        	<label>Address:</label>
		        	<TEXTAREA cols="50" name="address" id="address" class="form-control" placeholder="enter your address"></TEXTAREA>
		        		<p id="validate_address" class="text-danger font-weight-bold"></p>
		        </div>

		      </div>

		      <!-- Modal footer -->
		      <div class="modal-footer">
		      	<input type="hidden" value="1" name="type">
		      	 <button type="button" class="btn btn-success" id="savebutton" data-dismiss="modal" onclick="insertdata()">Save</button>
		        <button type="button" class="btn btn-danger" data-dismiss="modal" >Close</button>
		      </div>
		      </form>
		    </div>
		  </div>
		</div>
		<!-- UPDATE MODEL-->

		<!-- The Modal -->
		<div class="modal" id="update_user_modal">
		  <div class="modal-dialog">
		    <div class="modal-content">

		      <!-- Modal Header -->
		      <div class="modal-header">
		        <h4 class="modal-title">update form</h4>
		        <button type="button" class="close" data-dismiss="modal">&times;</button>
		      </div>

		      <!-- Modal body -->
		      <form id="update_form">
		      <div class="modal-body">
		        <div class="form-group">
		        	<label>First name:</label>
		        	<input type="text" name="update_fname" id="update_fname" class="form-control" placeholder="enter your  first name">
		        	<span id="validate_update_fname" class="text-danger font-weight-bold"></span>
		        </div>

		         <div class="form-group">
		        	<label>Last name:</label>
		        	<input type="text" name="update_lname" id="update_lname" class="form-control" placeholder="enter your last name">
		        	<span id="validate_update_lname" class="text-danger font-weight-bold"></span>
		        </div>

		         <div class="form-group">
		        	<label>Email:</label>
		        	<input type="email" name="update_email" id="update_email" class="form-control" placeholder="enter your email">
		        	<span id="validate_update_email" class="text-danger font-weight-bold"></span>
		        </div>

		          <div class="form-group">
		        	<label>Contact:</label>
		        	<input type="text" name="update_contact" id="update_contact" class="form-control" placeholder="enter your contact">
		        	<span id="validate_update_contact" class="text-danger font-weight-bold"></span>
		        </div>

		         <div class="form-group">
		        	<label>Address:</label>
		        	<TEXTAREA cols="50" name="update_address" id="update_address" class="form-control" placeholder="enter your address"></TEXTAREA>
		        	<span id="validate_update_address" class="text-danger font-weight-bold"></span>
		        </div>

		      </div>

		      <!-- Modal footer -->
		      <div class="modal-footer">
		      	<input type="hidden" value="2" name="type">
		      	 <button type="button" class="btn btn-success" id="updatebutton" data-dismiss="modal" onclick="updateuserdetails()">update</button>
		        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
		        <input type="hidden" name="hidden_user_id" id="hidden_user_id">
		      </div>
		      </form>
		    </div>
		  </div>
		</div>

	</div>

	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script src="seperate.js"></script> 
</body>
</html>