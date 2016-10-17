$(document).ready(function() {
	$('#voice').click(function(){
		$("div#voicewindow").slideToggle("slow");
	});
    $('#voice').hover(function(){
        $('div#voicewindow').slideToggle('slow');
    }, function() {
        $('div#voicewindow').slideToggle('slow');
    });
  	$('#voice').hover(function(){
		$('#voice').hide();
		$('#voiceactive').show();
	});
   
    // Collapse Panel
//	$("#close").click(function(){
//		$("div#panel").slideUp("slow");
//	});
	
	// Switch buttons from "Log In | Register" to "Close Panel" on click
//	$("#n-home a").click(function () {
//		$("div#bsup").toggle();
//	});
		
});