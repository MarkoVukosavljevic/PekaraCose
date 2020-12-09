$(function(){
    $("img").hover(function(){
        $(this).animate({"opacity": "0"}, 500 ) 
    } , function(){
        $(this).animate({"opacity" : "1" ,  },500  );
    });

});
$(function(){
    $("p").hover(function(){
        $(this).animate({"opacity": "1"}, 500 ) 
    } , function(){
        $(this).animate({"opacity" : "0.5" ,  },500  );
    });

});
$(document).ready(function(){
    alert("Pogledajte kako se nasa prica razvijala od 1950 do danasnjeg dana!");
   });

   $(document).ready(function() {
    $('.slideshow').cycle({
		fx: 'shuffle' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
});
   

