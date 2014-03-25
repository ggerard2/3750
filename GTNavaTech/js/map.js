var curr_position;
var geocoder;
var map;

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
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

    curr_position = [33.775753, -84.396291];
    var myLatlng = new google.maps.LatLng(33.775753, -84.396291);
    var mapOptions = {
        center: myLatlng,
        disableDefaultUI: true,
        zoom: 17
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Hello World!"
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {
    Parse.initialize("FbWhMH1sviYaADqZE81YaAy2hz816cBNr7gwHhvT", "flxbQOKGFIWEs23LhJf7i8SGn0WrEtfQSFPnzO6J");

    $("#navigateBtn").on("click", function () {
        var from_address;
        var to_address;

        var input_from = $(".input_my_location").val();
        var input_to = $(".input_to_location").val();

        if (input_from == '' || input_from == undefined) {
            from_address = curr_position;
        } else {
            from_address = getAddressFromSearch(input_from);
        }

        if (input_to != '' && input_to != undefined) {
            to_address = getAddressFromSearch(input_to);
        } else {
            alert("please enter a location to navigate to");
        }
    });
});

function getAddressFromSearch(to_location_text) {
    var Buildings = Parse.Object.extend("Buildings");
    var query = new Parse.Query(Buildings);
    query.equalTo("name", to_location_text.toProperCase());

    query.first({
        success: function (result) {
            result.fetch({
                success: function (result) {
                    alert("result: " + result.get("name"));
                    return codeAddress(result.get("address"));
                }                
            });
        }
    });
}


function codeAddress(address) {
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
