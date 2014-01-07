var page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
var prev = document.referrer.substring(document.referrer.lastIndexOf('/') + 1);

var navHrefs = new Array(
    '/',
    'about.html',
    'contact.html'
);

var navTitles = new Array(
    'PROJECTS',
    'ABOUT',
    'CONTACT'
);

var socHrefs = new Array(
    'https://github.com/seedform',
    'https://twitter.com/seedform',
    'https://plus.google.com/u/0/108831680097190194078/posts'
);

var socImgs = new Array(
    'GitHub-Mark-120px-plus.png',
    'Twitter_logo_blue.png',
    'Red-signin-Small-base-44dp.png'
);

var socTitles = new Array(
    'Visit my GitHub profile',
    'Follow me on Twitter',
    'Adde me on Google+'
);


function navFoot() {

    // Write the nav-bar to the page
    var nav = '<div class="vac">';
    for (var i = 0; i < navHrefs.length; i++) {
        nav += '<a class="nav-item ' + (page == navHrefs[i] ? 'active' : '') + '" href="' + navHrefs[i] + '">' + navTitles[i] + '</a>';
        nav += i < navHrefs.length - 1 ? '&nbsp;|&nbsp;' : '';
    }
    $("#nav").html(nav + '</div>');

    // Write the footer to the page
    var foot = '<hr><div style="margin-bottom: 6px; font-size:120%;">';
    for (var i = 0; i < socHrefs.length; i++) {
        foot += '<a href="' + socHrefs[i] + '" title="' + socTitles[i] + '" class="text-link"> <img src="img/' + socImgs[i] + '" class="footer-img-lnk"/> </a>';
        foot += i < socHrefs.length - 1 ? '&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;' : '';
    }
    $("#foot").html(foot + '</div> <hr> Copyright &#169; ' + new Date().getFullYear() + ' Shudmanul Chowdhury');
}

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

// Set transition animations
function setAnimation() {
    var animIn, animOut;
    if (page == navHrefs[0] || page == 'index.html') animIn='right-fade-in';
    else if (page == navHrefs[2]) animIn='left-fade-in';
    
    $('#page-content').addClass(animIn);
    $('a.nav-item').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        
        if (page == navHrefs[0] || page == 'index.html') animOut='left-fade-out';
        else if (page == navHrefs[2]) animOut='right-fade-out';
        
        $('#page-content').addClass(animOut);
        
        setTimeout(function() {window.location = newLocation}, 500);
    });
}

// Set all non-navigation links to open in a new tab
function setLinkTargets() {
    $('a:not(".nav-item")').click(function(event) {
        $('a').attr('target','_blank');
    });
}

$(document).ready(function() {
    
    navFoot();
    fixFoot();
    setAnimation();
    setLinkTargets();
    
    
    
//    // Set the footer position based on screen height after a window size change
//    $(window).resize(function() {
//        fixFoot();
//    });

    
    
});