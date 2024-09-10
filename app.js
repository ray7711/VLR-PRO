function pesquisar() {
  let section = document.getElementById
  ("resultados-pesquisa");
  let campoPesquisaElement = document.getElementById
  ("campo-pesquisa");
  let campoPesquisa = campoPesquisaElement.value.toLowerCase();

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo.</p>";
    return;
  }

  let resultados = "";
  let nome = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
    nome = dado.nome.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <h2><a href="${dado.instagram}" target="_blank" rel="external">${dado.nome}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.linkpidia}" target="_blank" rel="external">mais informações</a>
        </div>
      `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado.</p>";
  }

  section.innerHTML = resultados;
  }