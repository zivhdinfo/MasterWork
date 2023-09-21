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

