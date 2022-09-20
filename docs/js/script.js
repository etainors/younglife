var yl = (function(){
	document.getElementById('head').innerHTML = '<div class="head-1"><img src="img/YoungLife%20New%20Logo%20frame.jpg"></div><div class="head-2"><div class="head-2-1"><img src="img/wp8e73ee44_06.png"></div><img src="img/wp175ef843_06.png"></div><div class="head-3"><div class="head-3-1"><map name="map1"><area shape="poly" coords="9,11,13,11,13,7,8,7,9,4,14,4,14,0,6,0,4,2,3,5,3,7,0,7,0,11,3,11,3,24,9,24" href="https://www.facebook.com/Youngfu.tw" target="_blank"></map><img src="img/wpd38a4c1b_06.png" usemap="#map1"></div><div class="head-3-2"><a class="head-link" href="https://www.facebook.com/Youngfu.tw">來粉絲頁按一個讚</a></div><div class="head-3-3"><map name="map2"><area shape="poly" coords="3,22,9,18,14,18,16,7,22,5,25,6,26,12,32,12,37,25,35,30,25,34,21,35,9,40" href="https://www.facebook.com/Youngfu.tw" target="_blank"></map><img src="img/wp08a31471_06.png" usemap="#map2"></div></div>';
	var c = document.getElementById('nav').getAttribute('choice');
	document.getElementById('nav').innerHTML = '<a class="nav-link" href="index.html"><div class="button button-'+((c=='1')?'1':'2')+'">認識秧扶</div></a><a class="nav-link" href="page3.html"><div class="button button-'+((c=='2')?'1':'2')+'">支持我們</div></a><a class="nav-link" href="page4.html"><div class="button button-'+((c=='3')?'1':'2')+'">服務內容</div></a><a class="nav-link" href="page5.html"><div class="button button-'+((c=='4')?'1':'2')+'">聯絡我們</div></a>';
	document.getElementById('foot').innerHTML = '社團法人台灣秧扶青少年關懷協會 Copyright &nbsp;© 2011 Taiwan Young Life<br>通訊處：(112)台北市北投區懷德街99巷7號7F<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7F., No.7, Ln. 99, Huaide St., Beitou Dist., Taipei City 112, Taiwan (R.O.C.)<br>電話/傳真：(02)2823-6530 &nbsp;&nbsp;&nbsp;&nbsp;Tel / Fax：+886-2-2823-6530<br>台內社字第 10000189654號';
	return {
		table_content: function(arr){
			return arr.map(function(row){return '<tr><td rowspan="2"><img src="img/wpd4d6caca_06.png" width="27" height="31"></td><td><span class="date">'+row[0]+'</span></td></tr><tr><td><span class="content">'+row[1]+'</span></td></tr>';}).join('')
		},
		map_content: function(){
			var gm_map = new google.maps.Map(document.getElementById('map'),{
				zoom: 17,
				center: new google.maps.LatLng(25.114821,121.519399),
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: true,
				streetViewControl: true,
				mapTypeControl: true,
				mapTypeControlOptions: {style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR},
				navigationControl: true,
				navigationControlOptions: {style:google.maps.NavigationControlStyle.ZOOM_PAN},
				draggableCursor: 'default',
				draggingCursor: 'pointer'
			});
			var gm_svp = new google.maps.StreetViewPanorama(document.getElementById('map'),{
				enableCloseButton: true,
				visible: false,
				scrollwheel: true
			});
			gm_map.setStreetView(gm_svp);
			var gm_iw = new google.maps.InfoWindow({});
			var gm_marker = new google.maps.Marker({
				position: new google.maps.LatLng(25.1150276740538520,121.5193140506744400),
				map: gm_map,
				title: "秧扶青少年關懷協會"
			});
			gm_marker.dLat = 25.1150276740538520;
			gm_marker.dLong = 121.5193140506744400;
			gm_marker.ptPos = new google.maps.LatLng(25.1150276740538520,121.5193140506744400);
			gm_marker.strName = "秧扶青少年關懷協會";
			gm_marker.strLabel = "";
			gm_marker.nDir = 0;
			gm_marker.nPitch = 0;
			gm_marker.nZoom = 1;
			gm_marker.oMap = gm_map;
			gm_marker.oPanorama = gm_svp;
			gm_marker.oInfoWnd = gm_iw;
			google.maps.event.addListener(gm_marker,'click',function(){
				if(!this.strLabel.length){
					gm_iw.close()
				}else{
					gm_marker.oInfoWnd.setContent(this.strLabel);
					gm_marker.oInfoWnd.open(gm_marker.oMap,this);
					gm_iw = gm_marker.oInfoWnd
				}
			});
		},
	}
})();