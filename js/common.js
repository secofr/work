$(document).ready(function() {

	//$(".icon").mouseenter(function () {
	//			$(".icon").animated("bounce");
	//});
	$(".wrapper a").mPageScroll2id();
	$(".top_mnu ul a").mPageScroll2id();

			//$(this).find(".vertical").toggleClass("open");
		//$(this).find(".horizontal").toggleClass("open");



	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".popup").magnificPopup({type:"image"});

	
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	$(".animation_1").animated("flipInY", "flipOutY");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	}

	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		}
	});
	
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text h2, .section_header").animated("fadeInUp", "fadeOutDown");
});