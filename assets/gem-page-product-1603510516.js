

jQuery(function() {
  var $module = jQuery('#m-1603510524844').children('.module');
  $module.gfV3Product();
}); 
    
    
jQuery(function() {
var $module = jQuery('#m-1603510528654').children('.module');
$module.gfV4ProductImageList({
  onImageClicked: function(imageUrl, imageZoomUrl) {}
});

var style = $module.attr('data-style');
switch(style) {
  case 'slider':
      var navspeed = $module.data('navspeed'),
          navlg = $module.data('navlg'),
          navmd = $module.data('navmd'),
          navsm = $module.data('navsm'),
          navxs = $module.data('navxs'),
          collg = $module.data('collg'),
          colmd = $module.data('colmd'),
          colsm = $module.data('colsm'),
          colxs = $module.data('colxs'),
          dotslg = $module.data('dotslg'),
          dotsmd = $module.data('dotsmd'),
          dotssm = $module.data('dotssm'),
          dotsxs = $module.data('dotsxs'),

          marginlg = parseInt($module.data('mlg')),
          marginmd = parseInt($module.data('mmd')),
          marginsm = parseInt($module.data('msm')),
          marginxs = parseInt($module.data('mxs'));

      var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
      if(mode == 'production') {
          var loop = $module.data('loop');
      } else {
          var loop = 0;
      }
      $module.find('.gf_product-images-list').children().each( function( index ) {
        $(this).attr( 'data-position', index );
      });
      $module.find('.gf_product-images-list').owlCarousel({
          mouseDrag: false,
          navSpeed: navspeed,
          autoWidth: !1,
          loop: loop,
          responsiveClass:true,
          responsive:{
              0:{
                  items:colxs,
                  nav: navxs,
                  dots:dotsxs,
                  margin: marginxs
              },
              768:{
                  items:colsm,
                  nav: navsm,
                  dots:dotssm,
                  margin: marginsm
              },
              992:{
                  items:colmd,
                  nav: navmd,
                  dots:dotsmd,
                  margin: marginmd
              },
              1200:{
                  items:collg,
                  nav: navlg,
                  dots:dotslg,
                  margin: marginlg
              }
          },
          onInitialized: function(){
            $module.closest('.module-wrap[data-label="(P) Image List"]').addClass('gf-carousel-loaded');
          }
      }); 
      break;
}
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1603510527747').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1603510527717').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1603510527602').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});
    
jQuery(function() {
    var $module = jQuery('#m-1603510526565').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    
  
jQuery(function() {
  var $module = jQuery('#m-1603510526055').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
var gemFlag=!1;for(var i=0;i<pageLibs.length;i++){if(pageLibs[i].indexOf('gfv3product.js')!==-1){if(jQuery.gfV3Product==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfv3restabs.js')!==-1){if(jQuery.gfV3ResTabs==undefined){gemFlag=!0;break}}if(pageLibs[i].indexOf('gfaccordion.js')!==-1){if(jQuery.gfAccordion==undefined){gemFlag=!0;break}}}if(gemFlag){var count=0;for(var i=0;i<pageLibs.length-1;i++){jQuery.getScript(pageLibs[i],function(){count++;if(count==pageLibs.length-1){jQuery.getScript(pageLibs[pageLibs.length-1],function(){})}})}}