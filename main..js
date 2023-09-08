const form = document.getElementById("form-contato");
    const tabela = document.getElementById("tabela-contatos");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const nome = document.getElementById("nome");
      const telefone = document.getElementById("telefone");
      const novaLinha = document.createElement("tr");
      const novaCelulaNome = document.createElement("td");
      const novaCelulaTelefone = document.createElement("td");
      novaCelulaNome.textContent = nome.value;
      novaCelulaTelefone.textContent = telefone.value;
      novaLinha.appendChild(novaCelulaNome);
      novaLinha.appendChild(novaCelulaTelefone);
      tabela.appendChild(novaLinha);
      
      nome.value = "";
      telefone.value = "";
    });
    
