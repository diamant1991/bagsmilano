$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});


$( document ).ready(function() {

	$('.get-call-link').click(function(){
    	$('.form-mask').fadeIn(300);
    	$('#get-call').fadeIn(300);
    })

	$('.register-link').click(function(){
    	$('.form-mask').fadeIn(300);
    	$('#registration').fadeIn(300);
    })
  
  $('.one-click').click(function(){
      $('.form-mask').fadeIn(300);
      $('#one-click').fadeIn(300);
    })

    $('.add-basket').click(function(){
    	$('.form-mask').show();
    	$('#added').show();
    })

    $('.form-mask,.closed').click(function(){
  	 $('.modal,.form-mask').fadeOut(300);
  })


	$(document).keyup(function(d) {
	    if (d.keyCode == 27) {
	        $('.form-mask').fadeOut(300);
	        $('.modal').fadeOut(300);
	    }
	});


});