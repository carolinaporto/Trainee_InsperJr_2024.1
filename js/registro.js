document.addEventListener("DOMContentLoaded", function() {
    function exibirDadosCadastro() {
        var cpfInput = document.getElementById('cpf');
        var cpf = cpfInput.value;
        var cpfError = document.getElementById('cpf-error');
        cpfError.textContent = ''; // Limpa mensagem de erro anterior
    
        // Simulação de validação de CPF
        if (!validarCPF(cpf)) {
            cpfError.textContent = 'CPF inválido';
            return;
        }
    
        // CPF válido, exibe a segunda div
        document.getElementById('cadastro-section').style.display = 'block';
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

    var btnExibirDados = document.getElementById('btn-exibir-dados');
    if (btnExibirDados) {
        btnExibirDados.addEventListener('click', exibirDadosCadastro);
    } else {
        console.error('O botão "Exibir Demais Dados" não foi encontrado.');
    }
});
