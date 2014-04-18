$(document).ready(function () {
    $('.transOption').on('click', function () {
        $('.helperText').hide();
        unselectAllTabOptions();
        $(this).css("background-color", "rgb(230, 193, 0)");
        var type = $(this).data("type");
        showContent(type);

        $('.favorites').removeClass('hide');
        $('.travelTime').removeClass('hide');
    });

    $('.addFavorites').on('click', function () {
        $(this).html('Saved!');
    });
});

function unselectAllTabOptions() {
    $.each($('.transOption'), function (index, element) {
        $(element).css("background-color", "rgb(0, 1, 32)");
    });   
}

function unselectAllContent() {
    $.each($('.content'), function (index, element) {
        $(element).addClass('hide');
    });

    $.each($('.steps'), function (index, element) {
        $(element).addClass('hide');
    });

    $.each($('.time'), function (index, element) {
        $(element).addClass('hide');
    });

    $('.busArrival').addClass('hide');
}

function showContent(type) {
    unselectAllContent();
    if (type == 'walk') {
        $('.walkMap').removeClass('hide');
        $('.walkDirections').removeClass('hide');
        $('.walktime').removeClass('hide');
    } else if (type == 'bus') {
        $('.busMap').removeClass('hide');
        $('.busDirections').removeClass('hide');
        $('.bustime').removeClass('hide');
        $('.busArrival').removeClass('hide');
    } else {
        $('.bikeMap').removeClass('hide');
        $('.bikeDirections').removeClass('hide');
        $('.biketime').removeClass('hide');
    }
}