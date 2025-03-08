async function validarCartao() {
    const numeroCartao = document.getElementById('numeroCartao').value;
    const resultado = document.getElementById('resultado');

    if (!numeroCartao) {
        resultado.textContent = 'Por favor, insira um número de cartão.';
        return;
    }

    // Fazendo uma requisição para o backend para identificar a bandeira
    try {
        const response = await fetch('/api/identificar-bandeira', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ numeroCartao })
        });
        
        const data = await response.json();
        
        if (data.bandeira) {
            resultado.textContent = `A bandeira do cartão é: ${data.bandeira}`;
        } else {
            resultado.textContent = 'Número de cartão inválido ou formato não identificado.';
        }
    } catch (error) {
        resultado.textContent = 'Ocorreu um erro ao tentar identificar a bandeira do cartão.';
    }
}
