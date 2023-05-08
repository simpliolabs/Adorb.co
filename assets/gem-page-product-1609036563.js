

      
    
    
      
(function( jQuery ){
  try {
    var $module = jQuery('#m-1608867046154').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
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
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var autoplay = $module.data('autoplay'), 
          loop = $module.data('loop');
    } else {
      var autoplay = 0, 
          loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
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
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
        setTimeout(function() {	
            initCarousel();	
        }, 300)	
    } else {	
        initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
      
      
      
      
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
  var $module = jQuery('#m-1609178718275').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1609178718275-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1609178718275-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
    var $module = jQuery('#m-1609178718275-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
jQuery(function() {
    var $module = jQuery('#m-1609178718246').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    
          jQuery(function() {
  var $module = jQuery('#m-1609178718306').children('.module');
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
  var $module = jQuery('#m-1609178718275-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1609178718237').children('.module');
  $module.gfV3ProductDesc();
});
      
    
      
          jQuery(function() {
  var $module = jQuery('#m-1609178742186').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1609178742186-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1609178742186-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
    var $module = jQuery('#m-1609178742186-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
jQuery(function() {
    var $module = jQuery('#m-1609178742180').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    
          jQuery(function() {
  var $module = jQuery('#m-1609178742230').children('.module');
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
  var $module = jQuery('#m-1609178742186-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1609178742168').children('.module');
  $module.gfV3ProductDesc();
});
      
    
      
          jQuery(function() {
  var $module = jQuery('#m-1609179472696').children('.module');
  $module.gfV3Product();
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1609179472696-1').children('.module');
});
      
          jQuery(function() {
        var $module = jQuery('#m-1609179472696-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
      
          jQuery(function() {
    var $module = jQuery('#m-1609179472696-0').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});
      
jQuery(function() {
    var $module = jQuery('#m-1609179472676').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    
          jQuery(function() {
  var $module = jQuery('#m-1609179472667').children('.module');
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
  var $module = jQuery('#m-1609179472696-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
      
          jQuery(function() {
  var $module = jQuery('#m-1609179472710').children('.module');
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
      