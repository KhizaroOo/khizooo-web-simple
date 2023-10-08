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
 
    // JSON WORK -->
    {

        // ART 
        $.getJSON("https://khizarooo.github.io/khizooo-web-simple/wwwroot/json/art.json", function (AllArts) {
            
        let HTML = '';  

        AllArts.forEach(function (A) {

                HTML += '<div class="col-lg-2 col-md-2 col-3 mb-2 shuffle-item" data-groups="'+A.DataGroup+'">' +
                        '<div class="position-relative inner-box">' +
                            '<div class="image position-relative">' +

                            '<img class="img-fluid w-100 d-block" src="'+A.IMG+'" alt="'+A.Heading+'" title="'+A.Heading+'" loading="lazy" decoding="async" importance="high" crossorigin="anonymous">' +
                                        
                            '<div class="overlay-box">' +
                                '<div class="overlay-inner">' +

                                '<a class="overlay-content" href="'+A.URL+'" title="'+A.Heading+'" target="_self">' +
                                    '<h5 class="mb-0">'+A.Title+'</h5>' +
                                    '<p>'+A.SubTitle+'</p>' +
                                '</a>' +

                                '</div>' +
                            '</div>' +
                            '</div>' +
                        '</div>' +
                        '</div>';

            });

            $("#Art-Shuffle-Wrapper").empty().append(HTML);

        });

        // ART 
        $.getJSON("https://khizarooo.github.io/khizooo-web-simple/wwwroot/json/art.json", function (AllArts) {
            
            let HTML = '';  

            AllArts.forEach(function (A) {

                HTML += '<div class="col-lg-2 col-md-2 col-3 mb-2 shuffle-item" data-groups="'+A.DataGroup+'">' +
                            '<div class="position-relative inner-box">' +
                            '<div class="image position-relative">' +

                                '<img class="img-fluid w-100 d-block" src="'+A.IMG+'" alt="'+A.Heading+'" title="'+A.Heading+'" loading="lazy" decoding="async" importance="high" crossorigin="anonymous">' +
                                        
                                '<div class="overlay-box">' +
                                '<div class="overlay-inner">' +

                                    '<a class="overlay-content" href="'+A.URL+'" title="'+A.Heading+'" target="_self">' +
                                    '<h5 class="mb-0">'+A.Title+'</h5>' +
                                    '<p>'+A.SubTitle+'</p>' +
                                    '</a>' +

                                '</div>' +
                                '</div>' +
                            '</div>' +
                            '</div>' +
                        '</div>';

            });

            $("#Art-Shuffle-Wrapper").empty().append(HTML);

        });
        
    }

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

        // var WritingShuffle = new Shuffle(document.querySelector('#Infographic-Shuffle-Wrappers'), { itemSelector: '.shuffle-item', buffer: 1 });
        //jQuery('input[name="shuffle-filter-infographic"]').on('change', function (evt) {
        //    var input = evt.currentTarget;
        //    if (input.checked) {
        //        WritingShuffle.filter(input.value);
        //    }
        //});
    }

})(jQuery);