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
// dark theme 

document.getElementById("switchButton").onclick = function () {

  document.getElementById("light").classList.toggle("dark");
};
