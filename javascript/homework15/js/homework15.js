const $ourMenu = $('<div class="our-menu"></div>');

$('header').before($ourMenu);

$ourMenu.append($('<a href="#posts" class="link">POSTS</a>'));
$ourMenu.append($('<a href="#clients" class="link">CLIENTS</a>'));
$ourMenu.append($('<a href="#top-rated" class="link">TOP RATED</a>'));
$ourMenu.append($('<a href="#news" class="link">NEWS</a>'));

$(".link").click(function () {
    const id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

const $ourBtn = ('<a href="#" class="back-home">to top</a>');
$('header').after($ourBtn);

const $backHome = $('.back-home');

$(window).scroll(function () {
    const $height = $(this).height();
    const $top = $(this).scrollTop();

    if ($top > $height) {
        $backHome.fadeIn(1000);
    } else {
        $backHome.fadeOut(1000);
    }
});

$backHome.click(function (e) {
    $('body,html').animate({scrollTop: 0}, 1200);
    e.preventDefault();
});

const $toggleBtn = ('<button class="toggle-btn">SHOW HIDE</button>');
$('.clients').after($toggleBtn);

$('.toggle-btn').click(function () {
    $('.clients').slideToggle();
});