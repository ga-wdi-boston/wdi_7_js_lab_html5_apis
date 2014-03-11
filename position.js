var GeoApp = GeoApp || {};

GeoApp.Position = function(position){
	this.latitude = position.coords.latitude;
	this.longitude = position.coords.longitude;
	this.accuracy = position.coords.accuracy;
	this.date = new Date(position.timestamp);
};

GeoApp.Position.prototype = {
	renderMe: function(){
		var li, img_url, img, latlon;

		li = $('<li>').append(this.latitude);
		li.append(', ' + this.longitude);
		li.append('<br>').append(this.date)
		li.append('<br>').append('Accuracy: ' + this.accuracy + '<br>');

		latlon = this.latitude + ',' + this.longitude;
 		img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&markers=color:blue|" + latlon + "&zoom=16&size=400x300&sensor=false";
		img = $('<img>', {src: img_url})

		return li.append(img);
	}
};