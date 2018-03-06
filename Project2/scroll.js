
$(document).ready(function() {
    $("#homepage").on('click', function() {
        $("#sections .home:not('.hide')").stop().fadeOut('fast', function() {
            $(this).addClass('hide');
            $('#initial-dialogue').fadeIn('slow').removeClass('hide');
            
        });
    });
    $("#initial-dialogue").on('click', function() {
        $("#sections #initial-dialogue:not('.hide')").stop().fadeOut('fast', function() {
            $(this).addClass('hide');
            $('#locations').fadeIn('slow').removeClass('hide');
        });
    });
  });