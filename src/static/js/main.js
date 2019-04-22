$(window).scroll(function() {
    var e = 200,
        t = 300;
    $(this).scrollTop() > e && !$("body").hasClass("scrolled") ? $("body").addClass("scrolled") : $(this).scrollTop() <= e && $("body").hasClass("scrolled") && $("body").removeClass("scrolled"), $(this).scrollTop() > t && !$("body").hasClass("menu-fixed") ? $("body").addClass("menu-fixed") : $(this).scrollTop() <= t && $("body").hasClass("menu-fixed") && $("body").removeClass("menu-fixed")
}), $("#menu-toggle").click(function(e) {
    $("#header-menu").addClass("active")
}), $("#menu-close").click(function(e) {
    $("#header-menu").removeClass("active")
});

// var $things = $(".nav-block");
// $things.waypoint(function(e) {
//     if ("down" === e) {
//         var t = this.element.id;
//         $(".page-header__nav a").removeClass("active"), $('[data-target="#' + t + '"]').addClass("active")
//     }
// }, {
//     offset: 151
// }),

// $things.waypoint(function(e) {
//     if ("up" === e) {
//         var t = this.element.id;
//         $(window).scrollTop() < $(window).height() - 100 ? $(".page-header__nav a").removeClass("active") : ($(".page-header__nav a").removeClass("active"), $('[data-target="#' + t + '"]').addClass("active"))
//     }
// }, {
//     offset: 149
// }), 

// $('[data-toggle="anchor"]').click(function(e) {
//     e.preventDefault();
//     var t = $(this).attr("data-target"),
//         o = $(t).offset().top - 90;
//     $(window).width() > 767 && (o = $(t).offset().top - 150), $("#header-menu").removeClass("active"), closeModals(), $("html,body").animate({
//         scrollTop: o
//     }, 400), 
//     $(this).parent().addClass("active").siblings().removeClass("active")
// }),

$('[data-toggle="scroll"]').click(function(e) {
 e.preventDefault();
 var dataTarget = $(this).attr('data-target'),
  targetPos = $(dataTarget).offset().top - 0;
 
 $('html,body').animate({
  scrollTop: targetPos
 }, 400);
});

// $('[data-toggle="tab"]').click(function(e) {
//  e.preventDefault();
 
//  var thisTarget = $(this).attr('data-target');
 
//  if ($(this).parent().is('li')) {
//   $(this).parent().addClass('active').siblings().removeClass('active');
//  } else {
//   $(this).addClass('active').siblings().removeClass('active');
//  }
 
//  $(thisTarget).addClass('active').siblings().removeClass('active');
// });

$('.why-block__slider-block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            centerMode: !0,
            centerPadding: "5%",
            dots: true,
            arrows: false
        }
    }]
});