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
    'http://ca.linkedin.com/in/shudman',
    'https://twitter.com/seedform',
    'https://plus.google.com/u/0/108831680097190194078/posts'
];

var SOC_IMGS = [
    'github-icon.png',
    'linkedin-icon.png',
    'twitter-icon.png',
    'google-plus-icon.png'
];

var SOC_TITLES = [
    'Visit my GitHub profile',
    'View my LinkedIn profile',
    'Follow me on Twitter',
    'Adde me on Google+',
];

var PAGE_EXIT_DELAY = 300;

var page = PAGES.indexOf(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));
var prev = PAGES.indexOf(document.referrer.substring(document.referrer.lastIndexOf('/') + 1));

function goToDelayed(newLoc) {
    setTimeout(function() { window.location = newLoc }, PAGE_EXIT_DELAY);
}

$(document).ready(function() {

    // Write the nav-bar to the page
    var nav = '<div class="vac">';
    for (var i = 0; i < PAGES.length; i++) {
        nav += '<a class="nav-item ' + (page == i ? 'active' : '') + '" href="' + PAGES[i] + '">' + NAV_TITLES[i] + '</a>';
        nav += i < PAGES.length - 1 ? '<span style="color:#aaa; font-weight:300;">|</span>' : '';
    }
    $("#nav").html(nav + '</div>');

    // Write the footer to the page
    var foot = '<div style="padding-bottom:5px;">';
    for (var i = 0; i < SOC_URLS.length; i++) {
        foot += '<a href="' + SOC_URLS[i] + '" title="' + SOC_TITLES[i] + '" class="text-link"><img src="img/' + SOC_IMGS[i] +
                '" style="width:25px; height:25px; vertical-align:middle;"/></a>';
        foot += i < SOC_URLS.length - 1 ? '&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;' : '';
    }
    $("#foot").html(foot + '</div>Copyright &#169; ' + new Date().getFullYear() + ' Shudmanul Chowdhury');
    
    // Set transition animations
    var animIn, animOut;
    if (page < prev) animIn='right-fade-in';
    else if (page > prev) animIn='left-fade-in';
    $('#page-content').addClass(animIn);
    $('a.nav-item').click(function(event) {
        event.preventDefault();
        newLoc = this.getAttribute('href');
        if (page < PAGES.indexOf(newLoc)) animOut='left-fade-out';
        else if (page > PAGES.indexOf(newLoc)) animOut='right-fade-out';
        $('#page-content').addClass(animOut);
        goToDelayed(newLoc);
    });

    // Set all non-navigation links to open in a new tab
    $('a:not(".nav-item")').click(function(event) {
        $('a').attr('target','_blank');
    });

    // Touch gestures
    $('html').swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            $('#page-content').removeClass('left-fade-in right-fade-in');
            if (direction == 'left' && page + 1 < PAGES.length) {
                $('#page-content').addClass('left-fade-out');
                goToDelayed(PAGES[page + 1]);
            } else if (direction == 'right' && page - 1 >= 0) {
                $('#page-content').addClass('right-fade-out');
                goToDelayed(PAGES[page - 1]);
            }
        },
        allowPageScroll:'vertical'
    });
    
});