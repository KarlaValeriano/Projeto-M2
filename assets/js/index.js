$(document).ready(function () {
    let usuario = new GerenciadorUsuario();
    teste = usuario.buscaUsuario();
    usuario.chamar();
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
});




