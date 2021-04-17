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