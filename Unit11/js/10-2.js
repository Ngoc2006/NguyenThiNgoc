

$(function(){
    $('button').click(function(){
        var check = $(this).html();
        $(this).next();
        if(check == '<i class="fa fa-plus"></i>') {
            $(this).html('<i class="fa fa-minus"></i>');
            $(this).parent().next().show(500);
            $(this).next().css('color','#99FF33');
        }
        else {
            $(this).html('<i class="fa fa-plus"></i>');
            $(this).parent().next().hide(300);
            $(this).next().css('color','white');
        };
    })
})