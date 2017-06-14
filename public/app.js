$(document).ready(function() {
	$('#multiscroll').multiscroll();
	$('select').material_select();

	function hover (){
		$("#hover").hover(
		function(){ $(this).addClass('fa fa-github fa-spin fa-2x fa-fw') },
       	function(){ $(this).removeClass('fa fa-github fa-2x');
       });
	hover();
	}
});