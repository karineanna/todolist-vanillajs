$(document).ready(function(){


	$("form").on("submit",function(event){
		event.preventDefault();
		// val "Get the current value of the first element in the set of matched elements." *//
		
		var toAdd = $("#remplir").val();
		
		$("#liste").append("<li>"+toAdd+"</li>");

	});

});
