class Cliente {
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

