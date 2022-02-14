$(document).ready(function () {
    let usuario = new GerenciadorUsuario();
    teste = usuario.buscaUsuario();
    $("#recupera-btn").attr('disabled', true);
    $("#saudacao-user").text(`Olá ${teste._nome}`);

    teste == '' ? (
        $("user-btn").text(`Login`),
        $(".container-user").addClass('invisivel'),
        $(".form-login").removeClass('invisivel')
       
    ) : (
        $(".user-btn").text(`Olá ${teste._nome}`),
        $(".container-user").removeClass('invisivel'),
        $(".form-login").addClass('invisivel')
    )

    $("#login").on('click', function () {
        usuario.entrar();
    });
    $("#logout").on('click', function () {
        usuario.sair();
    });

    $("#recupera-senha").keyup(function(){
        let senha = $("#recupera-senha").val();
        let senhaForte = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        console.log(senhaForte.test(senha));
        senhaForte.test(senha) ?(
            $("#msg-recupera-senha").text(`Senha forte`),
            $("#recupera-btn").attr('disabled', false)           
        ):( 
            $("#msg-recupera-senha").text(`Senha fraca`),
            $("#recupera-btn").attr('disabled', true)            
        )
    });

    $("#recupera-btn").on('click', function(event){
        event.preventDefault();
       usuario.trocaSenha($("#recupera-email").val());
    });
});




