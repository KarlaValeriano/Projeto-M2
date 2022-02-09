$(document).ready(function(){
    let teste = JSON.parse(localStorage.getItem('conta'));
    console.log(teste.usuario);
       
    $("#saudacao").text(`Olá ${teste._nome}`);
    $("#email-usuario").text(`seu e-mail ${teste._email}`);
    $("#senha-usuario").text(`sua senha ${teste._senha}`);
});