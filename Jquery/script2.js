$(function(){
    $("img").hover(function(){
        $(this).animate({"opacity": "1"}, 500 ) 
    } , function(){
        $(this).animate({"opacity" : "0.4" ,  },500  );
    });


});

