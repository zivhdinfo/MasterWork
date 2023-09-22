//  nav js config 

 
 // couter js config ( để thẻ chứa class counter để dùng)
 $(document).ready(function () {
    $(".counter").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });


var switchButtons = document.querySelectorAll(".button-mobilie, .button-pc");


switchButtons.forEach(function(button) {
  button.onclick = function () {
    document.body.classList.toggle("dark");
  };
});


window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
});

document.getElementById("back-to-top").addEventListener("click", function() {
    document.body.scrollTop = 0; // Cho trình duyệt Chrome, Safari
    document.documentElement.scrollTop = 0; // Cho trình duyệt Firefox, IE, Edge
});

