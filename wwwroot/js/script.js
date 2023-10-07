/*
    Website     https://www.khizooo.com
    LinkedIn    https://www.linkedin.com/in/khizar-imtiaz
    Facebook    https://www.facebook.com/khizoooartist
    Twitter	    https://twitter.com/khizaroo
    Instagram   https://www.instagram.com/khizooo_art
    Pinterest   https://www.pinterest.com/KhizoOo_
    Blogger     https://khizooo.blogspot.com
    OpenSea     https://opensea.io/KhizoOo_
*/



(function ($) {

    'use strict';

    // GENERAL
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;
    

    { // Animate On Scroll Library

        try
        {
            AOS.init({ once: true });
        }
        catch (E) { console.log("Animate On Scroll Library"); }
        
    }

    { // Progress Bar

        try {
            $(window).on('load', function () {

                $('body').removeClass("planet");

                $('.progress-bar').each(function () {
                    var width = $(this).data('percent');
                    $(this).css({ 'transition': 'width 3s' });
                    $(this).appear(function () {
                        console.log('hello');
                        $(this).css('width', width + '%');
                        $(this).find('.count').countTo({
                            from: 0,
                            to: width,
                            speed: 3000,
                            refreshInterval: 50
                        });
                    });
                });

                debugger

                document.querySelector('video').play();

            });
        }
        catch (E) { console.log("Progress Bar"); }

    }

    { // Images Galleery

        // Shuffle js filter and masonry
        var Shuffle = window.Shuffle;
        var jQuery = window.jQuery;

        var ArtShuffle = new Shuffle(document.querySelector('#Art-Shuffle-Wrapper'), { itemSelector: '.shuffle-item', buffer: 1 });
        // var WritingShuffle = new Shuffle(document.querySelector('#Infographic-Shuffle-Wrappers'), { itemSelector: '.shuffle-item', buffer: 1 });

        jQuery('input[name="shuffle-filter-art"]').on('change', function (evt) {
            var input = evt.currentTarget;
            if (input.checked) {
                ArtShuffle.filter(input.value);
            }
        });


        //jQuery('input[name="shuffle-filter-infographic"]').on('change', function (evt) {
        //    var input = evt.currentTarget;
        //    if (input.checked) {
        //        WritingShuffle.filter(input.value);
        //    }
        //});
    }

})(jQuery);