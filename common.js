function nav() {
    var page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.lastIndexOf("."));
    document.write(
        "<div class=\"nav-bar\">" +
            "<div class=\"nav-links ac\">" +
                "<a class=\"nav-item " + (page == "index" ? "active" : "") + "\" href=\"http://seedform.github.io/\">PROJECTS</a>" +
                "<a class=\"nav-item " + (page == "about" ? "active" : "") + "\" href=\"about.html\">ABOUT</a>" +
                "<a class=\"nav-item " + (page == "contact" ? "active" : "") + "\" href=\"contact.html\">CONTACT</a>" +
            "</div>" +
        "</div>"
    );
}

function footer() {
    document.write(
        "<footer>" +
        "<div style=\"margin-bottom: 6px;\">" +
            "<a href=\"https://github.com/seedform\" class=\"text-link\">" +
                "<img src=\"img/GitHub-Mark-32px.png\" style=\"vertical-align: middle;\"/>" +
                "<span style=\"vertical-align: middle;\">&nbsp;&nbsp;&nbsp;Visit my GitHub profile</span>" +
            "</a>" +
        "</div>" +
        "&#169; <script>document.write(new Date().getFullYear());</script> Shudmanul Chowdhury" +
        "</footer>"
    );
}