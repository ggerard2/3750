$(document).ready(function () {
    
    $('.addFavorites').on('click', function () {
        $('.form').removeClass('hide');
    });

    $('.go').on('click', function () {
        var form_validates = $('.input_to_location').val() != '';
        if (form_validates) {
            $('.favList').append('<li><div class="row"> <div class="small-9 medium-6 large-6 column">' + $('.input_to_location').val() + '</div></div></li>');
            $('.input_to_location').val('');
            $('.form').addClass('hide');
        } else {
            alert('Please enter a valid destination.');
        }
    });
});
