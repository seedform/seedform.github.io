document.write(
    '<link rel="shortcut icon" href="img/icon.png">' +
    '<link rel="stylesheet" href="stylesheet.css" type="text/css" charset="utf-8"/>' +
    '<link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700" rel="stylesheet" type="text/css">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />'
);

$(document).ready(function() {
    
    // Writes the nav-bar to the page
    var page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.lastIndexOf("."));
    $("#nav").html(
        '<div class="vac">' +
            '<a class="nav-item ' + (page == '/' ? 'active' : '') + '" href="http://seedform.github.io/">PROJECTS</a>' + ' | ' +
            '<a class="nav-item ' + (page == 'about' ? 'active' : '') + '" href="about.html">ABOUT</a>' + ' | ' + 
            '<a class="nav-item ' + (page == 'contact' ? 'active' : '') + '" href="contact.html">CONTACT</a>' +
        '</div>'
    );

    // Writes the footer to the page
    $("#foot").html(
        '<hr>' +
        '<div style="margin-bottom: 6px; font-size:120%;">' +
            '<a href="https://github.com/seedform" title="Visit my GitHub profile" class="text-link">' +
                '<img src="img/GitHub-Mark-120px-plus.png" style="width:32px; height:32px; vertical-align:middle;"/>' +
            '</a>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<a href="https://twitter.com/seedform" title="Follow me on Twitter" class="text-link">' +
                '<img src="img/Twitter_logo_blue.png" style="width:32px; height:32px; vertical-align:middle;"/>' +
            '</a>' +
            '&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;' +
            '<a href="https://plus.google.com/u/0/108831680097190194078/posts" title="Add me on Google+" class="text-link">' +
                '<img src="img/Red-signin-Small-base-44dp.png" style="width:36px; height:36px; vertical-align:middle;"/>' +
            '</a>' +
        '</div>' +
        '<hr>' +
        '&#169; ' + new Date().getFullYear() + ' Shudmanul Chowdhury'
    );
    
    // Fading transition, taken from http://jsfiddle.net/vincentieo/6K9SZ/
    var speed = 'medium';
    $('.page-content').hide();
    $('.page-content').fadeIn(speed, function() {
        $('a.nav-item').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('.page-content').fadeOut(speed, function() {
                window.location = url;
            });
        });
    });
    
    // Sets all non-navigation links to open in a new tab
    $('a:not(".nav-item")').click(function(event) {
        $('a').attr('target','_blank');
    });
    
});
