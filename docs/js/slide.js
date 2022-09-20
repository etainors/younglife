(function(){

	// options
	var options = {
		duration: 1000,
		easing: 'easeInOutCubic',
		auto: true,
		interval: 3000
	};

	// doms
	var $window = $(window),
		$container = $('#slider'),
		$element = $container.find('ul'),
		$next = $container.find('#next'),
		$prev = $container.find('#prev'),
		len = $element.find('li').length,
		mid = parseInt((len-1)/2),
		lw = (function(n){
			if (n == -1) return $element.find('li').find('img')[len-1].width;
			if (n > -1 && n < len) return $element.find('li').find('img')[n].width;
			if (n >= len) return slw(len);
			return $element.find('li').find('img').width();
		}),
		slw = (function(n){
			r = 0;
			for (i = 0; i < n; i++) r += $element.find('li').find('img')[i].width;
			return r
		}),
		lh = $element.find('li').find('img').height(),
		timer = '';

	function initialize(){
		resize();
		rollover();
		$window.on('resize', resize);
		$next.on('click', function(){ slide(true); });
		$prev.on('click', function(){ slide(false); });
		load();
		if(options.auto) timer = setInterval(function(){ slide(true) }, options.interval);
	};

	function resize(){
		$element.css({
			'width': lw(len),
			'left': ($window.width()-lw(mid))/2-slw(mid)
		});
	};

	// アニメーションを管理する関数
	function slide(direction){

		// $elementがアニメーション中なら、処理しない
		if($element.filter(':animated').length) return;

		// ループを停止
		if(options.auto) clearInterval(timer);

		// 移動を変数に入れる。引数がtrueなら-lw,falseならlw
		val = (direction)? (-lw(mid)-lw(mid+1))/2: (lw(mid)+lw(mid-1))/2;
		
		// アニメーションスタート。最後にコールバック関数を呼び出す。
		$element.animate({
			'marginLeft': val
		}, options.duration, options.easing, callback);

	};

	// slide関数実行後に呼び出す関数
	function callback(){

		// valが0より小さければ、最初のliを最後に移動させる。　
		// valが0より大きければ、最後のliを最初に移動させる。
		(0 > val)? $element.find('li').eq(0).remove().appendTo($element): $element.find('li').eq(len - 1).remove().prependTo($element);

		// valが0より大きければ、最後のliを最初に移動させる。
		$element.css({
			'marginLeft': 0,
			'left': ($window.width()-lw(mid))/2-slw(mid)
		});

		// options.autoがtrueなら、ループを開始
		if(options.auto) timer = setInterval(function(){ slide(true) }, options.interval);

	};

	function load(){
		var array = [$element, $next, $prev];
		for(var i = 0; i < array.length; i++) array[i].css('visibility', 'visible');
		$container.css('background', 'none');
	};

	function rollover(){
		$(".rollover").hover(function(){
			$(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
		},function(){
			$(this).attr("src",$(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
		}).each(function(){
			$("<img>").attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
		});
	};

	$window.on('load', initialize);

}());