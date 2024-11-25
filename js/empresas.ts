// empresa.ts
const empresaForm = document.getElementById("empresa-form") as HTMLFormElement;
const empresaNomeInput = document.getElementById("empresa-nome") as HTMLInputElement;
const empresaList = document.getElementById("empresa-list") as HTMLUListElement;

type Empresa = {
  nome: string;
};

function salvarEmpresa(nome: string) {
  const empresas = JSON.parse(localStorage.getItem("empresas") || "[]");
  empresas.push(nome);
  localStorage.setItem("empresas", JSON.stringify(empresas));
}

function carregarEmpresas() {
  const empresas = JSON.parse(localStorage.getItem("empresas") || "[]");
  empresaList.innerHTML = ""; // Limpa a lista
  empresas.forEach((empresa: string) => {
    const li = document.createElement("li");
    li.textContent = empresa;
    empresaList.appendChild(li);
  });
}

empresaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = empresaNomeInput.value.trim();
  if (nome) {
    salvarEmpresa(nome);
    carregarEmpresas();
    empresaNomeInput.value = ""; // Limpa o campo após salvar
  }
});

carregarEmpresas(); // Carrega as empresas quando a página é carregada
