$(document).ready(function(){
	
	//Unbind Image Draggin in html. Avoids drag problems on CoverFlow
	$('img').bind('dragstart', function(event) { event.preventDefault(); });
	
	var coverFlowElement = $('#coverFlow');
	var coverFlow = new CoverFlow(coverFlowElement);
		
});
