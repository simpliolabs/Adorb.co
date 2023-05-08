$(document).ready(function () {
  setTimeout(function () {
    if ($(".jdgm-row-stars").length > 0) {
      var jdgm_summery_icons = $(
        ".jdgm-row-stars .jdgm-rev-widg__summary-stars"
      ).html();
      $(".judge-me-fetch--reviews span.ratings").html(
        '<a href="javascript:void(0);" class="review-scroller-link">' +
          jdgm_summery_icons +
          "</a>"
      );
      $(".judge-me-fetch--reviews").removeClass("hide");
    }
  }, 1000);
});

$(document).on("click", ".review-scroller-link", function () {
  $("html, body").animate(
    {
      scrollTop: $("#judgeme_product_reviews").offset().top,
    },
    500
  );
});

$(window).click(function (e) {
  if (
    $(e.target).hasClass("boost-pfs-filter-button") ||
    $(e.target).hasClass("boost-pfs-check-box")
  ) {
    setTimeout(function () {
      if ($(".boost-pfs-filter-products .grid-product").length > 0) {
        //location.reload();
      }
    }, 200);
  }
});
