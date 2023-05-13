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


$(document).ready(function(){
  var _html = '';
  _html += '<div data-v-12407f70="" data-v-58a13aed="" class="cart__sidebar border membership_contents">';
    _html += '<div data-v-12407f70="" class="membership-top">';
      _html += '<div data-v-12407f70=""><img data-v-12407f70="" src="https://cdn.shopify.com/s/files/1/0267/8603/7955/files/IMG_2199_210x.PNG?v=1615924214" class="memmbership-icon" style="max-width: 200px;"></div>';
      _html += '<div data-v-12407f70="" class="membership-product-details">';
        _html += '<div data-v-12407f70="" class="membership-offer">';
          _html += '<div data-v-12407f70="" class="become-a-member-text">Become a Adorb Member</div>';
          _html += '<div data-v-12407f70=""><strong data-v-12407f70="" class="offer-saving">Save $20.00 (50.00%)</strong> off todays order</div>';
          _html += '</div>';
        _html += '</div>';
      _html += '</div>';
    _html += '</div>';
  _html += '</div>';
  
  _html += '<div data-v-12407f70="" class="membership-middle">';
    _html += '<ul data-v-12407f70="" class="membership-detail-points">';
       _html += '<li data-v-12407f70="" class="membership-detail-point">Save 50-80% on every order</li>';
       _html += '<li data-v-12407f70="" class="membership-detail-point">Shirts as low as $5.98 daily</li>';
       _html += '<li data-v-12407f70="" class="membership-detail-point">Free shipping orders over $39</li>';
       _html += '<li data-v-12407f70="" class="membership-detail-point">Cancel easily any time</li>';
    _html += '</ul>';
  _html += '</div>';
  _html += '<div data-v-12407f70="" class="membership-bottom">';
    _html += '<div data-v-12407f70=""><a data-v-12407f70="" href="javascript:void(0)" class="add_membership btn btn--full button button--primary">Add Membership</a></div>';
       _html += '<div data-v-12407f70="" style="margin: auto; text-align: center;">';
       _html += '</div>';
    _html += '</div>';
  _html += '</div>';
  
  // setTimeout(function(){
  //   $("#icartMainContent .icartContain").before(_html);  
  // }, 2000);
});