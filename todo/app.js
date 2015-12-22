$(document).ready(function(){


	$("form").on("submit",function(event){
		event.preventDefault();
		// val "Get the current value of the first element in the set of matched elements." *//
		
		var toAdd = $("#remplir").val();
		
		$("#liste").append("<li>"+toAdd+"</li>");

	});

	/* 
	Pour la suite, c'est la même logique :
	- ajouter un listener à un bouton (en le sélectionnant par son id)
	- dans la 'function(){ ... }' (qu'on appelle le callback), ajouter
	les choses à faire : montrer tels éléments, cacher ceux là...
	Toujours en sélectionnant les éléments grâce à leur classe, type ou id.
	*/

});
