var buildingSource = new Array();

$(document).ready(function () {
    Parse.initialize("FbWhMH1sviYaADqZE81YaAy2hz816cBNr7gwHhvT", "flxbQOKGFIWEs23LhJf7i8SGn0WrEtfQSFPnzO6J");

    var Buildings = Parse.Object.extend("Buildings");
    var query = new Parse.Query(Buildings);
    query.limit(250);
    
    query.find({
        success: function (results) {
            results.forEach(function (building) {
                buildingSource.push(building.get("name"));
            });

            bind_source_autocomplete();
        }
    });

    $("#navigateBtn").on("click", function () {
        var form_validates = $('.input_to_location').val() != '';
        if (form_validates) {
            window.location = '/GTNavaTech/navigate.html';
        } else {
            alert('Please enter a valid destination.');
        }
    });
});

function bind_source_autocomplete() {
    $(".input_my_location").autocomplete({ source: buildingSource });
    $(".input_to_location").autocomplete({ source: buildingSource });
}