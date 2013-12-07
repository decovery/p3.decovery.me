//Listeners
$('input, select').change(calculate);

$('input:radio[name=pad]').click(function() {
	
	var new_image = '<img src="images/pizza-small.png" width="280px;" alt="Pizza" />';
	
	$('#canvas').prepend(new_image);

});

//Functions
function calculate() {

	var base = parseFloat($('input:radio[name=pad]:checked').val());
	var quantity = $('#quantity').val();
	var toppings = $('input[name=addition]:checked');
	var total = 0;
	var price = 0;
	var amount = 0;
	
	// Calculate chosen toppings
	toppings.each(function() {
	
		price += parseFloat($(this).val());
	
	});
	
	//Add comments
	if (price == 0) {
		$('#info').html('You have chosen pizza Margherita!');
	}
	else if ( price > 0) {
		$('#info').html('Great choice!');
	}
	
	// Add toppings to the chosen base
	amount = amount + price + base;
	
	// Multiply the price of one pizza to the quantity chosen
	total = (amount * quantity).toFixed(2);
		
	// If user starts choosing toppings without having chosen the base
	if(isNaN(total)) {
		$('#alert').html('Oops! You should choose your pizza size first.');
		$('#info').html('');
		total = 0;
	}
	else {
		$('#alert').html('');
	}
	
	// Display total
		$('#summary').html(total);
}
