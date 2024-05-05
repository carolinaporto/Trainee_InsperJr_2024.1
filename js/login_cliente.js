document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('login-cliente-form').addEventListener('submit', function(event){
        event.preventDefault();
        cliente_logar();
    
    });
    document.getElementById('login-medico-form').addEventListener('submit', function(event){
        event.preventDefault();
        medico_logar();
    
    });

    document.getElementById('login-cliente-responsivo-form').addEventListener('submit', function(event){
        event.preventDefault();
        cliente_responsivo_logar();
    
    });
    document.getElementById('login-medico-responsivo-form').addEventListener('submit', function(event){
        event.preventDefault();
        medico_responsivo_logar();
    
    });

    function medico_logar() {
        var cpfInput = document.getElementById('cpf_medico');
        var cpf = cpfInput.value;
        var cpfError = document.getElementById('cpf-error-medico');
        cpfError.textContent = ''; // Limpa mensagem de erro anterior

        var senhaInput = document.getElementById('senha_medico');
        var senha = senhaInput.value;
        var senhaError = document.getElementById('senha-error-medico');
        senhaError.textContent = ''; // Limpa mensagem de erro anterior
    
        // Simulação de validação de CPF
        if (!validarCPF(cpf) && !validarSenha(senha)) {
            cpfError.textContent = 'CPF inválido';
            senhaError.textContent = 'Senha inválida';
            return;
        }
        else if (!validarCPF(cpf)) {
            cpfError.textContent = 'CPF inválido';
            return;
        }
        else if(!validarSenha(senha)){
            senhaError.textContent = 'Senha inválida';
            return;
        }
    
        // CPF válido, exibe a segunda div
        window.location.href = 'medico.html';
    }
    

    function cliente_logar() {
        var cpfInput = document.getElementById('cpf_cliente');
        var cpf = cpfInput.value;
        var cpfError = document.getElementById('cpf-error-cliente');
        cpfError.textContent = ''; // Limpa mensagem de erro anterior

        var senhaInput = document.getElementById('senha_cliente');
        var senha = senhaInput.value;
        var senhaError = document.getElementById('senha-error-cliente');
        senhaError.textContent = ''; // Limpa mensagem de erro anterior
    
        // Simulação de validação de CPF
        if (!validarCPF(cpf) && !validarSenha(senha)) {
            cpfError.textContent = 'CPF inválido';
            senhaError.textContent = 'Senha inválida';
            return;
        }
        else if (!validarCPF(cpf)) {
            cpfError.textContent = 'CPF inválido';
            return;
        }
        else if(!validarSenha(senha)){
            senhaError.textContent = 'Senha inválida';
            return;
        }
    
        // CPF válido, exibe a segunda div
        window.location.href = 'agendar.html';
    }

    function medico_responsivo_logar() {
        var cpfInput = document.getElementById('cpf_medico_responsivo');
        var cpf = cpfInput.value;
        var cpfError = document.getElementById('cpf-error-medico-responsivo');
        cpfError.textContent = ''; // Limpa mensagem de erro anterior

        var senhaInput = document.getElementById('senha_medico_responsivo');
        var senha = senhaInput.value;
        var senhaError = document.getElementById('senha-error-medico-responsivo');
        senhaError.textContent = ''; // Limpa mensagem de erro anterior
    
        // Simulação de validação de CPF
        if (!validarCPF(cpf) && !validarSenha(senha)) {
            cpfError.textContent = 'CPF inválido';
            senhaError.textContent = 'Senha inválida';
            return;
        }
        else if (!validarCPF(cpf)) {
            cpfError.textContent = 'CPF inválido';
            return;
        }
        else if(!validarSenha(senha)){
            senhaError.textContent = 'Senha inválida';
            return;
        }
    
        // CPF válido, exibe a segunda div
        window.location.href = 'medico.html';
    }

    function cliente_responsivo_logar() {
        var cpfInput = document.getElementById('cpf_cliente_responsivo');
        var cpf = cpfInput.value;
        var cpfError = document.getElementById('cpf-error-cliente-responsivo');
        cpfError.textContent = ''; // Limpa mensagem de erro anterior

        var senhaInput = document.getElementById('senha_cliente_responsivo');
        var senha = senhaInput.value;
        var senhaError = document.getElementById('senha-error-cliente-responsivo');
        senhaError.textContent = ''; // Limpa mensagem de erro anterior
    
        // Simulação de validação de CPF
        if (!validarCPF(cpf) && !validarSenha(senha)) {
            cpfError.textContent = 'CPF inválido';
            senhaError.textContent = 'Senha inválida';
            return;
        }
        else if (!validarCPF(cpf)) {
            cpfError.textContent = 'CPF inválido';
            return;
        }
        else if(!validarSenha(senha)){
            senhaError.textContent = 'Senha inválida';
            return;
        }
    
        // CPF válido, exibe a segunda div
        window.location.href = 'agendar.html';
    }
    
    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g,''); // Remove todos os caracteres não numéricos
    
        if (cpf === '' || cpf.length !== 11 || cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999") {
            return false;
        }
    
        // Validação do primeiro dígito
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = 11 - (soma % 11);
        let digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;
    
        if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
            return false;
        }
    
        // Validação do segundo dígito
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        let digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto;
    
        if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
            return false;
        }
        return true;
    }

    function validarSenha(senha){
        if(senha.length < 6){
            return false;
        }
        return true;
    }
});
