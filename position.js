var GeoApp = GeoApp || {};

GeoApp.Position = function(position){
	this.latitude = position.coords.latitude;
	this.longitude = position.coords.longitude;
	this.accuracy = position.coords.accuracy;
	this.date = new Date(position.timestamp);
};

GeoApp.Position.prototype = {
	renderMe: function(){
		var latitude, longitude, date, accuracy, li;

		li = $('<li>').append(this.latitude);
		li.append(', ' + this.longitude);
		li.append('<br>').append(this.date)
		li.append('<br>').append('Accuracy: ' + this.accuracy);

		return li;
	}
};