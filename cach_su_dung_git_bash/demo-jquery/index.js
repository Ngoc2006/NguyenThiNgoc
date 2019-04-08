$(document).ready(function(){
	$("button").click(function(){
		$("div").append("<p>" + $("input").val() + "<b> x </b>" + "</p>");

		$("b").click(function(){
			$(this).parent().remove();

		});
			$("p").click(function(){
				$(this).html("<p><del>" + $("input").val() + "</del><b> x </b>" + "</p>");
			});s
	});
});