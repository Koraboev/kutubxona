$(document).ready (function (){
    // List box scripts
    $('.list').mouseenter (function () {
        $(this).find('a').css('color', '#20B2AA');
        $(this).find('a').addClass('before-a');
    });
    $('.list').mouseleave (function () {
        $(this).find('a').css('color', '#333333');
        $(this).find('a').removeClass('before-a');
    });

    // language script
    $('.uz').mouseenter(function () {
        $(this).find('.langs').slideDown();
        $(this).find('i').css('transform', 'rotate(180deg)');  
    });

    $('.uz').mouseleave(function () {
        $(this).find('.langs').slideUp();
        $(this).find('i').css('transform', 'rotate(360deg)');   
    });

    $('.langs p').click(function(){
        $('.langs').slideUp();
    });

    $('.langs p').mouseenter(function() {
        $(this).find('img').addClass('fa-spin');
    });
    $('.langs p').mouseleave(function() {
        $(this).find('img').removeClass('fa-spin');
    });

    // Search box
    $('.search-box i').click(function() {
        $('.search-box').find('input').slideToggle();
        $('.lang').find('.uz').slideToggle();
    });

    // footer section
    $('.foot-blog  span').hover( function() {
        $(this).find('h2').toggleClass('h2-hover');
    })
    
    $('.foot-blog li a').mouseenter( function() {
        $(this).find('i').css({'background':'#20B2AA', 'color':'#FFF', 'margin-right':'20px', 'transition':'700ms'});
    });
    $('.foot-blog li a').mouseleave( function() {
        $(this).find('i').css({'background':'#FFF', 'color':'#004242', 'margin-right':'10px', 'transition':'700ms'});
    });
});