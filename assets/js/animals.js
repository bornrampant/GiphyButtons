//	Variables > objects > functions > onclicks

$(function() {
    console.log( "ready!" );
    console.log(animal);
    console.log(value);
    console.log(button)

	var animalCount = 0;

	// On Click addAnimal function
	$('#addAnimal').on('click', function() {

	    // api and searches for animals (random)
	    var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=animals";

	    $.ajax({url: queryURL, method: 'GET'})

	        // query. 
	        .done(function(response) {

	            // image_url to the specific object 
	            var imageUrl = response.data.image_original_url;

	            var animalImage = $("<img>");
	            
	            //animalImage  source path 
	            animalImage.attr('src', imageUrl);
	            //alt
	            animalImage.attr('alt', 'animal image');

	            //before the content that's there 
	            $('#giphy').prepend(animalImage);
	        });
		// animal "value" from the textbox
		value = $("#animal").val().trim();		

		// Create new <p> tag hold a animalitem; unique identifier list #. 
		animal = $("<p>");
	
		// Then give it an ID of the form: number is equal to animalCount.
		animal.attr("id", "item-" + animalCount);

		//append the animal text to <p> 
		animal.prepend(value);

		//  based on what number it is in the list.
	 	var button = $("<button>")
	 	button.attr("id", "item-" + animalCount);

		//  data-animal "checkbox".
		button.attr("data-animal", animalCount)
		button.addClass("checkbox") 
		button.text("X")
		animal.append(button)

		// Add the button before animal item to the "animals" div
		$("#animals").prepend(animal)

		// Clear
		$("#animal").val("")

		// Add 
		animalCount++

		// No Refreshing (return false)
		return false;
	   
	});

	$(document.body).on('click', '.checkbox', function(){

		// Get the animalNumber of the button from its data attribute.
		var animalNumber = $(this).data('data-animal');

		// Empty specific <p> element 
		$('#item-'+animalNumber).remove();

		// Empty specific <p> element 
		var id = this.id;
		$("#" + id).remove();


	});
});	