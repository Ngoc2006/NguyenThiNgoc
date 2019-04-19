
$(document).ready(function () {
	$("#myform").validate({
  rules: {
    name: "required",
   	name2: "required",
   	email: "required",
   	subject: "required" 
  },
  messages: {
                name: "Nhập giá trị",
                name2: "Nhập giá trị",
                email: "Nhập giá trị",
                subject: "Nhập giá trị"
            }
});
	// form
	$("#slideshow > div:gt(0)").hide();

	setInterval(function() {
		$('#slideshow > div:first')
		.fadeOut(3000)
		.next()
		.fadeIn(3000)
		.end()
		.appendTo('#slideshow');
	}, 2000);
	$(".tagtitle > div:gt(0)").hide();

	setInterval(function() {
		$('.tagtitle > div:first')
		.fadeOut(2000)
		.next()
		.fadeIn(2000)
		.end()
		.appendTo('.tagtitle');
	}, 4000);
	// slide
	$('.sixbtn button').click(function () {
		$('.sixbtn button').removeClass('bg-warning');
		$(this).addClass('bg-warning');
	});
	$(".tagtitle > div:gt(0)").hide();

	$('.theBar').click(function () {
		$('.ulMenu').toggleClass('myMenu');
	});
	
	// loc anh
	$('.evi').click(function () {
		$('.divImg').removeClass('theDis');
		$('.type1').addClass('theDis');
		$('.type5').addClass('thePlay wow zoomInRight');
		new WOW().init();
	});
	$('.all').click(function () {
		$('.divImg').removeClass('theDis');
		$('.type1').addClass('thePlay wow zoomInRight');
		$('.type5').addClass('thePlay wow zoomInRight');
		new WOW().init();
	});
	$('.act').click(function () {
		$('.divImg').removeClass('theDis');
		$('.type4').addClass('thePlay wow zoomInRight');
		$('.type3').addClass('theDis');
		new WOW().init();
	})
	$('.cou').click(function () {
		
		$('.divImg').removeClass('theDis');
		$('.divImg').addClass('wow zoomInRight')
		for (var i=0; i < $('.divImg').length; i++) {
			$('.divImg').eq(i).css('order', Math.floor((Math.random() * 8) + 1));
		}
		new WOW().init();
	})
	$('.out').click(function () {
		$('.divImg').removeClass('theDis');
		$('.type1').addClass('thePlay wow zoomInRight');
		$('.type5').addClass('thePlay wow zoomInRight');
		new WOW().init();
	});
	$('.met').click(function () {
		$('.divImg').removeClass('theDis');
		$('.type1').addClass('theDis');
		$('.type5').addClass('thePlay wow zoomInRight');
		new WOW().init();
	});
	// xong loc anh
	  
	  $('.clickme').click(function () {
	  	var gt = $('.error').text();
	  	$('.errorme').text(gt);
	  })

	  $('.slide1 > .owl-carousel').owlCarousel({
	  	items:3,
	  	loop:true,
	  	center:true,
	  	margin:10,
	  	URLhashListener:true,
	  	autoplayHoverPause:true,
	  	startPosition: 'URLhash',
	  	responsiveClass:true,
	  	responsive:{
	  		0:{
	  			items:1,
	  			nav:true,
	  			center:false
	  		},
	  		768:{
	  			items:2,
	  			nav:true,
                // center:true
                Width:true
            },
            992:{
            	items:3,
            	nav:true,
            	loop:false
            }
        }
    });
	  $('.slide2 > .owl-carousel').owlCarousel({
	  	items:4,
	  	loop:true,
	  	center:true,
	  	margin:10,
	  	URLhashListener:true,
	  	autoplayHoverPause:true,
	  	startPosition: 'URLhash',
	  	responsiveClass:true,
	  	responsive:{
	  		0:{
	  			items:1,
	  			nav:true,
	  			center:false
	  		},
	  		768:{
	  			items:2,
	  			nav:true,
                // center:true
                Width:true
            },
            992:{
            	items:3,
            	nav:true,
            	loop:false
            }
        }
    });
	})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

