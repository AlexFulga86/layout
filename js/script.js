$(function(){



function disableScroll (){
	$('html,body').css({overflow: 'hidden', height:'100%'});

}

 $('#col-contacts_callBack').click (function () {
	$('#UserForm').css({display:'block',
                        position:'relative',
                        top:'145px',
                        display: 'flex'
                        
                        
                       
                       
                       });
})   
    
$('#Call-Back').click (function () {
	$('#UserForm').fadeOut(400);
})    
    
 function enableScroll(){
 	$('html,body').css({overflow: 'auto'});


 }
$('#mobile-menu').click (function () {
	$('#popup-container').fadeIn(1500);
})


$('.close').click(function (){
	$('#popup-container').fadeOut(400);
	})



$('#RatesBox').show(function(){
$.get(
	'http://data.fixer.io/api/latest',
	{'access_key':'dc7a978114d2d8ce6bf2cbd323e571b8'},function(response){
		 var EU=(response.rates.RUB);
		 var USD=EU/(response.rates.USD);
		 
		 $("#EU").text("1 евро = "+EU.toFixed(2)+" руб.");
		 $("#USD").text("1 доллар = "+USD.toFixed(2)+" руб.");
		 $('#EU').prepend('<img id="EUImg" src="img/eur.png">');
		 $('#USD').prepend('<img id="USImg" src="img/usd.png">');
	});

});




});