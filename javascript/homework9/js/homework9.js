$('.tabs-title').not('.active').click(function(){
    let index = $(this).index();
    let content = $('.tabs-content-item').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs-content-item').removeClass('active').eq(index).addClass('active');
});

$('.tabs-title:first').addClass('active');
$('.tabs-content-item:first').addClass('active');