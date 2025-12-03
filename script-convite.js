
(function () {
  const params = new URLSearchParams(location.search);
  const name = params.get('nome') || '[Nome do Convidado]';
  document.getElementById('nome-convidado').textContent = name;

  document.getElementById('btn-aceito')
    .addEventListener('click', function () {
      alert('Obrigada! Sua confirmação foi recebida com muito carinho.');
    });

  document.getElementById('btn-confirm')
    .addEventListener('click', function () {
      alert('Obrigado! Em breve entraremos em contato com mais detalhes.');
    });
})();
