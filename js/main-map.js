// JavaScript Document
var map;
var bounds;
var markers = new Array();
      function initialize() {
	  var pos = new google.maps.LatLng(43.907787,-79.359741);

	  var myOptions = {
      zoom: 8,
      center: pos,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

        map = new google.maps.Map(document.getElementById('map'),myOptions);
		google.maps.event.addListener(map, 'dragend', function() {
				$('#log').html('');
				bounds = map.getBounds();
				var se = bounds.getSouthWest();
				var ne = bounds.getNorthEast();
				OpenMap(se.lat(),se.lng(),ne.lat(),ne.lng());


		 });

			OpenMap(43.5583, -80.8,44.1583, -78.1);
	  }
	
 
function createMarkers(n){    
	var pos =   new google.maps.LatLng(tMarkers[n].latitude,tMarkers[n].longitude);
	var top = (31*(tMarkers[n].status-1))+(5*31*(tMarkers[n].type-1));
		$('#log').append('<div>sr: '+n+',type:'+tMarkers[n].type+',status:'+tMarkers[n].status+',top'+top+'</div>');
	var markerOptions = {
    icon: new google.maps.MarkerImage('car_markers.png', 
      new google.maps.Size(31,31),
        new google.maps.Point(0,top)
    ),
  position: pos,
  map: map,
  title:tMarkers[n].title
}

return  marker = new google.maps.Marker(markerOptions);
}
function OpenMap(LLX, LLY, URX, URY ) {
	clearMarekers();
	var swLatLng = new google.maps.LatLng(LLX,LLY);
	var neLatLng =  new google.maps.LatLng(URX,URY);
	bounds = new google.maps.LatLngBounds(swLatLng,neLatLng);
	for(var i=0;i<tMarkers.length;i++){
		
		if(bounds.contains(new google.maps.LatLng(tMarkers[i].latitude,tMarkers[i].longitude))){
			var marker = createMarkers(i);
			markers.push(marker);
		}
		
	}
}

function clearMarekers(){
	for(var i=0;i<markers.length;i++){
			markers[i].setMap(null);
	}
	markers=[];
}
google.maps.event.addDomListener(window, 'load', initialize);