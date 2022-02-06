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

class gerenciador{
    constructor(){
        this.contas = [];
    }

    entrada(...conta){
        for(let i =0;i<conta.length; i++){
            this.contas.push(conta[i])
        }
    }
}




function cadastrar() {
     
    let clienteNome=$("#form-nome").val();
    let clienteEmail=$("#form-email").val();
    let clienteUsuario=$("#form-usuario").val();
    let clienteSenha= $("#form-senha").val();

    const cliente1 = new cliente();
    cliente1.nome = clienteNome;
    cliente1.email = clienteEmail;
    cliente1.usuario = clienteUsuario;
    cliente1.senha = clienteSenha;
    let conta = new gerenciador();
    
   
    localStorage.setItem('conta', JSON.stringify(cliente1));
    conta.entrada(JSON.parse(localStorage.getItem('conta')));
    console.log(conta);
}
