$(document).ready(function(){

	//SLIDER
	$('header').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000
	});

	//MASKS
	$('.checkout_cpf').mask('000.000.000-00', {reverse: true}, {placeholder: "000,000,000-00"});
	$('.checkout_birth').mask("00/00/0000", {placeholder: "DD/MM/AAAA"});
	$('.checkout_phone').mask('(00) 0000-0000', {placeholder: "(00) 0000-0000"});
	$('.checkout_cep').mask('00000-000', {placeholder: "00000-000"});

	//TOGGLE BOX
	$('button, #close').on('click',function(e){

		$("form").submit(function(e){ e.preventDefault() ; });

		var txt = false;
		$("input[type=text]").each(function(){
			if( $(this).val() ) {
				txt = true;
			}
		});

		if(txt){
			$(".checkout_fade, .checkout_confirm").toggle(500);
		}

	});

});