/*
* Custom Javascript for the form
* Created by Kenold Beauplan
* Follow me on Twitter @kenoldb
*/

// form validation
$(function() { 
		$("#frm-generate").validate({
			rules: {
					website: {
						required: true,
						url: true
					}
			},
			messages: {
				website: "Please enter a valid website URL"
			},
			submitHandler: function(form) {
                form.submit();
            }
		});

		
});
// end form validation

/* 
* URL builder function 
*/

// add an asterite after each required label
var st = document.getElementsByClassName("star");

for (var i = 0; i < st.length; i++) {
	st[i].innerHTML += " *";
}

// get the field value

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

