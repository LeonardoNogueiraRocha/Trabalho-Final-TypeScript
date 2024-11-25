"use strict";
// paciente.ts
const pacienteForm = document.getElementById("paciente-form");
const pacienteNomeInput = document.getElementById("paciente-nome");
const pacienteList = document.getElementById("paciente-list");
function salvarPaciente(nome) {
    const pacientes = JSON.parse(localStorage.getItem("pacientes") || "[]");
    pacientes.push(nome);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
}
function carregarPacientes() {
    const pacientes = JSON.parse(localStorage.getItem("pacientes") || "[]");
    pacienteList.innerHTML = ""; // Limpa a lista
    pacientes.forEach((paciente) => {
        const li = document.createElement("li");
        li.textContent = paciente;
        pacienteList.appendChild(li);
    });
}
pacienteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = pacienteNomeInput.value.trim();
    if (nome) {
        salvarPaciente(nome);
        carregarPacientes();
        pacienteNomeInput.value = ""; // Limpa o campo após salvar
    }
});
carregarPacientes(); // Carrega os pacientes quando a página é carregada
