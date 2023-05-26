document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#weworkPage').classList.add('slideUp');
    scrollToTop();

    if (window.innerWidth > 1025) {
        const page = './index.html';
        openNextPageOnScrollUp(page);
    }
})

let lastScrollTop = 0;

$(window).scroll(function () {
    const scrollPosition = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('#desktopView section').each(function () {
        const elementOffset = $(this).offset().top;

        $(this).removeClass('aniUtil_scrollDiv');
        $(this).find('.right').removeClass('ani_bounceInRight aniUtil_active aniUtil_dramatic').css({'opacity': '1'});
        $(this).find('.left').removeClass('ani_bounceInLeft aniUtil_active aniUtil_dramatic').css({ 'opacity': '1' });

        if (scrollPosition > elementOffset - windowHeight + 50) {
            $(this).removeClass('opacity-0');
            $(this).find('.right').addClass('animate__animated animate__bounceInRight');
            $(this).find('.left').addClass('animate__animated animate__bounceInLeft');
        }

        else {
            $(this).addClass('opacity-0');
            $(this).find('.right').removeClass('animate__animated animate__bounceInRight');
            $(this).find('.left').removeClass('animate__animated animate__bounceInLeft');
        }
    });

    if (scrollPosition < lastScrollTop) {
        $('#desktopView section').each(function () {
            const elementOffset = $(this).offset().top;
            $(this).addClass('aniUtil_scrollDiv');
            $(this).find('.right').addClass('ani_bounceInRight aniUtil_active aniUtil_dramatic').css({ 'opacity': '1' });
            $(this).find('.left').addClass('ani_bounceInLeft aniUtil_active aniUtil_dramatic').css({ 'opacity': '1' });
        });
    }

    lastScrollTop = scrollPosition;
});