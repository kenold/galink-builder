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

	var website = document.getElementById("website").value;
	var ln = website.length; // get URL value length
	var res = website.charAt(ln-1); // get the last character from URL

	// get the values of the fields below
	var source = document.getElementById("source").value;
	var medium = document.getElementById("medium").value;
	var term = document.getElementById("term").value;
	var content = document.getElementById("content").value;
	var cname = document.getElementById("cname").value;

	// get the div with ID 'result'
	var holder = document.getElementById("result");

	// remove 'hide' class from 'result' div
	showUrl.removeAttribute("class");
	
	// remove campaign term or campaign content from generated URL if empty
	if (term.length == 0 && content.length == 0) {		
		holder.innerHTML = website + "?utm_source=" + source + "&utm_medium=" 
			+ medium + "&utm_campaign=" + cname;
	} else if (term.length == 0) {
		holder.innerHTML = website + "?utm_source=" + source + "&utm_medium=" 
			+ medium + "&utm_content=" + content + "&utm_campaign=" + cname;
	} else if (content.length == 0) {
		holder.innerHTML = website + "?utm_source=" + source + "&utm_medium=" 
			+ medium + "&utm_term=" + term + "&utm_campaign=" + cname;	
	} else {		
		holder.innerHTML = website + "?utm_source=" + source + "&utm_medium=" 
			+ medium + "&utm_term=" + term + "&utm_content=" + content + "&utm_campaign=" + cname;
	}

}

