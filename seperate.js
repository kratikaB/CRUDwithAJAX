jQuery(document).ready(function(){
	readRecords();
	  /*jQuery('#validate_fname').hide();
	  jQuery('#validate_lname').hide();
  	  jQuery('#validate_email').hide();
  	  jQuery('#validate_contact').hide();
  	  jQuery('#validate_address').hide();

  	    let vfname = true;
  	    let vlname = true;
  		let vmail = true;
  		let vcontact = true;
  		let vaddress = true;

  	jQuery('#fname').keyup(function() {
    fn_check();
  });

  function fn_check() {
    let user_val = jQuery('#fn').val();
    let name_regex = /^[a-zA-Z]+$/;
    if (!user_val.match(name_regex) || user_val.length == "") {
      jQuery('#validate_fname').show();
      jQuery('#validate_fname').html("** use only alphabatics A-Z or a-z");
      jQuery('#validate_fname').focus();
      vfname = false;
      return false;
    } else {

      jQuery('#validate_fname').hide();
      return true;

    }
  }*/

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
		 var contact = jQuery('#update_contact').val();
		 var address = jQuery('#update_address').val();

		 var hidden_user_id = jQuery('#hidden_user_id').val();

		 jQuery.post("backend1.php", {
		 	hidden_user_id:hidden_user_id,
		 	fname:fname,
		 	lname:lname,
		 	email:email,
		 	contact:contact,
		 	address:address,
		 },
		 function(data,status){
		 	jQuery('#update_user_modal').modal("hide");
		 	readRecords();
		 }
		 );

	}