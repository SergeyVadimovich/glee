$(function(){
  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function() {
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function() {
    $('.product-item').removeClass('product-item--list');
  });

  $('.select-style').styler();

  $('.filter-price__input').ionRangeSlider({
    type:'double',
    prefix:'$',
    onStart: function(data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  }),
  

  $('.top-slider__inner').slick({
    dots:true,
    arrows:false,
    fade:true,
    autoplay:true,
    autoplaySpeed:2000,
  }),
  
  $('.star').rateYo({
    starWidth:'17px',
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly:true,
  });

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);

});

