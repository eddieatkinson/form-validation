// Wait until the DOM is ready...
$(document).ready(()=>{
	// Submit listener/event is unique to forms
	$('.sign-up-form').submit((event)=>{
		// Browser is, by default, going to submit this form.
		// It will send it to the "action" attribute.
		// There is no action, so it just reloads.
		// preventDefault against any object will prevent the browser from doing what
		// it normally does.
		event.preventDefault();
		console.log("User submitted the form.");
		// The fullName needs to be at least 2 characters
		// Input tags have values. Almost everything else has HTML.

		// Target all the input fields...
		// Loop through all, and check the length...
		$('.form-wrapper input').each(function(){ // We have to use "function" amd not "=>" because we need 
			// to keep track of the "this"
			// Get the class of the thing we are on, i.e., password, address, etc..
			// and IF it's empty, go grab the thing with the class that matches
			// it + 'error'
			var userInput = $(this).val();
			var thisClass = $(this).attr('class');
			// console.log(`${thisClass} has a value of ${userInput}`)
			// console.log(userInput);
			var errorClass = `.${thisClass}-error`;
			if(userInput === ""){
				$(errorClass).html("Field must not be empty.");
				$(errorClass).show();
			}else{
				// $(errorClass).html("");
				$(errorClass).hide();
			}

		})

		// Get the value of the password input
		var password = $('.password').val();
		var password2 = $('.password2').val();
		if(password != password2){
			$('.password-error').html('Your passwords do not match.');
			$('.password-error').show();
		}

		var numberFound = false;
		for (let i = 0; i < password.length; i++){
			if(isNaN(Number(password[i]))){
				// this is not a number.
				// leave numberFound alone (at false).
			}else{
				// this is a number. We tried to convert it and it
				// didn't return true to isNaN, so it must be a number.
				// Flip the bool.
				numberFound = true;
				// No point in looking anymore. We have one and we asked for one.
				break;
			}
		}

		if(!numberFound){
			$('.password-error').html('Your passwords must have a number.');
			$('.password-error').show();
		}


		// var userName = $('.full-name').val();
		// if(userName.length < 2){
		// 	// console.log("User didn't enter their real name (unless it's T).")
		// 	$('.full-name-error').show();
		// }else{
		// 	$('.full-name-error').hide();
		// }
	});
});