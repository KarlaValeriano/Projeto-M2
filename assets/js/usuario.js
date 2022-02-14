class GerenciadorUsuario{
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
    trocaSenha(value){
        let senhaOk = $("#recupera-senha").val() == $("#recupera-senha2").val()
       let ok = teste._email == value && senhaOk;
            
        ok == false ? (
            $("#msg-recupera-email").text(``)
          ): (              
            $("#msg-recupera-email").text(`Dados inválidos`),
            teste._senha = $("#recupera-senha").val(),
            localStorage.setItem('conta', JSON.stringify(teste))
            )
    }


}



// let teste = JSON.parse(localStorage.getItem('conta'));



