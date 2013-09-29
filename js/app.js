'use strict';

$('.calc').click(function(){
    var inc, kgs, result;
    inc = (parseInt($('#ft').val(), 10) * 12) + parseInt($('#inc').val(),10);
    kgs = parseInt($('#kg').val(), 10);
    var male = 50 + 2.3*(inc - 60);
    var female = 45.5 + 2.3*(inc - 60);
    var mdiff = kgs - male;
    var fdiff = kgs - female;
    if(Math.abs(mdiff) < Math.abs(fdiff)){
        result = 'Male';
    }
    else{
        result = 'Female';
    }
    $('.results span').html(result);
    $('.results').fadeIn(200);
});



