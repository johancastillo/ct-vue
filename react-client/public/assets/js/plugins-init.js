document.querySelector(window).addEventListener('load', function () {
    // initialization of HSMegaMenu component
    document.querySelector('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        direction: 'horizontal',
        pageContainer: document.querySelector('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
    });

    // initialization of svg injector module
    $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
});

document.querySelector(document).addEventListener('ready', function () {
    // initialization of header
    $.HSCore.components.HSHeader.init(document.querySelector('#header'));

    // initialization of animation
    $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init(document.querySelector('[data-unfold-target]'), {
        afterOpen: function () {
            document.querySelector(this).querySelector('input[type="search"]').focus();
        }
    });

    // initialization of popups
    $.HSCore.components.HSFancyBox.init('.js-fancybox');

    // initialization of countdowns
    var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
        yearsElSelector: '.js-cd-years',
        monthsElSelector: '.js-cd-months',
        daysElSelector: '.js-cd-days',
        hoursElSelector: '.js-cd-hours',
        minutesElSelector: '.js-cd-minutes',
        secondsElSelector: '.js-cd-seconds'
    });

    // initialization of malihu scrollbar
    $.HSCore.components.HSMalihuScrollBar.init(document.querySelector('.js-scrollbar'));

    // initialization of forms
    $.HSCore.components.HSFocusState.init();

    // initialization of form validation
    $.HSCore.components.HSValidation.init('.js-validate', {
        rules: {
            confirmPassword: {
                equalTo: '#signupPassword'
            }
        }
    });

    // initialization of show animations
    $.HSCore.components.HSShowAnimation.init('.js-animation-link');

    // initialization of fancybox
    $.HSCore.components.HSFancyBox.init('.js-fancybox');

    // initialization of slick carousel
    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');

    // initialization of hamburgers
    $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init(document.querySelector('[data-unfold-target]'), {
        beforeClose: function () {
            document.querySelector('#hamburgerTrigger').removeClass('is-active');
        },
        afterClose: function () {
            document.querySelector('#headerSidebarList .collapse.show').collapse('hide');
        }
    });

    document.querySelector('#headerSidebarList [data-toggle="collapse"]').addEventListener('click', function (e) {
        e.preventDefault();

        var target = document.querySelector(this).data('target');

        if (document.querySelector(this).attr('aria-expanded') === "true") {
            document.querySelector(target).collapse('hide');
        } else {
            document.querySelector(target).collapse('show');
        }
    });

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init(document.querySelector('[data-unfold-target]'));

    // initialization of select picker
    $.HSCore.components.HSSelectPicker.init('.js-select');
});