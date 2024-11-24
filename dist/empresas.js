"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const empresaForm = document.getElementById("empresa-form");
    const empresaNomeInput = document.getElementById("empresa-nome");
    const empresaList = document.getElementById("empresa-list");
    if (!empresaForm || !empresaNomeInput || !empresaList) {
        console.error("Erro: Elementos não encontrados.");
        return;
    }
    function salvarEmpresa(nome) {
        const empresas = JSON.parse(localStorage.getItem("empresas") || "[]");
        empresas.push(nome);
        localStorage.setItem("empresas", JSON.stringify(empresas));
    }
    function carregarEmpresas() {
        const empresas = JSON.parse(localStorage.getItem("empresas") || "[]");
        empresaList.innerHTML = ""; // Usamos o operador '!' para indicar que 'empresaList' não será null aqui
        empresas.forEach((empresa) => {
            const li = document.createElement("li");
            li.textContent = empresa;
            empresaList.appendChild(li); // Usamos o operador '!' novamente
        });
    }
    empresaForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const nome = empresaNomeInput.value.trim(); // Usamos '!' para garantir que o input não é null
        if (nome) {
            salvarEmpresa(nome);
            carregarEmpresas();
            empresaNomeInput.value = "";
        }
    });
    carregarEmpresas();
});
