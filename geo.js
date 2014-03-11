$(document).ready(function(){
	GeoApp.populatePositions();
	$('#checkin').click(GeoApp.findMe);
	$('#clear').click(GeoApp.clearList);
});

var GeoApp = GeoApp || {};

GeoApp.findMe = function(){
	navigator.geolocation.getCurrentPosition(GeoApp.checkIn, GeoApp.onError);
};

GeoApp.checkIn = function(position){
	GeoApp.locationArray.push(position);
	GeoApp.updateStorage();

	var pos = new GeoApp.Position(position);
	$('#checkins').append(pos.renderMe());
};

GeoApp.onError = function(){
	alert('Position not found');
};

GeoApp.clearList = function(){
	$('#checkins').empty();
	GeoApp.locationArray = [];
	localStorage.clear();
};

GeoApp.updateStorage = function(){
	localStorage.setItem('positions', JSON.stringify(GeoApp.locationArray));
};

GeoApp.populatePositions = function(){
	if(window.localStorage.positions){
		GeoApp.locationArray = JSON.parse(localStorage.positions);
	} else {
		GeoApp.locationArray = [];
	}

	var i = 0, length = GeoApp.locationArray.length;
	for(;i < length;){
		var pos = new GeoApp.Position(GeoApp.locationArray[i]);
		$('#checkins').append(pos.renderMe());
		i = i + 1;
	}
};

