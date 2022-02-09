class cliente {
    _nome = this.nome;
    _email = this.email;
    _senha = this._senha;

    set nome(value) {
        this._nome = value
    }
    set email(value) {
      this._email = value;
    }
    set senha(value) {
       this._senha = value;        
    }
}

function cadastrar() {
    
    const cliente1 = new cliente();    
    cliente1.nome = $("#form-nome").val();
    cliente1.email = $("#form-email").val();
    cliente1.usuario = $("#form-usuario").val();
    cliente1.senha = $("#form-senha").val();    
    localStorage.setItem('conta', JSON.stringify(cliente1));
    console.log(cliente1);
}