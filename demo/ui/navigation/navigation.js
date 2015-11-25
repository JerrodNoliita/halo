$.extend($.fn, {
	navigation: function(options) {

		options = $.extend({
			"data": [],
			"displaycount": 3,
			"speed": 1.5,
			"itemClick": function(){}
		}, options);
		
		var toString = Object.prototype.toString,
			tpl = '<div class="navigation"><ul class="navigation-list" style="width:{{listwidth}}px;transform:translateX(0px);-webkit-transform: translateX(0px);">{{list}}</ul></div>',
			listTpl = '<li class="navigation-item" style="width:{{itemwidth}}px">{{item}}</li>';

		var validData = function(data) {
			return data && Array.isArray(data) && data.length > 0;
		}

		var vaildDisplayCount = function(displaycount) {
			return typeof displaycount == "number" && displaycount > 0;
		}

		var render = function(target) {
			var html = "",
				listHtml = "",
				that = $(target),
				itemwidth = 0,
				itemcount = 0,
				valid = validData(options.data);
			
			if(valid) {
				options.displaycount = vaildDisplayCount(options.displaycount) ? options.displaycount : 3;
				itemwidth = Math.floor($(window).width() / options.displaycount);
				options.data.forEach(function(data){
					listHtml += listTpl.replace('{{item}}', data).replace('{{itemwidth}}', itemwidth);
				})
				itemcount = options.data.length;
			}
			html = tpl.replace('{{list}}', listHtml).replace('{{listwidth}}', itemwidth * itemcount);
			that.html(html);
			that.data('max-translateX', itemwidth * (itemcount - 1));
		}

		var bindEvent = function(target) {
			var that = $(target),
				dmTouchs = {};
			
			that.on('touchstart', '.navigation', function(e){
				dmTouchs.startX = e.touches[0].clientX;
				dmTouchs.flag = "touch";
				e.preventDefault();
			});
			
			that.on('touchmove', '.navigation', function(e){
				var distance = 0;
				var	$list = that.find('.navigation-list');
				var	listTranslateX = parseInt($list.css('transform').match(/\.*translateX\((.*)px\)/i)[1]);
				dmTouchs.moveX = e.touches[0].clientX;
				distance = Math.floor(dmTouchs.moveX - dmTouchs.startX);

				//滑动 
				if(Math.abs(distance) > 15) {
					listTranslateX += Math.flodocor(options.speed * distance);
					listTranslateX = listTranslateX > 0 ? 0 : listTranslateX;
					listTranslateX = listTranslateX < -that.data('max-translateX') ? -that.data('max-translateX') : listTranslateX;
					$list.css({
						"transform":"translateX(" + listTranslateX + "px)", 
						"-webkit-transform":"translateX(" + listTranslateX + "px)"
					})
					dmTouchs.flag = "move";
				}

				e.preventDefault();
			});
			
			that.on('touchend', '.navigation', function(e){
				if(dmTouchs.flag == "touch") {
					that.trigger('navigation-change', e.target);
					options.itemClick(e);
				}
			});

			that.on('navigation-change', function(e, element){
				that.find('.navigation-item').removeClass('on');
				$(element).addClass('on');
			});
		}

		var init = function() {
			render(this);
			bindEvent(this);
		};

		return this.each(init);
	}
});