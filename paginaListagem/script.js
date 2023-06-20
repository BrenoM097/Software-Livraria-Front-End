
const buttonList = document.getElementById('buttonList');


function listarLivros() {
  buttonList.disabled = true;
fetch('http://localhost:8081/api/livros')
  .then(response => response.json())
  .then(data => {
    // Manipular os dados da API, por exemplo, atualizar a tabela
    const tabelaLivros = document.getElementById('tabela-livros');

    // Limpar conteúdo existente da tabela
    //tabelaLivros.innerHTML = '';

    // Adicionar cada livro na tabela
    data.forEach(livro => {
      const row = tabelaLivros.insertRow();
      row.innerHTML = `<td scope="row">${livro.titulo}</td>
      <td>${livro.autor}</td>
      <td>${livro.quantidadePaginas}</td>
      <td>${livro.valor}</td>
      <td>${livro.linguagem}</td>
      <td>${livro.nomeTradutor}</td>
      <td>${livro.editora}</td>
      <td>${livro.dataLancamento}</td>`;

    });

  })
  .catch(error => {
    // Tratar erros de requisição, se ocorrerem
    console.error('Erro:', error);
    });
  }

