$(function(){
	$("#slideshow").craftyslide();
	
	var root = location.protocol + '//' + location.host + "/";
	$("#navigation ul li#home a").attr("href", root);
	
	//Go through each navigation Item
	$("#navigation ul li a").each(function() {
		var currentURL = window.location.toString();
		var navigationLocation = $(this).attr("href");
		
		//If the navigation item url contains text from the current URL
		if (currentURL.indexOf(navigationLocation) != 0) {
			if (currentURL.indexOf(navigationLocation) != -1) {
				$(this).parent().addClass("nav-current");
			}
		}
		
		//If the page is at the root
		if (currentURL == root) {
			$("#navigation ul li#home").addClass("nav-current");
		}
		
	});
	
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
		function(data){
		
			setTimeout('returnData()', 500);
		});	
		
				
		return false;
	}

	
}

function returnData() {
	//hide the graphic
	$("#loader").hide();
	$("#submitted").show();
}
			
