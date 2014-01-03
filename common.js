function nav() {
    var page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.lastIndexOf("."));
    document.write(
        "<div id=\"nav-bar\" class=\"ac\">" +
                "<a class=\"nav-item " + (page == "/" ? "active" : "") + "\" href=\"http://seedform.github.io/\">PROJECTS</a>" + " | " +
                "<a class=\"nav-item " + (page == "about" ? "active" : "") + "\" href=\"about.html\">ABOUT</a>" + " | " + 
                "<a class=\"nav-item " + (page == "contact" ? "active" : "") + "\" href=\"contact.html\">CONTACT</a>" +
        "</div>"
    );
}

function footer() {
    document.write(
        "<footer>" +
            "<hr>" +
            "<div style=\"margin-bottom: 6px;\">" +
                "<a href=\"https://github.com/seedform\" class=\"text-link\">" +
                    "<img src=\"img/GitHub-Mark-32px.png\" style=\"vertical-align: middle;\"/>" +
                    "<span style=\"vertical-align: middle;\">&nbsp;&nbsp;&nbsp;Visit my GitHub profile</span>" +
                "</a>" +
            "</div>" +
            "<hr>" +
            "&#169; " + new Date().getFullYear() + " Shudmanul Chowdhury" +
        "</footer>"
    );
}

//Taken from http://jsfiddle.net/vincentieo/6K9SZ/
// The speed of one transition (fadeIn or fadeOut).
// Full execution time will be:
// (browser navigation time) + speed * 2;
// You can set this to slow, medium, fast, or number of ms.
var speed = 'medium';
$('html, body').hide();
$(document).ready(function() {
    $('html, body').fadeIn(speed, function() {
        $('a[href], button[href]').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function() {
                window.location = url;
            });
        });
    });
});
