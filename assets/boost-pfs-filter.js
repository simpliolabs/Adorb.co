if (typeof boostPFSThemeConfig !== "undefined") {
  // Override Settings
  var boostPFSFilterConfig = {
    general: {
      limit: boostPFSConfig.custom.products_per_page,
      /* Optional */
      loadProductFirst: true,
      refineByStyle: "style2",
    },
  };
}

var isFirstLoad = boostPFSFilterConfig.general.loadProductFirst;
var numberQuickViewModalLoaded = 0;

if (isFirstLoad == true) {
  var firstLoadProductsHtml = $(".boost-pfs-filter-products").clone();
}

// Declare Templates
var boostPFSTemplate = {
  // Grid Template
  productGridItemHtml:
    '<div data-product-handle={{itemHandle}} id="{{itemHandle}}" class="grid__item grid-product ' +
    boostPFSConfig.custom.grid_item_width +
    ' {{itemQuickShopClass}}" data-aos="row-of-' +
    boostPFSConfig.custom.products_per_row +
    '">' +
    '<div class="grid-product__content">' +
    "{{itemLabel}}" +
    '<a href="{{itemUrl}}" class="grid-product__link {{itemSoldOutClass}}">' +
    '<div class="grid-product__image-mask">' +
    "{{itemQuickShopButton}}" +
    "{{itemImages}}" +
    "{{itemSwatchHoverImages}}" +
    "</div>" +
    '<div class="grid-product__meta">' +
    '<div class="grid-product__title">{{itemTitle}}</div>' +
    "{{itemVendor}}" +
    '<div class="grid-product__price">{{itemPrice}} </div>' +
    "{{itemReviews}}" +
    "{{itemFakeReview}}" + 
    "</div>" +
    "</a>" +
    "</div>" +
    "{{itemSwatch}}" +
    "</div>",

  // Pagination Template
  previousActiveHtml:
    '<span class="prev"><a href="{{itemUrl}}" title=""><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-chevron-left" viewBox="0 0 284.49 498.98"><defs><style>.cls-1{fill:#231f20}</style></defs><path class="cls-1" d="M249.49 0a35 35 0 0 1 24.75 59.75L84.49 249.49l189.75 189.74a35.002 35.002 0 1 1-49.5 49.5L10.25 274.24a35 35 0 0 1 0-49.5L224.74 10.25A34.89 34.89 0 0 1 249.49 0z"></path></svg><span class="icon__fallback-text">Previous</span></a></span>',
  previousDisabledHtml: "",
  nextActiveHtml:
    '<span class="next"><a href="{{itemUrl}}" title=""><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-chevron-right" viewBox="0 0 284.49 498.98"><defs><style>.cls-1{fill:#231f20}</style></defs><path class="cls-1" d="M35 498.98a35 35 0 0 1-24.75-59.75l189.74-189.74L10.25 59.75a35.002 35.002 0 0 1 49.5-49.5l214.49 214.49a35 35 0 0 1 0 49.5L59.75 488.73A34.89 34.89 0 0 1 35 498.98z"></path></svg><span class="icon__fallback-text">Next</span></a></span>',
  nextDisabledHtml: "",
  pageItemHtml:
    '<span class="page"><a href="{{itemUrl}}" title="">{{itemTitle}}</a></span>',
  pageItemSelectedHtml: '<span class="page current">{{itemTitle}}</span>',
  pageItemRemainHtml: '<span class="deco">...</span>',
  paginateHtml: "{{previous}}{{pageItems}}{{next}}",

  // Sorting Template
  sortingHtml:
    '<label for="boost-pfs-filter-top-sorting-select" class="hidden-label">' +
    "{{sortingLabel}}" +
    '</label><select class="boost-pfs-filter-top-sorting-select">{{sortingItems}}</select>',
};

(function () {
  /* This is to inject boost components into this scope, so we can override component's function */
  BoostPFS.inject(this);

  /************************** BUILD PRODUCT LIST **************************/

  // Build Product Grid Item
  ProductGridItem.prototype.compileTemplate = function (data, index) {
    if (!data) data = this.data;
    if (!index) index = this.index;
    /*** Prepare data ***/
    var images = data.images_info;
    // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices

    // Get Template
    var itemHtml = boostPFSTemplate.productGridItemHtml;

    // Add Thumbnail
    var aspectRatio =
      images.length > 0 ? images[0]["width"] / images[0]["height"] : "";
    var paddingBottom = images.length > 0 ? 100 / aspectRatio : "100";
    var thumb =
      images.length > 0 ? images[0] : boostPFSConfig.general.no_image_url;
    var bgset = buildBgSet(thumb);

    /* Boost 169354 */
    var imageOverride = Utils.getProductMetafield(
      data,
      "Image",
      "override_image"
    );
    console.log(imageOverride);

    var itemImagesHtml = "";
    if (imageOverride != null) {
      itemImagesHtml +=
        '<div class="image-wrap" style="height: 0; padding-bottom: ' +
        paddingBottom +
        '%;">' +
        "<img " +
        'class="grid-product__image lazyload" ' +
        'data-src="' +
        imageOverride +
        '" ' +
        'data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" ' +
        'data-aspectratio="' +
        aspectRatio +
        '" ' +
        'data-sizes="auto" ' +
        'alt="{{itemTitle}}">' +
        "</div>";
    } else if (boostPFSConfig.custom.product_grid_image_size == "natural") {
      itemImagesHtml +=
        '<div class="image-wrap" style="height: 0; padding-bottom: ' +
        paddingBottom +
        '%;">' +
        "<img " +
        'class="grid-product__image lazyload" ' +
        'data-src="' +
        Utils.getFeaturedImage(images, "{width}x") +
        '" ' +
        'data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" ' +
        'data-aspectratio="' +
        aspectRatio +
        '" ' +
        'data-sizes="auto" ' +
        'alt="{{itemTitle}}">' +
        "</div>";
    } else {
      itemImagesHtml +=
        "<div " +
        'class="grid__image-ratio grid__image-ratio--' +
        boostPFSConfig.custom.product_grid_image_size +
        ' lazyload"' +
        'data-bgset="' +
        bgset +
        '"' +
        'data-sizes="auto">' +
        "</div>";
    }

    if (!soldOut) {
      if (boostPFSConfig.custom.product_hover_image && images.length > 1) {
        bgset = buildBgSet(images[1]);
        itemImagesHtml +=
          "<div " +
          'class="grid-product__secondary-image small--hide lazyload"' +
          'data-bgset="' +
          bgset +
          '"' +
          'data-sizes="auto">' +
          "</div>";
      }
    }

    itemHtml = itemHtml.replace(/{{itemImages}}/g, itemImagesHtml);

    // Add Price
    var itemPriceHtml = "";
    if (onSale) {
      itemPriceHtml +=
        '<span class="visually-hidden">' +
        boostPFSConfig.label.regular_price +
        "</span>";
      itemPriceHtml +=
        '<span class="grid-product__price--original">' +
        Utils.formatMoney(data.compare_at_price_min) +
        "</span>";
      itemPriceHtml +=
        '<span class="visually-hidden">' +
        boostPFSConfig.label.sale_price +
        "</span>";
    }
    if (priceVaries) {
      itemPriceHtml += boostPFSConfig.label.from_text_html.replace(
        /{{ price }}/g,
        Utils.formatMoney(data.price_min)
      );
    } else {
      itemPriceHtml += Utils.formatMoney(data.price_min);
    }
    if (onSale && boostPFSConfig.custom.product_save_amount) {
      var savePrice = "";
      if (boostPFSConfig.custom.product_save_type == "dollar") {
        savePrice = Utils.formatMoney(
          data.compare_at_price_min - data.price_min
        );
      } else {
        savePrice = Math.round(
          ((data.compare_at_price_min - data.price_min) * 100) /
            data.compare_at_price_min
        );
        savePrice += "%";
      }
      var savePriceText = boostPFSConfig.label.save_html.replace(
        /{{ saved_amount }}/g,
        savePrice
      );
      itemPriceHtml +=
        '<span class="grid-product__price--savings">' +
        savePriceText +
        "</span>";
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    // Add soldOut class
    var itemSoldOutClass = soldOut ? "grid-product__link--disabled" : "";
    itemHtml = itemHtml.replace(/{{itemSoldOutClass}}/g, itemSoldOutClass);

    // Add label
    var customLabel = "";
    data.tags.forEach(function (tag) {
      if (tag.startsWith("_label_")) {
        if (!customLabel) {
          customLabel = tag.replace("_label_", "");
        }
      }
    });
    var newCollection = data.collections.filter(function (e) {
      return e.handle == "new-arrivals";
    });
    var bestSellerCollection = data.collections.filter(function (e) {
      return e.handle == "best-sellers";
    });
    var itemLabelHtml = "";
    if (typeof newCollection[0] !== "undefined") {
      itemLabelHtml =
        '<div class="grid-product__tag grid-product__tag--new-arrivals">New</div>';
    }
    if (typeof bestSellerCollection[0] !== "undefined") {
      itemLabelHtml =
        '<div class="grid-product__tag grid-product__tag--best-sellers">Best Sellers</div>';
    }
    if (customLabel) {
      itemLabelHtml =
        '<div class="grid-product__tag grid-product__tag--custom">' +
        customLabel +
        "</div>";
    } else {
      // soldOut Label
      if (soldOut) {
        itemLabelHtml =
          '<div class="grid-product__tag grid-product__tag--sold-out">' +
          boostPFSConfig.label.sold_out +
          "</div>";
      }
      // else if (onSale){
      // 	itemLabelHtml = '<div class="grid-product__tag grid-product__tag--sale">' + boostPFSConfig.label.sale + '</div>';
      // }
    }
    itemHtml = itemHtml.replace(/{{itemLabel}}/g, itemLabelHtml);

    // Add Vendor
    var itemVendorHtml = boostPFSConfig.custom.vendor_enable
      ? '<div class="grid-product__vendor">' + data.vendor + "</div>"
      : "";
    itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

    // Add Quick shop
    var itemQuickShopClass = "";
    var itemQuickShopButtonHtml = "";
    if (boostPFSConfig.custom.quick_shop_enable && !soldOut) {
      itemQuickShopClass = "grid-product__has-quick-shop";
      itemQuickShopButtonHtml =
        '<div class="quick-product__btn js-modal-open-quick-modal-{{itemId}} small--hide ' +
        (isFirstLoad ? "" : "bc-hide") +
        '" data-product-id="{{itemId}}">' +
        '<span class="quick-product__label">' +
        boostPFSConfig.label.quick_shop +
        "</span>" +
        "</div>";
    }
    itemHtml = itemHtml.replace(/{{itemQuickShopClass}}/g, itemQuickShopClass);
    itemHtml = itemHtml.replace(
      /{{itemQuickShopButton}}/g,
      itemQuickShopButtonHtml
    );

    // Add Reviews
    if (
      typeof Integration === "undefined" ||
      !Integration.hascompileTemplate("reviews")
    ) {
      var reviewHtml = "";
      if (boostPFSConfig.custom.enable_product_reviews) {
        var reviewBlock = "";

        if (
          firstLoadProductsHtml.find(
            '.grid__item[data-product-id="' +
              data.id +
              '"] .judge-product-list-block'
          ).length > 0
        ) {
          reviewBlock = firstLoadProductsHtml
            .find(
              '.grid__item[data-product-id="' +
                data.id +
                '"] .judge-product-list-block'
            )
            .html();
        }
        reviewHtml =
          '<div class="judge-product-list-block">' + reviewBlock + "</div>";
        //reviewHtml = '<span class="shopify-product-reviews-badge" data-id="'+ data.id +'"></span>';
      }
      itemHtml = itemHtml.replace(/{{itemReviews}}/g, reviewHtml);
    }

    // Color swatch
    var swatchHtml = buildSwatch(data, this);
    itemHtml = itemHtml.replace(/{{itemSwatch}}/g, swatchHtml.itemSwatch);
    itemHtml = itemHtml.replace(
      /{{itemSwatchHoverImages}}/g,
      swatchHtml.itemSwatchHoverImages
    );
    
    var fakeReview = `<div class="judge-product-list-block">
        <div class="jm_review_preview_wrapper">
        <span class="jdgm-prev-badge__stars" data-score="4.98" tabindex="0" aria-label="4.98 stars" role="button"> <span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span><span class="jdgm-star jdgm--on"></span> </span>
        <a
        style="margin-left: 5px;"
        href="javascript:void(0);">
        <span class="random_no" `+ data.handle +` "></span>
        </a>
        </div>
        </div>`
    
    if(data.review_count == 0 && data.review_ratings == 0) {
      itemHtml = itemHtml.replace(/{{itemFakeReview}}/g, fakeReview);
    }else {
       itemHtml = itemHtml.replace(/{{itemFakeReview}}/g, '');
    }
    // Add main attribute (Always put at the end of this function)
    itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
    itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
    itemHtml = itemHtml.replace(
      /{{itemUrl}}/g,
      Utils.buildProductItemUrlWithVariant(data)
    );

    return itemHtml;
  };

  // Build Swatch
  function buildSwatch(data, _this) {
    var itemSwatchHtml = "";
    var itemSwatchHoverImagesHtml = "";
    if (boostPFSConfig.custom.collection_color_swatches) {
      var swatchItems = [];
      var swatchHoverImages = [];
      data.options_with_values.forEach(function (option, index) {
        var option_name = option.name.toLowerCase();
        if (
          option_name.indexOf("color") != -1 ||
          option_name.indexOf("colour") != -1
        ) {
          var option_index = index;
          var values = [];
          data.variants.forEach(function (variant) {
            var value = variant.merged_options[option_index].split(":")[1];
            if (values.indexOf(value) == -1) {
              values.push(value);
              var colorValueSlugify = Utils.slugify(value);
              var colorImage = Utils.optimizeImage(
                boostPFSAppConfig.general.asset_url.replace(
                  "boost-pfs.js",
                  colorValueSlugify + ".png"
                ),
                "50x"
              );
              var variantImage = Utils.optimizeImage(variant.image, "400x");

              var swatchItem =
                '<a href="{{itemUrl}}?variant={{variantId}}" ' +
                'class="color-swatch color-swatch--small color-swatch--{{colorValueSlugify}} {{swatchClass}}" ' +
                'data-variant-id="{{variantId}}" ' +
                'data-variant-image="{{variantImage}}" ' +
                'style="background-image: url({{colorImage}}); background-color: {{backgroundColor}};"> ' +
                "</a>";

              swatchItem = swatchItem.replace(/{{variantId}}/g, variant.id);
              swatchItem = swatchItem.replace(
                /{{colorValueSlugify}}/g,
                colorValueSlugify
              );
              swatchItem = swatchItem.replace(
                /{{swatchClass}}/g,
                variant.image ? "color-swatch--with-image" : ""
              );
              swatchItem = swatchItem.replace(
                /{{variantImage}}/g,
                variantImage
              );
              swatchItem = swatchItem.replace(/{{colorImage}}/g, colorImage);
              swatchItem = swatchItem.replace(
                /{{backgroundColor}}/g,
                colorValueSlugify.split("-").pop()
              );

              var swatchHoverImage =
                '<div class="grid-product__color-image grid-product__color-image--' +
                variant.id +
                ' small--hide"></div>';

              swatchItems.push(swatchItem);
              swatchHoverImages.push(swatchHoverImage);
            }
          });
        }
      });
      if (swatchItems.length > 1) {
        itemSwatchHtml =
          ' <div class="grid-product__colors grid-product__colors--{{itemId}}" >' +
          swatchItems.join("") +
          "</div>";
        itemSwatchHoverImagesHtml = swatchHoverImages.join("");
      }
    }
    return {
      itemSwatch: itemSwatchHtml,
      itemSwatchHoverImages: itemSwatchHoverImagesHtml,
    };
  }

  function buildBgSet(image) {
    var html = "";
    if (typeof image !== "undefined" && image.hasOwnProperty("src")) {
      var aspectRatio = image.width / image.height;
      if (image.width <= 180)
        html +=
          Utils.optimizeImage(image["src"], "180x") +
          " 180w " +
          Math.round(180 / aspectRatio) +
          "h,";
      if (image.width > 180)
        html +=
          Utils.optimizeImage(image["src"], "180x") +
          " 180w " +
          Math.round(180 / aspectRatio) +
          "h,";
      if (image.width > 360)
        html +=
          Utils.optimizeImage(image["src"], "360x") +
          " 360w " +
          Math.round(360 / aspectRatio) +
          "h,";
      if (image.width > 540)
        html +=
          Utils.optimizeImage(image["src"], "540x") +
          " 540w " +
          Math.round(540 / aspectRatio) +
          "h,";
      if (image.width > 720)
        html +=
          Utils.optimizeImage(image["src"], "720x") +
          " 720w " +
          Math.round(720 / aspectRatio) +
          "h,";
      if (image.width > 900)
        html +=
          Utils.optimizeImage(image["src"], "900x") +
          " 900w " +
          Math.round(900 / aspectRatio) +
          "h,";
      if (image.width > 1080)
        html +=
          Utils.optimizeImage(image["src"], "1080x") +
          " 1080w " +
          Math.round(1080 / aspectRatio) +
          "h,";
      if (image.width > 1296)
        html +=
          Utils.optimizeImage(image["src"], "1296x") +
          " 1296w " +
          Math.round(1296 / aspectRatio) +
          "h,";
      if (image.width > 1512)
        html +=
          Utils.optimizeImage(image["src"], "1512x") +
          " 1512w " +
          Math.round(1512 / aspectRatio) +
          "h,";
      if (image.width > 1728)
        html +=
          Utils.optimizeImage(image["src"], "1728x") +
          " 1728w " +
          Math.round(1728 / aspectRatio) +
          "h,";
    }
    return html;
  }

  /************************** END BUILD PRODUCT LIST **************************/

  // Build Pagination
  ProductPaginationDefault.prototype.compileTemplate = function (totalProduct) {
    if (!totalProduct) totalProduct = this.totalProduct;
    var paginationHtml = "";
    // Get page info
    var currentPage = parseInt(Globals.queryParams.page);
    var totalPage = Math.ceil(totalProduct / Globals.queryParams.limit);

    if (totalPage > 1) {
      var paginationHtml = boostPFSTemplate.paginateHtml;

      // Build Previous
      var previousHtml =
        currentPage > 1
          ? boostPFSTemplate.previousActiveHtml
          : boostPFSTemplate.previousDisabledHtml;
      previousHtml = previousHtml.replace(
        /{{itemUrl}}/g,
        Utils.buildToolbarLink("page", currentPage, currentPage - 1)
      );
      paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

      // Build Next
      var nextHtml =
        currentPage < totalPage
          ? boostPFSTemplate.nextActiveHtml
          : boostPFSTemplate.nextDisabledHtml;
      nextHtml = nextHtml.replace(
        /{{itemUrl}}/g,
        Utils.buildToolbarLink("page", currentPage, currentPage + 1)
      );
      paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

      // Create page items array
      var beforeCurrentPageArr = [];
      for (
        var iBefore = currentPage - 1;
        iBefore > currentPage - 3 && iBefore > 0;
        iBefore--
      ) {
        beforeCurrentPageArr.unshift(iBefore);
      }
      if (currentPage - 4 > 0) {
        beforeCurrentPageArr.unshift("...");
      }
      if (currentPage - 4 >= 0) {
        beforeCurrentPageArr.unshift(1);
      }
      beforeCurrentPageArr.push(currentPage);

      var afterCurrentPageArr = [];
      for (
        var iAfter = currentPage + 1;
        iAfter < currentPage + 3 && iAfter <= totalPage;
        iAfter++
      ) {
        afterCurrentPageArr.push(iAfter);
      }
      if (currentPage + 3 < totalPage) {
        afterCurrentPageArr.push("...");
      }
      if (currentPage + 3 <= totalPage) {
        afterCurrentPageArr.push(totalPage);
      }

      // Build page items
      var pageItemsHtml = "";
      var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
      for (var iPage = 0; iPage < pageArr.length; iPage++) {
        if (pageArr[iPage] == "...") {
          pageItemsHtml += boostPFSTemplate.pageItemRemainHtml;
        } else {
          pageItemsHtml +=
            pageArr[iPage] == currentPage
              ? boostPFSTemplate.pageItemSelectedHtml
              : boostPFSTemplate.pageItemHtml;
        }
        pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
        pageItemsHtml = pageItemsHtml.replace(
          /{{itemUrl}}/g,
          Utils.buildToolbarLink("page", currentPage, pageArr[iPage])
        );
      }
      paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
      return paginationHtml;
    }
    return "";
  };

  /************************** BUILD TOOLBAR **************************/

  // Build Sorting
  ProductSorting.prototype.compileTemplate = function () {
    var html = "";
    var sortingArr = Utils.getSortingList();
    if (sortingArr) {
      // Build content
      var sortingItemsHtml = "";
      for (var k in sortingArr) {
        sortingItemsHtml +=
          '<option value="' + k + '">' + sortingArr[k] + "</option>";
      }
      html = boostPFSTemplate.sortingHtml
        .replace(/{{sortingItems}}/g, sortingItemsHtml)
        .replace(/{{sortingLabel}}/g, Labels.sorting);
    }
    return html;
  };

  /* buildExtraProductList */
  ProductList.prototype.afterRender = function (data) {
    if (!data) {
      data = this.data;
    }
    
    console.log(data)

    if (
      typeof theme != "undefined" &&
      typeof theme.reinitSection == "function" &&
      typeof theme.collectionTemplate != "undefined" &&
      typeof theme.collectionTemplate.reinit == "function"
    ) {
      theme.reinitSection("collection-template");
      theme.collectionTemplate.reinit();
    }
  };

  /* buildAdditionalElements */
  Filter.prototype.afterRender = function (data, eventType) {
    if (!data) data = this.data;

    // Build total products text
    var totalProductText = "";
    if (data.total_product == 1) {
      totalProductText = boostPFSConfig.label.items_with_count_one.replace(
        /{{ count }}/g,
        data.total_product
      );
    } else {
      totalProductText = boostPFSConfig.label.items_with_count_other.replace(
        /{{ count }}/g,
        data.total_product
      );
    }
    jQ(".boost-pfs-filter-total-product").html(totalProductText);

    // Build filter button text on mobile
    var numSelectedFilter = jQ(
      ".boost-pfs-filter-tree .boost-pfs-filter-selected-items .boost-pfs-filter-option-label"
    ).length;
    if (numSelectedFilter) {
      jQ(".js-drawer-open-collection-filters").addClass("btn--tertiary-active");
      jQ(".js-drawer-open-collection-filters > span").html(
        boostPFSConfig.label.filter + " (" + numSelectedFilter + ")"
      );
    } else {
      jQ(".js-drawer-open-collection-filters").removeClass(
        "btn--tertiary-active"
      );
      jQ(".js-drawer-open-collection-filters > span").html(
        boostPFSConfig.label.filter
      );
    }

    // Call theme init function
    //wrap all javascript use theme in window.ready event to make sure theme init and register sections successfully
    jQ(document).ready(function () {
      if (typeof theme !== null && window.theme) {
        // theme.collectionTemplate.reinit();
        AOS.refreshHard();

        // // Setup page transition classes
        // if (typeof theme.pageTransitions == 'function') theme.pageTransitions();

        // // Reload quick shop buttons
        // theme.initQuickShop(true);

        // // Reload products inside each quick shop
        // if (typeof sections !== null && sections) sections.register('product-template', theme.Product);
        if (window.$ && typeof $ == "function") {
          $(window).off("popstate");
        }
      }

      // Build quick view modals
      var isReinitQuickview =
        !isFirstLoad ||
        Utils.isSearchPage() ||
        Globals.queryParams.hasOwnProperty("_");
      if (
        !Utils.isMobile() &&
        boostPFSConfig.custom.quick_shop_enable &&
        isReinitQuickview
      ) {
        jQ(".boost-pfs-quick-shop-modal-container").html("");
        if (data.products.length > 0) {
          data.products.forEach(function (product) {
            var quickUrl =
              Utils.buildProductItemUrl(product) + "?view=boost-pfs-quickview";
            jQ.ajax({
              url: quickUrl,
              success: function (result) {
                numberQuickViewModalLoaded++;
                jQ(".boost-pfs-quick-shop-modal-container").append(result);
                if (numberQuickViewModalLoaded == data.products.length) {
                  // theme.collectionTemplate.reinit();
                  // AOS.refreshHard();

                  // // Setup page transition classes
                  // if (typeof theme.pageTransitions == 'function') theme.pageTransitions();

                  // Reload quick shop buttons
                  theme.initQuickShop(true);

                  theme.collapsibles.init();

                  // Reload products inside each quick shop
                  //if (typeof sections !== null && sections) sections.register('product-template', theme.Product);
                  numberQuickViewModalLoaded = 0;
                  jQ(".quick-product__btn").removeClass("bc-hide");
                }
              },
            });
          });
        }
      }

      if (isFirstLoad) {
        isFirstLoad = false;
      }

      // if (Utils.isInfiniteLoadingPaginationType() || Utils.isLoadMorePaginationType()) {
      // 	jQ('body').find('div.collection-filter').removeClass('collection-filter');
      // }

      jQ(".js-drawer-open-collection-filters").on("click", function () {
        jQ("." + Class.filterOption).each(function () {
          var showMoreType = jQ(this).data("show-more-type");
          if (showMoreType && jQ(this).data("display-type") != "range") {
            self.buildFilterShowMore(
              jQ(this).find("." + Class.filterBlockContent),
              showMoreType
            );
          }
        });
      });
    });
  };
  theme.preloadProductModal = function (handle, $btn) {
    var $holder = $("#QuickShopHolder-" + handle);
    var url = theme.routes.home + "products/" + handle + "?view=modal";
    $holder.load(
      url + " .product-section[data-product-handle=" + handle + "]",
      function () {
        sections.register("product-template", theme.Product, $holder);
        $btn.removeClass("quick-product__btn--not-ready");
        AOS.refreshHard();
      }
    );
  };

  /* If the quickview does not work, please try the solution below
		1. Add the class "grid-product" to the product item

		2. Change the theme code in FilterResults.prototype after render to only have this code:              theme.sections.reinit()              theme.initGlobals();              theme.initQuickShop();              theme.rteInit();

		3. Remove the code theme.preloadProductModal
	 */
})();
