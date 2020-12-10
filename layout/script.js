$(function(){
    $('.nav-menu').find('a').click(function(e){
        let target = $(this).data('target');
        let offset = $(target).offset().top;
        $('html,body').animate({
            scrollTop: offset
        });
        e.preventDefault();
    })
    $('#gotop').click(function(e){
        $('html,body').animate({
            scrollTop: 0
        })
        e.preventDefault();
    })
})