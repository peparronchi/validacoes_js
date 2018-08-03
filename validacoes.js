$(document).ready(function(){

    /**
     * Validação de email
     * @param {*} email 
     * @return {boolean}
     */
    function validarEMail(email){
        if(email != ""){
            var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if(filtro.test(email)){ return true; } else { return false; }
        } else {
           return false;
        }
    }

    /**
     * Validação de CPF
     * @param {*} cpf 
     * @return {boolean}
     */
    function validarCPF(cpf) {

        cpf = cpf.replace(/[^\d]+/g,'');
        var soma = 0, resto, validar = true;
    
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            validar = false;
    
    
        for (i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;
    
        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(cpf.substring(9, 10)) ) validar = false;
    
        soma = 0;
        for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        resto = (soma * 10) % 11;
    
        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(cpf.substring(10, 11) ) ) validar = false;
    
        return validar;
    
    }
    
    /**
     * Validação de CNPJ
     * @param {*} cnpj 
     * @return {boolean}
     */
    function validarCNPJ(cnpj) {
    
        cnpj = cnpj.replace(/[^\d]+/g,'');
    
        if(cnpj == '') return false;
    
        if (cnpj.length != 14)
            return false;
    
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;
    
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0,tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
    
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
    
        return true;
    
    }
    
    /**
     * Validação de documento, podendo ser CPF / CNPJ
     * @param {*} documento 
     * @return {boolean}
     */
    function validarDocumento(documento) {
        var validacao = true;

        //deixar somente números
        documento = documento.replace(/[^\d]+/g,'');

        if(documento.length == 11) {
            validacao = validarCPF(documento);
        } else if (documento.length == 14) {
            validacao =  validarCNPJ(documento);
        } else {
            validar = false;
        }

        if(!validacao) {
            alert("Documento não validado");
        }

        return validacao;
    }

});