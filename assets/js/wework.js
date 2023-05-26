function visSection(section) {
    section.find('.left').addClass("animate__animated animate__bounceInLeft");
    section.find('.right').addClass("animate__animated animate__bounceInRight");
}

function hidSection(section) {
    section.find('.aniIn_bounceInLeft').removeClass("animate__animated animate__bounceInLeft");
    section.find('.aniIn_bounceInRight').removeClass("animate__animated animate__bounceInRight");
}


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#weworkPage').classList.add('slideUp');
    scrollToTop();

    if (window.innerWidth > 1025) {
        const page = './index.html';
        openNextPageOnScrollUp(page);
    }
})

$(window).scroll(function () {
    const scrollPosition = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('section').each(function () {
        const elementOffset = $(this).offset().top;
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
});