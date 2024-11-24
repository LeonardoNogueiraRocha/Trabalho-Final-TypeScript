"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const pacienteForm = document.getElementById("paciente-form");
    const pacienteNomeInput = document.getElementById("paciente-nome");
    const pacienteList = document.getElementById("paciente-list");
    if (!pacienteForm || !pacienteNomeInput || !pacienteList) {
        console.error("Erro: Elementos não encontrados.");
        return;
    }
    function salvarPaciente(nome) {
        const pacientes = JSON.parse(localStorage.getItem("pacientes") || "[]");
        pacientes.push(nome);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }
    function carregarPacientes() {
        const pacientes = JSON.parse(localStorage.getItem("pacientes") || "[]");
        pacienteList.innerHTML = ""; // Usamos o operador '!' para garantir que 'pacienteList' não será null
        pacientes.forEach((paciente) => {
            const li = document.createElement("li");
            li.textContent = paciente;
            pacienteList.appendChild(li); // Usamos o operador '!' novamente
        });
    }
    pacienteForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const nome = pacienteNomeInput.value.trim(); // Usamos '!' para garantir que o input não é null
        if (nome) {
            salvarPaciente(nome);
            carregarPacientes();
            pacienteNomeInput.value = "";
        }
    });
    carregarPacientes();
});
