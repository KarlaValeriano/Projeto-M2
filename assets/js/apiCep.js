$(document).ready(function () {
    let formulario = new FormularioControler();
    formulario.limpaFormulario();

    $("#cep").blur(function () {        
        var cep = $("#cep").val().replace(/[^\d]/g,'');
        if (cep != ' ') {
            var validaCep = /^[0-9]{8}$/;
            if (validaCep.test(cep)) {
                formulario.buscaCep(cep);
            }else {
                formulario.limpaFormulario();
                $("#msg-cep").text(`Cep não encontrado`);
                $("#img-cep").attr('src', 'assets/icons/cancelar.png');
            }
        } 
    });
});