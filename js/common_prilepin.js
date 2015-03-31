
$(document).ready(function() {
	
$("#os-phrases > h2").lettering('words').children("span").lettering().children("span").lettering(); 

	$("#portfolio_grid").mixItUp();

	$("#portfolio_grid2").mixItUp();

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

	$("div.person_mnu.animated").hover(
	function() {
		$(this).addClass("bounce"); // Добавляем класс bounce
	},
     function() {
		$(this).removeClass("bounce"); // Убираем класс
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

	function winDetect() {
		$("#video").css("height", $(window).height());
		$("#video").css("width", $(window).width());
		$("#video_player").attr("width",$(window).width());
		$("#video_player").attr("height",$(window).width()*9/16);
	}
	
	winDetect();

	$(window).resize(function() {
		heightDetect();
		winDetect();
	});

	 
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});


	$(".mnu_item").click(function() {
		$(".top_text2").css("opacity", ".5");
		$(".top_text2").fadeOut(600);
		$("#video_player").attr("src","https://www.youtube.com/embed/zDRQrmyZAEw?enablejsapi=1&amp;autoplay=1&amp;autohide=0&amp;controls=0&amp;showinfo=0&amp;cc_load_policy=3&amp;rel=0&amp;vq=hd1080&amp;html5=0&amp;wmode=transparent&amp;start=100&amp;origin=https%3A%2F%2Fwww.facebook.com/events/755362334571253/");

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
	$(".top_text2 h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text2 h2").animated("fadeInUp", "fadeOutDown");
});