$(document).ready(function () {
  // -------------spin-------------------
  var resultWrapper = document.querySelector(".spin-result-wrapper");
  var wheel = document.querySelector(".wheel-img");

  function spin() {
    if (!wheel.classList.contains("rotated")) {
      wheel.classList.add("rotated");
      wheel.classList.add("super-rotation");
      setTimeout(function () {
        resultWrapper.style.display = "block";
      }, 8000);
      setTimeout(function () {
        $(".spin-wrapper").slideUp();
        $(".order_block").slideDown();

        // -------------TIMER------------------------
        var fiveSeconds = new Date().getTime() + 600000;
        $("#clock")
          .countdown(fiveSeconds, { elapse: true })
          .on("update.countdown", function (event) {
            var $this = $(this);
            if (event.elapsed) {
              $this.html("Time is over");
            } else {
              $this.html(event.strftime("<span>%M</span> : <span>%S</span>"));
            }
          });
      }, 10000);
    }
  }

  $(".cursor-text").on("click", spin);

  $(".close-popup, .pop-up-button").click(function (e) {
    e.preventDefault();
    $(".spin-result-wrapper").fadeOut();
    $("body,html").animate({ scrollTop: $(".toscroll").offset().top }, 400);
  });
});
