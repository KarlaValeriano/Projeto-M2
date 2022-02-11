class formularioControler{
    checaEmai(){
        let emailOk = (/^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let email = $("#form-email").val();
        emailOk.test(email) ?(
            $("#msg-email").text(`e-mail válido`),
            $("#img-email").attr('src', 'assets/icons/verificado.png'),
            $("#form-email").addClass('certo'),
            $("#form-email").removeClass('erro'),
            $("#form-senha").attr('disabled', false)               
          ) : (
            $("#msg-email").text(`e-mail inválido`),
            $("#img-email").attr('src', 'assets/icons/cancelar.png'),
            $("#form-email").addClass('erro'),
            $("#form-email").removeClass('certo'),
            $("#form-senha").attr('disabled', true)             
          );
    }
    checaSenha(){
        let senha = $("#form-senha").val();
        let senhaForte = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
        senhaForte.test(senha) ?(
            $("#msg-senha").text(`senha forte`),
            $("#img-senha").attr('src', 'assets/icons/verificado.png'),
            $("#form-senha").addClass('certo'),
            $("#form-senha").removeClass('erro'),
            $("#form-senha2").attr('disabled', false)
        ) :(
            $("#msg-senha").text(`Insira uma senha forte (ex: seNha@1234)`),
            $("#img-senha").attr('src', 'assets/icons/cancelar.png'),
            $("#form-senha").addClass('erro'),
            $("#form-senha").removeClass('certo'),
            $("#form-senha2").attr('disabled', true)
        ) 
    }
    confereSenha(){
        if(!$("#form-senha2").val()==''){
            let senha = $("#form-senha").val();
            let senha2 = $("#form-senha2").val();
           senha == senha2 ?(
                $("#msg-senha2").text(`senhas coincidem`),
                $("#form-submit").attr('disabled', false),
                $("#img-senha2").attr('src', 'assets/icons/verificado.png'),
                $("#form-senha2").addClass('certo')
           ): (
            $("#msg-senha2").text(`Por favor, digite a mesma senha`),
            $("#form-submit").attr('disabled', true),
            $("#img-senha2").attr('src', 'assets/icons/cancelar.png'),
            $("#form-senha2").addClass('erro')
           )
           } else{
            $("#msg-senha2").text(`Por favor, digite a mesma senha`);
            $("#img-senha2").attr('src', 'assets/icons/cancelar.png');            
            $("#form-submit").attr('disabled', true);
           }
    }
    limpaEspaço(elemento){
       let espacoLimpo = elemento.replace(/\s/g, '');      
        return espacoLimpo;
    }
}