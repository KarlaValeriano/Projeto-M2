$(document).ready(function () {
    function limpaFormulario() {
         $("#cep").val(``);
         $("#rua").val(``);
         $("#bairro").val(``);
         $("#cidade").val(``);
        $("#uf").val(``);
    }
    $("#cep").blur(function () {
        var cep = $("#cep").val().replace(/[^\d]/g,'');
        if (cep != ' ') {
            var validaCep = /^[0-9]{8}$/;
            var correios = `https://viacep.com.br/ws/${cep}/json/?`;
            if (validaCep.test(cep)) {
                $("#cep").val(`...`);
                $("#rua").val(`...`);
                $("#bairro").val(`...`);
                $("#cidade").val(`...`);
               $("#uf").val(`...`);

                $.ajax({
                    url: correios,
                    success: function (dados) {
                        $("#cep").val(dados.cep);
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                       $("#uf").val(dados.uf);
                    },
                    error: function () {
                        limpaFormulario();
                        alert(`CEP inválido`);
                    }
                });
            }else {
                console.log('teste');
                limpaFormulario();
            }
        }
    });

});