$(document).ready(function() {
	$('.modal').on('shown.bs.modal', function() {
		$(this).find('[autofocus]').focus();
	});
	$('#input1, #input2').on('input', function() {
		var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

		var email = $("[name='username']").val().trim();

		var valid = true;
		if (email == "") {
			valid = false;
		} else if (!emailPattern.test(email)) {
			valid = false;
		}
		if (valid) {
			$("#button").removeAttr("disabled");
		} else {
			$("#button").prop("disabled", true);

		}
	});
	$('#button').click(function(e) {
		e.preventDefault();
		$('#modal').modal('hide');
		alert("Subscribed!");

	});
});
