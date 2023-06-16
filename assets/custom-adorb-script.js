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
   $('.site-navigation li.site-nav__item:nth-child(12),.site-navigation li.site-nav__item:nth-child(13)').addClass('hide');

  if($("#PageContainer").hasClass('init-pro-member')){
     $('.site-navigation li.site-nav__item:nth-child(12),.site-navigation li.site-nav__item:nth-child(13)').removeClass('hide');     
   }

   /*
   if($("#MainContent").hasClass('init-pro-member')) {
     $(".grid__item.medium-up--one-fifth .tab").append('<button class="tablinks"><svg width="30" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.8792 8.13563C26.042 8.13563 26.1366 7.95144 26.0417 7.8191L21.4099 1.35754C21.3159 1.22644 21.1134 1.2548 21.059 1.40668L18.7468 7.86824C18.7002 7.99851 18.7968 8.13563 18.9351 8.13563H25.8792Z" fill="#ffa88a" stroke="white" stroke-width="0.3"></path><path d="M20.6487 1.02725C20.6951 0.897008 20.5986 0.76001 20.4603 0.76001H13.8027C13.6423 0.76001 13.5472 0.939432 13.6372 1.07223L17.9982 7.50534C18.0901 7.6409 18.297 7.61459 18.3521 7.46036L20.6487 1.02725Z" fill="#ffa88a" stroke="white" stroke-width="0.3"></path><path d="M12.2887 1.06662C12.3726 0.933438 12.2769 0.76001 12.1194 0.76001H5.80441C5.66614 0.76001 5.56959 0.896954 5.61603 1.02719L7.89851 7.42776C7.95456 7.58495 8.16714 7.60839 8.2561 7.46719L12.2887 1.06662Z" fill="#ffa88a" stroke="white" stroke-width="0.3"></path><path d="M17.4315 8.13568C17.592 8.13568 17.6871 7.95618 17.597 7.82339L13.121 1.22647C13.04 1.1071 12.8632 1.11012 12.7863 1.23218L8.63156 7.82909C8.54768 7.96228 8.6434 8.13568 8.8008 8.13568H17.4315Z" fill="#ffa88a" stroke="white" stroke-width="0.3"></path><path d="M5.20588 1.4105C5.15151 1.25865 4.94898 1.23031 4.85502 1.36141L0.226851 7.81878C0.131999 7.95113 0.226588 8.1353 0.38941 8.1353H7.32953C7.4679 8.1353 7.56447 7.99815 7.51782 7.86788L5.20588 1.4105Z" fill="#ffa88a" stroke="white" stroke-width="0.3"></path><path d="M0.554494 8.64459C0.379065 8.64459 0.288637 8.85435 0.409077 8.9819L12.072 21.3336C12.2215 21.4919 12.4805 21.3312 12.4051 21.127L7.84295 8.7753C7.81394 8.69675 7.73907 8.64459 7.65534 8.64459H0.554494Z" fill="#ffa88a" stroke="white" stroke-width="0.3"></path><path d="M8.61981 8.64459C8.48148 8.64459 8.38492 8.78165 8.43147 8.9119L12.9457 21.5428C13.0089 21.7198 13.2592 21.7197 13.3224 21.5428L17.8326 8.91185C17.8791 8.7816 17.7826 8.64459 17.6443 8.64459H8.61981Z" fill="#ffa88a" stroke="white" stroke-width="0.3"></path><path d="M13.8595 21.1269C13.784 21.3311 14.043 21.4918 14.1925 21.3335L25.8596 8.98149C25.9801 8.85395 25.8897 8.64416 25.7142 8.64416H18.6098C18.526 8.64416 18.4512 8.69632 18.4221 8.77486L13.8595 21.1269Z" fill="#ffa88a" stroke="white" stroke-width="0.3"></path></svg>Monthly Give Away</button>');
   }
   */
  
   setTimeout(function () {
       $('.tee-option--size .tee-option__title').append("&emsp;<button type='button' class='scr-open-size-chart ruler4 Medium'>Size Guide</button>");
   }, 2000);

});


function getCartMembershiptSection(){
   var _html = '';
  
  _html += '<div class="cart__sidebar border membership_html_block">';
    _html += '<div data-v-12407f70="" data-v-58a13aed="" class="cart__sidebar border membership_contents">';
      _html += '<div data-v-12407f70="" class="membership-top">';
        _html += '<div data-v-12407f70=""><img data-v-12407f70="" src="https://cdn.shopify.com/s/files/1/0267/8603/7955/files/IMG_2199_210x.PNG?v=1615924214" class="memmbership-icon" style="max-width: 200px;"></div>';        
        _html += '<div data-v-12407f70="" class="membership-product-details">';
          _html += '<div data-v-12407f70="" class="membership-offer">';
            _html += '<div data-v-12407f70="" class="become-a-member-text">Become a Adorb Member</div>';
            _html += '<div data-v-12407f70=""><strong data-v-12407f70="" class="offer-saving">Save $<span class="amount">0.00</span> (50.00%)</strong> off todays order</div>';
          _html += '</div>';
        _html += '</div>';  
      _html += '</div>';
    _html += '</div>';
  
    _html += '<div data-v-12407f70="" class="membership-middle">';
      _html += '<ul data-v-12407f70="" class="membership-detail-points">';
         _html += '<li data-v-12407f70="" class="membership-detail-point">$9.95/MONTH</li>';
         _html += '<li data-v-12407f70="" class="membership-detail-point">50% off order when you sign up</li>';
         _html += '<li data-v-12407f70="" class="membership-detail-point">$9.99 daily t-shirt offers</li>';
         _html += '<li data-v-12407f70="" class="membership-detail-point">Free shipping on order over 39.99</li>';
         _html += '<li data-v-12407f70="" class="membership-detail-point">Entry into monthly giveaways (sweatshirts, tumblers, etc.)</li>';
      _html += '</ul>';
    _html += '</div>';
  
    _html += '<div data-v-12407f70="" class="membership-bottom">';
      _html += '<ul class="membership-footer-action-block"><li><a data-v-12407f70="" href="javascript:void(0)" class="add_membership btn btn--full button button--primary" id="add-membership-product-in-cart">Add Membership</a></li><li class="big-f"><a href="/products/adorb-membership-unlock-new-pricing-immediately">$9.95/month<br/><u>Learn more</u></a></li></ul>';
         _html += '<div data-v-12407f70="" style="margin: auto; text-align: center;">';
         _html += '</div>';
      _html += '</div>';
    _html += '</div>';

  _html += '</div>';
  
  return _html;
}



$(document).on('click', '#add-membership-product-in-cart', function(){
  jQuery.post('/cart/add.js', {
    quantity: 1,
    id: 43961055150308,
    form_type: 'product',
    selling_plan: 3701244132, 
    selling_plan_radio: 3701244132
  });
  
  setTimeout(function(){
    reloadAdvertisementWidget();
    regenerateCartProductPrices()
  }, 2000);  
});

$(document).on('click', '.rebuy-cart__flyout-item-remove', function(){
  setTimeout(function(){
    reloadAdvertisementWidget();
  }, 2000);
})

function reloadAdvertisementWidget() {
    var apply_discount = availabilityForMemberShipDiscount();

    if(apply_discount == true) {
      
      $("#rebuy-cart .membership_html_block").addClass('hide');

      $('.rebuy-cart__flyout-actions button.rebuy-cart__checkout-button').hide();     
            
      if($('.rebuy-cart__flyout-actions a.rebuy-cart__checkout-button-dump').length == 0) {
        $('.rebuy-cart__flyout-actions').append('<a href="/checkout?discount=MEMBERONLY" class="rebuy-button block rebuy-cart__checkout-button-dump" ><span><i class="rebuy-button-icon prefix fas fa-lock"></i> PROCEED TO CHECKOUT<i class=""></i></span></a>');
      }
      
    }else{

      $("#rebuy-cart .membership_html_block").removeClass('hide');      
      $('.rebuy-cart__flyout-actions button.rebuy-cart__checkout-button').show();
      $('.rebuy-cart__flyout-actions a.rebuy-cart__checkout-button-dump').remove();
    }  
}

$(document).ready(function(){     
  var cart_strip_loaded = false;
  if(cart_strip_loaded == false) {
    setInterval(function(){
      if(cart_strip_loaded == false) {
        var is_loaded = $('body').find("#rebuy-cart").length > 0;
        if(is_loaded) {
          cart_strip_loaded = true;  
        } 
        
        var cart_membership_html = getCartMembershiptSection();
        $("#rebuy-cart .rebuy-cart__flyout-body").before(cart_membership_html);  

        setTimeout(function(){
          reloadAdvertisementWidget();
          regenerateCartProductPrices()
        }, 1000);  
                
      }
    },1000);      
  }
});

function regenerateCartProductPrices(){
  var apply_discount = availabilityForMemberShipDiscount();
  var items_price = 0;        
  var applied = false;
  $('.rebuy-cart__flyout-items li.rebuy-cart__flyout-item').each(function(){
      
      if(apply_discount == true) {        
        if($(this).find('.rebuy-cart__flyout-item-price .rebuy-money').hasClass('sale')){
          var price_container = $(this).find('.rebuy-cart__flyout-item-price .rebuy-money.sale span:nth-child(2)');
          var item_price = parseFloat(price_container.text().replace('$',''));
          
          if(!isNaN(item_price) && $(this).find('.rebuy-cart__flyout-item-info a[role="heading"]').text() != 'Adorb Membership - Unlock new pricing immediately!'){
            item_price = (item_price/2).toFixed(2);
            price_container.text('$'+item_price);              
          }
          
          items_price += parseFloat(item_price);                  
        }
      }
  });  
  
  var actual_order_total = parseFloat($(".rebuy-cart__flyout-subtotal .rebuy-cart__flyout-subtotal-amount").text().replace('$',''));
  savings_order_total = (actual_order_total).toFixed(2);
  
  if(apply_discount == true) {
    $(".rebuy-cart__flyout-subtotal .rebuy-cart__flyout-subtotal-amount").text('$'+items_price.toFixed(2));            
    $('.offer-saving span.amount').text(savings_order_total);
  }else{
    $('.offer-saving span.amount').text((actual_order_total/2).toFixed(2));    
  }  
}


function availabilityForMemberShipDiscount(){
  var is_available = false;
  $('.rebuy-cart__flyout-items .rebuy-cart__flyout-item').each(function(){
    if($(this).find('.rebuy-cart__flyout-item-info a[role="heading"]').text() == 'Adorb Membership - Unlock new pricing immediately!'){
      is_available = true;
    }
  });  

  return is_available;
}

