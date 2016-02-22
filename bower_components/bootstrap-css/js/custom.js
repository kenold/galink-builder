/*
* Custom Javascript for the link builder form
* Created by Kenold Beauplan
* Follow me on Twitter @kenoldb
*/

/* ********************************************************* 
* Form validation
* Validate website URL, campaign source, medium and name
* All three must not be empty
********************************************************** */

$(function() { 

	$.validator.setDefaults({
		errorClass: 'help-block',
		highlight: function(element) {
			$(element)
				.closest('.form-group')
				.addClass('has-error');
		},
		unhighlight: function(element) {
			$(element)
			.closest('.form-group')
			.removeClass('has-error');
		}
	});

	$("#frm-generate").validate({
		rules: {
				website: {
					required: true,
					url: true
				},
				source: {
					required: true
				},
				medium: {
					required: true
				},
				cname: {
					required: true
				}
		},
		messages: {
			website: { 
				required: "The Website URL field is required",
				url: "Please enter a valid website URL"
			},
			source: "The Campaign Source field is required",
			medium: "The Campaign Medium field is required",
			cname: "The Campaign Name field is required"
		},

		submitHandler: function(form) {

			// call the generate function below
			generate();
			return false;
            form.submit();
        }
	});
		
}); // end form validation


// add an asterisk after each required label with a class 'star'
var labelText = document.getElementsByClassName("star");

for (var i = 0; i < labelText.length; i++) {
	labelText[i].innerHTML += " *";
}

/* ********************************************************* 
* URL builder function 
********************************************************* */

function generate() {	

	// get the url generated div
	var showUrl = document.getElementById("generated");

	//var website = document.getElementById("website").value;
	
	// check if URL has a slash at the end
	//var ln = website.length; // get URL value length
	//var res = website.charAt(ln-1); // get the last character from URL

	
	// object to store results
	var inp = {};
	// get all input elemets
	var elements = document.getElementsByTagName("input");

	for (var i in elements) {
	  // adding new property to object
	  // accessing values later with inp.term for ex.
	    inp[elements[i].name]= elements[i].value;
	}

	// get the div with ID 'result'
	var holder = document.getElementById("result");

	// remove 'hide' class from 'result' div
	showUrl.removeAttribute("class");
	
	// remove campaign term or campaign content from generated URL if empty
	if (inp.term.length == 0 && inp.content.length == 0) {		
		holder.innerHTML = inp.website + "?utm_source=" + inp.source + "&utm_medium=" 
			+ inp.medium + "&utm_campaign=" + inp.cname;
	} else if (inp.term.length == 0) {
		holder.innerHTML = inp.website + "?utm_source=" + inp.source + "&utm_medium=" 
			+ inp.medium + "&utm_content=" + inp.content + "&utm_campaign=" + inp.cname;
	} else if (inp.content.length == 0) {
		holder.innerHTML = inp.website + "?utm_source=" + inp.source + "&utm_medium=" 
			+ inp.medium + "&utm_term=" + inp.term + "&utm_campaign=" + inp.cname;	
	} else {		
		holder.innerHTML = inp.website + "?utm_source=" + inp.source + "&utm_medium=" 
			+ inp.medium + "&utm_term=" + inp.term + "&utm_content=" + inp.content 
			+ "&utm_campaign=" + inp.cname;
	}

} // end generate function

