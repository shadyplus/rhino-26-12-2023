$(document).ready(function () {
  // Попап при выходе курсора за пределы окна
  let showPopup = false;
  $(document).mouseleave(function () {
    if (!showPopup) {
      showPopup = true;
      $(".outPagePopup").fadeIn();
      setTimeout(function () {
        $(".msg").slideDown();
      }, 300);
    }
  });
  $(".outPagePopup__close").on("click", function () {
    $(".outPagePopup").fadeOut();
  });

  //мобила

  if ($('body').width() <= 768) {
    var spinFlag = false;
    $h = $(".push").offset().top;

    $(window).scroll(function () {
      if ($(window).scrollTop() > $h && !spinFlag) {
        $(".outPagePopup").fadeIn();
        $(".msg").slideDown();
        spinFlag = true;
      }
    });
  }





  // SCROLL and Unbind
  $("a, .search").on("touchend, click", function (e) {
    e.preventDefault();
    $("body,html").animate({ scrollTop: $(".toscroll").offset().top }, 400);
  });
  $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
});