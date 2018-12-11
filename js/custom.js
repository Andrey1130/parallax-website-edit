// JavaScript Document
var ww = document.body.clientWidth;
jQuery(document).ready(function () {
jQuery(".menu li a").each(function () {
if (jQuery(this).next().length > 0) {
jQuery(this).addClass("parent");
}
;
})
jQuery(".toggleMenu").click(function (e) {
e.preventDefault();
jQuery(this).toggleClass("active");
jQuery(".main-nav").slideToggle();
});
adjustMenu();
})
jQuery(window).bind('resize orientationchange', function () {
ww = document.body.clientWidth;
adjustMenu();
});
var adjustMenu = function () {
if (ww <= 991) {
jQuery(".toggleMenu").css("display", "inline-block");
if (!jQuery(".toggleMenu").hasClass("active")) {
jQuery(".main-nav").hide();
} else {
jQuery(".main-nav").show();
}
jQuery(".menu li").unbind('mouseenter mouseleave');
jQuery(".menu li a.parent").unbind('click').bind('click', function (e) {
// must be attached to anchor element to prevent bubbling
e.preventDefault();
jQuery(this).parent("li").toggleClass("hover");
});
} else if (ww > 991) {
jQuery(".toggleMenu").css("display", "none");
jQuery(".main-nav").show();
jQuery(".menu li").removeClass("hover");
jQuery(".menu li a").unbind('click');
jQuery(".menu li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function () {
// must be attached to li so that mouseleave is not triggered when hover over submenu
jQuery(this).toggleClass('hover');
});
}
}

jQuery(function() {
jQuery('a.page-scroll, .portfolio-wrapper a').bind('click', function(event) {
var $anchor = $(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1500, 'easeInOutExpo');
event.preventDefault();
});
});

jQuery(document).ready(function() {
jQuery('.fancybox').fancybox();
});

jQuery(window).scroll(function() {
if ($(".header").offset().top > 0) {
jQuery(".header").addClass("fixed-header");
} else {
$(".header").removeClass("fixed-header");
}
});

$(function(){
    $('.menubar-toggle').click(function(){
        $('.menubar-toggle').toggleClass('menubar-on');
        $('nav').fadeToggle();
        $('nav').removeClass('menu-hide');
    });
});


jQuery(document).ready(function() {
var offset = 220;
var duration = 500;
jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > offset) {
jQuery('.back-to-top').fadeIn(duration);
} else {
jQuery('.back-to-top').fadeOut(duration);
}
});
jQuery('.back-to-top').click(function(event) {
event.preventDefault();
jQuery('html, body').animate({scrollTop: 0}, duration);
return false;
})
});


$(function () {
var filterList = {
init: function () {
// MixItUp plugin
// http://mixitup.io
$('#portfoliolist').mixitup({
targetSelector: '.portfolio',
filterSelector: '.filter',
effects: ['fade'],
easing: 'snap',
// call the hover effect
onMixEnd: filterList.hoverEffect()
});
},
hoverEffect: function () {
// Simple parallax effect
$('#portfoliolist .portfolio').hover(
function () {
$(this).find('.label-box').stop().animate({bottom: 0}, 200, 'easeOutQuad');
$(this).find('img').stop().animate({top: 0}, 500, 'easeOutQuad');
},
function () {
$(this).find('.label-box').stop().animate({bottom: 0}, 200, 'easeInQuad');
$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
}
);
}
};
// Run the show!
filterList.init();
});

