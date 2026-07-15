
window.onload = function () {
  var links = document.querySelectorAll("nav ul li a");
  var currentPage = window.location.pathname.split("/").pop();

  for (var i = 0; i < links.length; i++) {
    var linkPage = links[i].getAttribute("href");
    if (linkPage === currentPage) {
      links[i].style.fontWeight = "bold";
      links[i].style.textDecoration = "underline";
    }
  }
};
