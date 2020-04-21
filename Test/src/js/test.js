var $ = function(id) {
    return document.getElementById(id);
};

var infoList = function() {
	var namee = $("namee").value;
	var age = $("age").value;
	var occupation = $("occupation").value;
	var isValid = true

if (namee === "") { 
		$("name_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("name_error").firstChild.nodeValue = ""; }

if (age === "") { 
		$("age_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("age_error").firstChild.nodeValue = ""; }
if (occupation === "") { 
		$("occupation_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("occupation_error").firstChild.nodeValue = ""; }

	if (isValid) {
		$("info_form").submit(); 
	}

window.onload = function() {
    $("info_list").onclick = infoList;
    $("namee").focus();
};