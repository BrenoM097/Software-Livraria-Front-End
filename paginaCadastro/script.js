function inserir(event) {
  
  var titulo = event.target.elements.titulo.value;
  var autor = event.target.elements.autor.value;
  var paginas = event.target.elements.quantidadePagina.value;
  var valor = event.target.elements.valor.value;
  var linguagem = event.target.elements.linguagem.value;
  var tradutor = event.target.elements.nomeTradutor.value;
  var editora = event.target.elements.editora.value;
  var dataLancamento = event.target.elements.dataLancamento.value;

  console.log('Titulo:', titulo);
  console.log('Autor:', autor);
  console.log('Paginas:', paginas);
  console.log('Valor:', valor);
  console.log('Linguagem:', linguagem);
  console.log('Tradutor:', tradutor);
  console.log('Editora:', editora);
  console.log('Data de Lançamento:', dataLancamento);

  fetch('http://localhost:8081/api/livros/cadastrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      titulo: titulo,
      autor: autor,
      quantidadePaginas: paginas,
      valor: valor,
      linguagem: linguagem,
      nomeTradutor: tradutor,
      editora: editora,
      dataLancamento: dataLancamento
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Erro:', error);
    });
}

