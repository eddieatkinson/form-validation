// console.log('I am loaded!')

$(document).ready(()=>{
	var value;
	var returnedValue = getRadioValue();
	console.log(returnedValue);
	// console.log(getRadioValue());
	function getRadioValue(){
		$('.get-it').click(()=>{
		// event.preventDefault();
		value = $('input[name="name"]:checked').val();
		// console.log(value);
		
		console.log(value)
		return value;
		})
		// return value;
		
	}
	// console.log(value);
	
})