jQuery(document).ready(function(){
	readRecords();
	  jQuery('#validate_fname').hide();
	  jQuery('#validate_lname').hide();
  	  jQuery('#validate_email').hide();
  	  jQuery('#validate_contact').hide();
  	  jQuery('#validate_address').hide();

  	  jQuery('#validate_update_fname').hide();
	  jQuery('#validate_update_lname').hide();
  	  jQuery('#validate_update_email').hide();
  	  jQuery('#validate_update_contact').hide();
  	  jQuery('#validate_update_address').hide();


  	    let vfname = true;
  	    let vlname = true;
  		let vmail = true;
  		let vcontact = true;
  		let vaddress = true;

  		let ufname = true;
  	    let ulname = true;
  		let umail = true;
  		let ucontact = true;
  		let uaddress = true;
		

		jQuery('#fname').keyup(function() {
			 fn_check();
  		});

  		function fn_check() {
		let user_fname = jQuery('#fname').val();
	    let fname_regex = /^[a-zA-Z]+$/;
	    if (!user_fname.match(fname_regex) || user_fname.length == "") {
	      jQuery('#validate_fname').show();
	      jQuery('#validate_fname').html("** use only alphabatics A-Z or a-z");
	      jQuery('#validate_fname').focus();
	      vfname = false;
	      return false;
	    } else {

	      jQuery('#validate_fname').hide();
	      return true;

	    }

	}
	  	jQuery('#lname').keyup(function() {
	  			 ln_check();
  		});

  		function ln_check() {

		    let user_lname = jQuery('#lname').val();
		    let lname_regex = /^[a-zA-Z]+$/;
		    if (!user_lname.match(lname_regex) || user_lname.length == "") {
		      jQuery('#validate_lname').show();
		      jQuery('#validate_lname').html("** use only alphabatics A-Z or a-z");
		      jQuery('#validate_lname').focus();
		      vlname = false;
		      return false;
		    } else {

		      jQuery('#validate_lname').hide();
		      return true;

		    }

		}
	  	jQuery('#email').keyup(function() {
	  		email_check();
  		});

  		function email_check() {

		    let mail = jQuery('#email').val();
		    let email_regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		    if (!mail.match(email_regex) || email.length == 0) {
		      jQuery('#validate_email').show();
		      jQuery('#validate_email').html("** use proper format using @ with alphabatics A-Z or a-z");
		      jQuery('#validate_email').focus();
		      vmail = false;
		      return false;
		    } else {

		      jQuery('#validate_email').hide();
		      return true;

		    }
		}
		jQuery('#contact').keyup(function() {
			contact_check();
  		});

  		function contact_check() {

		    let contact = jQuery('#contact').val();
		    let contact_regex=/^(\d{10}|\d{11}|\d{12})$/;

		    if (!contact.match(contact_regex) || contact.length == 0) {
		      jQuery('#validate_contact').show();
		      jQuery('#validate_contact').html("** please write correct-contact");
		      jQuery('#validate_contact').focus();
		      vcontact = false;
		      return false;
		    } else {

		      jQuery('#validate_contact').hide();
		      return true;

		    }
		}
		jQuery('#address').keyup(function() {
			address_check();
  		});

  		function address_check() {

			 let address = jQuery('#address').val();
		     let address_regex = /^[a-zA-Z]+$/;
		     if (!address.match(address_regex) || address.length == 0) {
		      jQuery('#validate_address').show();
		      jQuery('#validate_address').html("** please write your address");
		      jQuery('#validate_address').focus();
		      vaddress = false;
		      return false;
		      } else {
			  jQuery('#validate_address').hide();
		      return true;

		    }
		}


  		jQuery("#savebutton").on('click',function(e){
            e.preventDefault();
            let firstname = fn_check();
            let lastname = ln_check();
            let eemail = email_check();
            let ccontact = contact_check();
            let aaddress = address_check();

            if(firstname && lastname && eemail &&  ccontact && aaddress != false){
            	alert("Registration success");
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
            	return true;
            }
            else{
            	alert("Registration failed");
            	return false;
            }

            jQuery("#data_form")[0].reset();

        });
   //update form
   	  	jQuery('#update_fname').keyup(function() {
   	  		 ufn_check();
  		});

  		function ufn_check() {

	    let user_ufname = jQuery('#update_fname').val();
	    let ufname_regex = /^[a-zA-Z]+$/;
	    if (!user_ufname.match(ufname_regex) || user_ufname.length == "") {
	      jQuery('#validate_update_fname').show();
	      jQuery('#validate_update_fname').html("** use only alphabatics A-Z or a-z");
	      jQuery('#validate_update_fname').focus();
	      ufname = false;
	      return false;
	    } else {

	      jQuery('#validate_update_fname').hide();
	      return true;

	    }

	}
	  	jQuery('#update_lname').keyup(function() {
	  		uln_check();
  		});

  		function uln_check() {

		    let user_ulname = jQuery('#update_lname').val();
		    let ulname_regex = /^[a-zA-Z]+$/;
		    if (!user_ulname.match(ulname_regex) || user_ulname.length == "") {
		      jQuery('#validate_update_lname').show();
		      jQuery('#validate_update_lname').html("** use only alphabatics A-Z or a-z");
		      jQuery('#validate_update_lname').focus();
		      ulname = false;
		      return false;
		    } else {

		      jQuery('#validate_update_lname').hide();
		      return true;

		    }

		}
	  	jQuery('#update_email').keyup(function() {
	  		umail_check();
  		});

  		function umail_check() {

		    let umail = jQuery('#update_email').val();
		    let uemail_regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		    if (!umail.match(uemail_regex) || uemail.length == 0) {
		      jQuery('#validate_update_email').show();
		      jQuery('#validate_update_email').html("** use proper format using @ with alphabatics A-Z or a-z");
		      jQuery('#validate_update_email').focus();
		      umail = false;
		      return false;
		    } else {

		      jQuery('#validate_update_email').hide();
		      return true;

		    }
		}
		jQuery('#update_contact').keyup(function() {
				ucontact_check();
  		});

  		function ucontact_check() {

		    let ucontact = jQuery('#update_contact').val();
		    let ucontact_regex=/^(\d{10}|\d{11}|\d{12})$/;

		    if (!ucontact.match(ucontact_regex) || ucontact.length == 0) {
		      jQuery('#validate_update_contact').show();
		      jQuery('#validate_update_contact').html("** please write correct-contact");
		      jQuery('#validate_update_contact').focus();
		      ucontact = false;
		      return false;
		    } else {

		      jQuery('#validate_update_contact').hide();
		      return true;

		    }
		}
		jQuery('#update_address').keyup(function() {
			uaddress_check();
  		});

  		function uaddress_check() {
			 let uaddress = jQuery('#update_address').val();
		     let uaddress_regex = /^[a-zA-Z]+$/;
		     if (!uaddress.match(uaddress_regex) || uaddress.length == 0) {
		      jQuery('#validate_update_address').show();
		      jQuery('#validate_update_address').html("** please write your address");
		      jQuery('#validate_update_address').focus();
		      vaddress = false;
		      return false;
		      } else {
			  jQuery('#validate_update_address').hide();
		      return true;

		    }
		}

  		jQuery('#updatebutton').on('click',function(e){
            e.preventDefault();
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
				}, function(data,status){
				 	jQuery('#update_user_modal').modal("hide");
				 	readRecords();

				 }
			 );

        });

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
	// function insertdata(){
	// var data = jQuery("#data_form").serialize();
	// 	jQuery.ajax({
	// 		data: data,
	// 		method: 'post',
	// 		url:"backend1.php",
	// 		success:function(data,status)
	// 		{
	// 			readRecords();

	// 		}
	// 	});
	// }
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
	 			var user = JSON.parse(data);
	 			jQuery('#update_fname').val(user.fname);
	 			jQuery('#update_lname').val(user.lname);
	 			jQuery('#update_email').val(user.email);
	 			jQuery('#update_contact').val(user.contact);
	 			jQuery('#update_address').val(user.address);
	 		}
	 	);
	 	jQuery('#update_user_modal').modal("show");
	 }

	// function updateuserdetails(){
	// 	 var fname = jQuery('#update_fname').val();
	// 	 var lname = jQuery('#update_lname').val();
	// 	 var email = jQuery('#update_email').val();
	// 	 var contact = jQuery('#update_contact').val();
	// 	 var address = jQuery('#update_address').val();

	// 	 var hidden_user_id = jQuery('#hidden_user_id').val();

	// 	 jQuery.post("backend1.php", {
	// 	 	hidden_user_id:hidden_user_id,
	// 	 	fname:fname,
	// 	 	lname:lname,
	// 	 	email:email,
	// 	 	contact:contact,
	// 	 	address:address,
	// 	 },
	// 	 function(data,status){
	// 	 	jQuery('#update_user_modal').modal("hide");
	// 	 	readRecords();

	// 	 }
	// 	 );

	// }

