(function() {
	'use strict';

	$(document).ready(function() {

		var form = $('.signup');

		// On form submit take action, like an AJAX call
		$(form).submit(function(e) {

			if (this.checkValidity() == false) {
				$(this).addClass('was-validated');
				e.preventDefault();
				e.stopPropagation();
			}

		});

		// On every :input focusout validate if empty
		$(':input').blur(function() {
			var fieldType = this.type;
			$(this).addClass('is-valid');
		});

		$(':input').blur(function() {
			var fieldType = this.type;
			var ft = this.id;
			if (ft == 'country') {
				validateCountry($(this));
			}
			switch(fieldType) {
			case 'text':
				if (ft == 'Address2') {
					$(this).addClass('is-valid');
				} else if (ft == 'birthdate') {
					validateDate($(this));
				} else {
					validateText($(this));
				}
				break;
			case 'email':
				validateEmail($(this));
				break;
			case 'checkbox':
				validateCheckBox($(this));
				break;
			case 'number':
				if (ft == 'ssn') {
					validateSsn($(this));

				} else if (ft == 'zip') {
					validateZip($(this));
				} else {
					validateNumber($(this));
				}
				break;
			case 'password':
				validatePass($(this));
				break;
			case 'tel':
				validateTel($(this));
				break;
			case 'select-one':
				validateSelectOne($(this));
				break;
			case 'select-multiple':
				validateSelectMultiple($(this));
				break;
			default:
				break;
			}
		});

		// On every :input focusin remove existing validation messages if any
		$(':input').click(function() {

			$(this).removeClass('is-valid is-invalid');
			var ft = this.id;
			if (ft == 'country') {
				validateCountry($(this));
			}
		});

		// On every :input focusin remove existing validation messages if any
		$(':input').keydown(function() {

			$(this).removeClass('is-valid is-invalid');
		});

		// Reset form and remove validation messages
		$(':reset').click(function() {
			$(':input, :checked').removeClass('is-valid is-invalid');
			$(form).removeClass('was-validated');
		});

	});

	// Validate Text and password
	function validateText(thisObj) {
		var RegExpression = /^[a-zA-Z\s]*$/;
		var fieldValue = thisObj.val();
		if (fieldValue.length < 1 || !RegExpression.test(fieldValue)) {
			$(thisObj).addClass('is-invalid');
		} else {
			$(thisObj).addClass('is-valid');
		}
	}

	// Validate Email
	function validateEmail(thisObj) {
		var fieldValue = thisObj.val();
		var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

		if (pattern.test(fieldValue)) {
			$(thisObj).addClass('is-valid');
		} else {
			$(thisObj).addClass('is-invalid');
		}
	}

	// Validate CheckBox
	function validateCheckBox(thisObj) {

		if ($(':checkbox:checked').length > 0) {
			$(thisObj).addClass('is-valid');
		} else {
			$(thisObj).addClass('is-invalid');
		}
	}

	// Validate Select One Tag
	function validateSelectOne(thisObj) {

		var fieldValue = thisObj.val();

		if (fieldValue != null) {
			$(thisObj).addClass('is-valid');
		} else {
			$(thisObj).addClass('is-invalid');
		}
	}

	// Validate Select Multiple Tag
	function validateSelectMultiple(thisObj) {

		var fieldValue = thisObj.val();

		if (fieldValue.length > 0) {
			$(thisObj).addClass('is-valid');
		} else {
			$(thisObj).addClass('is-invalid');
		}
	}

	function validateNumber(thisObj) {
		var fieldValue = thisObj.val();
		if (fieldValue.length > 0 && fieldValue != "0") {
			$(thisObj).addClass('is-valid');
		} else {
			$(thisObj).addClass('is-invalid');
		}
	}

	function validateSsn(thisObj) {
		var fieldValue = thisObj.val();
		if (fieldValue.length != 9 || isNaN(parseInt(fieldValue))) {
			$(thisObj).addClass('is-invalid');
		}
	}

	function validatePass(thisObj) {
		var fieldValue = thisObj.val();
		if (fieldValue.length < 6) {
			$(thisObj).addClass('is-invalid');
		} else {
			$(thisObj).addClass('is-valid');
		}
	}

	function validateTel(thisObj) {
		var fieldValue = thisObj.val();
		if (isNaN(parseInt(fieldValue)) || fieldValue.length != 10) {
			$(thisObj).addClass('is-invalid');
		} else {
			$(thisObj).addClass('is-valid');
		}
	}

	function validateDate(thisObj) {
		var fieldValue = thisObj.val();
		var datePattern = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
		if (datePattern.test(fieldValue)) {
			$(thisObj).addClass('is-valid');
		} else {
			$(thisObj).addClass('is-invalid');

		}
	}

	function validateCountry(thisObj) {
		var fieldValue = thisObj.val();
		if (fieldValue == '') {
			$(thisObj).addClass('is-invalid');
		} else {
			$(thisObj).addClass('is-valid');
		}
	}

	function validateZip(thisObj) {
		var fieldValue = thisObj.val();
		if (fieldValue == '' || fieldValue.length != 5) {
			$(thisObj).addClass('is-invalid');
		} else {
			$(thisObj).addClass('is-valid');
		}
	}

})();
