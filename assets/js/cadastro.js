$(document).ready(function () {
    $("#form-submit").attr('disabled', true);
    $("#form-senha").attr('disabled', true);
    $("#form-senha2").attr('disabled', true);
    let formulario = new FormularioControler();
    $("#form-email").keyup(function () {
        formulario.checaEmai();
        let email = formulario.limpaEspaço($("#form-email").val());
        $("#form-email").val(email);
    });
    $("#form-senha").keyup(function () {
        formulario.checaSenha();
        let senha = formulario.limpaEspaço($("#form-senha").val());
        $("#form-senha").val(senha);
    });
    $("#form-senha2").keyup(function () {
        let senha2 = formulario.limpaEspaço($("#form-senha2").val());
        $("#form-senha2").val(senha2);
        formulario.confereSenha();
    });
    $(".mostraSenha").on('click', function () {
        let type = $(".form-senha").attr('type') === 'password' ? 'text' : 'password';
        $(".form-senha").attr('type', type);
        $(".mostraSenha").toggleClass('fa-eye-slash');
    });
});

function cadastrar() {
    const cliente1 = new Cliente();
    cliente1.nome = $("#form-nome").val();
    cliente1.email = $("#form-email").val();
    cliente1.senha = $("#form-senha").val();
    localStorage.setItem('conta', JSON.stringify(cliente1));
}
