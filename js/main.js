/*When the page (DOM) is fully loaded,
	execute the code within*/
$(document).ready(function(){
	/*after submit is clicked, append form values
		and display theem to the table*/
	$('form').submit(function(){

		/*determine if the user filled all boxes,
			use the .val() function to retrieve
			the value the user entered*/
		if (
				$('#first_name').val() != "" &&
				$('#last_name').val() != "" &&
				$('#email').val() != "" &&
				$('#contact').val() != ""
			) {
			/*append the table with html and the
				retrieved values from each input box*/
			$('thead').append(
				"<tbody><tr><td>" + 
					$("#first_name").val() +
					"</td>" + "<td>" +
					$("#last_name").val() +
					"</td>" + "<td>" +
					$("#email").val() +
					"</td>" + "<td>" +
					$("#contact").val() +
				"</td></tr></tbody>");
			/*prevent page from submitting*/
			return false;

		} else {
			/*alert users about empty boxes*/
			alert('All boxes must be filled in');
			/*set focus back to the first box (First Name)*/
			$("#first_name").focus();
			/*prevent page from submitting*/
			return false;
		}

	});
});