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

// class gerenciador{
//     constructor(){
//         this.contas = [];
//     }

//     entrada(...conta){
//         for(let i =0;i<conta.length; i++){
//             this.contas.push(conta[i])
//         }
//     }
// }

// function cadastrar() {

//     const cliente1 = new cliente();
//     cliente1.nome = $("#form-nome").val();
//     cliente1.email = $("#form-email").val();
//     cliente1.usuario = $("#form-usuario").val();
//     cliente1.senha = $("#form-senha").val();



//     localStorage.setItem('conta', JSON.stringify(cliente1));
//     teste = JSON.parse(localStorage.getItem('conta'));
//     console.log(teste);
//     console.log(teste._nome);
//     console.log(teste._email);
//     console.log(teste._usuario);
//     console.log(teste._senha);

// }


var emailOk = function (value) {

    let ok = (/^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi);
    return ok.test(value);
}
var senhaForte = function(value){
    let ok =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    return ok.test(value);
}

console.log(emailOk('eduardo@email.com'));
console.log(senhaForte('eduzTaou@1234'));