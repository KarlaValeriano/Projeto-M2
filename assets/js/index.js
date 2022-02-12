$(document).ready(function(){
    let usuario = new gerenciadorUsuario();
    let cliente = usuario.buscaUsuario();
    console.log(cliente._nome);
    cliente = ''? (
        $('.show-btn').text('Login')
    ):
    ( $('.show-btn').text(`Olá ${cliente._nome}`)
    );

});