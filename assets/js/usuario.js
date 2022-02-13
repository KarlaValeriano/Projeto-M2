class GerenciadorUsuario {
    constructor() {
        this.teste;
    }
    buscaUsuario() {
        this.teste = JSON.parse(localStorage.getItem('conta'));
        return this.teste;
    }
    entrar() {
        let ok = this.teste._email == $("#user-email").val() && this.teste._senha == $("#user-senha").val();               
        ok == true ? (
        $(".container-user").removeClass('invisivel'),
        $(".form-login").addClass('invisivel')
        ) : (
        $("#msg-user").text(`E-mail ou senha inválido`)
        )
    }
    sair() {
        $(".container-user").addClass('invisivel');
        $(".form-login").removeClass('invisivel');
    }
    chamar() {
        console.log(this.teste._email);
    }
}



// let teste = JSON.parse(localStorage.getItem('conta'));



