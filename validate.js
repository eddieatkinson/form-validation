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
		var userName = $('.fullName').val();
		if(userName.length < 2){
			// console.log("User didn't enter their real name (unless it's T).")
			$('.full-name-error').show();
		}else{
			$('.full-name-error').hide();
		}
	});
});