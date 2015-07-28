if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
	    FastClick.attach(document.body);
	}, false);
}
$(function(){

	setInfoSize();

	function setInfoSize(){
		var infos = $('.info');
		for (var i = 0; i < infos.length; i++){
			var info = $(infos[i]);
			info.width(info.closest('.pure-g').width());
			info.css('left', info.closest('.pure-g').offset().left - info.closest('.unit').offset().left);
		}
	}

	if ($(window).scrollTop() < $('#web').offset().top) setTimeout(function(){$('nav #name').addClass('active')}, 500);

	$('.mobile-head .brgr').click(function(){
		$('nav').toggleClass('open');
	});
	$('.blur').click(function(){
		$('nav').toggleClass('open');
	});

	$('body').on('click', 'nav.open ul.sections li a', function(){
		$('nav').removeClass('open');
	});

	$('nav a, .mobile-head a').smoothScroll();

	var lastId,
    menuItems = $('nav').find("ul.sections li a"),
    scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
    });

    $('body').on('DOMMouseScroll mousewheel touchmove', function(e){
    	if ($('nav').hasClass('open') && $(window).width() <= 720){
			e.preventDefault;
			e.stopPropagation();
			return false;
		}
    });

    $('.el', '#content').click(function(e){
    	var _this = $(this).parent();
    	if (_this.hasClass('clicked')){
    		var prevclicked = _this.removeClass('clicked').find('.info').removeClass('open');
    		$('.down').removeClass('down');
    		if ($(window).scrollTop() + window.innerHeight > height){
    			$('html,body').stop().animate({scrollTop: height - window.innerHeight - 16 }, 200);
    			setTimeout(function(){$('body')[0].style.height = ''}, 200);
    		}
    	}else{
    		var thisinfo = _this.find('.info', "#content");
    		if (window.innerHeight > 300 && ($(window).scrollTop() + window.innerHeight < thisinfo.offset().top+(_this.hasClass('down') || _this.closest('.down').length ? 0 : 300))){
    			$('html,body').stop().animate({scrollTop: thisinfo.offset().top+(_this.hasClass('down') || _this.closest('.down').length ? 16 : 316) - window.innerHeight }, 400);
    		}else if(window.innerHeight <= 300 || ($(window).scrollTop() > thisinfo.offset().top-(_this.hasClass('down') || _this.closest('.down').length ? 300 : 30))){
    			$('html,body').stop().animate({scrollTop: thisinfo.offset().top-(_this.hasClass('down') || _this.closest('.down').length ? 304 : 4)}, 400);
    		}
    		$.ajax({
    			type: "GET",
    			url: "partials/"+thisinfo.attr("id")+".html",
    			cache: true,
    			success: function(response) {
    				thisinfo.find('.info-content').html(response);
    			}
    		});

			var isMobile = false; //initiate as false
			// device detection
			if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
			    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    		
			if (!isMobile){
				var downsiblingunits = $('div.unit.down', '#content');
	    		for (var i = 0; i < downsiblingunits.length; i++){
	    			if ($(downsiblingunits[i]).offset().top <= _this.offset().top){
	    				$(downsiblingunits[i])[0].classList.remove('down');
	    			}else{
	    				break;
	    			}
	    		}
			}
    		
    		var prevclicked = $('.unit.clicked');
    		if (prevclicked.length){
	    		_this[0].classList.remove('down');
	    		$('.unit.clicked').removeClass('clicked').find('.info').removeClass('open');
    		}
    		
	    	if (!isMobile){
	    		var siblingunits = _this.nextAll('div.unit');
	    		for (var i = 0; i < siblingunits.length; i++){
	    			if ($(siblingunits[i]).position().top > _this.position().top){
	    				$(siblingunits[i])[0].classList.add('down');
	    			}
	    		}

	    		var downsiblingrows = $('.pure-g.down', "#content");
	    		for (var i = 0; i < downsiblingrows.length; i++){
	    			if ($(downsiblingrows[i]).offset().top <= _this.offset().top){
	    				$(downsiblingrows[i])[0].classList.remove('down');
	    				$(downsiblingrows[i]).prev('h3.down')[0].classList.remove('down');
	    			}else{
	    				break;
	    			}
	    		}

	    		var siblingrows = _this.closest('.pure-g').nextAll('.pure-g');
	    		for (var i = 0; i < siblingrows.length; i++){
	    			$(siblingrows[i])[0].classList.add('down');
	    			$(siblingrows[i]).prev('h3')[0].classList.add('down');
	    			var cousins = $(siblingrows[i]).find('div.unit.down');
	    			for (var j = 0; j < cousins.length; j++){
	    				$(cousins[j])[0].classList.remove('down');
	    			}
	    		}

	    		var downsiblingsections = $('.section.down, .foot.down', "#content");
	    		for (var i = 0; i < downsiblingsections.length; i++){
	    			if ($(downsiblingsections[i]).offset().top <= _this.offset().top){
	    				$(downsiblingsections[i])[0].classList.remove('down');
	    			}else{
	    				break;
	    			}
	    		}

	    		var siblingsections = _this.closest('.section').nextAll('.section, .foot');
	    		for (var i = 0; i < siblingsections.length; i++){
	    			$(siblingsections[i])[0].classList.add('down');
	    			var uncles = $(siblingsections[i]).find('.pure-g.down');
	    			for (var j = 0; j < uncles.length; j++){
	    				$(uncles[j]).prev('h3')[0].classList.remove('down');
	    				$(uncles[j])[0].classList.remove('down');
	    			}
	    			var distantcousins = $(siblingsections[i]).find('div.unit.down');
	    			for (var j = 0; j < distantcousins.length; j++){
	    				$(distantcousins[j])[0].classList.remove('down');
	    			}
	    		}
	    	}

    		_this.addClass('clicked');
    		thisinfo.addClass('open');

    		
    	}
    });

	var width = $(window).width();
	var height = $(document).height();
    $(window).resize(function(){
    	if (width == $(window).width()) return false;
    	width = $(window).width();
    	height = $(document).height();
    	if ($('#content .clicked').length){
    		$('#content .down, .info').addClass('killtransition');
    		$('#content .clicked').removeClass('clicked');
    		$('#content .down').removeClass('down');
    		$('.info').removeClass('open');
    		$('#content')[0].offsetHeight;
    		$('.killtransition').removeClass('killtransition');
    	}
		setInfoSize();
    });

	$(window).scroll(function(e){
		

		var fromTop = $(this).scrollTop();

		var cur = scrollItems.map(function(){
			if ($(window).scrollTop() + $(window).height() + 100 >= $(document).height()){
				return scrollItems[scrollItems.length-1];
			}
			if ($(this).offset().top - 100 < fromTop)
				return this;
		});
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";

		if (id === ''){
			$('nav #name').addClass('active');
		}else{
			$('nav #name').removeClass('active');
		}

		if (lastId !== id) {
			lastId = id;
			menuItems
				.parent().removeClass("active")
				.end().filter("[href=#"+id+"]").parent().addClass("active");
		}                   
	});

});