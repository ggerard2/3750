var buildingSource = new Array();

$(document).ready(function () {
    Parse.initialize("FbWhMH1sviYaADqZE81YaAy2hz816cBNr7gwHhvT", "flxbQOKGFIWEs23LhJf7i8SGn0WrEtfQSFPnzO6J");

    var Buildings = Parse.Object.extend("Buildings");
    var query = new Parse.Query(Buildings);
    query.limit(250);
    
    query.find({
        success: function (results) {
            results.forEach(function (building) {
                buildingSource.push(building.get("name").toLowerCase());
            });

            bind_source_autocomplete();
        }
    });
});

function bind_source_autocomplete() {
    $(".input_my_location").autocomplete({ source: buildingSource });
    $(".input_to_location").autocomplete({ source: buildingSource });
}