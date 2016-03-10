var main = function (){
    $('.ville').click(function() {
        $('.horaires').hide();
        $(this).children('.horaires').show();
    });
};

$(document).ready(main);
