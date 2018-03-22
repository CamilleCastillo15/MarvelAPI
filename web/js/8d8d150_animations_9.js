$(window).on('load', function () {

        $('[data-toggle="tooltip"]').tooltip();

        $("a.lien_animation").click(function(event){
            event.preventDefault();
            if (!$("#panneau_animation").is(':visible')) {
                $("#panneau_animation").afficherPanneauLateral();
            }
            $('#contenu_panneau_animation')
                .empty()
                .load($(this).attr('href'), function(){
                    // $("#loader_panneau_reclamation").hide();
                });
            event.stopPropagation();
        });

        $('#btn_close').click(function () {
            $("#panneau_animation").cacherPanneauLateral();
        });

    }
);

jQuery.fn.afficherPanneauLateral = function() {
    // Si le panneau n'est pas affiché on l'affiche
    if (!$(this).is(':visible')) {
        $(this).addClass('moveFromTop').show();
    }
};

jQuery.fn.cacherPanneauLateral = function() {
    var panneau = $(this).attr('id');
    $(this).removeClass('moveFromTop').addClass('moveToTop');
    // Necessite un timeout pour que l'animation moveToRight ait le temps de s'éxécuter
    // Dans le cas contraire le panneau va se cacher tout de suite
    setTimeout("$('#" + panneau + "').hide().removeClass('moveToTop');", 150);
};