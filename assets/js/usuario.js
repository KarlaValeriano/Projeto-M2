class gerenciadorUsuario{    

    
}

$(document).ready(function(){
    let teste = JSON.parse(localStorage.getItem('conta'));
       
    $("#saudacao").text(`Olá ${teste._nome}`);
    $("#email-usuario").text(`seu e-mail ${teste._email}`);
    $("#senha-usuario").text(`sua senha ${teste._senha}`);    
});

let teste = JSON.parse(localStorage.getItem('conta'));
let usuario = new gerenciadorUsuario();
usuario.adicionar(teste);
usuario.chamar([0]);


