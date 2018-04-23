$(document).ready(function(){
	

	AjustesTela();

	$('#btnDireita').click(function(e){
		$('#myCarousel2').carousel('next');
	});

	$('#btnEsquerda').click(function(e){
		$('#myCarousel2').carousel('prev');
	});
	
	

	$(window).resize(function(){
			AjustesTela();
	});

	
	function AjustesTela(){
		if($(window).width() <= 400){
			$('.teste').css('display', 'block');
			$('#naoFiqueDeFora').css('font-size', '30px');
			$('.imgRedonda').css('width', '180px');
			$('.barrinha').css('margin-top', '0px');
			$('.imagemPalestrante').css('z-index', '0');
			$('.imagemPalestrante').css('position', 'relative');
			$('.descricaoPalestrante').css('padding-left', '25px');
			$('#barrinhasColoridas').css('margin-top', '20px');
			$('#footer').css('text-align', 'center');
			$('#logos').css('float', 'none');
			$('.logosRodape').css('float', 'none');
			$('#imagensRodape').css('margin-top', '40px');
			$('#imagensRodape').css('text-align', 'center');
		}else{
			$('.teste').css('display', 'inline-block');
			$('#naoFiqueDeFora').css('font-size', '70px');
			$('.imgRedonda').css('width', '100%');
			$('.barrinha').css('margin-top', '50px');
			$('.imagemPalestrante').css('z-index', '2');
			$('.imagemPalestrante').css('position', 'absolute');
			$('.descricaoPalestrante').css('padding-left', '200px');
			$('#barrinhasColoridas').css('margin-top', '100px');
			$('#footer').css('text-align', 'left');
			$('.logosRodape').css('float', 'left');
			$('#logos').css('float', 'right');
			$('#imagensRodape').css('margin-top', '0px');
			$('#imagensRodape').css('text-align', 'right');
		}
	}
});
