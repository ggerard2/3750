var curr_position;
var geocoder;
var map;
var from_address;
var to_address;

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

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
    geocoder = new google.maps.Geocoder();

    curr_position = [position.coords.latitude, position.coords.longitude];
    var myLatlng = new google.maps.LatLng(33.777104, -84.396006);
    //var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOptions = {
        center: myLatlng,
        disableDefaultUI: true,
        zoom: 17
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var myloc = new google.maps.Marker({
        clickable: false,
        icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                new google.maps.Size(22, 22),
                new google.maps.Point(0, 18),
                new google.maps.Point(11, 11)),
        shadow: null,
        zIndex: 999,
        position: myLatlng,
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function () {
    Parse.initialize("FbWhMH1sviYaADqZE81YaAy2hz816cBNr7gwHhvT", "flxbQOKGFIWEs23LhJf7i8SGn0WrEtfQSFPnzO6J");

});

function getAddressFromSearch(input) {
    var Buildings = Parse.Object.extend("Buildings");
    var query = new Parse.Query(Buildings);
    query.equalTo("name", input);

    query.find({
        success: function (result) {
            alert("result: " + result[0].get("name"));
            return result[0].get("latlng");
        },
        error: function (result) {
            alert('no first!');
        }
    });
}
