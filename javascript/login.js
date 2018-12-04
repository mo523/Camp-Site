$(document).ready(function() {

	$('#input1, #input2').on('input', function() {
		var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

		var email = $("[name='username']").val().trim();
		var pass = $("[name='password']").val().trim();
		console.log(!emailPattern.test(email));
		var valid = true;
		if (email == "" || pass == "") {
			valid = false;
		} else if (!emailPattern.test(email)) {
			valid = false;
		} else if (pass.length < 6) {
			valid = false;
		}
		if (valid) {
			$("#button").removeAttr("disabled");
		} else {
			$("#button").prop("disabled", true);

		}
	});
});
