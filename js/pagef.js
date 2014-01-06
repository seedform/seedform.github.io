var page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.lastIndexOf("."));
var prev = document.referrer == '' ? '/' : document.referrer.substring(document.referrer.lastIndexOf('/') + 1, document.referrer.lastIndexOf('.'));

var index   = 'http://www.shudman.com/';
var about   = 'http://www.shudman.com/about.html';
var contact = 'http://www.shudman.com/contact.html';

function navFoot() {

    // Write the nav-bar to the page
    $("#nav").html(
       '<div class="vac"> \
            <a class="nav-item ' + (page == '/' ? 'active' : '') + '" href="http://www.shudman.com/">PROJECTS</a>&nbsp;|&nbsp; \
            <a class="nav-item ' + (page == 'about' ? 'active' : '') + '" href="about.html">ABOUT</a>&nbsp;|&nbsp; \
            <a class="nav-item ' + (page == 'contact' ? 'active' : '') + '" href="contact.html">CONTACT</a> \
        </div>'
    );

    // Write the footer to the page
    $("#foot").html(
       '<hr> \
        <div style="margin-bottom: 6px; font-size:120%;"> \
            <a href="https://github.com/seedform" title="Visit my GitHub profile" class="text-link"> \
                <img src="img/GitHub-Mark-120px-plus.png" style="width:32px; height:32px; vertical-align:middle;"/> \
            </a> \
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; \
            <a href="https://twitter.com/seedform" title="Follow me on Twitter" class="text-link"> \
                <img src="img/Twitter_logo_blue.png" style="width:32px; height:32px; vertical-align:middle;"/> \
            </a> \
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; \
            <a href="https://plus.google.com/u/0/108831680097190194078/posts" title="Add me on Google+" class="text-link"> \
                <img src="img/Red-signin-Small-base-44dp.png" style="width:36px; height:36px; vertical-align:middle;"/> \
            </a> \
        </div> \
        <hr> \
        Copyright &#169; ' + new Date().getFullYear() + ' Shudmanul Chowdhury'
    );
}

// Set the footer position to be static or fixed based on screen size
function fixFoot() {
    if ($(window).width() < 650) {
        $('#foot').css('position', 'static');
        $('#page-content').css('padding-bottom', '20px');
    } else {
        $('#foot').css('position', 'fixed');
        $('#page-content').css('padding-bottom', '130px');
    }
}

// Set transition animations
function setAnimation() {
    var animIn, animOut;
    
    if (prev == '' || prev == '/' || prev == 'about' && page == 'contact') animIn='left-fade-in';
    else if (prev == 'contact' || prev == 'about' && page == '/') animIn='right-fade-in';
    
    $('#page-content').addClass(animIn);
    $('a.nav-item').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $('#page-content').addClass('down-fade-out');
        
        setTimeout(function() {window.location = newLocation}, 250);
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