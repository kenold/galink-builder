/*
* Custom Javascript for the form
* Created by Kenold Beauplan
* Follow me on Twitter @kenoldb
*/

// add an asterite after each required label
var st = document.getElementsByClassName("star");
var i;

for (i = 0; i < st.length; i++) {
	st[i].innerHTML += " *";
}

// get the field value

function generate() {

	var urlValue = document.getElementById("url").value;
	var ln = urlValue.length; // get URL value length
	var res = urlValue.charAt(ln-1); // get the last character from URL

	var sourceValue = document.getElementById("source").value;
	var mediumValue = document.getElementById("medium").value;
	var termValue = document.getElementById("term").value;
	var contentValue = document.getElementById("content").value;
	var nameValue = document.getElementById("name").value;

	var holder = document.getElementById("result");

	/*if (res == "/") {*/
		if (termValue.length != 0 && contentValue.length != 0) {
			holder.innerHTML = urlValue + "?utm_source=" + sourceValue + "&utm_medium=" 
				+ mediumValue + "&utm_term=" + termValue + "&utm_content=" + contentValue + "&utm_campaign=" + nameValue;
		}
	 

	/*} else if (res == "/" && termValue.length == 0 && contentValue.length == 0) {
		holder.innerHTML = urlValue + "?utm_source=" + sourceValue + "&utm_medium=" + mediumValue + "&utm_campaign=" + nameValue;
	}*/ else {
		/*holder.innerHTML = urlValue + "/?utm_source=" + sourceValue + "&utm_medium=" + mediumValue + "&utm_term=" + termValue + "&utm_content=" + contentValue + "&utm_campaign=" + nameValue;*/
		holder.innerHTML = urlValue + "?utm_source=" + sourceValue + "&utm_medium=" + mediumValue + "&utm_campaign=" + nameValue;
	}

}

