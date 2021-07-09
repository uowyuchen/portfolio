// bunce navbar
const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

// Typing
window.onload = function () {
  var str =
    "My name is Zhen Li. I am an experienced Web Developer. I specialize in not only HTML, CSS, JavaScript and JavaScript library such as React, but also I am passionate about back-end development mainly using WordPress, WooCommerce, PHP, NodeJs, and Express.";

  var spans = "<span>" + str.split("").join("</span><span>") + "</span>";
  $(spans)
    .hide()
    .appendTo(".css-typing")
    .each(function (i) {
      $(this)
        .delay(30 * i)
        .css({
          display: "inline",
          opacity: 0,
        })
        .animate(
          {
            opacity: 1,
          },
          100
        );
    });
};

// Smooth Scrolling
$("#navbar a, .content a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 70,
      },
      800
    );
  }
});

var menuBtn = document.getElementsByClassName("menu-btn")[0];
var mainMenu = document.getElementsByClassName("main-menu")[0];
menuBtn.onclick = function () {
  mainMenu.classList.toggle("show");
  this.classList.toggle("show");
};

// Test horizontal bar
// (function (d) {
//   var w = d.documentElement.offsetWidth,
//     t = d.createTreeWalker(d.body, NodeFilter.SHOW_ELEMENT),
//     b;
//   while (t.nextNode()) {
//     b = t.currentNode.getBoundingClientRect();
//     if (b.right > w || b.left < 0) {
//       t.currentNode.style.setProperty("outline", "1px dotted red", "important");
//       console.log(t.currentNode);
//     }
//   }
// })(document);
