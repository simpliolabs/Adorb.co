

      
    
      
      
      
      
          jQuery(function() {
    var $module = jQuery('#m-1602636725715').children('.module');
    $module.gfV1Countdown({
        id: "1602636725715",
        idSlug: "1602636725715"
    });
});
      
          jQuery(function() {
  var $module = jQuery('#m-1602636752038').children('.module');
}); 
      
      
      
      
      
      
      
      
          jQuery(function() {
  var $module = jQuery('#m-1602636948718').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1602636948718-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1602636948718-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
    var $module = jQuery('#m-1602636948718-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
jQuery(function() {
    var $module = jQuery('#m-1610057711979').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    
          jQuery(function() {
  var $module = jQuery('#m-1602639453935').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
}); 
      
jQuery(function() {
  var $module = jQuery('#m-1609178799648').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
          jQuery(function() {
  var $module = jQuery('#m-1602639464810').children('.module');
  $module.gfV3ProductDesc();
});
      
    
      
          jQuery(function() {
  var $module = jQuery('#m-1602639876592').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1602639876592-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1602639876592-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
    var $module = jQuery('#m-1602639876592-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
jQuery(function() {
    var $module = jQuery('#m-1609178639667').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    
          jQuery(function() {
  var $module = jQuery('#m-1602639876611').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1602639876592-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1602639876633').children('.module');
  $module.gfV3ProductDesc();
});
      
    
          jQuery(function() {
    var $module = jQuery('#m-1602640340720').children('.module');
    var btnLabel = $module.attr('data-btnlabel');
    
    if ($module.attr('data-modelink') == 'auto'){
        $module.attr('data-editlink', '');
    }
    
    $module.gfSocialShare({
        btnLabel: btnLabel
    });
});
      