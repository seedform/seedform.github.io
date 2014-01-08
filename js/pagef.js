var PAGES = [
    'projects.html',
    'about.html',
    'contact.html'
];

var NAV_TITLES = [
    'PROJECTS',
    'ABOUT',
    'CONTACT'
];

var SOC_URLS = [
    'https://github.com/seedform',
    'https://twitter.com/seedform',
    'https://plus.google.com/u/0/108831680097190194078/posts'
];

var SOC_IMGS = [
    'GitHub-Mark-120px-plus.png',
    'Twitter_logo_blue.png',
    'Red-signin-Small-base-44dp.png'
];

var SOC_TITLES = [
    'Visit my GitHub profile',
    'Follow me on Twitter',
    'Adde me on Google+'
];

var PAGE_EXIT_DELAY = 300;

var page = PAGES.indexOf(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));
var prev = PAGES.indexOf(document.referrer.substring(document.referrer.lastIndexOf('/') + 1));

function delayGoTo(newLoc) {
    setTimeout(function() { window.location = newLoc }, PAGE_EXIT_DELAY)
}

$(document).ready(function() {

    // Write the nav-bar to the page
    var nav = '<div class="vac">';
    for (var i = 0; i < PAGES.length; i++) {
        nav += '<a class="nav-item ' + (page == i ? 'active' : '') + '" href="' + PAGES[i] + '">' + NAV_TITLES[i] + '</a>';
        nav += i < PAGES.length - 1 ? '&nbsp;|&nbsp;' : '';
    }
    $("#nav").html(nav + '</div>');

    // Write the footer to the page
    var foot = '<hr><div style="margin-bottom: 6px; font-size:120%;">';
    for (var i = 0; i < SOC_URLS.length; i++) {
        foot += '<a href="' + SOC_URLS[i] + '" title="' + SOC_TITLES[i] + '" class="text-link"> <img src="img/' + SOC_IMGS[i] + '" class="footer-img-lnk"/> </a>';
        foot += i < SOC_URLS.length - 1 ? '&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;' : '';
    }
    $("#foot").html(foot + '</div> <hr> Copyright &#169; ' + new Date().getFullYear() + ' Shudmanul Chowdhury');
    
    // Set the footer position to be static or fixed based on screen size
    function fixFoot() {
        if ($(window).width() < 650) {
            $('#foot').css('position', 'static');
            $('#page-content').css('padding-bottom', '20px');
        } else {
            $('#foot').css('position', 'fixed');
            $('#page-content').css('padding-bottom', '110px');
        }
    }
    $(window).resize(function() {
        fixFoot();
    });
    
    // Set transition animations
    var animIn, animOut;
    if (PAGES.indexOf(page) < PAGES.indexOf(prev)) animIn='right-fade-in';
    else if (PAGES.indexOf(page) > PAGES.indexOf(prev)) animIn='left-fade-in';
    $('#page-content').addClass(animIn);
    $('a.nav-item').click(function(event) {
        event.preventDefault();
        var newLoc = this.getAttribute('href');        
        if (PAGES.indexOf(page) < PAGES.indexOf(newLoc)) animOut='left-fade-out';
        else if (PAGES.indexOf(page) > PAGES.indexOf(newLoc)) animOut='right-fade-out';
        $('#page-content').addClass(animOut);
        delayGoTo(newLoc);
    });

    // Set all non-navigation links to open in a new tab
    $('a:not(".nav-item")').click(function(event) {
        $('a').attr('target','_blank');
    });
    
    // Touch gestures
    var element = document.getElementById('page-content');
    Hammer(element).on("swipeleft", function() {
        $('#page-content').removeClass('left-fade-in right-fade-in');
        $('#page-content').addClass('left-fade-out');
        if (page + 1 <= PAGES.length) delayGoTo(PAGES[page + 1]);
        else $('#page-content').addClass('right-fade-in');
    });
    Hammer(element).on("swiperight", function() {
        $('#page-content').removeClass('left-fade-in right-fade-in');
        $('#page-content').addClass('right-fade-out');
        if (page - 1 >= 0) delayGoTo(PAGES[page - 1]);
        else $('#page-content').addClass('left-fade-in');
    });
    
});