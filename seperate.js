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
debugger;
	function deleteuser(deleteid){
		var conf = confirm("are you sure");
		if(conf==true){
			jQuery.ajax({
			data: { deleteid:deleteid },
			method: 'get',
			url:"backend1. php",
			success:function(data,status)
			{
				readRecords();

			}
		});
		}

	}
//update data
 function GetuserDeatils(id){

 }