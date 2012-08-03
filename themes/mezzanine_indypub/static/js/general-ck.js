$(function(){
	$("#slideshow").craftyslide();
});

function validateNewsletterSignUp(form) {	
	var errors = 0;

	var hasValue = $("#newsletterForm #emailAddress").attr("value");		
	
	if (hasValue != "") {
		errors = errors;
	}
	else {
		errors = errors + 1;
	}
	
	
	if (errors >= 1) {
		$("#newsletterForm #emailAddress").addClass("error");
		
		return false;
	}
	else {
		//hide the form			
		$("#newsletterForm").hide();
		$("#loader").show();

		$("#newsletterForm #emailAddress").removeClass("error");

		//send the ajax request  
		$.get('../static/php/newsletterSignUp.php',{emailAddress:$("#newsletterSignUp #emailAddress").val()}, 		
		
		//return the data
		setTimeout(function(data){
			//hide the graphic
			$("#loader").hide();
			$("#submitted").show();
		}, 500);	
					
		return false;
	}

	
}
