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
 
    // HEADER - FOOGER -->
    {
        Generate_Header();
        Generate_Footer();
    }
    
    // JSON WORK -->
    {
        
        Generate_Arts_Gallery();
        Generate_Infographics_Gallery()
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

    /* JAON WORK */
    function Generate_Arts_Gallery()
    {
        // ART 
        $.getJSON("https://khizooo.com/wwwroot/json/art.json", function (AllArts) {
                    
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

                setTimeout(() => { 
                    // Shuffle js filter and masonry
                    var Shuffle = window.Shuffle;
                    var jQuery = window.jQuery;

                    var ArtShuffle = new Shuffle(document.querySelector('#Art-Shuffle-Wrapper'), { itemSelector: '.shuffle-item', buffer: 1 });
                    jQuery('input[name="shuffle-filter-art"]').on('change', function (evt) {
                        var input = evt.currentTarget;
                        if (input.checked) {
                            ArtShuffle.filter(input.value);
                        }
                    });
                }, 1000);

        });
    }

    function Generate_Infographics_Gallery()
    {
        // ART 
        $.getJSON("https://khizooo.com/wwwroot/json/infographic.json", function (AllArts) {
                    
            let HTML = '';  

            AllArts.forEach(function (A) {

                HTML += '<div class="col-lg-3 col-md-3 col-3 mb-3 shuffle-item" data-groups="'+A.DataGroup+'">' +
                            '<div class="position-relative inner-box">' +
                                '<div class="image position-relative ">' +

                                    '<img class="img-fluid w-100 d-block" src="'+A.List_IMG_URL+'" alt="'+A.Heading+'" title="'+A.Heading+'" loading="lazy" decoding="async" importance="high" crossorigin="anonymous">' +
                                
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

            $("#Infographic-Shuffle-Wrappers").empty().append(HTML);

        });
    }
    /* JAON WORK */

    /* HEADER - FOOTER */
    function Generate_Header()
    {
        let HTML = `<div class="container">
                        <!-- KhizoOo LOGO -->
                        <a class="navbar-brand" href="/" target="_self" title="Logo">
                            <img src="https://khizooo.com/wwwroot/logo/OK-Logo-S.png" width="200" class="img-fluid" alt="khizooo Logo" title="khizooo Logo" loading="lazy" decoding="async" importance="high" crossorigin="anonymous">
                        </a>
                        <!-- KhizoOo LOGO -->
                        <!-- Mobile HumBerger -->
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="ti-align-justify"></span>
                        </button>
                        <!-- Mobile HumBerger -->
                        <!-- Header Links -->
                        <div class="collapse navbar-collapse" id="navbarsExample09">
                            <ul class="navbar-nav ml-auto">

                                <li id="HOME" class="nav-item">
                                    <a class="nav-link" href="/" target="_self" title="Landing page">Home</a>
                                </li>

                                <li id="WORKFOLIO" class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="" id="dropdown01" target="_self" title="My Workfolio page" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Workfolio</a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdown01">
                                        <li><a class="dropdown-item" href="" target="_self" title="Technology blogs">Portfolio</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Code Vault">Artfulness</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Code Vault">Code Vault</a></li>

                                    </ul>
                                </li>

                                <li id="INFOGRAPHICS" class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="" id="dropdown02" target="_self" title="My Infographics landing page" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Infographics</a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdown02">
                                        <li><a class="dropdown-item" href="" target="_self" title="Technology Infographics">Technology</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Versus Infographics">Versus</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Top 10 Infographics">Top 10</a></li>
                                    </ul>
                                </li>

                                <li id="WORDPLAY" class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="" id="dropdown03" target="_self" title="My Wordplay landing page" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Writings</a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdown03">
                                        <li><a class="dropdown-item" href="" target="_self" title="Technology Wordplay">Technology</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Versus Wordplay">Versus</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Top 10 Wordplay">Top 10</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Story Teller Wordplay">Story Teller</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Inspirational Wordplay">Inspirational</a></li>
                                    </ul>
                                </li>

                                <li id="TOOLBOX" class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="" id="dropdown04" target="_self" title="My ToolBox page" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ToolBox</a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdown04">
                                        <li><a class="dropdown-item" href="" target="_self" title="Color Palettes">Color Palettes</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Fonts">Fonts</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Widgets">Widgets</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Extgeension">Extensions</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Summary Engine">Summary Engine</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="How to Guides">How to Guides</a></li>
                                    </ul>
                                </li>

                                <li id="ME" class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="" id="dropdown05" target="_self" title="About & Contact Us Pagee" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ME</a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdown05">
                                        <li><a class="dropdown-item" href="" target="_self" title="Color Palettes">About Me</a></li>
                                        <li><a class="dropdown-item" href="" target="_self" title="Fonts">Contact Me</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                        <!-- Header Links -->
                    </div>`;  
            
        $("#TOP-HEADER").empty().append(HTML);
    }

    function Generate_Footer()
    {
        let HTML = `<div class="container">
                        <div class="row ">
                            <div class="col-lg-6">
                                <p class="mb-0">Copyrights © 2023. Designed & Developed by <a href="KhizoOo.com" class="text-white">KhizoOo</a></p>
                            </div>
                            <div class="col-lg-6">
                                <div class="widget footer-widget text-lg-right mt-5 mt-lg-0">
                                    <ul class="list-inline mb-0">
                                        <li class="list-inline-item">
                                            <a href="https://www.facebook.com/KhizoOo" target="_blank"><i class="ti-facebook mr-3"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="https://twitter.com/KhizoOo" target="_blank"><i class="ti-twitter mr-3"></i></a>
                                        </li>
                                        <li class="list-inline-item"><a href="https://github.com/KhizoOo/" target="_blank"><i class="ti-github mr-3"></i></a></li>
                                        <li class="list-inline-item"><a href="https://www.pinterest.com/KhizoOo/" target="_blank"><i class="ti-pinterest mr-3"></i></a></li>
                                        <li class="list-inline-item"><a href="https://dribbble.com/KhizoOo/" target="_blank"><i class="ti-dribbble mr-3"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`;  
            
        $("#FOOTER").empty().append(HTML);
    }
    /* HEADER - FOOTER */


})(jQuery);