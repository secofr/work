
$(document).ready(function() {
	

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});


	$("div.down-btn.animated").hover(
	function() {
		$(this).addClass("bounce"); // Добавляем класс bounce
	},
     function() {
		$(this).removeClass("bounce"); // Убираем класс
	});

	$("div.icon-wrap.animated").hover(
	function() {
		$(this).addClass("flip"); // Добавляем класс bounce
	},
     function() {
		$(this).removeClass("flip"); // Убираем класс
	});

	$(".wrapper a").mPageScroll2id();
	$(".wrapper-dark a").mPageScroll2id();
	$(".top_mnu ul a").mPageScroll2id();

			//$(this).find(".vertical").toggleClass("open");
		//$(this).find(".horizontal").toggleClass("open");



	$(".section_header").animated("fadeInUp", "fadeOutDown");

	//$(".popup").magnificPopup({type:"image"});

	
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	$(".animation_1").animated("flipInY", "flipOutY");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");
	
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