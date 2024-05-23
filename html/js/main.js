(function ($) {
 "use strict";

/*----------------------------
	jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();
/*----------------------------
	wow js active
------------------------------ */
	new WOW().init();
 
/*----------------------------
	product-slider
------------------------------ */  
	$('.product-slider').slick({
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev">p<br />r<br />e<br />v</button>',
		nextArrow: '<button type="button" class="slick-next">n<br />e<br />x<br />t</button>',
		responsive: [
			{  breakpoint: 1169,  settings: { slidesToShow: 3,  }  },
			{  breakpoint: 969,   settings: { slidesToShow: 3,  }  },
			{  breakpoint: 767,   settings: { slidesToShow: 1, }   },
			{  breakpoint: 480,   settings: { slidesToShow: 1, }   },
		]
	}); 

/*----------------------------
	discount-product-slider
------------------------------ */  
	$('.discount-product-slider').slick({
		autoplay: false,
		arrows: false,
		dots: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{  breakpoint: 1169,  settings: { slidesToShow: 1,  }  },
			{  breakpoint: 969,   settings: { slidesToShow: 1,  }  },
			{  breakpoint: 767,   settings: { slidesToShow: 1, }   },
		]
	});

/*----------------------------
	brand-slider
------------------------------ */  
	$('.brand-slider').slick({
		autoplay: false,
		arrows: false,
		dots: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{  breakpoint: 1169,  settings: { slidesToShow: 4,  }  },
			{  breakpoint: 969,   settings: { slidesToShow: 3,  }  },
			{  breakpoint: 767,   settings: { slidesToShow: 2, }   },
			{  breakpoint: 480,   settings: { slidesToShow: 1, }   },
		]
	});

/*----------------------------
	single-pro-slider
------------------------------ */  
	 $('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		arrows: true,
		centerMode: false,
		responsive: [
			{  breakpoint: 480,   settings: { slidesToShow: 2, }   },
		],
		focusOnSelect: true,
		prevArrow: '<div class="single-pro-arrow arrow-left"><i class="zmdi zmdi-chevron-left"></i></div>',
		nextArrow: '<div class="single-pro-arrow arrow-right"><i class="zmdi zmdi-chevron-right"></i></div>',
	});	

/*---------------------
 Lightbox
--------------------- */	   
	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});
	
/*----------------------------
	main-menu button
------------------------------ */
	$('.menu-toggle').on('click', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.main-menu').animate({left: '-225px'}, 500);
		}
		else{
			$(this).addClass('active');
			$('.main-menu').animate({left: '0'}, 500);
		}
	});
	
/*----------------------------
	search button
------------------------------ */
	$('.search-open').on('click', function(){
		$('.sidebar-search').removeClass('slideOutUp').addClass('slideInDown');
	});
	$('.close-search').on('click', function(){
		$('.sidebar-search').removeClass('slideInDown').addClass('slideOutUp');
	});
/*----------------------------
	Mega-menu Scroll
------------------------------ */
    $(".menu-scroll").niceScroll({cursorborder:"1px",cursorcolor:"#c87065",boxzoom:true}); // First scrollable DIV	
    $(".boxscrol2").niceScroll({cursorborder:"0px",cursorcolor:"#c87065",boxzoom:true}); // Second scrollable DIV	
	
/*----------------------
	sticky-menu
--------------------- */
    var sticky_menu = $("#sticky-menu");
    var pos = sticky_menu.position();
    if (sticky_menu.length) {
        var windowpos = sticky_menu.offset().top;
        $(window).on('scroll', function() {
            var windowpos = $(window).scrollTop();
            if (windowpos > pos.top) {
                sticky_menu.addClass("sticky");
            } else {
                sticky_menu.removeClass("sticky");
            }
        });
    }

/*--------------------------
	tooltip active jquery
---------------------------- */
	$('.product-action a').tooltip({
        container: 'body'
    });	
	
/*---------------------
	countdown
--------------------- */
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span>'));
		});
	});	
	
/*---------------------
	treeview
--------------------- */	
	$("#cat-treeview ul").treeview({
		animated: "normal",
		persist: "location",
		collapsed: true,
		unique: true,
	});
	
/*----------------------------
	price-slider active
------------------------------ */  
	$( "#slider-range" ).slider({
		range: true,
		min: 50,
		max: 2000,
		values: [ 0, 999 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	" - $" + $( "#slider-range" ).slider( "values", 1 ) );  
	
/*----------------------------
	Cart Plus Minus Button
------------------------------ */
$(document).ready(function() {  
    // 初始化时添加增减按钮（如果它们还没有被添加）  
    $(".cart-plus-minus").each(function() {  
        if ($(this).find('.qtybutton').length === 0) {  
            $(this).prepend('<div class="dec qtybutton">-</div>');  
            $(this).append('<div class="inc qtybutton">+</div>');  
        }  
    });  
  
    // 监听增减按钮的点击事件  
    $(document).on('click', '.qtybutton', function() {  
        var $button = $(this);  
        var isIncrement = $button.hasClass('inc');  
        var $input = $button.closest('.cart-plus-minus').find('.cart-plus-minus-box');  
        var val = parseInt($input.val(), 10);  
        var price = parseFloat($input.data('price')); // 使用data-price属性获取价格  
  
        if (isIncrement || (val > 1 && !isIncrement)) {  
            $input.val(isIncrement ? val + 1 : val - 1);  
  
            // 更新子总价  
            var subtotal = price * parseInt($input.val(), 10);  
            $button.closest('tr').find('.product-subtotal').text('$' + subtotal.toFixed(2));  
  
            // 更新购物车总价  
            updateOrderTotal();  
        }  
    });  
  // 监听删除按钮的点击事件  
  $(document).on('click', '.product-remove a', function(e) {  
	e.preventDefault(); // 阻止默认的链接行为  
	  
	// 移除产品行  
	var $row = $(this).closest('.product-row');  
	$row.remove();  
	  
	// 更新购物车总价  
	updateOrderTotal();  
    });  

    // 更新购物车总价函数  
    function updateOrderTotal() {  
	   var total = 0;  
	   $('.product-row').each(function() {  
		var subtotal = parseFloat($(this).find('.product-subtotal').text().replace('$', ''));  
		total += subtotal;  
	});  
	    $('#order-total').text('$' + total.toFixed(2));  
    }  

     // 初始时计算总价  
    updateOrderTotal();  

    });
/*-------------------------
	place order
--------------------------*/
	document.addEventListener('DOMContentLoaded', function() {  
		// 获取按钮元素  
		var button = document.querySelector('.button-one.submit-button');  
		  
		// 监听按钮的点击事件  
		button.addEventListener('click', function(e) {  
			e.preventDefault(); // 阻止表单默认的提交行为（如果按钮在表单内）  
			  
			// 跳转到 order.html  
			window.location.href = 'order.html';  
		});  
	});
/*-------------------------
	accordion toggle function
--------------------------*/
	$('.payment-accordion').find('.payment-accordion-toggle').on('click', function(){
		//Expand or collapse this panel
		$(this).next().slideToggle(500);
		//Hide the other panels
		$(".payment-content").not($(this).next()).slideUp(500);
	});
/* -------------------------------------------------------
	accordion active class for style
----------------------------------------------------------*/
	$('.payment-accordion-toggle').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	}); 	   
/*--------------------------
	scrollUp
---------------------------- */	
	$.scrollUp({
		scrollText: '<i class="zmdi zmdi-triangle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	}); 	   
/*--------------------------
	delete
---------------------------- */	
    // 提示删除确认，并删除对应的商品列表项
    $(document).ready(function() { // 确保DOM加载完成后再绑定事件  
    $('.delete').click(function(e) {  
		e.preventDefault(); // 阻止默认的链接点击行为  
		if (window.confirm('Are you sure you want to delete the selected item?')) {  
			$(this).closest('tr').remove(); // 使用closest找到最近的<tr>元素并删除它  
		}  
	});  
    });  
	// 等待文档加载完成  
    document.addEventListener('DOMContentLoaded', function() {  
    // 获取所有.cart-delete a元素  
    var deleteLinks = document.querySelectorAll('.cart-delete a');  
      
    // 对每个.cart-delete a元素添加点击事件监听器  
    deleteLinks.forEach(function(link) {  
        link.addEventListener('click', function(event) {  
            // 阻止默认的链接点击行为  
            event.preventDefault();  
              
            // 找到最近的.single-cart.clearfix父元素并删除它  
            var cartDiv = this.closest('.single-cart.clearfix');  
            if (cartDiv) {  
                cartDiv.remove();  
            }  
        });  
    });  
});  
document.addEventListener('DOMContentLoaded', function() {  
    var deleteButtons = document.querySelectorAll('.delete-comment');  
      
    deleteButtons.forEach(function(button) {  
        button.addEventListener('click', function(event) {  
            event.preventDefault(); // 阻止默认的链接点击行为  
            if (window.confirm('Are you sure you want to delete this comment?')) {  
                this.closest('li').remove(); // 找到最近的<li>元素并删除它  
            }  
        });  
    });  
});
/*--------------------------	
	shop page manu dropdown	
---------------------------- */	
	$('.dropdown .option-btn').on('click', function(){
		if($(this).siblings('.dropdown-menu').hasClass('active')){
			$(this).siblings('.dropdown-menu').removeClass('active').slideUp();
			$(this).removeClass('active');
		}
		else{
			$('.dropdown .dropdown-menu').removeClass('active').slideUp();
			$('.dropdown .option-btn').removeClass('active');
			$(this).addClass('active');
			$(this).siblings('.dropdown-menu').addClass('active').slideDown();
		}
	});



})(jQuery);