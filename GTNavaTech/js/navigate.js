$(document).ready(function () {
    $('.transOption').on('click', function () {
        unselectAllTabOptions();
        $(this).css("background-color", "rgb(230, 193, 0)");
        var type = $(this).data("type");
        showContent(type);
    });
});

function unselectAllTabOptions() {
    $.each($('.transOption'), function (index, element) {
        $(element).css("background-color", "rgb(0, 1, 32)");
    });   
}

function unselectContent() {
    $.each($('.content'), function (index, element) {
        $(element).addClass('hide');
    });
}

function showContent(type) {
    if (type == 'walk') {
        unselectContent();
        $('.walkContent').removeClass('hide');
    } else if (type == 'bus') {
        unselectContent();
        $('.busContent').removeClass('hide');
    } else {
        unselectContent();
        $('.bikeContent').removeClass('hide');
    }
}