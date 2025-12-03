document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(location.search);
    const name = params.get('nome') || '[Nome do Convidado]';
    
    const nomeConvidado = document.getElementById('nome-convidado');
    if (nomeConvidado) {
        nomeConvidado.textContent = name;
    }

    const btnAceito = document.getElementById('btn-aceito');
    if (btnAceito) {
        btnAceito.addEventListener('click', function () {
            alert('Obrigada! Sua confirmação foi recebida com muito carinho.');
        });
    }

    const btnConfirm = document.getElementById('btn-confirm');
    if (btnConfirm) {
        btnConfirm.addEventListener('click', function () {
            alert('Obrigado! Em breve entraremos em contato com mais detalhes.');
        });
    }
});