function initialize() {
    if (navigator.geolocation) {
        var result = navigator.geolocation.getCurrentPosition(success);
    } else {
        alert("Your browser doesn't support geolocation!");
    }
}

function success(position) {
    //position.coords.latitude, position.coords.longitude
    //gatech center 33.775753, -84.396291
    var myLatlng = new google.maps.LatLng(33.775753, -84.396291);
    var mapOptions = {
        center: myLatlng,
        disableDefaultUI: true,
        zoom: 17
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Hello World!"
    });
}

google.maps.event.addDomListener(window, 'load', initialize);


