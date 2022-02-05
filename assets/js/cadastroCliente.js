class cliente {
    _nome = this.nome;
    _email = this.email;
    _usuario = this.usuario;
    _senha = this._senha;
    set nome(value) {
        this._nome = value
    }
    set email(value) {
        this._email = value;
    }
    set usuario(value) {
        this._usuario = value;
    }
    set senha(value) {
        this._senha = value;
    }
}




function cadastrar(event) {
   
    let clienteNome=$("#form-nome").val();
    let clienteEmail=$("#form-email").val();
    let clienteUsuario=$("#form-usuario").val();
    let clienteSenha= $("#form-senha").val();

    const cliente1 = new cliente();
    cliente1.nome = clienteNome
    cliente1.email = clienteEmail
    cliente1.usuario = clienteUsuario
    cliente1.senha = clienteSenha
    console.log(cliente1);
}
