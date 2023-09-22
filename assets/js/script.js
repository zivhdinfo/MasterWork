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



 // Thêm sự kiện click cho nút "Back to Top"
  document.getElementById("backToTopBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; // Cho trình duyệt Chrome và Safari
    document.documentElement.scrollTop = 0; // Cho trình duyệt Firefox, IE, Edge, và Opera
  });

  // Hiển thị hoặc ẩn nút "Back to Top" dựa trên vị trí cuộn trang
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".back-to-top").classList.add("show");
    } else {
      document.querySelector(".back-to-top").classList.remove("show");
    }
  };
