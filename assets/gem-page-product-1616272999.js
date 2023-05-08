

    
      
    
      
    
    
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
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1616268678367').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1616268678367').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1616268678367');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1616268678367').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1616268678367').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1616268678367').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
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
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1616270571962').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1616270571962').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1616270571962');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1616270571962').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1616270571962').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1616270571962').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
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
      
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1612842917192').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1612842938313').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1612842938313').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1612842938313');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1612842938313').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1612842938313').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1612842938313').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    
    window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#m-1616268678367"},"events":[{"key":"click"}],"targets":[{"id":"#e-1612842938331","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Heading: #e-1612842938331"}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1616270571962"},"events":[{"key":"click"}],"targets":[{"id":"#e-1612842938331","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Heading: #e-1612842938331"}]}]); window.__gfV1FlowActions.init();