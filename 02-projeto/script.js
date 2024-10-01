
document.getElementById('foto').addEventListener('change', function(event) {
  const file = event.target.files[0]; // A foto que você escolheu
  const reader = new FileReader();    // Leitor de arquivos

  reader.onload = function(e) {
    const imgPreview = document.getElementById('imgPreview'); // Pega o espaço da imagem
    imgPreview.src = e.target.result; // Mostra a imagem na tela
    imgPreview.style.display = 'block'; // Exibe a imagem
  };

  if (file) {
    reader.readAsDataURL(file); // Lê a imagem para exibir
  }
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Não envia de verdade

  const nomeFoto = document.getElementById('nome').value; // Nome que você deu
  const descricaoFoto = document.getElementById('descricao').value; // Descrição da foto
  const arquivoFoto = document.getElementById('foto').files[0]; // A foto escolhida

  if (arquivoFoto && nomeFoto && descricaoFoto) {
    alert(`Foto enviada com sucesso!\nNome: ${nomeFoto}\nDescrição: ${descricaoFoto}`);
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});


document.getElementById('delete').addEventListener('click', function() {
  document.getElementById('nome').value = ''; // Apaga o nome
  document.getElementById('descricao').value = ''; // Apaga a descrição
  document.getElementById('foto').value = ''; // Apaga a foto

  // Esconde a imagem da tela
  const imgPreview = document.getElementById('imgPreview');
  imgPreview.src = '';
  imgPreview.style.display = 'none'; // Esconde a imagem

  alert('Foto excluída.');
});
