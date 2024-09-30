document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nomeFoto = document.getElementById('nome').value;
    const descricaoFoto = document.getElementById('descricao').value;
    const arquivoFoto = document.getElementById('foto').files[0];

    if (arquivoFoto && nomeFoto && descricaoFoto) {
      alert(`Foto enviada com sucesso!\nNome: ${nomeFoto}\nDescrição: ${descricaoFoto}`);
      // Aqui você pode adicionar código para fazer o upload real via API
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });

  document.getElementById('delete').addEventListener('click', function() {
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('foto').value = '';
    alert('Foto excluída.');
  });