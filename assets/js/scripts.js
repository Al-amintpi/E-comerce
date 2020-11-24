$(document).ready(function(){
	$('#getting-started').countdown('2021/01/01', function(event) {
    $(this).html(event.strftime(''
      +'<div class="count"><div class="line-height"><h1>%D</h1><h3>days</h3></div></div>'
      +'<div class="count"><div class="line-height"><h1>%H</h1><h3>hour</h3></div></div>'
      +'<div class="count"><div class="line-height"><h1>%M</h1><h3>min</h3></div></div>'
      +'<div class="count"><div class="line-height"><h1>%S</h1><h3>sec</h3></div></div>'


      ));
  });

	$('.close-button').click(function(){
		$(this).closest('.add-section').fadeOut();
		return false;
	});

	// owl carousel slide
	$('.slide-carousel').owlCarousel({
		items:1,
		loop:false,
		nav:false,
		dots:true,
	});

	// fresh new arival product arival
	$('.fresh-new-arival-area').owlCarousel({
		items:4,
		loop:true,
		nav:true,
		dots:false,
		margin:10,
		responsive:{
        0:{
            items:1,
            
        },
        768:{
            items:2,
             
        },
        992:{
            items:3,
             
        },
        1200:{
        	items:4,
        }
         
    }
	});

	// latest product list
	$('.latest-product-carousel').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		margin:10
	});

	// best sellar product
	$('.best-sellar-product-area').owlCarousel({
		items:2,
		nav:true,
		dots:false,
		loop:true,
		margin:10,		
		responsive:{
        0:{
            items:1,
            
        },
        576:{
            items:2,
             
        },
        992:{
            items:2,
             
        },
        1200:{
        	items:2,
        } 
    }
		 
	});

	$('#hot-count-down').countdown('2021/01/01', function(event) {
    $(this).html(event.strftime(''
      +'<div class="hot-deals-count-down"><div class="hot-deals-first"><div class="hot-deals-line-height"><h1>%D</h1><h3>days</h3></div></div><div class="hot-deals-first"><div class="hot-deals-line-height"><h1>%H</h1><h3>hour</h3></div></div></div>'
      +'<div class="hot-deals-count-down hot-deals-second"><div class="hot-deals-first"><div class="hot-deals-line-height"><h1>%M</h1><h3>min</h3></div></div><div class="hot-deals-first"><div class="hot-deals-line-height"><h1>%S</h1><h3>sec</h3></div></div></div>'
      


      ));
  });
	// Trendny-item owl-carousel
	$('.trendny-owl-carousel').owlCarousel({
		items:2,
		loop:true,
		nav:true,
		dots:false,
		margin:10,
		responsive:{
        0:{
            items:1,
            
        },
        768:{
            items:2,
             
        },
        992:{
            items:2,
             
        },
        1200:{
        	items:2,
        } 
    }

	});


	$('.feature-owl-carousel').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false
	});

	// brand owl carousel 
	$('.brand-area').owlCarousel({
		items:5,
		loop:true,
		nav:true,
		dots:false,
		responsive:{
        0:{
            items:2,
            
        },
        768:{
            items:3,
             
        },
        992:{
            items:4,
             
        },
        1200:{
        	items:5,
        } 
    }
	});
});

$(window).scroll(function(){
	var value = $(this).scrollTop();
	console.log(value);
	if(value>500){
		$('.scrollbtn').show(100);
	}else{
		$('.scrollbtn').hide(100);
	}
});

$(document).ready(function(){
	$('.scrollbtn').click(function(){
		$('body,html').animate({
			scrollTop:0
		}, 1000);
		return false;
	});
});


$(document).ready(function(){
	$('.search-icon').click(function(){
		$('.search-box-hidden').toggle();
		return false;
	});
	var acc = document.getElementsByClassName("accordion");
		console.log(acc.length);
		var i;

		for (i = 0; i < acc.length; i++) {
			console.log(i);
		  acc[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight) {
		      panel.style.maxHeight = null;
		    } else {
		      panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
		  });
		}
});

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

// checkout Accorodion

$(document).ready(function(){
	 
	var acc = document.getElementsByClassName("checkout-accordion");
		console.log(acc.length);
		var i;

		for (i = 0; i < acc.length; i++) {
			console.log(i);
		  acc[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight) {
		      panel.style.maxHeight = null;
		    } else {
		      panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
		  });
		}
});