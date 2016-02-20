/*
* Custom Javascript for the form
* Created by Kenold Beauplan
* Follow me on Twitter @kenoldb
*/

/* ********************************************************* 
* Form validation
* Validate website URL, campaign source, medium and name
* All three must not be empty
********************************************************** */

$(function() { 
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
				required: "Website URL cannot be blank",
				url: "Please enter a valid website URL"
			},
			source: "Campaign Source is required",
			medium: "Campaign Medium is required",
			cname: "Campaign name is required"
		},
		submitHandler: function(form) {
			generate();
			return false;
            form.submit();
        }
	});
		
}); // end form validation


// add an asterisk after each required label with a class 'star'
var st = document.getElementsByClassName("star");

for (var i = 0; i < st.length; i++) {
	st[i].innerHTML += " *";
}

/* ********************************************************* 
* URL builder function 
********************************************************* */

function generate() {	

	var showUrl = document.getElementById("generated");

	var website = document.getElementById("website").value;
	var ln = website.length; // get URL value length
	var res = website.charAt(ln-1); // get the last character from URL

	var source = document.getElementById("source").value;
	var medium = document.getElementById("medium").value;
	var term = document.getElementById("term").value;
	var content = document.getElementById("content").value;
	var cname = document.getElementById("cname").value;

	var holder = document.getElementById("result");

	// remove hide class
	showUrl.removeAttribute("class");
	
	// remove campaign term or campaign content from generated URL if empty
	if (term.length == 0) {		
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

