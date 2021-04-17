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
		      <div class="modal-body">
		        <div class="form-group">
		        	<label>First name:</label>
		        	<input type="text" name="fname" id="fname" class="form-control" placeholder="enter your  first name">
		        </div>

		         <div class="form-group">
		        	<label>Last name:</label>
		        	<input type="text" name="lname" id="lname" class="form-control" placeholder="enter your last name">
		        </div>

		         <div class="form-group">
		        	<label>Email:</label>
		        	<input type="email" name="email" id="email" class="form-control" placeholder="enter your email">
		        </div>

		          <div class="form-group">
		        	<label>Contact:</label>
		        	<input type="text" name="contact" id="contact" class="form-control" placeholder="enter your contact">
		        </div>

		         <div class="form-group">
		        	<label>Address:</label>
		        	<TEXTAREA cols="50" name="address" id="address" class="form-control" placeholder="enter your address"></TEXTAREA>
		        </div>

		      </div>

		      <!-- Modal footer -->
		      <div class="modal-footer">
		      	 <button type="button" class="btn btn-success" data-dismiss="modal" onclick="addRecord()">Save</button>
		        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
		      </div>

		    </div>
		  </div>
		</div>

	</div>

	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script type="text/javascript">
		function addRecord(){
			var fname = $('#fname').val();
			var lname = $('#lname').val();
			var email = $('#email').val();
			var contact = $('#contact').val();
			var address = $('#address').val();

			$.ajax({
				url:"backend1.php",
				type: 'post',
				data: { fname : fname,
						lname : lname,
						email : email,
						contact : contact,
						address : address
				},
				success:function(data,status)
				 readRecords();

			});
		}
	</script>
</body>
</html>