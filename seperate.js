jQuery(document).ready(function(){
	readRecords();
});
//fetching data

	function readRecords(){
		var readrecords = "readrecords";
		jQuery.ajax({
					data: { readrecords:readrecords },
					method: 'post',
					url:"backend1.php",
					success:function(data,status)
					{
						$('#records_contant').html(data);
					}
					
				});
		}
//inserting data
	function insertdata(){
	var data = jQuery("#data_form").serialize();
		jQuery.ajax({
			data: data,
			method: 'post',
			url:"backend1.php",
			success:function(data,status)
			{
				readRecords();

			}
		});
	}
//deleting data
	function deleteuser(deleteid){
		var conf = confirm("are you sure");
		if(conf==true){
			jQuery.ajax({
			data: { deleteid:deleteid },
			method: 'post',
			url:"backend1.php",
			success:function(data,status)
			{
				readRecords();

			}
		});
		}

	}
//form-modal
 	function GetuserDeatils(id){
	 	jQuery('#hidden_user_id').val(id);
	 	jQuery.post("backend1.php", {
	 		id:id
	 		}, function(data,status){
	 			var user = JSON. parse(data);
	 			jQuery('#update_fname').val(user.fname);
	 			jQuery('#update_lname').val(user.lname);
	 			jQuery('#update_email').val(user.email);
	 			jQuery('#update_contact').val(user.contact);
	 			jQuery('#update_address').val(user.address);
	 		}
	 	);
	 	jQuery('#update_user_modal').modal("show");
	 }
	//update
	function updateuserdetails(){
		 var fname = jQuery('#update_fname').val();
		 var lname = jQuery('#update_lname').val();
		 var email = jQuery('#update_email').val();
		 var conatct = jQuery('#update_contact').val();
		 var address = jQuery('#update_address').val();

		 var hidden_user_id = jQuery('#hidden_user_id').val();

		 jQuery.post("backend1.php", {
		 	hidden_user_id:hidden_user_id,
		 	fname:fname,
		 	lname:lname,
		 	email:email,
		 	conatct:conatct,
		 	address:address,
		 },
		 function(data,status){
		 	jQuery('#update_user_modal').modal("hide");
		 	readRecords();
		 }
		 );

	}