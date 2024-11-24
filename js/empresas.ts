document.addEventListener("DOMContentLoaded", () => {
    const empresaForm = document.getElementById("empresa-form") as HTMLFormElement | null;
    const empresaNomeInput = document.getElementById("empresa-nome") as HTMLInputElement | null;
    const empresaList = document.getElementById("empresa-list") as HTMLUListElement | null;
  
    if (!empresaForm || !empresaNomeInput || !empresaList) {
      console.error("Erro: Elementos não encontrados.");
      return;
    }
  
    function salvarEmpresa(nome: string) {
      const empresas = JSON.parse(localStorage.getItem("empresas") || "[]");
      empresas.push(nome);
      localStorage.setItem("empresas", JSON.stringify(empresas));
    }
  
    function carregarEmpresas() {
      const empresas = JSON.parse(localStorage.getItem("empresas") || "[]");
      empresaList!.innerHTML = ""; // Usamos o operador '!' para indicar que 'empresaList' não será null aqui
      empresas.forEach((empresa: string) => {
        const li = document.createElement("li");
        li.textContent = empresa;
        empresaList!.appendChild(li); // Usamos o operador '!' novamente
      });
    }
  
    empresaForm.addEventListener("submit", (event: Event) => {
      event.preventDefault();
      const nome = empresaNomeInput!.value.trim(); // Usamos '!' para garantir que o input não é null
      if (nome) {
        salvarEmpresa(nome);
        carregarEmpresas();
        empresaNomeInput!.value = "";
      }
    });
  
    carregarEmpresas();
  });
  