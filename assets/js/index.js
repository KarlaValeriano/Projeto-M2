$("#login").on('click',function(event){
    event.preventDefault();
    $(".container-user").removeClass('invisivel');
    $(".form-login").addClass('invisivel');
});

$("#logout").on('click', function(){
    $(".container-user").addClass('invisivel');
    $(".form-login").removeClass('invisivel');
});
