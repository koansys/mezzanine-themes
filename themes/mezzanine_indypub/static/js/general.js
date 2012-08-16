$(function(){
	$("#slideshow").craftyslide();
	
	//Go through each navigation Item
	$("#navigation ul li a").each(function() {
		var currentURL = window.location.toString();
		var navigationLocation = $(this).attr("href");
				
		//If the navigation item url contains text from the current URL
		if (currentURL.indexOf(navigationLocation) != -1) {
			$(this).parent().addClass("nav-current");
			
			var navigationLocationSubStr = navigationLocation.substring(0, navigationLocation.length-5);
			
			$("#largePicture").addClass(navigationLocationSubStr);
		}
		
		//If the URL is the root
		else if ( $("#header").hasClass("homepage")) {
			$("#navigation ul li:first-child a").addClass("selected");
			$("#largePicture").addClass("home");
		}
	});
	
	$("#awardsChart tr:odd td").addClass("lastrow");

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
			
