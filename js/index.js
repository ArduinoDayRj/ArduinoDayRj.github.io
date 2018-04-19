$(document).ready(function(){
	AjustesTela();
	

	$(window).resize(function(){
			AjustesTela();
	});

	
	function AjustesTela(){
		if($(window).width() <= 400){
			$('.teste').css('display', 'block');
			$('#naoFiqueDeFora').css('font-size', '30px');
			$('.imgRedonda').css('width', '180px');
		}else{
			$('.teste').css('display', 'inline-block');
			$('#naoFiqueDeFora').css('font-size', '70px');
			$('.imgRedonda').css('width', '100%');
		}
	}
});
