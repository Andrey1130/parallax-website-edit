function parallaxFade() {
	scrollPos = $(this).scrollTop() - ($("#box").offset().top);
	$('#box').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
	$('#boxtext1').css({
		// 'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/150)
	});
}
function isScrolledIntoView(elem) {
  var $elem = $(elem);
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemBottom = $elem.offset().top;

  return ((elemBottom <= docViewTop));
}
$(document).ready(function(){
	$(window).scroll(function(e) {
		if (isScrolledIntoView('#box')) {
      parallaxFade();
    } else {
      scrollPos = Math.abs($(this).scrollTop() - ($("#box").offset().top));
      $('#boxtext1').css({
        // 'margin-top': (scrollPos/4)+"px",
        'opacity': 1-(scrollPos/150)
      });
		}
	});
});

